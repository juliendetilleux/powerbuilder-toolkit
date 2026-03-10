# Vue: Yq_paramprog

## Description

Vue de requete sur les parametres de programmation/configuration systeme.

## SQL

```sql
create view "DBA"."Yq_paramprog"
  as select "progparam"."ppcode",
    "progparam"."ppname",
    "progparam"."ppvalue",
    "progparam"."ppdesc"
    from "DBA"."progparam" where "progparam"."ppvalue" is not null and "progparam"."ppvalue" <> '' and "progparam"."ppvalue" <> ' '
    order by "progparam"."ppcode" asc
```

## Tables source

- `progparam`

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
