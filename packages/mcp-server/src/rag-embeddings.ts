import { pipeline, env } from '@huggingface/transformers';

// ---------------------------------------------------------------------------
// Environment configuration
// ---------------------------------------------------------------------------

// Allow models stored on the local filesystem and disable the browser cache
// mechanism (not available in a Node.js / MCP server context).
env.allowLocalModels = true;
env.useBrowserCache = false;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';
/** Output dimensionality of the all-MiniLM-L6-v2 model. */
const EMBEDDING_DIMS = 384;
/** Safe character limit to stay within the model's 256-token window. */
const MAX_TEXT_CHARS = 512;

// ---------------------------------------------------------------------------
// Internal types
// ---------------------------------------------------------------------------

/**
 * Minimal shape returned by `@huggingface/transformers` feature-extraction
 * pipeline when pooling='mean' + normalize=true.
 *
 * The library does not export a concrete type for this, so we model only
 * what we actually access at runtime.
 */
interface EmbeddingTensor {
  /** Flat TypedArray holding all embedding values (possibly multi-batch). */
  data: ArrayLike<number>;
}

/** Narrow union that covers the actual pipeline return type at runtime. */
type PipelineOutput = EmbeddingTensor | EmbeddingTensor[];

// ---------------------------------------------------------------------------
// RagEmbeddings
// ---------------------------------------------------------------------------

export class RagEmbeddings {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private pipeline: any = null; // FeatureExtractionPipeline — no exported type
  private ready: boolean = false;
  private failed: boolean = false;
  private loading: Promise<void> | null = null;

  // -------------------------------------------------------------------------
  // Initialisation
  // -------------------------------------------------------------------------

  /**
   * Lazily initialise the embedding model.
   * Downloads the model on first call (~22 MB) and caches it locally.
   * Subsequent calls return immediately once the model is ready.
   *
   * If the model fails to load (e.g. no network connectivity on the first
   * run) the instance is marked as `failed` and subsequent `embed` calls
   * return `null` rather than throwing.
   */
  async initialize(): Promise<void> {
    // Already ready or already failed — nothing to do.
    if (this.ready || this.failed) return;

    // Another call is already downloading the model — wait for it.
    if (this.loading !== null) {
      await this.loading;
      return;
    }

    this.loading = (async () => {
      console.error(`[RAG Embeddings] Loading model ${MODEL_NAME}...`);
      try {
        this.pipeline = await pipeline('feature-extraction', MODEL_NAME, {
          dtype: 'fp32',
        });
        this.ready = true;
        console.error('[RAG Embeddings] Model ready');
      } catch (err) {
        this.failed = true;
        const message = err instanceof Error ? err.message : String(err);
        console.error(`[RAG Embeddings] Failed to load model: ${message}`);
        // Re-throw so the awaiting caller also sees the error, but callers
        // that go through embed() / embedBatch() will receive null instead.
        throw err;
      } finally {
        // Release the loading sentinel regardless of outcome so future calls
        // that check `this.failed` return immediately.
        this.loading = null;
      }
    })();

    await this.loading;
  }

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------

  /**
   * Returns `true` when the model has been successfully loaded and is ready
   * to produce embeddings.
   */
  isReady(): boolean {
    return this.ready;
  }

  /**
   * Reset the failed state so the next `embed()` call retries model loading.
   * Use after network connectivity is restored or model cache is cleared.
   */
  reset(): void {
    this.failed = false;
    this.loading = null;
  }

  /**
   * Generate a 384-dimensional embedding for a single text string.
   *
   * Returns `null` when the model is not available (load failure).
   * Long inputs are silently truncated to {@link MAX_TEXT_CHARS} characters
   * before being sent to the model.
   */
  async embed(text: string): Promise<Float32Array | null> {
    try {
      await this.initialize();
    } catch {
      // initialize() already logged the error and set this.failed.
      return null;
    }

    if (!this.ready) return null;

    const truncated = truncateText(text);

    const output = (await this.pipeline(truncated, {
      pooling: 'mean',
      normalize: true,
    })) as PipelineOutput;

    return extractSingleEmbedding(output, 0);
  }

  /**
   * Generate embeddings for an array of texts, processed in batches of
   * `batchSize` (default: 32).
   *
   * Returns an empty array when the model is not available.
   * Individual texts are truncated to {@link MAX_TEXT_CHARS} characters.
   */
  async embedBatch(
    texts: string[],
    batchSize = 32,
  ): Promise<Float32Array[]> {
    if (texts.length === 0) return [];

    try {
      await this.initialize();
    } catch {
      return [];
    }

    if (!this.ready) return [];

    const results: Float32Array[] = [];

    for (let i = 0; i < texts.length; i += batchSize) {
      const batch = texts
        .slice(i, i + batchSize)
        .map(truncateText);

      const output = (await this.pipeline(batch, {
        pooling: 'mean',
        normalize: true,
      })) as PipelineOutput;

      for (let j = 0; j < batch.length; j++) {
        results.push(extractSingleEmbedding(output, j));
      }
    }

    return results;
  }
}

// ---------------------------------------------------------------------------
// Private helpers
// ---------------------------------------------------------------------------

/**
 * Truncate a string to at most {@link MAX_TEXT_CHARS} characters.
 * This keeps the input within the model's effective token budget.
 */
function truncateText(text: string): string {
  return text.length > MAX_TEXT_CHARS ? text.substring(0, MAX_TEXT_CHARS) : text;
}

/**
 * Extract a single `Float32Array` row from a pipeline output tensor.
 *
 * The `@huggingface/transformers` pipeline can return:
 *   - A single `EmbeddingTensor` (single-item or pre-squeezed batch) whose
 *     `.data` holds exactly {@link EMBEDDING_DIMS} values.
 *   - An array of `EmbeddingTensor` objects — one per input text — each with
 *     {@link EMBEDDING_DIMS} values in `.data`.
 *   - A single `EmbeddingTensor` whose `.data` is a flat array of
 *     `batchSize * EMBEDDING_DIMS` values (batched, not squeezed).
 *
 * We handle all three shapes so the caller never has to care about the
 * internal representation.
 */
function extractSingleEmbedding(
  output: PipelineOutput,
  index: number,
): Float32Array {
  // Case 1: Array of tensors — one per text in the batch.
  if (Array.isArray(output)) {
    const tensor = output[index];
    return new Float32Array(
      Array.from({ length: EMBEDDING_DIMS }, (_, k) =>
        (tensor.data as unknown as ArrayLike<number>)[k] as number,
      ),
    );
  }

  // Case 2 / 3: Single tensor whose `.data` might be a flat multi-row array
  // or a single-row array.
  const flat = output.data;
  const totalElements = (flat as { length: number }).length;

  if (totalElements === EMBEDDING_DIMS) {
    // Single embedding — index must be 0.
    return new Float32Array(
      Array.from({ length: EMBEDDING_DIMS }, (_, k) =>
        (flat as unknown as ArrayLike<number>)[k] as number,
      ),
    );
  }

  // Batched flat layout: row `index` starts at offset `index * EMBEDDING_DIMS`.
  const start = index * EMBEDDING_DIMS;
  const end = start + EMBEDDING_DIMS;

  // Use TypedArray .slice() when available (Float32Array, etc.) for efficiency.
  if (typeof (flat as Float32Array).slice === 'function') {
    return new Float32Array((flat as Float32Array).slice(start, end));
  }

  // Fallback for generic ArrayLike.
  return new Float32Array(
    Array.from({ length: EMBEDDING_DIMS }, (_, k) =>
      (flat as unknown as ArrayLike<number>)[start + k] as number,
    ),
  );
}
