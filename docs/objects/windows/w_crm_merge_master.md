# w_crm_merge_master

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Merge master (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_count_fields | long |
| itab_fields | string |
| tab2 | string |
| appdir | string |
| iole_word | OLEObject |
| is_fichierDot | String |
| il_taille_tab_doublon | long |
| is_SelItem | string |
| is_selection | string |
| idwc1 | dataWindowChild |
| templatedir | string |
| is_NewFileName | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_edit_dot() | public | Traitement wf_edit_dot |
| wf_transfertmacro() | public | Traitement wf_transfertmacro |
| wf_retrieve(string as_file) | public | Recupere les donnees |
| wf_delete_dot() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
