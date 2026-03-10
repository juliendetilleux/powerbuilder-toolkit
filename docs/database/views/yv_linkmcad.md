# Vue: yv_linkmcad

## Description

Vue des liens machines-adresses (associations machine/fournisseur).

## SQL

```sql
create view "DBA"."yv_linkmcad" as
  select "linkmcad"."lkadcode",
    "linkmcad"."lkmccode"
    from "DBA"."linkmcad" union all
  select "adresses"."adcode",'##########'
    from "DBA"."adresses"
    where not "adresses"."adcode" = any(select "lk_2"."lkadcode" from "DBA"."linkmcad" as "lk_2") and
    "adresses"."adcode" not like '#########%'
```

## Tables source

- `adresses`
- `linkmcad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `lk_2` | Lk 2 |
