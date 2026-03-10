# Vue: yq_cmdsales

## Description

Vue de requete sur les commandes de vente avec details lignes, articles et montants.

## SQL

```sql
create view "DBA"."yq_cmdsales"( "salorder","salorderline","custref","curr","status","datcrea","datship","datreq","datreal","sample","qty_cust","qty_pmix","qty_alloc","qty_real",
  "unit_cust","coef_conv","rist","rist_qtysale","orig_price","price_orval","price_stdval","price_unitprice","price_baseprice","price_valsddisc","price_origval","price_salval",
  "seller_name","customer_code","customer_name","customer_adres1","customer_adres2","customer_zip","customer_location","customer_country","customer_zone_id","custome_zone_name","customer_group","customer_group_name","salesman","item_code","item_name","item_group_id","item_group_name","item_subgroup_id","item_subgroup_name","invoiced_qty","item_unit","shipto_name","project_id","project_name","project_family","subproject_id","subproject_name","customer_activity","customer_source","customer_type","cust_uf00","cust_uf01","cust_uf02","cust_uf03","cust_uf04","cust_uf05","cust_uf06","cust_uf07","cust_uf08","cust_uf09","cust_uf10","cust_uf11","cust_uf12","cust_uf13","cust_uf14","cust_uf15","cust_uf16","cust_uf17","cust_uf18","cust_uf19","cust_uf20","cust_uf21","cust_uf22","cust_uf23","cust_uf24","cust_uf25","cust_uf26","cust_uf27","cust_uf28","cust_uf29","cost","theorical_cost","item_netweight","item_grossweight","stat_unit","stat_convers" ) 
  as select "salline"."slcode" as "salorder",
    "salline"."slline" as "salorderline",
    "salhead"."shcustref",
    "salhead"."shcurr",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chcode" = "salline"."slstatus" and "choices"."chtype" = 'CUSS') as "status",
    "salline"."sldatcrea",
    "salline"."sldatship",
    "salline"."sldatreq",
    "salline"."sldatreal",
    "isnull"("salline"."slsample",'N') as "sample",
    "salline"."slqtyord",
    "salline"."slqtyreq",
    "salline"."slqtyalloc",
    "salline"."slqtyreal",
    "salline"."sluomord",
    "salline"."sluomconv",
    "salline"."slrist",
    "salline"."slsddisc",
    "salline"."slprorig",
    "salline"."slorval",
    "salline"."slstdval",
    "salline"."slunitprice",
    "salline"."slbaseprice",
    "salline"."slvalsddisc",
    "salline"."slorigval",
    "salline"."slsalval",
    "isnull"((select "adresses"."adname"
      from "DBA"."linkmcad","DBA"."adresses"
      where "adresses"."adcode" = "linkmcad"."lkmccode"
      and "linkmcad"."lkadcode" = "salhead"."shcust"),(select "adresses"."adname" from "DBA"."adresses" where "adresses"."adcode" = '##########')) as "seller_name",
    "salhead"."shcust" as "customer_code",
    "adresses"."adname" as "customer_name",
    "adresses"."adadr1" as "customer_adres1",
    "adresses"."adadr2" as "customer_adres2",
    "adresses"."adzip" as "customer_zip",
    "adresses"."adloc" as "customer_location",
    "adresses"."adcountrid" as "customer_country",
    "adresses"."adcustzone" as "customer_zone_id",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADCZ' and "choiceline"."clline" = "adresses"."adcustzone") as "custome_zone_name",
    "adresses"."adgrcust" as "customer_group",
    (select "adresgroup"."agdesc" from "DBA"."adresgroup" where "adresgroup"."agcode" = "adresses"."adgrcust") as "customer_group_name",
    "salhead"."shsalesman" as "salesman",
    "salline"."slitem" as "item_code",
    "items"."itname" as "item_name",
    "items"."itstat1" as "item_group_id",
    (select "itstat1"."imdesc" from "DBA"."itstat1" where "itstat1"."imcode" = "item_group_id") as "item_group_name",
    (select "items"."itstat2" from "DBA"."items" where "items"."itcode" = "salline"."slitem") as "item_subgroup_id",
    (select "itstat2"."isdesc" from "DBA"."itstat2" where "itstat2"."iscode" = "item_group_id" and "itstat2"."iscode2" = "item_subgroup_id") as "item_subgroup_name",
    "salline"."slqtyinv" as "invoiced_qty",
    "items"."itum" as "item_unit",
    "isnull"((select "shipto"."stdesc"
      from "DBA"."shipto"
      where "shipto"."stcode" = "salhead"."shcust"
      and "shipto"."stseq" = "salline"."slshipto"),'') as "shipto_name",
    "salline"."slfileref" as "project_id",
    (select "filehead"."fhdesc" from "DBA"."filehead" where "filehead"."fhcode" = "salline"."slfileref") as "project_name",
    (select "filefamily"."ffdesc" from "DBA"."filehead","DBA"."filefamily" where "filehead"."fhcode" = "salline"."slfileref" and "filehead"."fhstat1" = "filefamily"."ffcode") as "project_family",
    "salline"."slfileline" as "subproject_id",
    (select "fileline"."fldesc" from "DBA"."fileline" where "fileline"."flcode" = "salline"."slfileref" and "fileline"."flline" = "salline"."slfileline") as "subproject_name",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADTA' and "choiceline"."clline" = "adresses"."adactivite") as "customer_activity",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADSO' and "choiceline"."clline" = "adresses"."adsource") as "customer_source",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADTP' and "choiceline"."clline" = "adresses"."adtype") as "customer_type",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU0' and "choiceline"."clline" = "adresses"."adcrmuf00") as "cust_uf00",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU1' and "choiceline"."clline" = "adresses"."adcrmuf01") as "cust_uf01",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU2' and "choiceline"."clline" = "adresses"."adcrmuf02") as "cust_uf02",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU3' and "choiceline"."clline" = "adresses"."adcrmuf03") as "cust_uf03",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU4' and "choiceline"."clline" = "adresses"."adcrmuf04") as "cust_uf04",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU5' and "choiceline"."clline" = "adresses"."adcrmuf05") as "cust_uf05",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU6' and "choiceline"."clline" = "adresses"."adcrmuf06") as "cust_uf06",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU7' and "choiceline"."clline" = "adresses"."adcrmuf07") as "cust_uf07",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU8' and "choiceline"."clline" = "adresses"."adcrmuf08") as "cust_uf08",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU9' and "choiceline"."clline" = "adresses"."adcrmuf09") as "cust_uf09",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUA' and "choiceline"."clline" = "adresses"."adcrmuf10") as "cust_uf10",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUB' and "choiceline"."clline" = "adresses"."adcrmuf11") as "cust_uf11",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUC' and "choiceline"."clline" = "adresses"."adcrmuf12") as "cust_uf12",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUD' and "choiceline"."clline" = "adresses"."adcrmuf13") as "cust_uf13",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUE' and "choiceline"."clline" = "adresses"."adcrmuf14") as "cust_uf14",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUF' and "choiceline"."clline" = "adresses"."adcrmuf15") as "cust_uf15",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUG' and "choiceline"."clline" = "adresses"."adcrmuf16") as "cust_uf16",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUH' and "choiceline"."clline" = "adresses"."adcrmuf17") as "cust_uf17",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUI' and "choiceline"."clline" = "adresses"."adcrmuf18") as "cust_uf18",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUJ' and "choiceline"."clline" = "adresses"."adcrmuf19") as "cust_uf19",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUK' and "choiceline"."clline" = "adresses"."adcrmuf20") as "cust_uf20",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUL' and "choiceline"."clline" = "adresses"."adcrmuf21") as "cust_uf21",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUM' and "choiceline"."clline" = "adresses"."adcrmuf22") as "cust_uf22",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUN' and "choiceline"."clline" = "adresses"."adcrmuf23") as "cust_uf23",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUO' and "choiceline"."clline" = "adresses"."adcrmuf24") as "cust_uf24",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUP' and "choiceline"."clline" = "adresses"."adcrmuf25") as "cust_uf25",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUQ' and "choiceline"."clline" = "adresses"."adcrmuf26") as "cust_uf26",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUR' and "choiceline"."clline" = "adresses"."adcrmuf27") as "cust_uf27",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUS' and "choiceline"."clline" = "adresses"."adcrmuf28") as "cust_uf28",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUT' and "choiceline"."clline" = "adresses"."adcrmuf29") as "cust_uf29",
    "items"."itstdpur" as "cost",
    (select "isnull"("bomhead"."bhramval",0)+"isnull"("bomhead"."bhmacval",0)+"isnull"("bomhead"."bhlabval",0)+"isnull"("bomhead"."bhxtrval",0)
      from "DBA"."bomhead"
      where "bomhead"."bhcode" = "salline"."slitem" and "bomhead"."bhtype" = '0') as "theorical_cost",
    "isnull"("items"."itwistat",0) as "item_netweight",
    "isnull"("items"."itweight",0) as "item_grossweight",
    "isnull"("items"."itumusr",'') as "stat_unit",
    "isnull"("items"."itconvusr",0) as "stat_convers"
    from "DBA"."salline"
      ,"DBA"."salhead"
      ,"DBA"."adresses"
      ,"DBA"."items"
    where "salhead"."shcode" = "salline"."slcode"
    and "salline"."slitem" = "items"."itcode"
    and "adresses"."adcode" = "salhead"."shcust"
```

