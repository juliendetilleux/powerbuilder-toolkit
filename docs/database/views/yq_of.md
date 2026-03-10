# Vue: yq_of

## Description

Vue de requete sur les ordres de fabrication avec details operationnels.

## SQL

```sql
create view //PRODUCTION
  "DBA"."yq_of" as
  select "mfghead"."mhcode" as "of_code",
    "mfghead"."mhitem" as "item_code",
    "salpline"."sldesc" as "item_name",
    "mfghead"."mhreqqty" as "of_reqqty",
    "salpline"."slum" as "item_um",
    "date"("mfghead"."mhreldat") as "of_startdate",
    "date"("mfghead"."mhreqdat") as "of_reqdate",
    "date"("mfghead"."mhmfgdat") as "of_mfgdate",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'MFGS' and "choices"."chcode" = "mfghead"."mhstatus") as "of_status",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'MFGT' and "choices"."chcode" = "mfghead"."mhtype") as "of_typ",
    "mfghead"."mhmfgqty" as "of_mfgqty",'' as "of_bomtyp",
    "mfghead"."mhprint" as "of_print",
    "mfghead"."mhsubc" as "of_subc",
    0 as "of_analy",
    "mfghead"."mhsalhead" as "of_cmd",
    "mfghead"."mhsalline" as "of_cmdline",
    "items"."itactiv" as "item_activ",
    "items"."itstat1" as "item_stat1",
    "items"."itstat2" as "item_stat2",
    "mfghead"."mhfileref" as "filehead_code",
    "mfghead"."mhfileline" as "fileline_code",
    (select "filehead"."fhdesc" from "DBA"."filehead" where "filehead"."fhcode" = "mfghead"."mhfileref") as "filehead_desc",
    (select "fileline"."fldesc" from "DBA"."fileline" where "fileline"."flcode" = "mfghead"."mhfileref" and "fileline"."flline" = "mfghead"."mhfileline") as "fileline_desc",
    (select "filefamily"."ffdesc" from "DBA"."filefamily","DBA"."filehead" where "filehead"."fhcode" = "mfghead"."mhfileref" and "filehead"."fhstat1" = "filefamily"."ffcode") as "filehead_family",
    "date"("mfghead"."mhexpdat") as "of_expdate",
    "date"("mfghead"."mhclosdat") as "of_closdate",
    "mfghead"."mhlotmfg" as "of_lastlot",
    "mfghead"."mhlotprt" as "of_loorgcode",
    "isnull"("mfghead"."mhmalloc",0) as "of_costmatalloc",
    "isnull"("mfghead"."mhmreal",0) as "of_costmatuse",
    "isnull"("mfghead"."mhlalloc",0) as "of_costlaballoc",
    "isnull"("mfghead"."mhlreal",0) as "of_costlabuse",
    "isnull"("mfghead"."mhealloc",0) as "of_costeqalloc",
    "isnull"("mfghead"."mhereal",0) as "of_costeqreal",
    "isnull"("mfghead"."mhmfgcost",0) as "of_mfgcost"
    from "DBA"."mfghead"
      ,"DBA"."salpline"
      ,"DBA"."items"
    where("salpline"."slcode" = "mfghead"."mhsalhead") and(
    "salpline"."slline" = "mfghead"."mhsalline") and(
    "items"."itcode" = "mfghead"."mhitem") and(
    "mfghead"."mhitem" = '###########M') union all
  select "mfghead"."mhcode",
    "mfghead"."mhitem",
    "items"."itname",
    "mfghead"."mhreqqty",
    "items"."itum",
    "date"("mfghead"."mhreldat") as "of_startdate",
    "date"("mfghead"."mhreqdat") as "of_reqdate",
    "date"("mfghead"."mhmfgdat") as "of_mfgdate",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'MFGS' and "choices"."chcode" = "mfghead"."mhstatus") as "of_status",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'MFGT' and "choices"."chcode" = "mfghead"."mhtype") as "of_typ",
    "mfghead"."mhmfgqty",
    "mfghead"."mhbomtyp",
    "mfghead"."mhprint",
    "mfghead"."mhsubc",
    "mfghead"."mhqcip",
    "mfghead"."mhsalhead",
    "mfghead"."mhsalline",
    "items"."itactiv",
    "items"."itstat1",
    "items"."itstat2",
    "mfghead"."mhfileref" as "filehead_code",
    "mfghead"."mhfileline" as "fileline_code",
    (select "filehead"."fhdesc" from "DBA"."filehead" where "filehead"."fhcode" = "mfghead"."mhfileref") as "filehead_desc",
    (select "fileline"."fldesc" from "DBA"."fileline" where "fileline"."flcode" = "mfghead"."mhfileref" and "fileline"."flline" = "mfghead"."mhfileline") as "fileline_desc",
    (select "filefamily"."ffdesc" from "DBA"."filefamily","DBA"."filehead" where "filehead"."fhcode" = "mfghead"."mhfileref" and "filehead"."fhstat1" = "filefamily"."ffcode") as "filehead_family",
    "date"("mfghead"."mhexpdat") as "of_expdate",
    "date"("mfghead"."mhclosdat") as "of_closdate",
    "mfghead"."mhlotmfg" as "of_lastlot",
    "mfghead"."mhlotprt" as "of_loorgcode",
    "isnull"("mfghead"."mhmalloc",0) as "of_costmatalloc",
    "isnull"("mfghead"."mhmreal",0) as "of_costmatuse",
    "isnull"("mfghead"."mhlalloc",0) as "of_costlaballoc",
    "isnull"("mfghead"."mhlreal",0) as "of_costlabuse",
    "isnull"("mfghead"."mhealloc",0) as "of_costeqalloc",
    "isnull"("mfghead"."mhereal",0) as "of_costeqreal",
    "isnull"("mfghead"."mhmfgcost",0) as "of_mfgcost"
    from "DBA"."mfghead"
      ,"DBA"."items"
    where("items"."itcode" = "mfghead"."mhitem") and(
    "mfghead"."mhitem" <> '###########M') and(
    "mfghead"."mhtype" <> 'G') union all
  select "mfghead"."mhcode",
    "mfgcoitem"."mcitem",
    "items"."itname",
    "mfgcoitem"."mcreqty",
    "items"."itum",
    "date"("mfghead"."mhreldat") as "of_startdate",
    "date"("mfghead"."mhreqdat") as "of_reqdate",
    "date"("mfghead"."mhmfgdat") as "of_mfgdate",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'MFGS' and "choices"."chcode" = "mfghead"."mhstatus") as "of_status",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'MFGT' and "choices"."chcode" = "mfghead"."mhtype") as "of_typ",
    "mfgcoitem"."mcmfgqty",
    "mfghead"."mhbomtyp",
    "mfghead"."mhprint",
    "mfghead"."mhsubc",
    "mfghead"."mhqcip",
    "mfghead"."mhsalhead",
    "mfghead"."mhsalline",
    "items"."itactiv",
    "items"."itstat1",
    "items"."itstat2",
    "mfghead"."mhfileref" as "filehead_code",
    "mfghead"."mhfileline" as "fileline_code",
    (select "filehead"."fhdesc" from "DBA"."filehead" where "filehead"."fhcode" = "mfghead"."mhfileref") as "filehead_desc",
    (select "fileline"."fldesc" from "DBA"."fileline" where "fileline"."flcode" = "mfghead"."mhfileref" and "fileline"."flline" = "mfghead"."mhfileline") as "fileline_desc",
    (select "filefamily"."ffdesc" from "DBA"."filefamily","DBA"."filehead" where "filehead"."fhcode" = "mfghead"."mhfileref" and "filehead"."fhstat1" = "filefamily"."ffcode") as "filehead_family",
    "date"("mfgcoitem"."mcexpdat") as "of_expdate",
    "date"("mfghead"."mhclosdat") as "of_closdate",
    "mfgcoitem"."mclotmfg" as "of_lastlot",
    "mfgcoitem"."mclotprt" as "of_loorgcode",
    "isnull"("mfghead"."mhmalloc",0) as "of_costmatalloc",
    "isnull"("mfghead"."mhmreal",0) as "of_costmatuse",
    "isnull"("mfghead"."mhlalloc",0) as "of_costlaballoc",
    "isnull"("mfghead"."mhlreal",0) as "of_costlabuse",
    "isnull"("mfghead"."mhealloc",0) as "of_costeqalloc",
    "isnull"("mfghead"."mhereal",0) as "of_costeqreal",
    "isnull"("mfgcoitem"."mcmfgcost",0) as "of_mfgcost"
    from "DBA"."mfgcoitem"
      ,"DBA"."mfghead"
      ,"DBA"."items"
    where("mfghead"."mhcode" = "mfgcoitem"."mccode") and(
    "mfgcoitem"."mcitem" = "items"."itcode") and(
    "mfghead"."mhitem" <> '###########M') and(
    "mfghead"."mhtype" = 'G')
```

