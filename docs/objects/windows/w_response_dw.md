# w_response_dw

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ancestor
- **Lignes**: 236
- **Description**: Fenetre response specialisee pour l'affichage de DataWindows avec filtrage et recherche integres. Fournit un DropDown de selection de colonne, un champ de recherche par ligne et un champ de filtre par colonne, ainsi qu'un DataWindow central (uo_extendeddw).

## Heritage
- Ancetres: w_response > w_a_response_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: w_rcpo_kit_comp_lot, w_salline_mp_notavailable, w_salline_available, w_qry_lotcons, w_cmnt_cells_update, w_mp_notavailable, w_mp_available, w_alloc_mpofs_by_item, w_pack_create, w_invoice_sqlsearch, w_etrsp_waiting, w_gpdr, w_fedex_shipmanval_input, w_subhead_list, w_offergroupline_update, w_offergrouphead_update (16 descendants)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| ScreenFilter[] | string | Tableau de filtres actifs appliques au DataWindow |
| is_colfiltertab[] | string | Tableau des noms de colonnes pour le filtre (champ bleu) |
| is_colsearchtab[] | string | Tableau des noms de colonnes pour la recherche (champ jaune) |
| ii_nbcol_filtered | int | Nombre de colonnes filtrables |
| is_info_filter | string | Description textuelle du filtre actif |

## Fonctions
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| filteritem() | public | Applique les filtres actifs (ScreenFilter[]) au DataWindow, met a jour is_info_filter |
| wf_refresh() | public | Fonction de rafraichissement (surchargeable) |
| wf_input_ok() | public | Validation des saisies (retourne true par defaut, surchargeable) |
| wf_save() | public | Sauvegarde des donnees (surchargeable) |

## Evenements surcharges
| Evenement | Description |
|-----------|-------------|
| open | Configure le DataWindow (dataobject, TransObject), remplit la liste des colonnes filtrables, initialise la recherche |
| ddlb_filter::selectionchanged | Change la colonne de filtre et de recherche active |
| uosle_filtersearch::key_pressed | Applique le filtre quand Enter est presse |
| dw_ancestor::constructor | Appelle le constructeur parent si un dataobject est defini |

## Controles principaux
| Controle | Type | Role |
|----------|------|------|
| ddlb_filter | uo_dropdownlistbox | Selection de la colonne a filtrer |
| uosle_linesearch | uo_linesearch | Recherche par saisie (champ jaune - recherche incrementale) |
| uosle_filtersearch | uo_filtersearch | Filtre par saisie (champ bleu - filtrage) |
| uo_2 | uo_screenid | Identifiant d'ecran |
| dw_ancestor | uo_extendeddw | DataWindow principal avec tri automatique et filtre clic droit |

## Dependances
- **Utilise**: w_response (heritage), uo_dropdownlistbox, uo_linesearch, uo_filtersearch, uo_screenid, uo_extendeddw, SQLCA
- **Utilise par**: 16 fenetres descendants dans _stock, _sales, _query, _planning, _manufg, _masters, _gdpr, _fedex, _devis
