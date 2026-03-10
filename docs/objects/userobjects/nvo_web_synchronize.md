# nvo_web_synchronize

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _edilink
- **Description**: Objet d'integration EDI - communication HTTP/Web

## Variables d'instance

| Variable | Type |
|----------|------|
| is_trans_sqlerrtext | string |
| is_sqlca_sqlerrtext | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| dbdisconnect(boolean ab_interactive) : boolean | Public | Fonction publique |
| synchro_ac2web(boolean ab_interactive) : boolean | Public | Fonction publique |
| synchro_web2ac(boolean ab_interactive) : boolean | Public | Fonction publique |
| synch_ad_shto_ct() : integer | Public | Fonction publique |
| synclines(long al_shcode, datetime adt_datreq, long al_shipto, ...) : boolean | Public | Fonction publique |
| dbconnect(boolean ab_interactive) : boolean | Public | Fonction publique |
| test() : void (subroutine) | Public | Fonction publique |
| ad_frompmix(string as_cust) : void (subroutine) | Public | Fonction publique |
| ad_topmix(string as_cust) : void (subroutine) | Public | Fonction publique |
| st_topmix(string as_cust) : void (subroutine) | Public | Fonction publique |
| st_maybefrompmix(string as_cust) : void (subroutine) | Public | Fonction publique |
| ct_topmix(string as_cust) : void (subroutine) | Public | Fonction publique |
| ct_maybefrompmix(string as_cust) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
