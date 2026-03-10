# Vue: yq_actions

## Description

Vue de requete etendue sur les actions CRM avec informations detaillees sur les activites, contacts et suivi.

## SQL

```sql
create view "DBA"."yq_actions"
  as select "adrsactions"."aacode" as "action_id",
    "adrsactions"."aaadrid" as "company_code",
    "adresses"."adname" as "customer_name",
    "adrsactions"."aacontactid" as "contact_id",
    (select "contacts"."ctname" from "DBA"."contacts" where "contacts"."ctadcode" = "adrsactions"."aaadrid" and "contacts"."ctline" = "adrsactions"."aacontactid") as "contact_name",
    "adrsactions"."aaaction" as "activity_id",
    "activities"."acdesc" as "activity_name",
    "adrsactions"."aarespons" as "user_id",
    (select "users"."usname" from "DBA"."users" where "users"."uscode" = "adrsactions"."aarespons") as "user_name",
    "date"("adrsactions"."aaactiondate") as "action_activity_date",
    convert(char(8),"adrsactions"."aaactiondate",108) as "action_activity_hour",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'PRIO' and "choiceline"."clline" = "adrsactions"."aapriority") as "action_priority",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ACST' and "choices"."chcode" = "adrsactions"."aastatus") as "action_status",
    "date"("adrsactions"."aastsdat") as "action_lastmodif_date",
    "adrsactions"."aatiming" as "action_duration",
    "adrsactions"."aacomment" as "action_cmnt",
    "adrsactions"."aadesc" as "action_description",
    "date"("adrsactions"."aacreadate") as "action_creation_date",
    "adrsactions"."aacreator" as "action_creator",
    "adrsactions"."aafileref" as "project_id",
    "adrsactions"."aafileline" as "subproject_id",
    (select "filehead"."fhdesc" from "DBA"."filehead" where "filehead"."fhcode" = "adrsactions"."aafileref") as "project_name",
    (select "fileline"."fldesc" from "DBA"."fileline" where "fileline"."flcode" = "adrsactions"."aafileref" and "fileline"."flline" = "adrsactions"."aafileline") as "subproject_name",
    (select "filefamily"."ffdesc" from "DBA"."filehead","DBA"."filefamily" where "filehead"."fhstat1" = "filefamily"."ffcode" and "filehead"."fhcode" = "adrsactions"."aafileref") as "project_family",
    (select "fileline"."flresp" from "DBA"."fileline" where "fileline"."flcode" = "adrsactions"."aafileref" and "fileline"."flline" = "adrsactions"."aafileline") as "project_owner",
    (select "fileline"."flbudget" from "DBA"."fileline" where "fileline"."flcode" = "adrsactions"."aafileref" and "fileline"."flline" = "adrsactions"."aafileline") as "project_budget_hours",
    "date"((select "max"("adrs2"."aaactiondate") from "DBA"."adrsactions" as "adrs2" where "adrs2"."aafileref" = "adrsactions"."aafileref" and "adrs2"."aafileline" = "adrsactions"."aafileline")) as "subproject_lastaction_date",
    "date"((select "max"("invoicehead"."ihdate") from "DBA"."invoicehead","DBA"."invoiceline" where "invoicehead"."ihcode" = "invoiceline"."ilcode" and "invoiceline"."ilfileref" = "adrsactions"."aafileref" and "invoiceline"."ilfileline" = "adrsactions"."aafileline")) as "subproject_lastinvoice_date",
    "adrsactions"."aarealcost" as "action_hour_cost",
    "adrsactions"."aarealcost"*"adrsactions"."aatiming"/60 as "action_cost",
    "adrsactions"."aasalorder" as "action_salorder_id",
    "adrsactions"."aasalline" as "action_salline_id",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'INST' and "choices"."chcode" = "adrsactions"."aainvstatus") as "invoicestatus",
    "adrsactions"."aainvoicehead" as "invoice",
    "adrsactions"."aainvoiceline" as "invoiceline",
    (select "invoicehead"."ihcust" from "DBA"."invoicehead" where "invoicehead"."ihcode" = "adrsactions"."aainvoicehead") as "invoice_customer_id",
    "adrsactions"."aawfsuccess" as "action_success",
    "adrsactions"."aapersuccess" as "action_percent_success",
    "adrsactions"."aaquoteval" as "action_quotation_value",
    "adrsactions"."aaitem" as "item_code",
    (select "items"."itname" from "DBA"."items" where "items"."itcode" = "adrsactions"."aaitem") as "item_name",
    "adrsactions"."aaqty" as "action_item_qty"
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
- `filefamily`
- `filehead`
- `fileline`
- `invoicehead`
- `invoiceline`
- `items`
- `users`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `action_id` | Action id |
| `company_code` | Code identifiant |
| `customer_name` | Nom/designation |
| `contact_id` | Contact |
| `contact_name` | Nom/designation |
| `activity_id` | Activity id |
| `activity_name` | Nom/designation |
| `user_id` | Utilisateur |
| `user_name` | Nom/designation |
| `action_activity_date` | Date |
| `action_activity_hour` | Action activity hour |
| `action_priority` | Priorite |
| `action_status` | Statut |
| `action_lastmodif_date` | Date |
| `action_duration` | Action duration |
| `action_cmnt` | Commentaire |
| `action_description` | Description |
| `action_creation_date` | Date |
| `action_creator` | Action creator |
| `project_id` | Project id |
| `subproject_id` | Subproject id |
| `project_name` | Nom/designation |
| `subproject_name` | Nom/designation |
| `project_family` | Project family |
| `project_owner` | Project owner |
| `project_budget_hours` | Project budget hours |
| `adrs2` | Adrs2 |
| `subproject_lastaction_date` | Date |
| `subproject_lastinvoice_date` | Date |
| `action_hour_cost` | Cout |
| `action_cost` | Cout |
| `action_salorder_id` | Vente |
| `action_salline_id` | Numero de ligne |
| `invoicestatus` | Statut |
| `invoice` | Facture |
| `invoiceline` | Numero de ligne |
| `invoice_customer_id` | Client |
| `action_success` | Succes/resultat |
| `action_percent_success` | Succes/resultat |
| `action_quotation_value` | Action quotation value |
| `item_code` | Code identifiant |
| `item_name` | Nom/designation |
| `action_item_qty` | Quantite |
