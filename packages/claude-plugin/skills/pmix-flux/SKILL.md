---
name: pmix-flux
description: Use when documenting or explaining any PMIX business process, workflow, or data flow. Activates for questions like "comment faire X dans PMIX", "quel est le processus de Y", "decris le flux Z". For deep research with cross-referencing, use the pmix-researcher agent instead.
---

# PMIX Flux — Documentation des processus metier

> **Skill integre** — Documente les processus metier dans la conversation.
> Pour une recherche approfondie multi-sources, lancer l'agent `pmix-researcher`.

## Trigger

Questions sur les processus metier, flux de donnees, "comment faire X dans PMIX".
Exemples : "decris le cycle de vente", "comment fonctionne la fabrication", "quel est le processus de reception".

## Workflow

### Etape 1 : Identifier le processus

Determiner quel processus metier est concerne parmi les 12 macro-flux PMIX :
1. Cycle de vente (devis, commande, livraison, facturation)
2. Cycle d'achat (commande, reception, facture fournisseur)
3. Gestion de stock (mouvements, inventaire, transferts)
4. Fabrication (OF, gammes, rapport fabrication, backflush)
5. CRM (contacts, actions, workflows, mailing)
6. Interface comptable (transfert ecritures)
7. Projets (suivi, phases, temps)
8. Qualite (controles, non-conformites)
9. Codes-barres (picking, expedition, fabrication)
10. Impressions (documents, etiquettes)
11. Administration systeme (utilisateurs, profils, DB)
12. EDI/Peppol (facturation electronique)

### Etape 2 : Rechercher le flux dans le RAG

```
pmix_search(query="flux <nom_processus> etapes tables fenetres", limit=10)
```

Le RAG contient des playbooks detailles pour chaque flux avec :
- Tables et colonnes cles
- Statuts et transitions
- SQL de validation
- Fenetres et DataWindows impliques

### Etape 3 : Detailler les tables concernees

Pour chaque table mentionnee dans le flux :

```
pmix_lookup(name="<nom_table>")
```

Cela donne les colonnes, types, relations et usage metier.

### Etape 4 : Verifier les personnalisations client

```
pmix_search(query="<processus>", source="custom")
```

Le client peut avoir des surcharges qui modifient le flux standard.

### Etape 5 : Tracer le flux complet

Pour chaque etape du processus documenter :
1. **Action** — Ce que l'utilisateur fait
2. **Fenetre** — Quelle fenetre PB est utilisee
3. **Tables** — Quelles tables sont lues/ecrites
4. **DataWindows** — Quels DW affichent/editent les donnees
5. **Validations** — Regles metier et controles
6. **Transition** — Comment passer a l'etape suivante

### Etape 6 : Documenter les effets de bord

Pour chaque flux, identifier :
- **Impressions** generees (documents, etiquettes)
- **Ecritures comptables** creees
- **Mouvements de stock** declenches
- **Notifications** envoyees
- **Liens** avec d'autres flux

## Format de reponse

```
## [Nom du processus]

### Vue d'ensemble
[2-3 phrases decrivant le processus]

### Etapes
1. [Action] — Fenetre: [w_xxx] | Tables: [table1, table2] | DW: [d_xxx]
2. ...

### Tables impactees
| Table | Operation | Colonnes cles |
|-------|-----------|---------------|

### Points d'attention
- [Piege ou dependance critique]

### Flux connexes
- [Lien vers flux amont/aval]
```

## Regles

1. Toujours **chercher dans le RAG** avant de decrire un flux — ne pas inventer
2. Chaque etape doit avoir au minimum une **fenetre** et une **table**
3. **Ne pas inventer** d'etapes — se baser sur les resultats du RAG
4. Indiquer clairement si un sous-flux n'est **pas documente**
5. Verifier les **personnalisations client** qui peuvent modifier le flux standard
