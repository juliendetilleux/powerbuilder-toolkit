# w_apollo_invexp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ifcpt
- **Description**: Apollo invexp (Interface comptable)

## Variables d'instance

| Variable | Type |
|----------|------|
| ErrInv | long |
| NbInvErr | long |
| cptperiod | string |
| is_rename | string |
| is_AdSub | String |
| iSel_ordr_Curr | string |
| isel_invhead | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| CreateProcessA(string AppName, string CommLine, long l1, long l2, boolean binh, long creationflags, long l3, string dir, str_startupinfo startupinfo, ref str_processinformation pi) | public | Creation |
| WaitForSingleObject(ulong ul_Notification, long lmillisecs) | public | Calcule/retourne WaitForSingleObject |
| CloseHandle(ulong file_hand) | public | Fermeture |
| invoice_refresh() | public | Rafraichit l'affichage |
| f_invexp() | public | Traitement f_invexp |
| f_invexp_ctrl() | public | Calcule/retourne f_invexp_ctrl |
| invoice_sendlog() | public | Envoi |
| wf_currid(string as_curr) | public | Retourne wf_currid |
| wf_cpt_numbercomplete(string as_String, integer ai_Len) | public | Retourne wf_cpt_numbercomplete |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
