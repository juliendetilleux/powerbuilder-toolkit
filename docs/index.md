# PMIX — Documentation Complete

**Application**: PmiGest ERP (PMIX) — Logiciel de gestion integre pour PME
**Version**: 9.1 / Build 7864
**Runtime**: PowerBuilder 25.0.0.3726
**Base de donnees**: SQL Anywhere 17 (DSN: Pmix)

## Statistiques

| Categorie | Nombre |
|-----------|--------|
| Bibliotheques PB | 49 |
| Fenetres (.srw) | 1 158 |
| DataWindows (.srd) | 3 754 |
| User Objects (.sru) | 718 |
| Fonctions globales (.srf) | 396 |
| Structures (.srs) | 142 |
| Menus (.srm) | 89 |
| **Total objets PB** | **6 266** |
| Tables DB | 430 |
| Vues DB | 42 |
| Procedures stockees | 87 |
| **Total objets DB** | **559** |

## Navigation

### Architecture et concepts
- [Architecture globale](architecture.md) — Heritage, patterns, conventions, carte des modules

### Modules fonctionnels (49)
- [Index des modules](modules/_index.md) — Vue d'ensemble de chaque bibliotheque
- Lecture directe : `docs/modules/<nom_module>.md`

### Objets PowerBuilder (6 266)
- [Fenetres](objects/windows/_index.md) — 1 158 fenetres
- [DataWindows](objects/datawindows/_index.md) — 3 754 datawindows
- [User Objects](objects/userobjects/_index.md) — 718 objets utilisateur
- [Fonctions globales](objects/functions/_index.md) — 396 fonctions
- [Structures](objects/structures/_index.md) — 142 structures
- [Menus](objects/menus/_index.md) — 89 menus

### Base de donnees (559)
- [Schema general](database/schema-overview.md) — Relations, groupes de tables
- [Tables](database/tables/_index.md) — 430 tables
- [Vues](database/views/_index.md) — 42 vues
- [Procedures stockees](database/procedures/_index.md) — 87 procedures

### Flux metier
- [Index des flux](flux/_index.md) — Flux de donnees bout en bout

### Documentation utilisateur existante
- [Syllabus](syllabus/) — Guides utilisateur avec captures d'ecran

## Recherche rapide (pour Claude)

```
# Trouver un objet PB par nom
Grep pattern="<nom_objet>" path="docs/objects/" glob="*.md"

# Trouver une table DB
Grep pattern="<nom_table>" path="docs/database/tables/" glob="*.md"

# Trouver un module
Read docs/modules/<nom_module>.md

# Trouver un flux metier
Read docs/flux/_index.md

# Chercher dans toute la documentation
Grep pattern="<terme>" path="docs/" glob="*.md"

# Trouver quels objets utilisent une table
Grep pattern="<nom_table>" path="docs/objects/" glob="*.md"
```

## Modules par domaine fonctionnel

### Noyau systeme
| Module | Objets | Role |
|--------|--------|------|
| `_ancestor` | 160 | Classes de base — fenetres et objets ancetres |
| `_system` | 303 | Administration, configuration, profils, connexion DB |
| `_general` | 239 | Utilitaires partages, fonctions globales |
| `_design` | 58 | Theming UI, styles visuels |
| `_langue` | 28 | Multilingue |

### Donnees de base
| Module | Objets | Role |
|--------|--------|------|
| `_masters` | 714 | Clients, articles, fournisseurs, adresses |

### Ventes
| Module | Objets | Role |
|--------|--------|------|
| `_sales` | 345 | Commandes de vente, facturation |
| `_sales_crm` | 329 | CRM — contacts, actions, workflows, mailing |
| `_sales_cash` | 82 | Caisse / Point de vente |
| `_sales_food` | 25 | Specificites agroalimentaire |
| `_devis` | 97 | Devis et estimations |

### Achats et stock
| Module | Objets | Role |
|--------|--------|------|
| `_purch` | 150 | Commandes d'achat |
| `_stock` | 195 | Mouvements de stock |
| `_stkbarcod` | 303 | Code-barres, picking, expedition |

### Production
| Module | Objets | Role |
|--------|--------|------|
| `_manufg` | 188 | Ordres de fabrication |
| `_methods` | 116 | Nomenclatures et gammes |
| `_planning` | 102 | Planification et ordonnancement |

### Projets et services
| Module | Objets | Role |
|--------|--------|------|
| `_projects` | 171 | Gestion de projets |
| `_services` | 33 | Prestations de services |
| `_quality` | 81 | Controle qualite |

### Comptabilite
| Module | Objets | Role |
|--------|--------|------|
| `_ifcpt` | 150 | Interface comptable |
| `_monthclot` | 33 | Clotures mensuelles |

### Reporting et impressions
| Module | Objets | Role |
|--------|--------|------|
| `_query` | 284 | Requetes et infocentre |
| `_prints_std` | 569 | Impressions standard |
| `_prints_mod` | 193 | Impressions modifiees |
| `_prints_mod2t` | 148 | Impressions modifiees 2eme type |
| `_prints_qry` | 207 | Impressions requetes |
| `_prints_crm` | 100 | Impressions CRM |
| `_prints_clot` | 115 | Impressions clotures |
| `_FlxReport` | 184 | Integration FlexReport |
| `_dashboard` | 9 | Tableaux de bord |

### Integrations externes
| Module | Objets | Role |
|--------|--------|------|
| `_fedex` | 206 | Integration FedEx |
| `_edilink` | 85 | Echanges EDI |
| `Shared_peppol` | 31 | Facturation electronique Peppol |
| `Shared_mail` | 5 | Envoi de mails |
| `Shared_PmiEngineAPI` | 4 | API PmiEngine |
| `_webservicevat` | 6 | Validation TVA (VIES) |
| `_ftp` | 28 | Transferts FTP |

### Outils et divers
| Module | Objets | Role |
|--------|--------|------|
| `_pad` | 22 | Editeur de texte integre |
| `_agenda` | 18 | Agenda / calendrier |
| `_XDWSpy` | 8 | Debugger DataWindow |
| `_gdpr` | 7 | Conformite RGPD |
| `_sysxtra` | 23 | Extensions client (surcharges) |
| `_cust2` | 83 | Developpements custom |
| `Cust_Empty` | 7 | Templates de personnalisation |
| `cust_peppol` | 9 | Peppol custom |
| `_pmix_logo` | 1 | Logo application |

### Technique
| Module | Objets | Role |
|--------|--------|------|
| `pmix` | 4 | Point d'entree application (pmix.sra) |
| `shared_test` | 8 | Tests |