## Tables source

- `choices`
- `filefamily`
- `filehead`
- `fileline`
- `items`
- `mfgcoitem`
- `mfghead`
- `salpline`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `of_code` | Code identifiant |
| `item_code` | Code identifiant |
| `item_name` | Nom/designation |
| `of_reqqty` | Quantite |
| `item_um` | Article |
| `of_startdate` | Date |
| `of_reqdate` | Date |
| `of_mfgdate` | Date |
| `of_status` | Statut |
| `of_typ` | Of typ |
| `of_mfgqty` | Quantite |
| `of_bomtyp` | Of bomtyp |
| `of_print` | Of print |
| `of_subc` | Of subc |
| `of_analy` | Of analy |
| `of_cmd` | Of cmd |
| `of_cmdline` | Numero de ligne |
| `item_activ` | Article |
| `item_stat1` | Article |
| `item_stat2` | Article |
| `filehead_code` | Code identifiant |
| `fileline_code` | Code identifiant |
| `filehead_desc` | Description |
| `fileline_desc` | Description |
| `filehead_family` | Filehead family |
| `of_expdate` | Date |
| `of_closdate` | Date |
| `of_lastlot` | Lot |
| `of_loorgcode` | Code identifiant |
| `of_costmatalloc` | Cout |
| `of_costmatuse` | Cout |
| `of_costlaballoc` | Cout |
| `of_costlabuse` | Cout |
| `of_costeqalloc` | Cout |
| `of_costeqreal` | Cout |
| `of_mfgcost` | Cout |
