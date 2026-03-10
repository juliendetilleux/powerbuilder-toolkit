# w_salline_feasability

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salline feasability (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| l_ordhead | long |
| s_item | string |
| t_ship | datetime |
| d_qty | double |
| s_itobt | string |
| dat_conf | datetime |
| datconf_modif | boolean |
| id_avail | datetime |
| ist_feasability | struct_feasability |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| prepa_type_p() | public | Traitement prepa_type_p |
| prepa_type_m() | public | Traitement prepa_type_m |
| prepa_type_c() | public | Traitement prepa_type_c |
| wf_getstock(long ll_row, uo_datawindow adw_dw) | public | Retourne stock |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| doubleclicked | Double-clic sur la fenetre |
| clicked | Clic sur la fenetre |
