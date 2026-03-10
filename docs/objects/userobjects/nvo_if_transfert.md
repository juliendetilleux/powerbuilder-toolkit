# nvo_if_transfert

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _edilink
- **Description**: Objet d'integration EDI

## Variables d'instance

| Variable | Type |
|----------|------|
| id_purclose_tol | decimal |
| il_to_histoseq | long |
| is_adcode | string |
| is_fromadcode | string |
| ib_error | boolean |
| ii_transactico | int |
| is_message | string |
| ib_show_message | boolean |
| ii_RemoteCpnId | Integer |
| is_FromWho | String |
| is_MULTICO | string |
| is_NUMINNC | string |
| is_salrtrns | string |
| is_salrtrnt | string |
| is_salrtrno | string |
| is_CUSTRTRN1 | string |
| is_BLOCAGE | string |
| invo_imputcpt | nvo_imputcpt |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_trfpursal(string anomaly) : long | Public | Fonction utilitaire |
| usf_odbcerror(string OriginMsg) : string | Public | Fonction publique |
| uf_trfsalpur(string anomaly) : long | Public | Fonction utilitaire |
| uf_trfshipopbl() : long | Public | Fonction utilitaire |
| uf_getitowner(string as_adcode[]) : long | Public | Fonction utilitaire |
| uf_connect(string source, string destination, string fonction, integer ai_order) : boolean | Public | Fonction utilitaire |
| uf_transaction() : long | Public | Fonction utilitaire |
| uf_specific() : long | Public | Fonction utilitaire |
| uf_of() : long | Public | Fonction utilitaire |
| uf_ret_purchase(str_struct struct_arg, nv_transaction trans_arg) : boolean | Public | Fonction utilitaire |
| uf_ret_exp(nvo_open_return_update anvo_open, decimal ad_qtytoreturn, boolean ab_updatestock, boolean ab_credit) : boolean | Public | Fonction utilitaire |
| uf_addreturn_shipcost(long al_shiphead, long al_shipline, long al_shipheadnew, ...) : boolean | Public | Fonction utilitaire |
| uf_update_shipcost(long al_shiphead, long al_shipline, decimal adec_qtytoreturn, ...) : boolean | Public | Fonction utilitaire |
| uf_addinvlinefromshipcost(long al_shiphead, long al_shipline, long al_invoiceheadnew, ...) : boolean | Public | Fonction utilitaire |
| uf_returnghost(string as_loc, long al_shiphead, long al_commande, ...) : boolean | Public | Fonction utilitaire |
| uf_saveerror(string as_detyp, string as_cmnt) : boolean | Public | Fonction utilitaire |
| uf_trfretpur() : long | Public | Fonction utilitaire |
| uf_connect_check(string source, string destination, string fonction, ...) : boolean | Public | Fonction utilitaire |
| uf_trfitems() : long | Public | Fonction utilitaire |
| uf_trfrcptexp() : long | Public | Fonction utilitaire |
| uf_trfinvoice() : long | Public | Fonction utilitaire |
| uf_trfexprcpt(string option) : long | Public | Fonction utilitaire |
| usf_trfexprcpt_save(str_struct str_arg, string option) : boolean | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
