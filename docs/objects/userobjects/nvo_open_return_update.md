# nvo_open_return_update

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_shiphead | long |
| isel_shipline | long |
| idt_exp | datetime |
| is_qc | string |
| is_item | string |
| il_commande | long |
| il_lignecommande | long |
| id_shippedqty | dec |
| is_originallot | string |
| is_salrtrns | string |
| is_salrtrnt | string |
| is_parlot | string |
| is_empl | string |
| is_itemnom | string |
| is_um | string |
| is_facture | string |
| il_nfacture | long |
| is_salrtrno | string |
| is_ittyp | string |
| is_devis | string |
| is_typpay | string |
| is_client | string |
| is_tva | string |
| is_tvatyp | string |
| id_prix | dec |
| ib_multiselect | boolean |
| ib_autoprint | boolean |
| ib_showmessage | boolean |
| id_slcustpc | decimal |
| is_error | string |
| is_ITUMTRF | string |
| is_NUMINNC | string |
| is_MULTICO | string |
| il_lasthistseqRTXO | long |
| ii_updatesscc | int |
| ii_putonprecNE | int |
| is_type_WMS | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_addreturn_shipcost(long al_shiphead, long al_shipline, long al_shipheadnew, ...) : boolean | Public | Fonction utilisateur publique |
| uof_do_update_sscc(string as_sscc, string as_lot, decimal ad_qty, ...) : boolean | Public | Fonction utilisateur publique |
| uof_returnghost(string as_cmnt, string as_loc, decimal ad_return_qty, ...) : boolean | Public | Fonction utilisateur publique |
| uof_update_shipcost(long al_shiphead, long al_shipline, decimal adec_qtytoreturn, boolean ab_charge) : boolean | Public | Fonction utilisateur publique |
| uof_update_sscc(string as_lot, string as_loc, decimal ad_qty, boolean ab_print_label_sscc) : boolean | Public | Fonction utilisateur publique |
| uof_return(boolean ab_print_label_sscc, string as_cmnt, string as_cmnt_dest, ...) : boolean | Public | Fonction utilisateur publique |
| uof_addinvlinefromshipcost(long al_shiphead, long al_shipline, long al_invoiceheadnew, ...) : boolean | Public | Fonction utilisateur publique |
| uof_createnewlot(string newlot, integer ai_indexbloc, string as_updatestock) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_print_sscc(string as_lot, string as_sscc, decimal ad_qty) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_createnewlot(string newlot, string as_updatestock, integer ai_indexbloc) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
