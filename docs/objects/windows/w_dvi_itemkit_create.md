# w_dvi_itemkit_create

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi itemkit - Creation (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_devis | long |
| is_type | string |
| is_adcode | string |
| il_shipto | integer |
| is_curr | string |
| il_nbdays | long |
| id_curconv | dec |
| id_datreq | datetime |
| is_DviType | String |
| is_OpenType | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| zz_autre_creation_attente() | public | Traitement zz_autre_creation_attente |
| inputok() | public | Verifie inputok |
| create_item() | public | Creation |
| create_bomheader() | public | Creation |
| create_bomlines() | public | Creation |
| create_routlines() | public | Creation |
| create_linkitad() | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
