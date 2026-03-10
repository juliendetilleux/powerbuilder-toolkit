# Vue: yv_sal_prev_offer_mproj

## Description

Vue previsionnelle des offres commerciales - multi-projets.

## SQL

```sql
create view "DBA"."yv_sal_prev_offer_mproj"
  as select '','',
    "adresses"."adcode",
    "adresses"."adname",
    "choic1"."clname"+' / '+"choic2"."clname" as "imdesc",'20' as "tri",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24p"
    from "DBA"."adresses"
      ,"DBA"."choiceline" as "choic1"
      ,"DBA"."choiceline" as "choic2"
    where "choic1"."clcode" = 'PGR1'
    and "choic2"."clcode" = 'PGR2'
    and "adresses"."adactiv" = 'Y' and(exists
    (select first "projhead"."phcode",
      "projhead"."phstatus",
      "projhead"."phactiv",
      "projhead"."phdesc",
      "projhead"."phdesc2",
      "projhead"."phadid",
      "projhead"."phstid",
      "projhead"."phdatcrea",
      "projhead"."phdatreq",
      "projhead"."phreqtyp",
      "projhead"."phmastr",
      "projhead"."phuplab",
      "projhead"."phupmat",
      "projhead"."phupoth",
      "projhead"."phupglob",
      "projhead"."phinvacc",
      "projhead"."phstep",
      "projhead"."phtype",
      "projhead"."phcurr",
      "projhead"."phrate",
      "projhead"."phrist",
      "projhead"."phadcontact",
      "projhead"."phexpdate",
      "projhead"."phfilehead",
      "projhead"."phfileline",
      "projhead"."phofferact",
      "projhead"."phflwofferact",
      "projhead"."phcustref",
      "projhead"."phlang",
      "projhead"."phdlvt",
      "projhead"."phdlvtplace",
      "projhead"."phcustpay",
      "projhead"."phdocid",
      "projhead"."phsuccessper",
      "projhead"."phfrcstdate",
      "projhead"."phfam1",
      "projhead"."phfam2",
      "projhead"."phsalesman",
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
      from "DBA"."adrsactions" left outer join "DBA"."projhead"
        on "projhead"."phflwofferact" = "adrsactions"."aacode"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100) > 0
      and "isnull"("projhead"."phfam1",0) = "choic1"."clline"
      and "isnull"("projhead"."phfam2",0) = "choic2"."clline"))
```

## Tables source

- `adresses`
- `adrsactions`
- `choiceline`
- `projhead`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `imdesc` | Description |
| `tri` | Tri |
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
| `choic1` | Choic1 |
| `choic2` | Choic2 |
