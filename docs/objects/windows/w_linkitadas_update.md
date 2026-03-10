# w_linkitadas_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkitadas - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| ilong_itemadcus | long |
| idwc_Item | DataWindowChild |
| Action | String |
| modified | Boolean |
| itweight | double |
| istr_Specific | gstr_Specific |
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
| il_ascode | long |
| is_LBLPROC2 | string |
| is_DESADV2QT | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| linkinputok() | public | Verifie linkinputok |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_create_init() | public | Creation |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_addautopack() | public | Ajout |
| wf_deleteautopack() | public | Suppression |
| wf_copy_assortline(string as_item, long al_ascode, ref string as_error) | public | Applique un tri |
| wf_createdatastore(string as_sql, ref string as_error) | public | Creation |
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
