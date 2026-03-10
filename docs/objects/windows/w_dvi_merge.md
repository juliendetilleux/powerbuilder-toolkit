# w_dvi_merge

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi - Fusion (Devis)

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
| il_ProjId | Long |
| is_DviTemplate | String |
| ibooTab_LineTab | Boolean |
| in_total | decimal |
| is_DviType | String |
| is_MULTICO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_merge_field() | public | Traitement wf_merge_field |
| wf_load_lineinfo() | public | Charge les donnees |
| wf_load_lineinfo_original() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
