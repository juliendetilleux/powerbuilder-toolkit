# Vue: yq_mfgsteps

## Description

Vue de requete sur les etapes/operations de fabrication.

## SQL

```sql
create view "DBA"."yq_mfgsteps"( "of_code",
  "item_code",
  "of_qty",
  "of_lastworkcenter",
  "stock_qty" ) as
  select "mfghead"."mhcode","items"."itcode","mfghead"."mhreqqty",
    (select "mfgwcreqs"."mwwccode"
      from "DBA"."mfgwcreqs"
      where "mfgwcreqs"."mwcode" = "mfghead"."mhcode"
      and "mfgwcreqs"."mwline" = (select "max"("mfgwcreqs"."mwline")
        from "DBA"."mfgwcreqs"
        where "mfgwcreqs"."mwfinish" = 'Y'
        and "mfgwcreqs"."mwcode" = "mfghead"."mhcode")),
    (select "sum"("stocks"."stqty")
      from "DBA"."stocks"
      where "stocks"."stitem" = "items"."itcode"
      and "items"."ittyp" = 'M')
    from "DBA"."mfghead","DBA"."items"
    where "mfghead"."mhtype" <> 'G'
    and "mfghead"."mhitem" = "items"."itcode"
    and "mfghead"."mhitem" <> '###########M'
    and "mfghead"."mhstatus" < '8' union all
  select "mfghead"."mhcode","items"."itcode","mfgcoitem"."mcmfgqty",
    (select "mfgwcreqs"."mwwccode"
      from "DBA"."mfgwcreqs"
      where "mfgwcreqs"."mwcode" = "mfghead"."mhcode"
      and "mfgwcreqs"."mwline" = (select "max"("mfgwcreqs"."mwline")
        from "DBA"."mfgwcreqs"
        where "mfgwcreqs"."mwfinish" = 'Y'
        and "mfgwcreqs"."mwcode" = "mfghead"."mhcode")),
    (select "sum"("stocks"."stqty")
      from "DBA"."stocks"
      where "stocks"."stitem" = "items"."itcode"
      and "items"."ittyp" = 'M')
    from "DBA"."mfghead","DBA"."mfgcoitem","DBA"."items"
    where "mfghead"."mhtype" <> 'G'
    and "mfghead"."mhcode" = "mfgcoitem"."mccode"
    and "mfgcoitem"."mcitem" = "items"."itcode"
    and "mfghead"."mhitem" <> '###########M'
    and "mfghead"."mhstatus" < '8' union all
  select "mfghead"."mhcode","items"."itcode","mfgcoitem"."mcreqty",
    (select "mfgwcreqs"."mwwccode"
      from "DBA"."mfgwcreqs"
      where "mfgwcreqs"."mwcode" = "mfghead"."mhcode"
      and "mfgwcreqs"."mwline" = (select "max"("mfgwcreqs"."mwline")
        from "DBA"."mfgwcreqs"
        where "mfgwcreqs"."mwfinish" = 'Y'
        and "mfgwcreqs"."mwcode" = "mfghead"."mhcode")),
    (select "sum"("stocks"."stqty")
      from "DBA"."stocks"
      where "stocks"."stitem" = "items"."itcode"
      and "items"."ittyp" = 'M')
    from "DBA"."mfghead","DBA"."mfgcoitem","DBA"."items"
    where "mfghead"."mhtype" = 'G'
    and "mfghead"."mhcode" = "mfgcoitem"."mccode"
    and "mfgcoitem"."mcitem" = "items"."itcode"
    and "mfghead"."mhitem" <> '###########M'
    and "mfghead"."mhstatus" < '8'
```

## Tables source

- `items`
- `mfgcoitem`
- `mfghead`
- `mfgwcreqs`
- `stocks`

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
