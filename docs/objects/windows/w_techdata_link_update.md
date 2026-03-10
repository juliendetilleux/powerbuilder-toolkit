# w_techdata_link_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Techdata link - Mise a jour (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_item | string |
| il_row_todelete | long |
| is_type | string |
| is_lang | string |
| idec_percmin | decimal |
| ib_modified | boolean |
| ib_modified_trustbox | boolean |
| is_TRUSTBOX | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_retrieve() | public | Recupere les donnees |
| wf_checkline(long al_row) | public | Validation |
| wf_checkline_ing(long al_row) | public | Validation |
| wf_checkline_nut(long al_row) | public | Validation |
| wf_checkline_all(long al_row) | public | Validation |
| wf_delete_new() | public | Suppression |
| wf_delete() | public | Suppression |
| wf_inputok() | public | Verifie wf_inputok |
| wf_save() | public | Sauvegarde les donnees |
| wf_retrievetab() | public | Recupere les donnees |
| wf_color_comment() | public | Traitement wf_color_comment |
| wf_tabname() | public | Traitement wf_tabname |
| wf_save_cmnt() | public | Sauvegarde les donnees |
| wf_retrievetablang(string as_lang) | public | Recupere les donnees |
| wf_tdlevelcalculate() | public | Calcul |
| wf_filling(string as_item) | public | Verifie wf_filling |
| wf_refresh_static_adzone(string as_adcode) | public | Rafraichit l'affichage |
| wf_save_static_adzone() | public | Sauvegarde les donnees |
| wf_color_adstatic_zone() | public | Traitement wf_color_adstatic_zone |
| wf_fill_pct(string as_item, string as_lang, decimal adec_percmin) | public | Verifie wf_fill_pct |
| wf_checkline_nano(long al_row) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
