# w_quick_purinvoice

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Quick purinvoice (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_Problem | Boolean |
| idst_NoSaleLine | nv_datastore |
| idec_CurrConv | Decimal |
| ii_DstIndex | Integer |
| il_RowCount | Long |
| is_LineType | String |
| is_ExpPaymnt | String |
| is_InvType | String |
| iboo_SplitMod | Boolean |
| is_SplitMethod | String |
| idec_Rist | Decimal |
| is_OrderRist | String |
| iboo_ComOk | Boolean |
| ii_Flash | Integer |
| is_OldAdId | String |
| is_LBCPUR | string |
| is_ITEMANX | string |
| is_OrdTri | any |
| is_PURINVFR | string |
| is_mcdo | string |
| is_MULTICO | string |
| is_NUMINNC | string |
| is_ExoTvaEXpA | String |
| invo_Specific | nvo_Xtra_Specific |
| invo_imputcpt | nvo_imputcpt |
| ibol_saved | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_infol() | public | Traitement wf_infol |
| wf_create_purinvline(long al_purinvhead) | public | Creation |
| wf_suppchange() | public | Modification |
| wf_load_purline4inv() | public | Charge les donnees |
| wf_load_purline4nc() | public | Charge les donnees |
| wf_calculsum() | public | Calcul |
| load_multitri() | public | Charge les donnees |
| wf_lineqty_ctrl() | public | Verifie wf_lineqty_ctrl |
| wf_checkinvtype() | public | Validation |
| wf_getnextpicodemc() | public | Retourne nextpicodemc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| ue_keypressed | Evenement personnalise ue_keypressed |
| losefocus | Evenement losefocus |
