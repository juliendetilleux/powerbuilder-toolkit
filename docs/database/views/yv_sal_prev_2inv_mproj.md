# Vue: yv_sal_prev_2inv_mproj

## Description

Vue previsionnelle des ventes a facturer - multi-projets.

## SQL

```sql
create view "DBA"."yv_sal_prev_2inv_mproj"
  as select '','',
    "adresses"."adcode",
    "adresses"."adname",
    "itstat1"."imdesc",'10',
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223",
    (select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24p"
    from "DBA"."adresses"
      ,"DBA"."itstat1"
      ,"DBA"."itstat2"
    where "itstat1"."imcode" = "itstat2"."iscode"
    and "adresses"."adactiv" = 'Y' and(exists
    (select first "items"."itcode",
      "items"."itname",
      "items"."itactiv",
      "items"."itcrit1","items"."itcrit2","items"."itcrit3",
      "items"."itum",
      "items"."ittyp",
      "items"."itcons","items"."itsale","items"."itlot",
      "items"."itqc","items"."itval",
      "items"."itloc",
      "items"."itpol",
      "items"."itpsize",
      "items"."itpinsize",
      "items"."itpinnb","items"."itpnbdays",
      "items"."itsecur",
      "items"."itleadtime",
      "items"."itavailtime",
      "items"."itbomlvl",
      "items"."itbom",
      "items"."itstdcost",
      "items"."itstdsal",
      "items"."itstdpur",
      "items"."itstock",
      "items"."italloc","items"."itwip",
      "items"."itfrozen",
      "items"."itdefaultlot","items"."itctrl",
      "items"."itsernum",
      "items"."itlastissue",
      "items"."itweight",
      "items"."ittvalvl",
      "items"."itintrastat",
      "items"."itcptpur",
      "items"."itcptsal",
      "items"."itstat1",
      "items"."itstat2",
      "items"."itconvusr",
      "items"."itumusr",
      "items"."itplgroup",
      "items"."itean",
      "items"."itcptanal",
      "items"."itqtypal",
      "items"."itdesc2",
      "items"."itwistat",
      "items"."itsubstpl",
      "items"."itsubstit",
      "items"."itorcountry",
      "items"."itmfggroup",
      "items"."itcat",
      "items"."itowner",
      "items"."itvol",
      "items"."itcreauser",
      "items"."itcreadat",
      "items"."itmodifuser",
      "items"."itmodifdat",
      "items"."itbcqty",
      "items"."itbcauto",
      "items"."itetigro",
      "items"."itetipal",
      "items"."itstkavg",
      "items"."itstkused",
      "items"."itstkrot",
      "items"."itean2",
      "items"."itean2conv",
      "items"."itean3",
      "items"."itean3conv",
      "items"."iteanref",
      "items"."itean2ref",
      "items"."itean3ref",
      "items"."itetiitem",
      "items"."itcptinv",
      "items"."ittransfered",
      "items"."itif2trf",
      "items"."itrcnopur",
      "items"."itbascost",
      "items"."itmfgxtrcost",
      "items"."itwc",
      "items"."itpurxtrcost",
      "items"."itclotctrl",
      "items"."itclotref",
      "items"."itfinalprice",
      "items"."italttyp",
      "items"."itlblproc",
      "items"."ittare",
      "items"."itsalghost",
      "items"."itcommission",
      "adrsactions"."aacode",
      "adrsactions"."aaadrid",
      "adrsactions"."aacontactid",
      "adrsactions"."aaaction",
      "adrsactions"."aacreator",
      "adrsactions"."aarespons",
      "adrsactions"."aaactiondate",
      "adrsactions"."aalimitdate",
      "adrsactions"."aatiming",
      "adrsactions"."aaparcode",
      "adrsactions"."aastatus",
      "adrsactions"."aacomment",
      "adrsactions"."aadesc",
      "adrsactions"."aacreadate",
      "adrsactions"."aaprojet",
      "adrsactions"."aaread",
      "adrsactions"."aareaddate",
      "adrsactions"."aastsdat",
      "adrsactions"."aamoddat",
      "adrsactions"."aamoduser",
      "adrsactions"."aafileref",
      "adrsactions"."aawccost",
      "adrsactions"."aauscost",
      "adrsactions"."aarealcost",
      "adrsactions"."aainvstatus",
      "adrsactions"."aafileline",
      "adrsactions"."aarealtiming",
      "adrsactions"."aaextratiming",
      "adrsactions"."aasalorder",
      "adrsactions"."aasalline",
      "adrsactions"."aainvoicehead",
      "adrsactions"."aainvoiceline",
      "adrsactions"."aawfhead",
      "adrsactions"."aawfline",
      "adrsactions"."aawfsuccess",
      "adrsactions"."aawffinish",
      "adrsactions"."aagroup",
      "adrsactions"."aaquoteval",
      "adrsactions"."aafarunid",
      "adrsactions"."aaitem",
      "adrsactions"."aapriority",
      "adrsactions"."aapersuccess",
      "adrsactions"."aauserddlb",
      "adrsactions"."aafrcstdate",
      "adrsactions"."aadocref"
      from "DBA"."adrsactions" left outer join "DBA"."items"
        on "items"."itcode" = "adrsactions"."aaitem"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaquoteval" > 0
      and "isnull"("items"."itstat1",'  ') = "itstat1"."imcode"
      and "isnull"("items"."itstat2",'  ') = "itstat2"."iscode2"))
```

## Tables source

- `adresses`
- `adrsactions`
- `items`
- `itstat1`
- `itstat2`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `m0` | M0 |
| `m1` | M1 |
| `m2` | M2 |
| `m3` | M3 |
| `m4` | M4 |
| `m5` | M5 |
| `m6` | M6 |
| `m7` | M7 |
| `m8` | M8 |
| `m9` | M9 |
| `m10` | M10 |
| `m11` | M11 |
| `m1223` | M1223 |
| `m24p` | M24p |
