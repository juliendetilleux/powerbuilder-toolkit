# Vue: yq_MethodCostStructure

## Description

Vue de requete sur la structure des couts des gammes de fabrication.

## SQL

```sql
create view "DBA"."yq_MethodCostStructure" as
  select "items"."itcode" as "bomitem_code",
    "items"."itname" as "bomitem_name",
    "methodeview"."mvbomtype" as "bom_typ",
    "methodeview"."mvtype" as "line_typ",
    "items"."itwistat" as "bomitem_netweight",
    "items"."itum" as "bomitem_um",
    "items"."itumusr" as "bomitem_stat_unit",
    "items"."itconvusr" as "bomitem_stat_conv",
    "methodeview"."mvcode" as "line_code1",
    "methodeview"."mvcode2" as "line_code2",
    "mp"."itum" as "line_um",
    cast((select "itstat1"."imdesc" from "DBA"."itstat1" where "itstat1"."imcode" = "mp"."itstat1") as char(30)) as "line_group1",
    (select "itstat2"."isdesc" from "DBA"."itstat2" where "itstat2"."iscode" = "mp"."itstat1" and "itstat2"."iscode2" = "mp"."itstat2") as "line_group2",
    "methodeview"."mvqty" as "line_qty",
    "methodeview"."mvqty"*"methodeview"."mvvalue" as "line_value",
    (select "parameters"."pmdval" from "DBA"."parameters" where "parameters"."pmcode" = 'TMMETHVW') as "valuation_date",
    "mp"."itname" as "line_name"
    from "DBA"."methodeview"
      ,"DBA"."items"
      ,"DBA"."items" as "mp"
    where "methodeview"."mvtype" = 'I'
    and "methodeview"."mvitem" = "items"."itcode"
    and "methodeview"."mvcode" = "mp"."itcode"
    and "items"."itactiv" = 'Y' union all
  select "items"."itcode" as "bomitem_code",
    "items"."itname" as "bomitem_name",
    "methodeview"."mvbomtype" as "bom_typ",
    "methodeview"."mvtype" as "line_typ",
    "items"."itwistat" as "bomitem_netweight",
    "items"."itum" as "bomitem_um",
    "items"."itumusr" as "bomitem_stat_unit",
    "items"."itconvusr" as "bomitem_stat_conv",
    "methodeview"."mvcode" as "line_code1",
    "methodeview"."mvcode2" as "line_code2",'' as "line_um",
    "methodeview"."mvcode" as "line_group1",'' as "line_group2",
    "methodeview"."mvqty" as "line_qty",
    "methodeview"."mvqty"*"methodeview"."mvvalue" as "line_value",
    (select "parameters"."pmdval" from "DBA"."parameters" where "parameters"."pmcode" = 'TMMETHVW') as "value_at_time",
    "line_group1" as "line_name"
    from "DBA"."methodeview"
      ,"DBA"."items"
    where "methodeview"."mvtype" = 'X'
    and "methodeview"."mvitem" = "items"."itcode"
    and "items"."itactiv" = 'Y' union all
  select "items"."itcode" as "bomitem_code",
    "items"."itname" as "bomitem_name",
    "methodeview"."mvbomtype" as "bom_typ",
    "methodeview"."mvtype" as "line_typ",
    "items"."itwistat" as "bomitem_netweight",
    "items"."itum" as "bomitem_um",
    "items"."itumusr" as "bomitem_stat_unit",
    "items"."itconvusr" as "bomitem_stat_conv",
    "methodeview"."mvcode" as "line_code1",
    "methodeview"."mvcode2" as "line_code2",'H' as "line_um",
    (select "workcenters"."wcname" from "DBA"."workcenters" where "workcenters"."wccode" = "methodeview"."mvcode") as "line_group1",
    (select "workoper"."woopdesc" from "DBA"."workoper" where "workoper"."wotyp" = '1' and "workoper"."wowcid" = "methodeview"."mvcode" and "workoper"."woopid" = "methodeview"."mvcode2") as "line_group2",
    "methodeview"."mvqty" as "line_qty",
    "methodeview"."mvqty"*"methodeview"."mvvalue" as "line_value",
    (select "parameters"."pmdval" from "DBA"."parameters" where "parameters"."pmcode" = 'TMMETHVW') as "value_at_time",
    "line_group1" as "line_name"
    from "DBA"."methodeview"
      ,"DBA"."items"
    where "methodeview"."mvtype" in( 'O','M' ) 
    and "methodeview"."mvitem" = "items"."itcode"
    and "items"."itactiv" = 'Y'
```

## Tables source

- `items`
- `itstat1`
- `itstat2`
- `methodeview`
- `parameters`
- `workcenters`
- `workoper`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `bomitem_code` | Code identifiant |
| `bomitem_name` | Nom/designation |
| `bom_typ` | Bom typ |
| `line_typ` | Numero de ligne |
| `bomitem_netweight` | Article |
| `bomitem_um` | Article |
| `bomitem_stat_unit` | Article |
| `bomitem_stat_conv` | Article |
| `line_code1` | Code identifiant |
| `line_code2` | Code identifiant |
| `line_um` | Numero de ligne |
| `line_group1` | Numero de ligne |
| `line_group2` | Numero de ligne |
| `line_qty` | Quantite |
| `line_value` | Numero de ligne |
| `valuation_date` | Date |
| `line_name` | Nom/designation |
| `mp` | Mp |
| `value_at_time` | Value at time |
