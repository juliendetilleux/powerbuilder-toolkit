# w_linkitloc_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkitloc - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_OrdTri | ANY |
| is_ScreenFilter | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_init_loc() | public | Initialisation |
| wf_checkmin(long rownum, integer sum_qmin) | public | Validation |
| wf_sum_qmin(string itcode) | public | Calcule/retourne wf_sum_qmin |
| wf_load_multitri() | public | Charge les donnees |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
