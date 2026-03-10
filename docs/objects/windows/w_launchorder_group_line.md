# w_launchorder_group_line

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Launchorder groupes line (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| NewCoitem | boolean |
| refcontraintqty | decimal |
| itlot | string |
| iSOCtrl | string |
| iSoCtrlPeriod | long |
| coitems | string |
| coitemqty | dec |
| ii_Ret | Integer |
| itval | integer |
| iw_launchorder_group | w_launchorder_group |
| id_ordqty_checked | decimal |
| is_MfgItem_checked | string |
| is_mfghatitem | string |
| il_lastord | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| prepare_ram() | public | Traitement prepare_ram |
| eval_newcoeff() | public | Creation |
| update_comments() | public | Mise a jour |
| update_reqqty() | public | Mise a jour |
| wf_load_ram(string item, string bomtype, datetime reqdat, decimal reqqty, decimal bomcoeff) | public | Charge les donnees |
| wf_typalloc_ram() | public | Verifie wf_typalloc_ram |
| wf_mfgmes(string as_item, string as_routtyp, long al_of) | public | Calcule/retourne wf_mfgmes |
| allocateresource(long sordno) | public | Verifie allocateresource |
| wf_openifalt2() | public | Ouverture |
| launchwithcheck() | public | Validation |
| allocateram(long al_ordno) | public | Verifie allocateram |
| update_coitems() | public | Mise a jour |
| update_mfgcoitems() | public | Mise a jour |
| update_planorders() | public | Mise a jour |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
