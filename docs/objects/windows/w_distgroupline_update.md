# w_distgroupline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Distgroupline - Mise a jour (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_dhcode | integer |
| ib_modify | boolean |
| screenfilter_sel | string |
| screenfilter_list | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_filter_sel() | public | Applique un filtre |
| wf_moveselect(uo_extendeddw source, uo_extendeddw target) | public | Selection |
| wf_init() | public | Initialisation |
| filteritem(string as_target) | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
