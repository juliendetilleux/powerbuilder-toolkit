# w_dvi_item_customize

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi articles customize (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| idst_DviItem_ColProperty | nv_datastore |
| idwc_Stat2 | Datawindowchild |
| Color_Obligatory | Long (constant) |
| Color_Invisible | Long (constant) |
| Color_Inaccessible | Long (constant) |
| Color_Normal | Long (constant) |
| Color_Intouchable | Long (constant) |
| is_ColType | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_paint() | public | Traitement wf_paint |
| wf_prop_obligatory() | public | Traitement wf_prop_obligatory |
| wf_prop_invisible() | public | Traitement wf_prop_invisible |
| wf_prop_normal() | public | Traitement wf_prop_normal |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
