# w_sallacks

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Sallacks (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_selrow | long |
| il_shcode_sel | long |
| il_slline_sel | long |
| il_selrow_line | long |
| is_filter | string |
| ScreenFilter | string |
| checkfilter | string |
| lb_modified | boolean |
| is_lastcord | string |
| is_nondefine | string |
| isel_adresse_id | string |
| iSel_ordr_Curr | string |
| il_Sal2Print | Long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_outstock() | public | Traitement wf_outstock |
| refresh() | public | Rafraichit l'affichage |
| wf_save() | public | Sauvegarde les donnees |
| wf_change_autho() | public | Modification |
| wf_salordprep_print() | public | Impression |
| wf_cancel() | public | Traitement wf_cancel |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
