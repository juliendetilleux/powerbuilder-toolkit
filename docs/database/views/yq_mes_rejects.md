# Vue: yq_mes_rejects

## Description

Vue de requete sur les rebuts/rejets de fabrication.

## SQL

```sql
create view "DBA"."yq_mes_rejects"( "mfg_number",
  "mfg_status","item_code","item_name","mfg_qty",
  "item_itum","mfg_lot","mfg_blocked","mfg_line","workcenter_code",
  "workcenter_name","workcenter_blocmes","workcenter_blocqty","workcenter_finish","workcenter_qty",
  "workcenter_um","workcenter_umcoeff","workcenter_start","workcenter_starter",
  "reject_type","reject_name","reject_qty","reject_um",
  "reject_coeff" ) 
  as select distinct "mfgwcreqs"."mwcode",
    "mfghead"."mhstatus",
    "items"."itcode",
    "items"."itname",
    "mfghead"."mhmfgqty",
    "items"."itum",
    "mfghead"."mhlotmfg",
    "isnull"("mfghead"."mhblocked",'N'),
    "mfgwcreqs"."mwline",
    "mfgwcreqs"."mwwccode",
    "workcenters"."wcname",
    "isnull"("mfgwcreqs"."mwblocmes",'N'),
    "isnull"("mfgwcreqs"."mwblocqty",'N'),
    "isnull"("mfgwcreqs"."mwfinish",'N'),
    "mfgwcreqs"."mwqty",
    "mfgwcreqs"."mwum",
    "mfgwcreqs"."mwcoeff",
    "mfgwcreqs"."mwstartdatestep",
    "mfgwcreqs"."mwstartuserstep",
    "mfgwcreject"."mrtype",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'RTRJ' and "choiceline"."clline" = "mfgwcreject"."mrtype"),
    "mfgwcreject"."mrqty",
    "mfgwcreject"."mrum",
    "mfgwcreject"."mrcoeff"
    from "DBA"."mfgwcreqs","DBA"."mfgwcreject","DBA"."workcenters","DBA"."items","DBA"."mfghead"
    where("workcenters"."wccode" = "mfgwcreqs"."mwwccode") and(
    "items"."itcode" = "mfghead"."mhitem") and(
    "mfghead"."mhitem" <> '###########M') and(
    "mfghead"."mhcode" = "mfgwcreqs"."mwcode") and(
    "mfgwcreqs"."mwcode" = "mfgwcreject"."mrcode") and(
    "mfgwcreqs"."mwline" = "mfgwcreject"."mrline") and(
    "mfghead"."mhstatus" < '9')
```

## Tables source

- `choiceline`
- `items`
- `mfghead`
- `mfgwcreject`
- `mfgwcreqs`
- `workcenters`

## Colonnes

| Colonne | Description |
|---------|-------------|
| *(pas d'alias identifies)* | - |
