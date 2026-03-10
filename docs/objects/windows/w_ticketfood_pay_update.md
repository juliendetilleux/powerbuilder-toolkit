# w_ticketfood_pay_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_food
- **Description**: Ticketfood pay - Mise a jour

## Variables d'instance

| Variable | Type |
|----------|------|
| idec_ValToPay | Decimal |
| istr_CashPay | gstr_CashPay |
| is_Origin | String |
| ii_Return | Integer |
| is_ShAutho | String |
| il_Order | Long |
| is_Cust | String |
| iw_parent | w_window |
| iboo_ConsDirectSal | Boolean |
| ii_ShipToSeq | Integer |
| il_SalOrder | Long |
| is_TickeCust | String |
| is_currecy2 | string |
| is_shcurr | string |
| is_MULTICO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_insertline(string as_key) | public | Ajout |
| wf_print() | public | Impression |
| wf_cashsave(string as_key) | public | Sauvegarde les donnees |
| wf_order_verif(ref long al_order, string as_ordtyp) | public | Verifie wf_order_verif |
| wf_solde_set() | public | Traitement wf_solde_set |
| wf_opencash(string as_type) | public | Ouverture |
| wf_doctreat() | public | Calcule/retourne wf_doctreat |
| wf_createticket(uo_datawindow adw_allocline) | public | Creation |
| wf_createtickethead(long al_tckhead) | public | Creation |
| wf_createticketline(long al_tckhead, long al_salline, long al_line) | public | Creation |
| wf_currconv2() | public | Fonction wf_currconv2 |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| losefocus | Evenement losefocus |
| constructor | Constructeur |
