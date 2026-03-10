# nvo_etiq_trsp

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _sales
- **Description**: Objet du module Ventes

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| isoapconnection | soapconnection |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_send_mail_bps() : longlong | Public | Fonction utilisateur publique |
| uof_save_bpost(long al_salhead, uo_datawindow ldw_scanned) : longlong | Public | Fonction utilisateur publique |
| uof_create_csv_bpost(boolean ai_international) : long | Public | Fonction utilisateur publique |
| uof_create_csv_bpost(string as_path_filename, boolean ab_international) : long | Public | Fonction utilisateur publique |
| uof_cancel_bpost(long ll_eb_id) : integer | Public | Fonction utilisateur publique |
| wf_initialise_soap() : long | Public | Fonction privee de fenetre |
| uof_send_bpost(long al_salhead, uo_datawindow ldw_scanned) : longlong | Public | Fonction utilisateur publique |
| uof_print_etiq_bps(long al_salhead, longlong al_seq_touse, long ll_nb_copy, boolean ab_autoprint) : s_print_return | Public | Fonction utilisateur publique |
| uof_save_bps(long al_salhead, uo_datawindow ldw_scanned) : longlong | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
