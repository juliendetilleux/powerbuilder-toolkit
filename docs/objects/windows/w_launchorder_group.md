# w_launchorder_group

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Launchorder groupes (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| groupCode | Long |
| itcontrainte | String |
| Modified | Boolean |
| GroupItem | string |
| NbO | long |
| itemid | String |
| ordqty | double |
| plndat | datetime |
| mfggroup | string |
| addgroup_item | string |
| is_mcfilter | string |
| ibool_isalt2 | boolean |
| il_total_of | long |
| is_hat_item | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| calclineload(long linenum) | public | Charge les donnees |
| update_total() | public | Mise a jour |
| namebutton() | public | Traitement namebutton |
| launchgroup() | public | Traitement launchgroup |
| launchgroupin1() | public | Traitement launchgroupin1 |
| load_group_mfg(long groupid, string grouptyp) | public | Charge les donnees |
| wf_deselect_0() | public | Selection |
| calclinecontraint(long linenum) | public | Calcul |
| wf_filteritem() | public | Applique un filtre |
| launchgroupinalt2() | public | Traitement launchgroupinalt2 |
| wf_prefill_items(uo_datawindow adw_items) | public | Calcule/retourne wf_prefill_items |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
