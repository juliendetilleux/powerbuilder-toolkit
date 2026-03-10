# w_rates

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Rates (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_Item | String |
| is_rateItem | String |
| dwc | DataWindowChild |
| ii_ddlb | Int |
| is_OrdTri | any |
| il_rhstroke | long |
| il_rate | long |
| is_rhmod | string |
| isel_adresse_id | string |
| isel_ratedat | datetime |
| iSel_rate | long |
| ii_index | int |
| ItemNameFilter | string |
| is_ITUMTRF | string |
| is_usmcdo2 | string |
| is_screenfilter | string |
| is_screenfilter_rate | string |
| is_RATEMCDO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ratehead_refresh() | public | Rafraichit l'affichage |
| rate_delete() | public | Suppression |
| customer_refresh() | public | Rafraichit l'affichage |
| load_multitri() | public | Charge les donnees |
| filteritem() | public | Applique un filtre |
| wf_creation_fichier_rateline(string as_item) | public | Traitement wf_creation_fichier_rateline |
| wf_printalldet(datetime as_tarifdate, boolean ab_linkitad, boolean ab_cond) | public | Impression |
| wf_refresh_exception() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
