# Vue: Yq_modules

## Description

Vue de requete sur les modules applicatifs disponibles.

## SQL

```sql
create view "DBA"."Yq_modules"
  as select "modules"."mddesc","modules"."mdtype","modules"."mdkey" from "DBA"."modules" where "modules"."mdactiv" = 'Y' order by "modules"."mdcode" asc
```

## Tables source

- `modules`

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
