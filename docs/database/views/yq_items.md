# Vue: yq_items

## Description

Vue de requete sur les articles avec descriptions, categories et parametres.

## SQL

```sql
create view "DBA"."yq_items"
  as select "items"."itcode" as "item_code",
    "items"."itactiv" as "item_activ",
    "items"."itname" as "item_name",
    "items"."itdesc2" as "item_desc",
    "items"."itum" as "item_unit",
    "items"."itcat" as "category",
    "items"."ittyp" as "item_typ",
    "items"."itsale" as "sold",
    "items"."itpol" as "item_policy",
    "items"."itsecur" as "stock_mini",
    "items"."itpsize" as "item_order_size",
    "items"."itpinsize" as "item_increment_size",
    "items"."itpnbdays" as "item_group_days",
    "items"."itleadtime" as "total_leadtime",
    "items"."itavailtime" as "internal_leadtime",
    "items"."itcons" as "consigned",
    "items"."itowner" as "owner_id",
    (select "adresses"."adname" from "DBA"."adresses" where "adresses"."adcode" = "items"."itowner") as "owner_name",
    "items"."itloc" as "default_location",
    "items"."itstdcost" as "budget_cost",
    "items"."itstdsal" as "std_saleprice",
    "items"."itstdpur" as "eval_cost",
    "items"."itstock" as "stock_quantity",
    "items"."italloc" as "alloc_quantity",
    "items"."itweight" as "item_weight",
    "items"."itwistat" as "item_intrastat_weight",
    (select "tvalvl_country"."tclvl" from "DBA"."tvalvl","DBA"."tvalvl_country" where "tvalvl"."ttcode" = "tvalvl_country"."tccode" and "tvalvl"."ttcode" = "items"."ittvalvl") as "TVA_level",
    "items"."itstat1" as "group_id",
    (select "itstat1"."imdesc" from "DBA"."itstat1" where "itstat1"."imcode" = "items"."itstat1") as "group_name",
    "items"."itstat2" as "subgroup_id",
    (select "itstat2"."isdesc" from "DBA"."itstat2"
      where "itstat2"."iscode" = "items"."itstat1" and "itstat2"."iscode2" = "items"."itstat2") as "subgroup_name",
    (select first "imputcpt"."icref" from "DBA"."imputcpt" where "imputcpt"."iccode" = "items"."itcptpur" and "imputcpt"."ictyp" = 'P') as "purchase_imput",
    (select first "imputcpt"."icref" from "DBA"."imputcpt" where "imputcpt"."iccode" = "items"."itcptsal" and "imputcpt"."ictyp" = 'S') as "sales_imput",
    (select first "imputcpt"."icref" from "DBA"."imputcpt" where "imputcpt"."iccode" = "items"."itcptinv" and "imputcpt"."ictyp" = 'I') as "stock_imput",
    (select first "intrastat"."isref" from "DBA"."intrastat" where "intrastat"."iscode" = "items"."itintrastat") as "intrastat",
    "items"."itqtypal" as "quantity_pallet",
    "items"."itvol" as "item_vol",
    "items"."itcreauser" as "created_by",
    "items"."itcreadat" as "created_on",
    "items"."itmodifuser" as "modified_by",
    "items"."itmodifdat" as "modified_on",
    "items"."itean" as "item_EAN",
    "items"."itum" as "item_EAN_um",
    "items"."itean2" as "item_EAN_altern1",
    "items"."itean2conv" as "item_EAN_altern1_conv",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "items"."itean2ref") as "item_EAN_altern1_REFCDB",
    "items"."itumean2" as "item_EAN_altern1_um",
    "items"."itean3" as "item_EAN_altern2",
    "items"."itean3conv" as "item_EAN_altern2_conv",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "items"."itean3ref") as "item_EAN_altern2_REFCDB",
    "items"."itumean3" as "item_EAN_altern2_um"
    from "DBA"."items" where
    "items"."itcode" not like '###%'
```

## Tables source

- `adresses`
- `choices`
- `imputcpt`
- `intrastat`
- `items`
- `itstat1`
- `itstat2`
- `tvalvl`
- `tvalvl_country`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `item_code` | Code identifiant |
| `item_activ` | Article |
| `item_name` | Nom/designation |
| `item_desc` | Description |
| `item_unit` | Article |
| `category` | Category |
| `item_typ` | Article |
| `sold` | Sold |
| `item_policy` | Article |
| `stock_mini` | Stock mini |
| `item_order_size` | Article |
| `item_increment_size` | Article |
| `item_group_days` | Article |
| `total_leadtime` | Total |
| `internal_leadtime` | Internal leadtime |
| `consigned` | Consigned |
| `owner_id` | Owner id |
| `owner_name` | Nom/designation |
| `default_location` | Default location |
| `budget_cost` | Cout |
| `std_saleprice` | Prix |
| `eval_cost` | Cout |
| `stock_quantity` | Stock quantity |
| `alloc_quantity` | Alloc quantity |
| `item_weight` | Article |
| `item_intrastat_weight` | Article |
| `TVA_level` | Tva level |
| `group_id` | Group id |
| `group_name` | Nom/designation |
| `subgroup_id` | Subgroup id |
| `subgroup_name` | Nom/designation |
| `purchase_imput` | Achat |
| `sales_imput` | Vente |
| `stock_imput` | Stock imput |
| `intrastat` | Intrastat |
| `quantity_pallet` | Quantity pallet |
| `item_vol` | Article |
| `created_by` | Created by |
| `created_on` | Created on |
| `modified_by` | Modified by |
| `modified_on` | Modified on |
| `item_EAN` | Article |
| `item_EAN_um` | Article |
| `item_EAN_altern1` | Article |
| `item_EAN_altern1_conv` | Article |
| `item_EAN_altern1_REFCDB` | Article |
| `item_EAN_altern1_um` | Article |
| `item_EAN_altern2` | Article |
| `item_EAN_altern2_conv` | Article |
| `item_EAN_altern2_REFCDB` | Article |
| `item_EAN_altern2_um` | Article |
