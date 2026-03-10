# d_email_contacts

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
select DISTINCT ctadcode as 'Identifiant société',
choices.chname || ' ' || ctfirstname || ' ' || ctname as 'Nom contact complet',
 choices.chname as 'Civilité',
 ctfirstname as 'Prénom du contact',
 ctname as 'Nom du contact',
 ctgsm as 'Numéro de mobile',
 adname 'Nom de la société',
 adadr1 as 'Adresse 1 de la société',
 adadr2 as 'Adresse 2 de la société',
 adzip as 'Code postal de la société',
 adloc as 'Ville de la société',
 adtel as 'Téléphone de la société',
 adfax as 'Fax de la société'
 from contacts, adresses, choices
where contacts.ctadcode = adresses.adcode
AND contacts.ctmail LIKE ISNULL(:as_ctmail, '%%')
AND contacts.ctadcode LIKE ISNULL(:as_ctadcode, '%%')
AND choices.chcode = ctciv1
AND choices.chactiv = 'Y'
AND  choices.chtype = 'CIV1'

```

## Colonnes
| Colonne |
|---------|
| nom_contact_complet |
| nom_du_contact |
| nom_du_contact_t |

