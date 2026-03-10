# Vue: yq_filehead

## Description

Vue de requete sur les en-tetes de dossiers/affaires avec suivi et statut.

## SQL

```sql
create view "DBA"."yq_filehead"
  as select "filehead"."fhcode" as "file_code",
    "filehead"."fhdesc" as "file_desc",
    "date"("filehead"."fhcreadate") as "file_creadate",
    "filehead"."fhcreausr" as "user_creacode",
    (select "users"."usname" from "DBA"."users" where "users"."uscode" = "filehead"."fhcreausr") as "user_creadesc",
    "date"("filehead"."fhstartdate") as "file_startdate",
    "date"("filehead"."fhexpenddate") as "file_expdate",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'FHST' and "choices"."chcode" = "filehead"."fhstatus") as "file_status",
    "filehead"."fhadid" as "company_code",
    "adresses"."adname" as "company_name",
    "filehead"."fhresp" as "user_respcode",
    (select "users"."usname" from "DBA"."users" where "users"."uscode" = "filehead"."fhresp") as "user_respdesc",
    (select "filefamily"."ffdesc" from "DBA"."filefamily" where "filehead"."fhstat1" = "filefamily"."ffcode") as "file_family",
    "fileline"."flline" as "fileline_line",
    "fileline"."fldesc" as "fileline_desc",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'FLST' and "choices"."chcode" = "fileline"."flstatus") as "fileline_status",
    "isnull"((select "sum"("salline"."slsalval"/"currencies"."cuconv")
      from "DBA"."salhead","DBA"."salline","DBA"."currencies"
      where "salline"."slcode" = "salhead"."shcode"
      and "currencies"."cucode" = "salhead"."shcurr"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slfileline" = "fileline"."flline"
      and "salline"."slstatus" < '9'),0) as "fileline_forecsales",
    "isnull"((select "sum"("invoiceline"."ilnetval"*"invoicehead"."ihfacnot"/"invoicehead"."ihcurconv")
      from "DBA"."invoiceline","DBA"."invoicehead","DBA"."salline"
      where "invoicehead"."ihcode" = "invoiceline"."ilcode"
      and "invoiceline"."ilsalorder" = "salline"."slcode"
      and "invoiceline"."ilsalline" = "salline"."slline"
      and "salline"."slfileref" = "filehead"."fhcode"
      and "salline"."slfileline" = "fileline"."flline"),0)
    +"isnull"((select "sum"("invoiceline"."ilnetval"*"invoicehead"."ihfacnot"/"invoicehead"."ihcurconv")
      from "DBA"."invoicehead","DBA"."invoiceline"
      where "invoicehead"."ihcode" = "invoiceline"."ilcode"
      and "invoiceline"."ilfileref" = "filehead"."fhcode"
      and "invoiceline"."ilfileline" = "fileline"."flline" and
      "invoiceline"."iltype" not in( 'A','I','Y','Z' ) 
      and "invoicehead"."ihfacnot" = 1
      and "invoiceline"."ilsalorder" = 0),0)
    +"isnull"((select "sum"("invoiceline"."ilnetval"*"invoicehead"."ihfacnot"/"invoicehead"."ihcurconv")
      from "DBA"."invoicehead","DBA"."invoiceline"
      where "invoicehead"."ihcode" = "invoiceline"."ilcode"
      and "invoiceline"."ilfileref" = "filehead"."fhcode"
      and "invoiceline"."ilfileline" = "fileline"."flline"
      and "invoicehead"."ihfacnot" = -1 and(
      ("invoiceline"."iltype" not in( 'A','I','Y','Z' ) ) or("invoiceline"."iltype" = 'I' and "invoiceline"."ilsalorder" = 0))),0) as "fileline_Invsales",
    "isnull"((select "sum"("histostock"."hsval") as "mhmreal"
      from "DBA"."histostock"
      where("histostock"."hsordtyp" = 'F') and(
      "histostock"."hscode" = 'DLFO') and(
      "histostock"."hsordno" = "filehead"."fhcode"
      and "histostock"."hsordlin" = "fileline"."flline")),0)
    +"isnull"((select "sum"((select "sum"("purinvline"."plnetval"/"purinvhead"."picurconv"*"purinvhead"."pifacnot")
        from "DBA"."purinvline","DBA"."purinvhead"
        where "purinvhead"."picode" = "purinvline"."plcode"
        and "purinvline"."plordno" = "purline"."plcode"
        and "purinvline"."plordlin" = "purline"."plline"))
      from "DBA"."purline","DBA"."purhead"
      where "purhead"."phcode" = "purline"."plcode"
      and "purhead"."phfileref" = "filehead"."fhcode"
      and "purhead"."phfileline" = "fileline"."flline"),0)
    +"isnull"((select "sum"((select "sum"("purinvline"."plnetval"/"purinvhead"."picurconv"*"purinvhead"."pifacnot")
        from "DBA"."purinvline","DBA"."purinvhead"
        where "purinvhead"."picode" = "purinvline"."plcode"
        and "purinvline"."plordno" = "purgline"."plcode"
        and "purinvline"."plordlin" = "purgline"."plline"))
      from "DBA"."purgline","DBA"."purghead"
      where "purghead"."phcode" = "purgline"."plcode"
      and "purghead"."phfileref" = "filehead"."fhcode"
      and "purghead"."phfileline" = "fileline"."flline"),0)
    +"isnull"((select "sum"("purinvline"."plnetval"/"purinvhead"."picurconv"*"purinvhead"."pifacnot")
      from "DBA"."purinvline","DBA"."purinvhead"
      where "purinvhead"."picode" = "purinvline"."plcode"
      and "ifnull"("purinvline"."plordno",0) = 0
      and "purinvhead"."pifileref" = "filehead"."fhcode"
      and "purinvhead"."pifileline" = "fileline"."flline"),0)
    +"isnull"((select "sum"("adrsactions"."aarealcost"*"adrsactions"."aarealtiming"/60)
      from "DBA"."adrsactions"
      where "adrsactions"."aafileref" = "filehead"."fhcode"
      and "adrsactions"."aafileline" = "fileline"."flline"),0)
    +"isnull"((select "sum"("Workline"."wlwrktime"*"Workers"."wkcost")
      from "DBA"."Workline","DBA"."Workers","DBA"."Workhead"
      where("Workline"."wlwkcode" = "Workers"."wkcode") and(
      "workhead"."whwkcode" = "workline"."wlwkcode") and(
      "workhead"."whdate" = "workline"."wldat") and(
      "Workline"."wltyp" = '4') and(
      "Workhead"."whstatus" > '1') and(
      "Workline"."Wlmfgid" = "filehead"."fhcode") and(
      "Workline"."Wlfileline" = "fileline"."flline")),0)
    +"isnull"("sum"("mfghead"."mhmreal"),0)
    +"isnull"("sum"("mfghead"."mhlreal"),0)
    +"isnull"("sum"("mfghead"."mhereal"),0) as "fileline_realcost",
    "fileline"."flbudget" as "fileline_budget",
    "fileline"."flresp" as "fileline_coderesp",
    (select "users"."usname" from "DBA"."users" where "users"."uscode" = "fileline"."flresp") as "fileline_resp",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'FLUS' and "choiceline"."clline" = "fileline"."flddlbus") as "fileline_dynamicfield"
    from "DBA"."fileline" left outer join "DBA"."mfghead"
      on("mfghead"."mhfileref" = "fileline"."flcode") and("mfghead"."mhfileline" = "fileline"."flline")
      ,"DBA"."adresses"
      ,"DBA"."filehead"
    where "adresses"."adcode" = "filehead"."fhadid"
    and "filehead"."fhcode" = "fileline"."flcode"
    group by "file_code",
    "file_desc",
    "file_creadate",
    "user_creacode",
    "user_creadesc",
    "file_startdate",
    "file_expdate",
    "file_status",
    "company_code",
    "company_name",
    "user_respcode",
    "user_respdesc",
    "file_family",
    "fileline_line",
    "fileline_desc",
    "fileline_status",
    "fileline_budget",
    "fileline_coderesp",
    "fileline_resp",
    "fileline_dynamicfield"
```

## Tables source

- `Workers`
- `Workhead`
- `Workline`
- `adresses`
- `adrsactions`
- `choiceline`
- `choices`
- `currencies`
- `filefamily`
- `filehead`
- `fileline`
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
- `users`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `file_code` | Code identifiant |
| `file_desc` | Description |
| `file_creadate` | Date |
| `user_creacode` | Code identifiant |
| `user_creadesc` | Description |
| `file_startdate` | Date |
| `file_expdate` | Date |
| `file_status` | Statut |
| `company_code` | Code identifiant |
| `company_name` | Nom/designation |
| `user_respcode` | Code identifiant |
| `user_respdesc` | Description |
| `file_family` | File family |
| `fileline_line` | Numero de ligne |
| `fileline_desc` | Description |
| `fileline_status` | Statut |
| `fileline_forecsales` | Numero de ligne |
| `fileline_Invsales` | Numero de ligne |
| `mhmreal` | Mhmreal |
| `fileline_realcost` | Cout |
| `fileline_budget` | Numero de ligne |
| `fileline_coderesp` | Code identifiant |
| `fileline_resp` | Numero de ligne |
| `fileline_dynamicfield` | Numero de ligne |
