# Vue: Yq_licences

## Description

Vue de requete sur les licences logicielles et modules actives.

## SQL

```sql
create view "DBA"."Yq_licences"
  as select "pclicence"."plpcname","pclicence"."pllicence","pclicence"."pllastconx" from "DBA"."pclicence" where "pclicence"."plactive" = 'Y' order by 3 asc
```

## Tables source

- `pclicence`

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
