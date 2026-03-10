# w_linkitadpur_mass_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkitadpur mass - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_fromfilter | boolean |
| ii_lkrow | integer |
| ii_qorow | integer |
| is_currentsupplier | string |
| is_currentfilter | string |
| il_lkcode | long |
| il_qocode | long |
| idec_price | decimal |
| ib_frommod | boolean |
| isel_itemad_id | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_init_supplier() | public | Initialisation |
| wf_get_linkitad(string as_supplier) | public | Retourne linkitad |
| wf_quotes_del() | public | Verifie wf_quotes_del |
| wf_update_quotes(decimal adec_price) | public | Mise a jour |
| wf_update_link(integer adec_price) | public | Mise a jour |
| wf_delete_link() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
