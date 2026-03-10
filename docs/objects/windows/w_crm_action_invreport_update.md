# w_crm_action_invreport_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Actions invreport - Mise a jour (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_etat | string |
| is_errmess | string |
| is_from | string |
| idwc_contact | DataWindowChild |
| il_codeactn | long |
| il_roworigin | long |
| il_followid | long |
| myStruct | struct_crm_action_update_parm |
| il_expenses_code | long |
| ib_workflow | boolean |
| ii_group | int |
| ib_mustapplygroup | boolean |
| ib_statmarket | boolean |
| il_invoicehead | long |
| iboo_SuccessPer | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Calcule/retourne wf_inputok |
| getactionprec() | public | Fonction getactionprec |
| getactionsuiv() | public | Fonction getactionsuiv |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_retrieve_all_tabs() | public | Recupere les donnees |
| wf_seteditable() | public | Definit editable |
| wf_setcost() | public | Definit cost |
| wf_invoicing() | public | Verifie wf_invoicing |
| wf_getcust() | public | Retourne cust |
| wf_getitem() | public | Retourne item |
| wf_getval() | public | Retourne val |
| wf_getfileref() | public | Retourne fileref |
| wf_getfileline() | public | Retourne fileline |
| wf_getinvoice() | public | Retourne invoice |
| wf_getcomment() | public | Retourne comment |
| wf_setinvoice(long al_invoice) | public | Definit invoice |
| wf_projheadupdate() | public | Mise a jour |
| wf_save(string button) | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| ue_getcal | Evenement personnalise ue_getcal |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| clicked | Clic sur la fenetre |
