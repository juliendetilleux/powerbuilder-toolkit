# w_cpt_invexp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ifcpt
- **Description**: Cpt invexp (Interface comptable)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_Declare | Boolean |
| ilTab_ErrInv | Long |
| is_McCoCode | String |
| ilTab_InvNum | Long |
| is_NotFound_InvList | String |
| ls_StructCom | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| CreateProcessA(string AppName, string CommLine, long l1, long l2, boolean binh, long creationflags, long l3, string dir, str_startupinfo startupinfo, ref str_processinformation pi) | public | Creation |
| WaitForSingleObject(ulong ul_Notification, long lmillisecs) | public | Calcule/retourne WaitForSingleObject |
| CloseHandle(ulong file_hand) | public | Fermeture |
| wf_invoice_refresh() | public | Rafraichit l'affichage |
| wf_bob2_invexp() | public | Verifie wf_bob2_invexp |
| wf_invhdinfo_load() | public | Charge les donnees |
| wf_invlninfo_load(any ast_invhdinfo) | public | Charge les donnees |
| wf_invexp_ctrl() | public | Calcule/retourne wf_invexp_ctrl |
| wf_invexp() | public | Verifie wf_invexp |
| invoice_sendlog() | public | Envoi |
| wf_wb5_invexp() | public | Verifie wf_wb5_invexp |
| wf_popsy_invexp() | public | Verifie wf_popsy_invexp |
| wf_exact_invexp() | public | Traitement wf_exact_invexp |
| wf_pratic_invexp() | public | Verifie wf_pratic_invexp |
| wf_invnum_tabcomplete_4_check(string as_file) | public | Validation |
| wf_transfile_check(string as_file) | public | Validation |
| wf_errormessage(integer ai_returncode) | public | Retourne wf_errormessage |
| wf_asc_invexp() | public | Traitement wf_asc_invexp |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
