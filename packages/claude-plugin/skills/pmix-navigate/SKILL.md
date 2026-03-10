---
name: pmix-navigate
description: Use when answering any question about PMIX ERP — routes to the right knowledge file and provides accurate answers with references. Activates for any question about PmiGest, PMIX business processes, tables, windows, or ERP functionality. For deep research with full report, use the pmix-researcher agent instead.
---

# PMIX Navigation — Repondre aux questions PMIX

> **Skill integre** — Reponse rapide via RAG dans la conversation.
> Pour une recherche approfondie multi-sources avec rapport, lancer l'agent `pmix-researcher`.

## Trigger

Toute question sur l'ERP PMIX / PmiGest — metier, technique, ou les deux.
Exemples : "comment creer une facture", "quelle table stocke les clients", "comment fonctionne le stock", "quels objets PB pour les achats".

## Workflow obligatoire

### Etape 1 : Identifier le domaine

Analyser la question et identifier le(s) domaine(s) concerne(s) parmi :
- core-system, masters-customers, masters-items, masters-suppliers
- sales-orders, sales-invoicing, sales-shipping, sales-crm
- purchasing, stock, barcode
- manufacturing, planning
- projects, quality
- accounting, reporting
- integrations, customization, tools-admin

### Etape 2 : Rechercher dans le RAG

Utiliser `pmix_search` avec la question ou les mots-cles identifies.
Le RAG cherche simultanement dans :
- La couche **standard** (documentation PMIX commune)
- La couche **custom** (code specifique au projet client en cours)

Les resultats custom sont prioritaires sur les resultats standard.

```
pmix_search(query="<question ou mots-cles>", limit=8)
```

### Etape 3 : Approfondir si necessaire

Si les resultats de `pmix_search` ne suffisent pas :

- **Detail d'une table** : `pmix_lookup(name="<nom_table>")` → colonnes, relations, usage
- **Detail d'un objet PB** : `pb_get_object_summary(object_name="<objet>")` ou `pb_read_object`
- **SQL d'un DataWindow** : `pb_get_datawindow_sql(object_name="<dw>")`
- **Dependances** : `pb_get_dependencies(object_name="<objet>")`
- **Heritage** : `pb_get_inheritance(object_name="<objet>")`
- **Code source** : `pb_search_code(pattern="<terme>")`

### Etape 4 : Verifier les personnalisations client

Si le projet a des libraries custom (verifier `.pmix-client.json`), chercher aussi :

```
pmix_search(query="<question>", source="custom")
```

Cela peut reveler des surcharges ou developpements specifiques au client.

### Etape 5 : Repondre

Repondre avec :
- L'information demandee, claire et structuree
- Les references precises (tables, colonnes, fenetres, DataWindows)
- Les flux metier concernes si applicable
- Les differences client vs standard si applicable

## Regles strictes

1. **TOUJOURS** utiliser `pmix_search` avant de repondre — ne JAMAIS deviner
2. **CITER** les sources (table, objet PB, module)
3. Si la question couvre **plusieurs domaines**, faire plusieurs recherches
4. Si l'info **n'existe pas** dans le RAG, le dire clairement
5. **Ne pas halluciner** de noms de tables, fenetres ou fonctions
6. Privilegier la **precision** sur la rapidite
