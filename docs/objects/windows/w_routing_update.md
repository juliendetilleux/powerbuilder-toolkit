# w_routing_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Gammes - Mise a jour (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| wcname | String |
| wccost | Double |
| routtype | string |
| il_routline | long |
| iSel_method_item | string |
| iSel_method_type | string |
| iSel_Bom_Line | integer |
| iSel_rout_Line | integer |
| il_rltest | long |
| ib_new_row | boolean |
| istr_specific | gstr_specific |
| ib_modify | Boolean |
| ii_cpt | integer |
| ib_close | Boolean |
| iRl_wccode | string |
| is_STDSPC | string |
| is_bhsubc | string |
| is_ADVANCSCHED | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| routlineinputok() | public | Verifie routlineinputok |
| wf_line_seq() | public | Traitement wf_line_seq |
| wf_routtest_insert() | public | Ajout |
| wf_routtest_modify() | public | Test |
| wf_routtest_delete() | public | Suppression |
| wf_routreject_delete() | public | Suppression |
| wf_routreject_insert() | public | Ajout |
| wf_routjal_delete() | public | Suppression |
| wf_save_routline() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| constructor | Constructeur |
