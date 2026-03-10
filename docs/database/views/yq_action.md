# Vue: yq_action

## Description

Vue de requete sur les actions CRM individuelles avec details client, contact, activite et couts associes.

## SQL

```sql
create view //NOUVELLES VUES
  //ACTIONS ET ACTIVITES
  "DBA"."yq_action"
  as select "adrsactions"."aacode" as "action_code",
    "adrsactions"."aaadrid" as "cust_code",
    "adresses"."adname" as "cust_name",
    (select "contacts"."ctname" from "DBA"."contacts" where "contacts"."ctadcode" = "adrsactions"."aaadrid" and "contacts"."ctline" = "adrsactions"."aacontactid") as "cont_name",
    "adrsactions"."aaaction" as "activ_code",
    "activities"."acdesc" as "activ_desc",
    "adrsactions"."aarespons" as "user_code",
    (select "users"."usname" from "DBA"."users" where "users"."uscode" = "adrsactions"."aarespons") as "user_name",
    "date"("adrsactions"."aaactiondate") as "action_date",
    "adrsactions"."aatiming" as "actions_time",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ACST' and "choices"."chcode" = "adrsactions"."aastatus") as "actions_status",
    "adrsactions"."aacomment" as "actions_cmnt",
    "adrsactions"."aadesc" as "actions_desc",
    "date"("adrsactions"."aacreadate") as "actions_datecrea",
    "adrsactions"."aafileref" as "filehead_code",
    "adrsactions"."aafileline" as "fileline_code",
    (select "filehead"."fhdesc" from "DBA"."filehead" where "filehead"."fhcode" = "adrsactions"."aafileref") as "filehead_desc",
    (select "fileline"."fldesc" from "DBA"."fileline" where "fileline"."flcode" = "adrsactions"."aafileref" and "fileline"."flline" = "adrsactions"."aafileline") as "fileline_desc",
    "adrsactions"."aawccost" as "action_pccost",
    "adrsactions"."aauscost" as "action_uscost",
    "adrsactions"."aarealcost" as "action_mocost",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'INST' and "choices"."chcode" = "adrsactions"."aainvstatus") as "action_invstatus",
    "adrsactions"."aasalorder" as "action_salcode",
    "adrsactions"."aasalline" as "action_salline",
    "adrsactions"."aainvoicehead" as "action_invcode",
    "adrsactions"."aainvoiceline" as "action_invline",
    "adrsactions"."aawfsuccess" as "action_success",
    "adrsactions"."aaquoteval" as "action_valoffre",
    "adrsactions"."aaitem" as "action_item",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'PRIO' and "choiceline"."clline" = "adrsactions"."aapriority") as "action_prior",
    "adrsactions"."aapersuccess" as "action_persuccess",
    "adrsactions"."aaqty" as "action_qty"
    from "DBA"."adrsactions"
      ,"DBA"."activities"
      ,"DBA"."adresses"
    where "adrsactions"."aaaction" = "activities"."accode"
    and "adrsactions"."aaadrid" = "adresses"."adcode"
```

## Tables source

- `activities`
- `adresses`
- `adrsactions`
- `choiceline`
- `choices`
- `contacts`
- `filehead`
- `fileline`
- `users`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `action_code` | Code identifiant |
| `cust_code` | Code identifiant |
| `cust_name` | Nom/designation |
| `cont_name` | Nom/designation |
| `activ_code` | Code identifiant |
| `activ_desc` | Description |
| `user_code` | Code identifiant |
| `user_name` | Nom/designation |
| `action_date` | Date |
| `actions_time` | Actions time |
| `actions_status` | Statut |
| `actions_cmnt` | Commentaire |
| `actions_desc` | Description |
| `actions_datecrea` | Date |
| `filehead_code` | Code identifiant |
| `fileline_code` | Code identifiant |
| `filehead_desc` | Description |
| `fileline_desc` | Description |
| `action_pccost` | Cout |
| `action_uscost` | Cout |
| `action_mocost` | Cout |
| `action_invstatus` | Statut |
| `action_salcode` | Code identifiant |
| `action_salline` | Numero de ligne |
| `action_invcode` | Code identifiant |
| `action_invline` | Numero de ligne |
| `action_success` | Succes/resultat |
| `action_valoffre` | Action valoffre |
| `action_item` | Article |
| `action_prior` | Priorite |
| `action_persuccess` | Succes/resultat |
| `action_qty` | Quantite |
