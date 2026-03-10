# w_a_mdi_pmi

- **Type**: Window
- **Ancetre**: w_window
- **Module**: _ancestor
- **Lignes**: 520
- **Description**: Couche intermediaire entre w_window et w_mdi. Fournit toute la logique d'initialisation du frame MDI : verification de version DB, chargement des variables globales, adaptation des modules visibles selon la licence, controle d'acces aux menus, lecture des actions utilisateur. C'est l'une des fenetres ancetres les plus complexes.

## Heritage
- Ancetres: w_window > w_a_pmi > window (PB built-in)
- Descendants directs: w_mdi (1 descendant direct)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| im_menu | m_xtra_frame_design | Reference vers le menu du frame MDI pour la gestion des acces et la visibilite des modules |

## Fonctions
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| checkcustprg() | public | Charge l'identifiant client et la version personnalisee depuis uo_cust_prg_id et la table dbmod |
| wf_check_dbversion() | public | Verifie la compatibilite entre la version du programme et la version de la base de donnees. Bloque si DB trop ancienne, avertit si DB plus recente |
| wf_adapt_modules() | public | Adapte la visibilite des menus selon les modules actives (Compta, TimeCtrl, QControl, Services, CRM, Projects, MFG, Sales, Planning, Stock, etc.) et le mode CRM exclusif |
| wf_check_menu_access() | public | Parcourt tous les items de menu et cache ceux auxquels l'utilisateur n'a pas acces (via gf_CheckAcces et le Tag de chaque item) |
| wf_load_custversion() | public | Charge la version client personnalisee (identique a checkcustprg) |
| wf_load_global_var() | public | Charge les variables globales systeme : devise (SYSCURR), MRP (PLNGPOS/PLNGHOR), ISO ref, dates commandes vente/achat, logique lots, QC audit, chemin application |
| wf_read_actions() | public | Verifie si l'utilisateur a des actions CRM non lues et propose de les consulter |

## Evenements surcharges
Aucun evenement surcharge directement (logique dans les fonctions).

## Controles principaux
| Controle | Type | Role |
|----------|------|------|
| mdi_1 | mdiclient | Zone cliente MDI pour les feuilles enfant |
| mditbb_1 | tabbedbar | Barre d'onglets MDI |
| mdirbb_1 | ribbonbar | Barre ruban MDI |

## Dependances
- **Utilise**: w_window (heritage), m_xtra_frame_design, uo_cust_prg_id, gn_param, gf_CheckAcces, gf_get_paramprog, gf_path_get, nvo_msgbox, savehistojob, dbmod (table DB), modules (table DB), parameters (table DB), adrsactions (table DB)
- **Utilise par**: w_mdi (heritage)
