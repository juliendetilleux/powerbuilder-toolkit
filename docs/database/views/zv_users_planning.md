# Vue: zv_users_planning

## Description

Vue des utilisateurs pour le module de planification.

## SQL

```sql
create view "DBA"."zv_users_planning"( "upactid",
  "upacttype",
  "upactdate",
  "upacthour",
  "upacttiming",
  "upuser",
  "upusername",
  "upadname" ) 
  as select "Adrsactions"."aacode",
    "Adrsactions"."aaaction",
    "Date"("Adrsactions"."aaactiondate"),
    cast("Adrsactions"."aaactiondate" as time),
    "Adrsactions"."aatiming",
    "Adrsactions"."aarespons",
    "Users"."usname",
    "Adresses"."adname"
    from "DBA"."Adrsactions"
      ,"DBA"."Adresses"
      ,"DBA"."Users"
    where "Adrsactions"."aaadrid" = "Adresses"."adcode"
    and "Adrsactions"."aarespons" = "Users"."uscode"
```

## Tables source

- `Adresses`
- `Adrsactions`
- `Users`

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
