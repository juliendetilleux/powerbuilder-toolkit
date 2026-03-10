# Vue: yq_saleclot

## Description

Vue de requete sur les lots de vente (cloture/regroupement de ventes).

## SQL

```sql
create view "DBA"."yq_saleclot"
  as select "clotfinitad"."cdperiod" as "clot_period",
    "clotfinitad"."cditem" as "clot_item",
    "clotfinitad"."cdadid" as "clot_customer",
    "clotfinitad"."cdqty" as "clot_qty",
    "clotfinitad"."cdval" as "clot_val",
    (select "clot2"."cdstdconf"
      from "DBA"."clotfinitad" as "clot2"
      where "clot2"."cdperiod" = "clotfinitad"."cdperiod"
      and "clot2"."cdtyp" = 'I'
      and "clot2"."cditem" = "clotfinitad"."cditem"
      and "clot2"."cdadid" = "clotfinitad"."cdadid") as "stock_eval_cost"
    from "DBA"."clotfinitad"
    where "clotfinitad"."cdtyp" = 'S'
```

## Tables source

- `clotfinitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `clot_period` | Lot |
| `clot_item` | Article |
| `clot_customer` | Client |
| `clot_qty` | Quantite |
| `clot_val` | Lot |
| `clot2` | Lot |
| `stock_eval_cost` | Cout |
