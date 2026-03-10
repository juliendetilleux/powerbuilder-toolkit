# w_techdata_merge

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Techdata - Fusion (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_count_fields | long |
| itab_fields | string |
| tab2 | string |
| appdir | string |
| is_fichierDot | String |
| iole_word | OLEObject |
| il_taille_tab_doublon | long |
| is_SelItem | string |
| is_selection | string |
| idwc1 | dataWindowChild |
| is_DocName | string |
| is_techdataTemplate | String |
| ibooTab_LineTab | Boolean |
| st_geninfo | st_generalinfo |
| idec_min | decimal |
| ii_nbdec | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_merge_field() | public | Traitement wf_merge_field |
| wf_load_lineinfo() | public | Charge les donnees |
| wf_clear() | public | Traitement wf_clear |
| wf_clear2() | public | Traitement wf_clear2 |
| wf_merge_field_update() | public | Mise a jour |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_delete_doc() | public | Suppression |
| wf_return0dec(decimal ad_value) | public | Retourne wf_return0dec |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
