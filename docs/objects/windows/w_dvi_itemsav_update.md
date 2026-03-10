# w_dvi_itemsav_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi itemsav - Mise a jour (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_StdCost | Boolean |
| idec_GlobInc | Decimal |
| idt_ReqDate | Datetime |
| ii_LnId | Integer |
| il_ProjId | Long |
| is_Action | String |
| iboo_OfferMod | Boolean |
| is_lang | String |
| is_type | String |
| idec_pvrist | Decimal |
| idec_tarifrist | Decimal |
| iboo_ManChange | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_imputok() | public | Verifie wf_imputok |
| wf_stdcost(boolean aboo_state) | public | Traitement wf_stdcost |
| wf_norate(ref datawindowchild adwc_rate) | public | Traitement wf_norate |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| constructor | Constructeur |
