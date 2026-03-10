# Vue: yv_files_yield

## Description

Vue de rendement des dossiers/affaires avec calcul de marge.

## SQL

```sql
create view "DBA"."yv_files_yield"
  as select "filehead"."fhcode" as "file_code",
    "isnull"((select "sum"("salline"."slsalval"/"currencies"."cuconv")
      from "DBA"."salhead","DBA"."salline","DBA"."currencies"
      where "salline"."slcode" = "salhead"."shcode"
      and "currencies"."cucode" = "salhead"."shcurr"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slstatus" < '9'),0) as "Forecasted_sales",
    "isnull"((select "sum"("invoiceline"."ilnetval"*"invoicehead"."ihfacnot"/"invoicehead"."ihcurconv")
      from "DBA"."invoiceline","DBA"."invoicehead","DBA"."salline"
      where "invoicehead"."ihcode" = "invoiceline"."ilcode"
      and "invoiceline"."ilsalorder" = "salline"."slcode"
      and "invoiceline"."ilsalline" = "salline"."slline"
      and "salline"."slfileref" = "filehead"."fhcode"),0)
    +"isnull"((select "sum"("invoiceline"."ilnetval"*"invoicehead"."ihfacnot"/"invoicehead"."ihcurconv")
      from "DBA"."invoicehead","DBA"."invoiceline"
      where "invoicehead"."ihcode" = "invoiceline"."ilcode"
      and "invoiceline"."ilfileref" = "filehead"."fhcode" and
      "invoiceline"."iltype" not in( 'A','I','Y','Z' ) 
      and "invoicehead"."ihfacnot" = 1
      and "invoiceline"."ilsalorder" = 0),0)
    +"isnull"((select "sum"("invoiceline"."ilnetval"*"invoicehead"."ihfacnot"/"invoicehead"."ihcurconv")
      from "DBA"."invoicehead","DBA"."invoiceline"
      where "invoicehead"."ihcode" = "invoiceline"."ilcode"
      and "invoiceline"."ilfileref" = "filehead"."fhcode"
      and "invoicehead"."ihfacnot" = -1 and(
      ("invoiceline"."iltype" not in( 'A','I','Y','Z' ) ) or("invoiceline"."iltype" = 'I' and "invoiceline"."ilsalorder" = 0))),0) as "Invoiced_sales",
    "isnull"((select "sum"("histostock"."hsval") as "mhmreal"
      from "DBA"."histostock"
      where("histostock"."hsordtyp" = 'F') and(
      "histostock"."hscode" = 'DLFO') and(
      "histostock"."hsordno" = "filehead"."fhcode")),0)
    +"isnull"((select "sum"((select "sum"("purinvline"."plnetval"/"purinvhead"."picurconv"*"purinvhead"."pifacnot")
        from "DBA"."purinvline","DBA"."purinvhead"
        where "purinvhead"."picode" = "purinvline"."plcode"
        and "purinvline"."plordno" = "purline"."plcode"
        and "purinvline"."plordlin" = "purline"."plline"))
      from "DBA"."purline","DBA"."purhead"
      where "purhead"."phcode" = "purline"."plcode"
      and "purhead"."phfileref" = "filehead"."fhcode"),0)
    +"isnull"((select "sum"((select "sum"("purinvline"."plnetval"/"purinvhead"."picurconv"*"purinvhead"."pifacnot")
        from "DBA"."purinvline","DBA"."purinvhead"
        where "purinvhead"."picode" = "purinvline"."plcode"
        and "purinvline"."plordno" = "purgline"."plcode"
        and "purinvline"."plordlin" = "purgline"."plline"))
      from "DBA"."purgline","DBA"."purghead"
      where "purghead"."phcode" = "purgline"."plcode"
      and "purghead"."phfileref" = "filehead"."fhcode"),0)
    +"isnull"((select "sum"("purinvline"."plnetval"/"purinvhead"."picurconv"*"purinvhead"."pifacnot")
      from "DBA"."purinvline","DBA"."purinvhead"
      where "purinvhead"."picode" = "purinvline"."plcode"
      and "ifnull"("purinvline"."plordno",0) = 0
      and "purinvhead"."pifileref" = "filehead"."fhcode"),0)
    +"isnull"((select "sum"("adrsactions"."aarealcost"*"adrsactions"."aarealtiming"/60)
      from "DBA"."adrsactions"
      where "adrsactions"."aafileref" = "filehead"."fhcode"),0)
    +"isnull"((select "sum"("Workline"."wlwrktime"*"Workers"."wkcost") as "mhlreal"
      from "DBA"."Workline","DBA"."Workers","DBA"."Workhead"
      where("Workline"."wlwkcode" = "Workers"."wkcode") and(
      "workhead"."whwkcode" = "workline"."wlwkcode") and(
      "workhead"."whdate" = "workline"."wldat") and(
      "Workline"."wltyp" = '4') and(
      "Workhead"."whstatus" > '1') and(
      "Workline"."Wlmfgid" = "filehead"."fhcode")),0)
    +"isnull"("sum"("mfghead"."mhmreal"),0)
    +"isnull"("sum"("mfghead"."mhlreal"),0)
    +"isnull"("sum"("mfghead"."mhereal"),0) as "realcost"
    from "DBA"."filehead" left outer join "DBA"."mfghead" on(
      "mfghead"."mhfileref" = "filehead"."fhcode")
    group by "filehead"."fhcode"
```

## Tables source

- `Workers`
- `Workhead`
- `Workline`
- `adrsactions`
- `currencies`
- `filehead`
- `histostock`
- `invoicehead`
- `invoiceline`
- `mfghead`
- `purghead`
- `purgline`
- `purhead`
- `purinvhead`
- `purinvline`
- `purline`
- `salhead`
- `salline`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `file_code` | Code identifiant |
| `Forecasted_sales` | Vente |
| `Invoiced_sales` | Facture |
| `mhmreal` | Mhmreal |
| `mhlreal` | Mhlreal |
| `realcost` | Cout |
