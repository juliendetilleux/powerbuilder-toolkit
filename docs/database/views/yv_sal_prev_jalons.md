# Vue: yv_sal_prev_jalons

## Description

Vue previsionnelle des ventes avec jalons de facturation.

## SQL

```sql
create view "DBA"."yv_sal_prev_jalons" as
  select "filehead"."fhcode" as "fhcode",
    "filehead"."fhdesc" as "fhdesc",
    "adresses"."adcode" as "adcode",
    "adresses"."adname" as "adname",
    "itstat1"."imdesc"+' / '+"itstat2"."isdesc" as "imdesc",'10' as "tri",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24p"
    from "DBA"."filehead" left outer join "DBA"."adresses"
      on "filehead"."fhadid" = "adresses"."adcode"
      ,"DBA"."itstat1"
      ,"DBA"."itstat2"
    where "itstat1"."imcode" = "itstat2"."iscode"
    and "filehead"."fhstatus" < '9' and(exists
    (select first *
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "salline"."slsalval" > 0
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2")) union all
  select-1 as "fhcode",'Hors Affaire' as "fhdesc",
    "adresses"."adcode" as "adcode",
    "adresses"."adname" as "adname",
    "itstat1"."imdesc"+' / '+"itstat2"."isdesc" as "imdesc",'10' as "tri",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24p"
    from "DBA"."adresses"
      ,"DBA"."itstat1"
      ,"DBA"."itstat2"
    where "itstat1"."imcode" = "itstat2"."iscode"
    and "adresses"."adactiv" = 'Y' and(exists
    (select first *
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
        ,"DBA"."items"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "salline"."slsalval" > 0
      and "items"."itcode" = "salline"."slitem"
      and "items"."itstat1" = "itstat1"."imcode"
      and "items"."itstat2" = "itstat2"."iscode2"))
```

## Tables source

- `adresses`
- `condhead`
- `condline`
- `filehead`
- `items`
- `itstat1`
- `itstat2`
- `jalons`
- `salhead`
- `salline`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `fhcode` | Code identifiant |
| `fhdesc` | Description |
| `adcode` | Code identifiant |
| `adname` | Nom/designation |
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
