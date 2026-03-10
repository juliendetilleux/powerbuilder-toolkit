# w_mfgwc_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgwc - Mise a jour (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_seq | long |
| ib_seq | Boolean |
| istr_specific | gstr_specific |
| is_STDSPC | string |
| is_mhsubc | string |
| ib_modify | Boolean |
| iSel_mfg_id | long |
| iw_parent | w_window |
| isel_wcseq | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wclineinputok() | public | Verifie wclineinputok |
| wf_mfgwctests_modify() | public | Test |
| wf_mfgwctests_insert() | public | Ajout |
| wf_mfgwctests_delete() | public | Suppression |
| wf_line_seq() | public | Traitement wf_line_seq |
| wf_mfgwcreject_delete() | public | Suppression |
| wf_mfgwcreject_insert() | public | Ajout |
| wf_showerror(string as_title, string as_error) | public | Affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
