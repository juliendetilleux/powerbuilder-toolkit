# w_cpt_purinvexp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ifcpt
- **Description**: Cpt purinvexp (Interface comptable)

## Variables d'instance

| Variable | Type |
|----------|------|
| cptperiod | string |
| is_AdSub | String |
| iboo_Declare | Boolean |
| iSel_ordr_Curr | string |
| iSel_invhead | long |
| is_Cptid | string |
| is_McCoCode | string |
| ilTab_InvNum | Long |
| is_NotFound_InvList | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invoice_refresh() | public | Rafraichit l'affichage |
| invoice_sendlog() | public | Envoi |
| wf_purinvhdinfo_load() | public | Charge les donnees |
| wf_bob2_invexp() | public | Verifie wf_bob2_invexp |
| wf_invexp() | public | Verifie wf_invexp |
| wf_invexp_ctrl() | public | Calcule/retourne wf_invexp_ctrl |
| wf_popsy_invexp() | public | Verifie wf_popsy_invexp |
| wf_exact_invexp() | public | Traitement wf_exact_invexp |
| wf_pratic_invexp() | public | Verifie wf_pratic_invexp |
| wf_invnum_tabcomplete_4_check(string as_file) | public | Validation |
| wf_transfile_check(string as_file) | public | Validation |
| wf_errormessage(integer ai_returncode) | public | Retourne wf_errormessage |
| wf_asc_purinvexp() | public | Traitement wf_asc_purinvexp |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
