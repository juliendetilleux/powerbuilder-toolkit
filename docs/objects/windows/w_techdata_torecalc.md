# w_techdata_torecalc

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Techdata torecalc (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_techdataTemplate | String |
| is_techdataFolder | String |
| idec_percmin | decimal |
| is_lang | string |
| idt_item | nv_datastore |
| ist_keep_perc | st_keep_perc |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_levelcalculate(string as_item, ref datetime adt_datemax) | public | Calcul |
| wf_tdlevelcalculate(string as_item) | public | Calcul |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_additem(string as_item) | public | Ajout |
| wf_recalc_all() | public | Calcul |
| wf_recalc_selected() | public | Calcul |
| wf_ret_tab(string as_string, ref string as_tab[]) | public | Calcule/retourne wf_ret_tab |
| wf_recover_perc() | public | Traitement wf_recover_perc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
