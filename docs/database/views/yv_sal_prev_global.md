# Vue: yv_sal_prev_global

## Description

Vue previsionnelle globale des ventes avec agregation tous projets.

## SQL

```sql
create view "DBA"."yv_sal_prev_global"( "fhcode",
  "fhdesc","adcode","adname",
  "m0","m0a","m1","m1a","m2","m2a","m3","m3a",
  "m4","M4a","m5","m5a","m6","m6a","m7","m7a",
  "m8","m8a","m9","m9a","m10","m10a","m11","m11a",
  "m1223","m1223a","m24p","m24pa" ) as
  select "filehead"."fhcode" as "fhcode",
    "filehead"."fhdesc" as "fhdesc",
    "adresses"."adcode" as "adcode",
    "adresses"."adname" as "adname",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM'))
    +(select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "jalons"."jaref" = 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N')
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24p",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24pa"
    from "DBA"."filehead" left outer join "DBA"."adresses"
      on "filehead"."fhadid" = "adresses"."adcode" where(
    exists(select first *
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "salline"."slsalval" > 0) or exists
    (select first *
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "salline"."slsalval" > 0) or exists /*os1151*/
    (select first *
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100) > 0) or exists
    (select first *
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aafileref" = "filehead"."fhcode"
      and "adrsactions"."aaquoteval" > 0)) union all
  select-1,'Hors Affaire',
    "adresses"."adcode",
    "adresses"."adname",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM'))
    +(select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "jalons"."jaref" = 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N')
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') <= "DATEFORMAT"("today"(),'YYYY/MM')) as "m0a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",1,"today"()),'YYYY/MM')) as "m1a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",2,"today"()),'YYYY/MM')) as "m2a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",3,"today"()),'YYYY/MM')) as "m3a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",4,"today"()),'YYYY/MM')) as "m4a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",5,"today"()),'YYYY/MM')) as "m5a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",6,"today"()),'YYYY/MM')) as "m6a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",7,"today"()),'YYYY/MM')) as "m7a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",8,"today"()),'YYYY/MM')) as "m8a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",9,"today"()),'YYYY/MM')) as "m9a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",10,"today"()),'YYYY/MM')) as "m10a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') = "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')) as "m11a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",11,"today"()),'YYYY/MM')
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') <= "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m1223a",
    (select "isnull"("sum"("salline"."slsalval"*"condline"."clratio"),0)/100
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "isnull"("jalons"."jaref",0) <> 1
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "DATEFORMAT"("jalons"."jaexpdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"(("salline"."slsalval"/"salline"."slqtyreq")*("salline"."slqtyreq"-"salline"."slqtyinv")),0)
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salhead"."shcust" = "adresses"."adcode"
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "DATEFORMAT"("salline"."sldatship",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM'))
    +(select "isnull"("sum"("adrsactions"."aaquoteval"),0)
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aaactiondate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24p",
    (select "isnull"("sum"("adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100)),0)/100
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2 and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaadrid" = "adresses"."adcode"
      and "DATEFORMAT"("adrsactions"."aafrcstdate",'YYYY/MM') > "DATEFORMAT"("dateadd"("month",23,"today"()),'YYYY/MM')) as "m24pa"
    from "DBA"."adresses"
    where "adresses"."adactiv" = 'Y' and(
    exists(select first *
      from "DBA"."salline"
        ,"DBA"."salhead"
        ,"DBA"."condhead"
        ,"DBA"."condline"
        ,"DBA"."jalons"
      where "salhead"."shcode" = "salline"."slcode"
      and "salline"."slstdcondition" = "condhead"."chcode"
      and "condhead"."chcode" = "condline"."clcode"
      and "condline"."cljalon" = "jalons"."jacode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salline"."slstatus" < '6'
      and "jalons"."jastatus" < '9'
      and "condline"."clactiv" = 'Y'
      and "condline"."clinvclot" = 'N'
      and "salline"."slsalval" > 0
      and "salhead"."shcust" = "adresses"."adcode") or exists
    (select first *
      from "DBA"."salline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode" and(
      "salline"."slfileref" is null or "salline"."slfileref" = 0)
      and "salline"."slstatus" < '6'
      and "isnull"("salline"."slstdcondition",0) = 0
      and "salline"."slsalval" > 0
      and "salhead"."shcust" = "adresses"."adcode") or exists
    (select first *
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -2
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaquoteval"*"isnull"("adrsactions"."aapersuccess",100) > 0) or exists
    (select first *
      from "DBA"."adrsactions"
      where "adrsactions"."aastatus" < '3'
      and "adrsactions"."aaaction" = -5
      and "adrsactions"."aaadrid" = "adresses"."adcode" and(
      "adrsactions"."aafileref" is null or "adrsactions"."aafileref" = 0)
      and "adrsactions"."aaquoteval" > 0))
```

## Tables source

- `adresses`
- `adrsactions`
- `condhead`
- `condline`
- `filehead`
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
| `m0` | M0 |
| `m0a` | M0a |
| `m1` | M1 |
| `m1a` | M1a |
| `m2` | M2 |
| `m2a` | M2a |
| `m3` | M3 |
| `m3a` | M3a |
| `m4` | M4 |
| `m4a` | M4a |
| `m5` | M5 |
| `m5a` | M5a |
| `m6` | M6 |
| `m6a` | M6a |
| `m7` | M7 |
| `m7a` | M7a |
| `m8` | M8 |
| `m8a` | M8a |
| `m9` | M9 |
| `m9a` | M9a |
| `m10` | M10 |
| `m10a` | M10a |
| `m11` | M11 |
| `m11a` | M11a |
| `m1223` | M1223 |
| `m1223a` | M1223a |
| `m24p` | M24p |
| `m24pa` | M24pa |
