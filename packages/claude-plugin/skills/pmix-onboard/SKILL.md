---
name: pmix-onboard
description: Use when opening a new PMIX client project for the first time. Automatically triggered when .pmix-client.json does not exist at the project root and the project contains PMIX libraries (_sysxtra, Cust_Empty). Scans custom libraries, identifies the client, indexes custom code, and generates a project summary.
---

# PMIX Onboard — Initialisation d'un nouveau projet client

## Trigger

Lance automatiquement quand `.pmix-client.json` n'existe pas a la racine du projet.
Le CLAUDE.md genere par `/pb-setup` contient la regle d'auto-detection.

## Workflow obligatoire

### Etape 1 : Scanner la structure du projet

Utiliser `pb_get_project_structure` pour obtenir la liste des libraries.
Identifier les libraries de personnalisation :
- `_sysxtra` — surcharges client (menus, NVO, fenetres)
- `_cust2` — developpements client autonomes
- `Cust_Empty` — templates et identification client
- `cust_peppol` — facturation electronique (optionnel)
- Toute library commencant par `Cust_` ou `_cust`

### Etape 2 : Identifier le client

Lire `uo_cust_prg_id` via `pb_read_object` :
- `cust_id` : identifiant unique du client
- `cust_builtno` : numero de build client
- `ExpCustDbLvl` : niveau de base de donnees attendu

Si `uo_cust_prg_id` n'existe pas ou est vide, demander le nom du client a l'utilisateur.

### Etape 3 : Inventorier les personnalisations

Pour chaque library custom trouvee a l'etape 1, utiliser `pb_list_objects` pour compter :
- Fenetres (w_xtra_*, w_cust_*)
- Menus (m_xtra_*)
- User Objects (nvo_xtra_*, uo_xtra_*, nvo_cust_*)
- DataWindows (d_cust_*, d_xtra_*)
- Fonctions globales

Classer par categories :
- **Surcharges** : objets qui heritent d'un objet standard (dans _sysxtra)
- **Developpements** : objets autonomes (dans _cust2, Cust_*)

### Etape 4 : Indexer le code custom dans le RAG

Appeler `pmix_reindex` pour indexer les fichiers source des libraries custom.
Cela cree/met a jour la couche projet du RAG (`.pmix-rag.db`).

### Etape 5 : Generer .pmix-client.json

Ecrire le fichier `.pmix-client.json` a la racine du projet avec :

```json
{
  "cust_id": "<extrait de uo_cust_prg_id>",
  "cust_builtno": "<extrait de uo_cust_prg_id>",
  "exp_cust_db_lvl": "<extrait de uo_cust_prg_id>",
  "onboarded": "<date du jour YYYY-MM-DD>",
  "db_dsn": "Pmix",
  "custom_libs": {
    "<lib_name>": "<nombre_objets>",
  },
  "custom_summary": "<resume des personnalisations>"
}
```

### Etape 6 : Afficher le resume

Presenter au developpeur :
1. **Client** : nom, build, niveau DB
2. **Libraries custom** : liste avec nombre d'objets par type
3. **Objets cles** : les plus gros objets custom (par nombre de lignes)
4. **Modules surcharges** : quels menus/fenetres standard sont surcharges
5. **RAG** : confirmation de l'indexation custom

## Format du resume

```
## Projet PMIX — Client [cust_id]

### Identification
- Client : [cust_id]
- Build : [cust_builtno]
- Niveau DB : [ExpCustDbLvl]

### Libraries custom
| Library | Objets | Role |
|---------|--------|------|
| _sysxtra | XX | Surcharges menus/NVO |
| _cust2 | XX | Developpements autonomes |
| ... | ... | ... |

### Objets custom principaux
| Objet | Type | Lignes | Role |
|-------|------|--------|------|

### Modules standard surcharges
- [Liste des m_xtra_*, w_xtra_* et leurs ancetres]

### RAG
- Index custom : XX chunks indexes
- Pret pour les recherches
```

## Regles

1. **Ne JAMAIS modifier** le code pendant l'onboard — c'est une phase de decouverte
2. Si `uo_cust_prg_id` est vide/absent, **demander** le cust_id a l'utilisateur
3. Le fichier `.pmix-client.json` est le **marqueur** — sa presence signifie "projet connu"
4. Toujours lancer `pmix_reindex` meme si peu de code custom — la couche projet doit exister
