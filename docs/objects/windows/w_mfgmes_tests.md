# w_mfgmes_tests

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgmes tests (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_of | long |
| il_wcline | long |
| is_mwwccode | string |
| is_itcode | string |
| is_itname | string |
| is_locode | string |
| ib_Retrieve | boolean |
| idwc_choices | datawindowchild |
| is_function | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_check_wc(long al_of, long al_mwline) | public | Validation |
| wf_choicelist() | public | Traitement wf_choicelist |
| wf_save() | public | Sauvegarde les donnees |
| wf_blocof(ref string as_error) | public | Verifie wf_blocof |
| wf_quarantine(ref string as_error, boolean ab_bloq) | public | Verifie wf_quarantine |
| wf_check_mat() | public | Validation |
| wf_check_ok(ref string as_error) | public | Validation |
| wf_check_tested() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
