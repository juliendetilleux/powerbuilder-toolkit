# w_sales_palet_label

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes palet etiquettes

## Variables d'instance

| Variable | Type |
|----------|------|
| il_ShipNotice | Long |
| is_customer | String |
| NbReport | long |
| report2use | string |
| ReportDW | String |
| id_dateship | datetime |
| ii_Weight2Use4EAN | integer |
| istr_specific | gstr_specific |
| ib_group_by_lotptr | Boolean |
| ib_create_without_printing | Boolean |
| ib_created | Boolean |
| ib_modif | Boolean |
| ib_error | boolean |
| ib_col_group | boolean |
| ib_may_save_without_printing | boolean |
| is_DESADV2QT | string |
| is_MULTICO | string |
| is_elfct | string |
| invo_ship_pallet | nvo_ship_pallet |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_update() | public | Mise a jour |
| wf_set_notmodified() | public | Definit notmodified |
| wf_may_save_without_printing() | public | Sauvegarde les donnees |
| wf_save() | public | Sauvegarde les donnees |
| wf_create_import_string(ref s_print printparam, long al_row, ref string as_report2use, boolean ab_new_groupage, string as_cust_e_id, integer ai_shipto_id, ref string as_sscc) | public | Importation |
| wf_get_back_datas(string as_customer) | public | Retourne back_datas |
| wf_insert() | public | Ajout |
| wf_check_edipc(long al_shiphead) | public | Validation |
| wf_print(string as_report2use, ref s_print printparam, boolean ab_withsetup, boolean ab_automatic, ref s_print_return print_return) | public | Impression |
| wf_sscc_ok() | public | Verifie wf_sscc_ok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
