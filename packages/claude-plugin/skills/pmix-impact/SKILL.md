---
name: pmix-impact
description: Use when analyzing the business impact of modifying a PMIX object, table, or process. Activates for questions like "si je modifie X", "quel impact de changer Y", "quels flux sont touches par Z". For full dependency tree analysis, use the pb-impact-checker agent instead.
---

# PMIX Impact — Analyse d'impact des modifications

> **Skill integre** — Estimation rapide d'impact dans la conversation.
> Pour une analyse complete de l'arbre de dependances, lancer l'agent `pb-impact-checker`.

## Trigger

Questions d'impact : "si je modifie X, qu'est-ce qui est impacte ?", "quel est l'impact de changer Y ?", "quels flux sont touches ?".

## Workflow

### Etape 1 : Identifier l'objet modifie

Determiner le type d'objet :
- **Table DB** : nom de table, colonne modifiee
- **Fenetre PB** : w_xxx
- **DataWindow** : d_xxx
- **User Object** : uo_xxx, nv_xxx, nvo_xxx
- **Fonction globale** : gf_xxx
- **Processus** : flux metier complet

### Etape 2 : Rechercher le contexte metier dans le RAG

```
pmix_search(query="<nom_objet> utilisation flux")
```

Pour une table :
```
pmix_lookup(name="<nom_table>")
```

Cela donne le contexte metier : dans quel flux, avec quelles regles.

### Etape 3 : Analyser les dependances techniques

Utiliser les outils MCP PowerBuilder :

```
pb_get_dependencies(object_name="<objet>")    — qui utilise cet objet
pb_get_inheritance(object_name="<objet>")     — arbre d'heritage
pb_get_call_graph(function_name="<fonction>") — appels entrants/sortants
pb_search_code(pattern="<terme>")             — references dans le code
```

Pour une **table DB**, chercher aussi dans le RAG :
```
pmix_search(query="<nom_table>", limit=15)
```
Cela trouve tous les objets, DW et flux qui referencent cette table.

### Etape 4 : Verifier les personnalisations client

```
pmix_search(query="<objet>", source="custom")
```

Le client peut avoir des surcharges qui dependent de l'objet modifie.

### Etape 5 : Croiser avec les flux metier

Pour chaque dependance trouvee, determiner :
- Quel(s) flux metier sont concernes ?
- Le flux est-il critique (facturation, stock) ou secondaire (reporting) ?
- Y a-t-il des effets en cascade ?

### Etape 6 : Classer par niveau de risque

| Niveau | Critere | Exemple |
|--------|---------|---------|
| **Critique** | Flux principal casse, perte de donnees, calculs faux | Modifier invoicehead |
| **Moyen** | Fonctionnalite secondaire affectee, affichage incorrect | Modifier un DW de liste |
| **Faible** | Impact cosmetique, cas limite, reporting | Modifier un libelle |

### Etape 7 : Produire le rapport d'impact

```
## Analyse d'impact : [modification decrite]

### Resume
[2-3 phrases sur l'impact global]

### Dependances directes
| Element | Type | Module | Flux impacte | Risque |
|---------|------|--------|-------------|--------|

### Dependances indirectes (heritage)
| Element | Descendants | Impact |
|---------|------------|--------|

### Personnalisations client impactees
| Objet custom | Library | Impact |
|--------------|---------|--------|

### Flux metier impactes
1. [Flux] — [description de l'impact]

### Tests recommandes
1. [Test a effectuer]

### Recommandations
- [Conseil pour minimiser les risques]
```

## Regles

1. **TOUJOURS** utiliser les outils MCP pour les dependances techniques — ne pas deviner
2. **TOUJOURS** croiser avec les flux metier via le RAG — l'impact technique seul ne suffit pas
3. **TOUJOURS** verifier les personnalisations client — elles peuvent etre impactees
4. En cas de doute, classer le risque **vers le haut** (mieux vaut sur-estimer)
5. Lister les **tests concrets** a effectuer, pas des generalites
6. Si l'objet est un **ancetre** (dans _ancestor), le risque est presque toujours **critique**
