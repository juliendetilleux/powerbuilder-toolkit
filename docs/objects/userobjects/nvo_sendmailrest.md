# nvo_sendmailrest

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: Shared_mail
- **Description**: Objet partage de messagerie - gestion de messagerie

## Variables d'instance

| Variable | Type |
|----------|------|
| is_uscode | string |
| is_smtphost | string |
| is_smtpport | string |
| is_smtpuser | string |
| is_smtppwd | string |
| is_smtptype | string |
| is_smtpClientID | string |
| is_smtpClientSecret | string |
| is_smtpURLAuth | string |
| is_smtpURLToken | string |
| is_smtpScope | string |
| is_smtpURLRedirection | string |
| is_smtpTypeserveur | string |
| is_smtptenant | string |
| is_token | string |
| il_idmail | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_savemail(string as_smtp_sender, string as_recipient[], string as_cc[], ...) : long | Public | Fonction publique |
| of_gettokenoffice365(string as_errormessage) : integer | Public | Fonction publique |
| of_office365(string as_from, string as_to[], string as_subject, ...) : long | Public | Fonction publique |
| of_sendemail(string as_from, string as_to, string as_subject, ...) : long | Public | Fonction publique |
| of_initialisation(string fs_user) : boolean | Public | Fonction publique |
| of_nettoyercontenuemail(string as_scontenuemail, string as_ssujet) : string | Public | Fonction publique |
| of_check_file_in_array(string as_file_path, string astr_files[], boolean ab_verify_validity, boolean ab_compare_filename_only) : boolean | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