## Tables source

- `adresgroup`
- `adresses`
- `bomhead`
- `choiceline`
- `choices`
- `filefamily`
- `filehead`
- `fileline`
- `items`
- `itstat1`
- `itstat2`
- `linkmcad`
- `salhead`
- `salline`
- `shipto`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `salorder` | Vente |
| `salorderline` | Numero de ligne |
| `status` | Statut |
| `sample` | Sample |
| `seller_name` | Nom/designation |
| `customer_code` | Code identifiant |
| `customer_name` | Nom/designation |
| `customer_adres1` | Client |
| `customer_adres2` | Client |
| `customer_zip` | Client |
| `customer_location` | Client |
| `customer_country` | Client |
| `customer_zone_id` | Client |
| `custome_zone_name` | Nom/designation |
| `customer_group` | Client |
| `customer_group_name` | Nom/designation |
| `salesman` | Vente |
| `item_code` | Code identifiant |
| `item_name` | Nom/designation |
| `item_group_id` | Article |
| `item_group_name` | Nom/designation |
| `item_subgroup_id` | Article |
| `item_subgroup_name` | Nom/designation |
| `invoiced_qty` | Quantite |
| `item_unit` | Article |
| `shipto_name` | Nom/designation |
| `project_id` | Project id |
| `project_name` | Nom/designation |
| `project_family` | Project family |
| `subproject_id` | Subproject id |
| `subproject_name` | Nom/designation |
| `customer_activity` | Client |
| `customer_source` | Client |
| `customer_type` | Client |
| `cust_uf00` | Client |
| `cust_uf01` | Client |
| `cust_uf02` | Client |
| `cust_uf03` | Client |
| `cust_uf04` | Client |
| `cust_uf05` | Client |
| `cust_uf06` | Client |
| `cust_uf07` | Client |
| `cust_uf08` | Client |
| `cust_uf09` | Client |
| `cust_uf10` | Client |
| `cust_uf11` | Client |
| `cust_uf12` | Client |
| `cust_uf13` | Client |
| `cust_uf14` | Client |
| `cust_uf15` | Client |
| `cust_uf16` | Client |
| `cust_uf17` | Client |
| `cust_uf18` | Client |
| `cust_uf19` | Client |
| `cust_uf20` | Client |
| `cust_uf21` | Client |
| `cust_uf22` | Client |
| `cust_uf23` | Client |
| `cust_uf24` | Client |
| `cust_uf25` | Client |
| `cust_uf26` | Client |
| `cust_uf27` | Client |
| `cust_uf28` | Client |
| `cust_uf29` | Client |
| `cost` | Cout |
| `theorical_cost` | Cout |
| `item_netweight` | Article |
| `item_grossweight` | Article |
| `stat_unit` | Unite |
| `stat_convers` | Stat convers |
