# Vue: yq_mes

## Description

Vue de requete sur les ordres de fabrication (MES - Manufacturing Execution System).

## SQL

```sql
create view "DBA"."yq_mes"( "mfg_number",
  "mfg_status","item_code","item_name","mfg_qty",
  "item_itum","mfg_lot","mfg_blocked","mfg_line","workcenter_code",
  "workcenter_name","workcenter_blocmes","workcenter_blocqty","workcenter_finish","workcenter_qty",
  "workcenter_um","workcenter_umcoeff","workcenter_start","workcenter_starter","test_seq","test_repl","test_desc","test_descext",
  "test_cmnt","test_resultrange","test_valmin","test_valmax","test_um",
  "test_choice","test_thtval","test_result_num","test_result_bool","test_result_string",
  "test_choice_desc","test_choice_rslt","test_type","test_bloc" ) 
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
    "mfgwctests"."wtseq",
    "mfgwctests"."wtidreplicat",
    "mfgwctests"."wtdesc",
    "qctest"."qtnameext",
    "qctest"."qttyp",
    "mfgwctests"."wtcmnt",
    "mfgwctests"."wtrsltrange",
    "mfgwctests"."wtthnval_min",
    "mfgwctests"."wtthnval_max",
    "isnull"("mfgwctests"."wtum",'') as "unites",
    "mfgwctests"."wtchoice",
    "mfgwctests"."wtthtval",
    "mfgwctests"."wtnval",
    "mfgwctests"."wtbval",
    "mfgwctests"."wttval",
    "isnull"((select "qctchoice"."qcdesc" from "DBA"."qctchoice" where("qctchoice"."qcchoiceid" = "mfgwctests"."wtchoice") and("mfgwctests"."wtrsltchoice" = "qctchoice"."qcseq")),'') as "choice_desc",
    "isnull"((select "qctchoice"."qcrslt" from "DBA"."qctchoice" where("qctchoice"."qcchoiceid" = "mfgwctests"."wtchoice") and("mfgwctests"."wtrsltchoice" = "qctchoice"."qcseq")),'') as "choice_rslt",
    "mfgwctests"."wtbloc"
    from "DBA"."mfgwcreqs","DBA"."mfgwctests","DBA"."workcenters","DBA"."qctest","DBA"."items","DBA"."mfghead"
    where("workcenters"."wccode" = "mfgwcreqs"."mwwccode") and(
    "items"."itcode" = "mfghead"."mhitem") and(
    "mfghead"."mhitem" <> '###########M') and(
    "mfghead"."mhcode" = "mfgwcreqs"."mwcode") and(
    "mfgwcreqs"."mwcode" = "mfgwctests"."wtcode") and(
    "mfgwcreqs"."mwline" = "mfgwctests"."wtline") and(
    "mfgwctests"."wtidtest" = "qctest"."qttestid") and(
    "mfghead"."mhstatus" < '9')
```

## Tables source

- `items`
- `mfghead`
- `mfgwcreqs`
- `mfgwctests`
- `qctchoice`
- `qctest`
- `workcenters`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `unites` | Unite |
| `choice_desc` | Description |
| `choice_rslt` | Choice rslt |
