# w_crm_filter_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Filter - Mise a jour (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| idwc | datawindowchild |
| is_paro | string |
| is_parf | string |
| is_condition | string |
| is_code | string |
| is_dy | string |
| is_crm_filtre | string |
| il_fiid | long |
| il_row | long |
| screenFilter | string |
| il_row2 | long |
| il_selrow | long |
| is_date_action | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_checksyntax(string as_crm_filtre) | public | Validation |
| wf_loadfilter() | public | Applique un filtre |
| wf_deletesql() | public | Suppression |
| wf_modifsql() | public | Calcule/retourne wf_modifsql |
| filteritem() | public | Applique un filtre |
| wf_refreshfield() | public | Rafraichit l'affichage |
| wf_savefilter(long al_filter) | public | Applique un filtre |
| wf_getfieldnamefromcode(string as_field) | public | Retourne fieldnamefromcode |
| wf_fill_line_name(long row, string data) | public | Traitement wf_fill_line_name |
| wf_delete_filterline() | public | Applique un filtre |
| wf_createsql() | public | Creation |
| wf_createfilter() | public | Applique un filtre |
| wf_showsql() | public | Affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
