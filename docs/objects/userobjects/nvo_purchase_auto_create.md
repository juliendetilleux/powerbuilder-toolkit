# nvo_purchase_auto_create

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _purch
- **Description**: Objet du module Achats - gestion des achats

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| is_APPROBIVY | string |
| is_path | string |
| ii_shipto | int |
| seq | long |
| invo_mail | nvo_mail |
| is_ITUMTRF | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_pur_sendmail(long al_purhead, long al_salhead) : boolean | Public | Fonction utilitaire |
| uf_compose_mailtext(string as_purchaser, long al_purid, string as_lang) : string | Public | Fonction utilitaire |
| uf_create_purhead(string as_adcode, datetime adt_datereq, string as_cmnt, string as_error) : long | Public | Fonction utilitaire |
| uf_create_purline(long al_purhead, string as_item, decimal ad_qty, ...) : integer | Public | Fonction utilitaire |
| uf_purchase_auto_create() : integer | Public | Fonction utilitaire |
| uf_salline_loop(long al_salhead) : integer | Public | Fonction utilitaire |
| uf_create_purhead(long al_salhead, string as_adcode, string as_suppcurr) : long | Public | Fonction utilitaire |
| uf_error(string as_error) : void (subroutine) | Public | Fonction utilitaire |

## Evenements

Aucun evenement personnalise.
