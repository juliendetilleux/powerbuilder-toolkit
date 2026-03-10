# Vue: yv_ean_info

## Description

Vue d'information sur les codes EAN/codes-barres des articles.

## SQL

```sql
create view "DBA"."yv_ean_info"( "eancode",
  "eanunit",
  "eanitcode",
  "eanum",
  "eanumconv",
  "eanitum",
  "eancustomer" ) as
  select "items"."itean",(select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "items"."iteanref"),"items"."itcode","items"."itum",1,"items"."itum",'##########' as "owner"
    from "DBA"."items" where "isnull"("items"."itean",'') > '' and "items"."itcode" not like '###%' and "items"."itactiv" = 'Y' union all
  select "items"."itean2",(select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "items"."itean2ref"),"items"."itcode","items"."itumean2","items"."itean2conv","items"."itum",'##########'
    from "DBA"."items" where "isnull"("items"."itean2",'') > '' and "items"."itcode" not like '###%' and "items"."itactiv" = 'Y' union all
  select "items"."itean3",(select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "items"."itean3ref"),"items"."itcode","items"."itumean3","items"."itean3conv","items"."itum",'##########'
    from "DBA"."items" where "isnull"("items"."itean3",'') > '' and "items"."itcode" not like '###%' and "items"."itactiv" = 'Y' union all
  select "linkitad"."lkean",(select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "linkitad"."lkeanref"),"linkitad"."lkitem","linkitad"."lkum","linkitad"."lkumconv","items"."itum","linkitad"."lkadcode"
    from "DBA"."linkitad","DBA"."items" where "linkitad"."lkitem" = "items"."itcode" and "linkitad"."lktyp" = 'S' and "isnull"("linkitad"."lkean",'') > '' and "items"."itactiv" = 'Y' union all
  select "linkitad"."lkean2",(select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "linkitad"."lkeanref2"),"linkitad"."lkitem","linkitad"."lkumean2","linkitad"."lkean2conv","items"."itum","linkitad"."lkadcode"
    from "DBA"."linkitad","DBA"."items" where "linkitad"."lkitem" = "items"."itcode" and "linkitad"."lktyp" = 'S' and "isnull"("linkitad"."lkean2",'') > '' and "items"."itactiv" = 'Y' union all
  select "linkitad"."lkean3",(select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'ITUG' and "choices"."chcode" = "linkitad"."lkeanref3"),"linkitad"."lkitem","linkitad"."lkumean3","linkitad"."lkean3conv","items"."itum","linkitad"."lkadcode"
    from "DBA"."linkitad","DBA"."items" where "linkitad"."lkitem" = "items"."itcode" and "linkitad"."lktyp" = 'S' and "isnull"("linkitad"."lkean3",'') > '' and "items"."itactiv" = 'Y'
```

## Tables source

- `choices`
- `items`
- `linkitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `owner` | Owner |
