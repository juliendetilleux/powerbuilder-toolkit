# uo_datawindow

- **Type**: User Object (visuel)
- **Ancetre**: uo_dw_a_pmi
- **Module**: _ancestor
- **Lignes**: 665
- **Description**: Controle DataWindow ancetre. Fournit les services de redimensionnement, design, FlexReport, gestion transactionnelle (settransobject/update surcharges) et debug. C'est le controle le plus utilise de l'application.

## Heritage
- Ancetres: uo_dw_a_pmi > datawindow (PB built-in)
- Descendants directs: uo_extendeddw_2, uo_extendeddw (_system), uo_datawindow_lang (_langue), uo_dw_doc (_general)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| il_flxid | Long | ID du FlexReport associe |
| is_flxname | String | Nom du FlexReport |
| ib_flx | Boolean | Flag FlexReport actif |
| is_original_syntax | String | Syntaxe SQL originale du DataWindow |
| inv_Resize | n_cst_dwsrv_resize | Service de redimensionnement DW |
| is_dataobject | String | Nom du dataobject |
| is_sort | string | Expression de tri |
| iSrv_GridStyle | n_svc_dw_gridstyle | Service de style grille |
| iSrv_Select | n_svc_dw_selectrow | Service de selection de lignes |
| inv_transaction | nv_transaction | Objet de transaction |

## Fonctions publiques
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| uf_get_flx_report(string, string) | public | Recherche un FlexReport associe au DataWindow original |
| of_setresize(boolean) | public | Active/desactive le service de redimensionnement du DW |
| of_set_design() | public | Applique le theme/design au DW |
| of_halt() | public | Arrete le traitement en cours |
| of_startservice(string) | public | Demarre un service nomme (gridstyle, selectrow, etc.) |
| uof_check_change_dataobject() | public | Verifie si le dataobject a change |
| of_set_debug(long) | public | Active le mode debug pour une ligne |
| settransobject(transaction) | public | Surcharge : definit la transaction et stocke la reference |
| update() / update(boolean) / update(boolean, boolean) | public | Surcharges : mise a jour avec gestion d'erreur integree |

## Evenements
Aucun evenement surcharge.

## Dependances
- **Utilise**: uo_dw_a_pmi (heritage)
- **Utilise par**: uo_extendeddw_2, uo_extendeddw (_system), uo_datawindow_lang (_langue), uo_dw_doc (_general)
