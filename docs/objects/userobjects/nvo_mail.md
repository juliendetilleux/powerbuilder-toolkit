# nvo_mail

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme - gestion de messagerie

## Variables d'instance

| Variable | Type |
|----------|------|
| il_Handle | ULong |
| PBObject_SMTP | OLEObject |
| is_smtp | string |
| ii_SMTPTimeOut | int |
| is_AUTOMAIL | string |
| is_SMTPTYPE | string |
| is_curr_usermail | string |
| is_email | string |
| ib_aknowledge | boolean |
| il_MAXSMAIL | longlong |
| gn_smtp | n_smtp |
| invo_Specific | nvo_Xtra_Specific |
| istr_Specific | gstr_Specific |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_sendmail(string as_errormsg, string as_subject, string as_content_type, ...) : integer | Public | Fonction utilitaire |
| uf_sendmail(string as_errormsg, string as_subject, string as_content_type, ...) : integer | Public | Fonction utilitaire |
| uf_new_sendmail(string as_errormsg, string as_subject, string as_content_type, ...) : integer | Public | Fonction utilitaire |
| uf_sendmail_fromaction(string as_status, long al_aacode, boolean ab_showmsg) : integer | Public | Fonction utilitaire |
| uf_sendmail(string as_errormsg, string as_subject, string as_content_type, ...) : integer | Public | Fonction utilitaire |
| uf_regroup_attachment(string as_tabfiles[], string as_attachment[]) : void (subroutine) | Public | Fonction utilitaire |

## Evenements

Aucun evenement personnalise.
