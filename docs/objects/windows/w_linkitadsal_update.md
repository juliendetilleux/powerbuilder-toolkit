# w_linkitadsal_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkitadsal - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| ilong_itemadcus | long |
| is_winorigin | string |
| idwc_Item | DataWindowChild |
| Action | String |
| modified | Boolean |
| itweight | double |
| istr_SqlSelect | s_SqlSelect |
| is_Return | String |
| ii_Ret | integer |
| is_itcat | string |
| ii_SelPack | Integer |
| is_AutoPackParam | String |
| ib_DefautItemMode | boolean |
| is_soc | string |
| is_CONTPREPA | string |
| is_CALCDLUO | string |
| isel_item_id | string |
| iw_parent | w_window |
| iadcurr | string |
| is_ITUMTRF | string |
| ib_retwithoutq | boolean |
| is_LBLPROC2 | string |
| is_DESADV2QT | string |
| ib_closenochange | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| linkinputok() | public | Verifie linkinputok |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_create_init() | public | Creation |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_addautopack() | public | Ajout |
| wf_deleteautopack() | public | Suppression |
| wf_visibility() | public | Traitement wf_visibility |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| clicked | Clic sur la fenetre |
