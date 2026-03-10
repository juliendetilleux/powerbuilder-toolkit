# w_linkitadpur_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkitadpur - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_itemcode | string |
| il_LkCode | Long |
| ii_Ret | int |
| iw_parent | w_window |
| isel_itemad_id | long |
| iadcurr | string |
| is_ITUMTRF | string |
| idwc_AdditionalUm | DataWindowChild |
| ii_AddUmSelRow | Integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| linkinputok() | public | Verifie linkinputok |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_checkaddum() | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
