# Vue: yv_shipnotice

## Description

Vue des avis d'expedition (bordereaux de livraison) avec details colis et lignes.

## SQL

```sql
create view "DBA"."yv_shipnotice" as
  select 1 as "ship_type",
    "shipline"."slcode" as "ship_code",
    "shipline"."slline" as "ship_line",
    "shipline"."slsalorder" as "sale_code",
    "shipline"."slsalline" as "sale_line",
    "shipline"."slitem" as "item_code",
    "shipline"."slitcustnam" as "ship_custname",
    "shipline"."sllot" as "lot_code",
    (select "lots"."loorgcode"
      from "DBA"."lots"
      where "lots"."locode" = "shipline"."sllot") as "lot_etiq",
    if "IsNull"("items"."itisumtarIf",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'ITUMTRF'),'') = '1' then
      "shipline"."slcustpc"
    else "shipline"."slqty"
    endif as "ship_qty",
    "shipline"."slinv" as "ship_status_inv",
    "shipline"."slinvno" as "ship_inv",
    "shipline"."slcomment" as "shipline_comment",
    "shipline"."slqcip" as "ship_analyse",
    "shipline"."sltransfered" as "ship_interco",
    "items"."itname" as "item_name",
    "IsNull"("items"."itdesc2",'') as "item_desc",
    "items"."itdefaultlot" as "item_defaultlot",
    "salhead"."shcustref" as "sale_custref",
    "salhead"."shcurr" as "sale_curr",
    if "IsNull"("items"."itisumtarIf",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'ITUMTRF'),'') = '1' then
      "items"."itumtarIf"
    else "salline"."sluomord"
    endif as "sale_uomord",
    "salline"."slstdval" as "saleline_stdval",
    "IsNull"((select "yv_linkitad"."lkadref"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "items"."itcode"
      and "yv_linkitad"."lkadcode" = "cust"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_ref",
    "IsNull"((select "yv_linkitad"."lkadref2"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "items"."itcode"
      and "yv_linkitad"."lkadcode" = "cust"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_desc",
    1 as "Curr_Conv",
    0 as "cust_Rist",
    0 as "ValExclDisc",
    if "IsNull"("salline"."slvalsddisc",0) <> 0 then
      "salline"."slvalsddisc"*"salline"."sluomconv"
    else "salline"."slunitprice"
    endif as "saleline_unitprice",
    if "IsNull"("items"."itisumtarIf",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'ITUMTRF'),'') = '1' then
      1
    else "salline"."sluomconv"
    endif as "saleline_uomconv",
    "salhead"."shshiptocmnt" as "sale_shipcomment",
    "salline"."slsalghost" as "saleline_ghost",
    "salline"."slprintghost" as "saleline_printghost",
    (select first "Count"()
      from "DBA"."salline" as "sals"
      where "sals"."slcode" = "salhead"."shcode"
      and "sals"."slsalghost" = "salline"."slline"
      order by 1 desc) as "saleline_kit",
    "salline"."slsample" as "saleline_sample",
    (select "parameters"."pmcval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'SHOWKIT') as "showkit",
    "shiphead"."shcomment" as "ship_comment",
    "shiphead"."shdate" as "ship_date",
    "shiphead"."shcust" as "cust", /*HA2536*/
    (select "adresses"."adname"
      from "DBA"."adresses"
      where "adresses"."adcode" = "cust") as "cust_name",
    "socity"."adcode" as "socity_code",
    "socity"."adadr1" as "socity_adr1",
    "socity"."adadr2" as "socity_adr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_countrid",
    "socity"."adtel" as "socity_tel",
    "socity"."adfax" as "socity_fax",
    "socity"."admail" as "socity_mail",
    "socity"."adurl" as "socity_url",
    "socity"."adbank" as "socity_bank1",
    "socity"."adbic1" as "socity_bic1",
    "socity"."adbank2" as "socity_bank2",
    "socity"."adbic2" as "socity_bic2",
    "socity"."adtva" as "socity_tva",
    "socity"."adreg" as "socity_reg",
    "socity"."adname" as "socity_name",
    "socity"."addesc2" as "socity_desc",
    "shipto"."stdesc" as "shipto_desc",
    "st"."stadr1" as "shipto_adr1",
    "st"."stadr2" as "shipto_adr2",
    "st"."stzip" as "shipto_zip",
    "st"."stloc" as "shipto_loc",
    "st"."stcountr" as "shipto_countr",
    "st"."sttel" as "shipto_tel",
    "st"."stfax" as "shipto_fax",
    "st"."stcontact" as "shipto_contact", /*HA2486*/
    "salhead"."shadcontact" as "contact_seq",
    (select "contacts"."ctname"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact") as "Contact_Name",
    (select "contacts"."ctFirstname"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact") as "Contact_1Name",
    (select "contacts"."cttel"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact") as "Contact_Tel",
    (select "contacts"."ctmail"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact") as "Contact_Mail",
    "salhead"."shsalesman" as "salesman_code",
    (select "salesman"."smname"
      from "DBA"."salesman"
      where "salesman"."smcode" = "salhead"."shsalesman") as "salesman_desc",
    "shiphead"."shreservation" as "ship_reservation",
    "shiphead"."shgroweight" as "ship_weight",
    (select first "truckline"."tlcode"
      from "DBA"."truckline"
      where "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      order by 1 asc) as "truck_code",
    (select first "truckref"."trdesc"
      from "DBA"."truckline"
        ,"DBA"."truckhead"
        ,"DBA"."truckref"
      where "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp"
      order by 1 asc) as "truck_typdesc",
    (select first "truckref"."tradcode"
      from "DBA"."truckline"
        ,"DBA"."truckhead"
        ,"DBA"."truckref"
      where "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp"
      and "truckref"."trinout" = 'O' order by 1 asc) as "truck_adcode",
    "IsNull"((select "List"(if "shipgrhead"."ghlevel" = 1 then
        ''
      else if "shipgrhead"."ghlevel" = 2 then
          '  '
        else '    '
        endif
      endif
      +"IsNull"("shipgrhead"."ghdesc",'')
      +if "Trim"("IsNull"("shipgrhead"."ghsize",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghsize"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghvolume",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghvolume"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghweight",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghweight"
      endif
      +if "Trim"("IsNull"((select "choiceline"."clname"
        from "DBA"."choiceline"
        where "choiceline"."clcode" = 'SHTY'
        and "choiceline"."clline" = "shipgrhead"."ghtype"),'')) = '' then
        ''
      else ' '+(select "choiceline"."clname"
          from "DBA"."choiceline"
          where "choiceline"."clcode" = 'SHTY'
          and "choiceline"."clline" = "shipgrhead"."ghtype")
      endif,
      "Char"(10) order by
      if "shipgrhead"."ghlevel" = 1 then
        "shipgrhead"."ghlevElseq"
      else if "shipgrhead"."ghlevel" = 2 then
          "shipgrhead"."ghprevlevElseq"
        else(select "shipgr2"."ghprevlevElseq"
            from "DBA"."shipgrhead" as "shipgr2"
            where "shipgr2"."ghshipid" = "shiphead"."shcode"
            and "shipgr2"."ghlevel" = 2
            and "shipgr2"."ghlevElseq" = "shipgrhead"."ghprevlevElseq")
        endif
      endif asc,
      if "shipgrhead"."ghlevel" = 3 then
        "shipgrhead"."ghprevlevElseq"
      else "shipgrhead"."ghlevElseq"
      endif asc,
      "shipgrhead"."ghlevel" asc,
      "shipgrhead"."ghlevElseq" asc)
      from "DBA"."shipgrhead"
      where "shipgrhead"."ghshipid" = "shiphead"."shcode"),'') as "colisage",
    (select first "projhead"."phdatcrea"
      from "DBA"."salline" as "sal","DBA"."projhead"
        ,"DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_datecrea",
    (select first "projhead"."phcode"
      from "DBA"."salline" as "sal"
        ,"DBA"."projhead","DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_num",
    "st"."stuseadrescomp" as "shipto_useadrescomp",
    "st"."stadrescomp1" as "shipto_adrescomp1",
    "st"."stadrescomp2" as "shipto_adrescomp2",
    "st"."stadrescomp3" as "shipto_adrescomp3",
    "st"."stadrescomp4" as "shipto_adrescomp4",
    "st"."stadrescomp5" as "shipto_adrescomp5",
    "st"."stadrescomp6" as "shipto_adrescomp6",
    "salhead"."shcreauser" as "sale_creauser",
    (select "users"."usname"
      from "DBA"."users"
      where "users"."uscode" = "sale_creauser") as "creauser_name",
    (select "users"."ustel"
      from "DBA"."users"
      where "users"."uscode" = "sale_creauser") as "creauser_tel",
    (select "users"."usmail"
      from "DBA"."users"
      where "users"."uscode" = "sale_creauser") as "creauser_mail",
    "st"."stcode" as "shipto_adcode",
    "st"."stseq" as "shipto_seq",
    "socity"."adlegalform" as "socity_LegalForm"
    from "DBA"."shipline"
      ,"DBA"."shiphead"
      ,"DBA"."salhead"
      ,"DBA"."salline"
      ,"DBA"."items"
      ,"DBA"."adresses" as "socity"
      ,"DBA"."shipto"
      ,"DBA"."shipto" as "st"
    where "shipline"."slcode" = "shiphead"."shcode"
    and "shipline"."slsalorder" = "salhead"."shcode"
    and "shipline"."slsalorder" = "salline"."slcode"
    and "shipline"."slsalline" = "salline"."slline"
    and "shipline"."slitem" = "items"."itcode"
    and("salline"."slprintghost" <> 'N' or "salline"."slprintghost" is null)
    and "socity"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"(("shiphead"."shmccode"),'##########')
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "shiphead"."shcust"),'##########')
    endif
    and "shipto"."stcode" = "shiphead"."shcust"
    and "shipto"."stseq" = "shiphead"."shshipto"
    and "st"."stcode" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipadcode"
    else "shipto"."stcode"
    endif
    and "st"."stseq" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipseq"
    else "shipto"."stseq"
    endif union all
  select 9,
    "shipcost"."sccode",
    0,
    0,
    0,'','','','',
    "sum"("shipcost"."scqty"),'',
    0,'','','',
    "shipcost"."scdesc",'','','',
    (select first "salhead"."shcurr"
      from "DBA"."shipline"
        ,"DBA"."salhead"
      where "salhead"."shcode" = "shipline"."slsalorder"
      and "shipline"."slcode" = "shiphead"."shcode"
      order by "salhead"."shcode" desc) as "shcurr",
    "shipcost"."scum",
    "shipcost"."scstdval",'','',
    (select "currencies"."cuconv"
      from "DBA"."currencies"
      where "currencies"."cucode" = "shcurr"),
    0,
    0,
    "shipcost"."scstdval",
    1,'',
    0,'Y',
    0,'N',
    (select "parameters"."pmcval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'SHOWKIT') as "showkit",
    "shiphead"."shcomment",
    "shiphead"."shdate",
    "shiphead"."shcust" as "cust", /*HA2536*/
    (select "adresses"."adname"
      from "DBA"."adresses"
      where "adresses"."adcode" = "cust") as "cust_name",
    "socity"."adcode" as "socity_code",
    "socity"."adadr1" as "socity_adr1",
    "socity"."adadr2" as "socity_adr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_countrid",
    "socity"."adtel" as "socity_tel",
    "socity"."adfax" as "socity_fax",
    "socity"."admail" as "socity_mail",
    "socity"."adurl" as "socity_url",
    "socity"."adbank" as "socity_bank1",
    "socity"."adbic1" as "socity_bic1",
    "socity"."adbank2" as "socity_bank2",
    "socity"."adbic2" as "socity_bic2",
    "socity"."adtva" as "socity_tva",
    "socity"."adreg" as "socity_reg",
    "socity"."adname" as "socity_name",
    "socity"."addesc2" as "socity_desc",
    "shipto"."stdesc" as "shipto_desc",
    "st"."stadr1" as "shipto_adr1",
    "st"."stadr2" as "shipto_adr2",
    "st"."stzip" as "shipto_zip",
    "st"."stloc" as "shipto_loc",
    "st"."stcountr" as "shipto_countr",
    "st"."sttel" as "shipto_tel",
    "st"."stfax" as "shipto_fax",
    "st"."stcontact" as "shipto_contact", /*HA2486*/
    null as "contact_seq",
    null as "Contact_Name",
    null as "Contact_1Name",
    null as "Contact_Tel",
    null as "Contact_Mail",
    null as "salesman_code",
    null as "salesman_desc",
    "shiphead"."shreservation" as "ship_reservation",
    "shiphead"."shgroweight" as "ship_weight",
    (select first "truckline"."tlcode"
      from "DBA"."truckline","DBA"."shipline"
      where "shipline"."slcode" = "shiphead"."shcode"
      and "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      order by 1 asc) as "truck_code",
    (select first "truckref"."trdesc"
      from "DBA"."truckline","DBA"."truckhead","DBA"."truckref","DBA"."shipline"
      where "shipline"."slcode" = "shiphead"."shcode"
      and "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp"
      order by 1 asc) as "truck_typdesc",
    (select first "truckref"."tradcode"
      from "DBA"."truckline","DBA"."truckhead","DBA"."truckref","DBA"."shipline"
      where "shipline"."slcode" = "shiphead"."shcode"
      and "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp"
      and "truckref"."trinout" = 'O'
      order by 1 asc) as "truck_adcode",
    "IsNull"((select "List"(if "shipgrhead"."ghlevel" = 1 then
        ''
      else if "shipgrhead"."ghlevel" = 2 then
          '  '
        else '    '
        endif
      endif
      +"IsNull"("shipgrhead"."ghdesc",'')
      +if "Trim"("IsNull"("shipgrhead"."ghsize",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghsize"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghvolume",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghvolume"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghweight",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghweight"
      endif
      +if "Trim"("IsNull"((select "choiceline"."clname"
        from "DBA"."choiceline"
        where "choiceline"."clcode" = 'SHTY'
        and "choiceline"."clline" = "shipgrhead"."ghtype"),'')) = '' then
        ''
      else ' '+(select "choiceline"."clname"
          from "DBA"."choiceline"
          where "choiceline"."clcode" = 'SHTY'
          and "choiceline"."clline" = "shipgrhead"."ghtype")
      endif,
      "Char"(10) order by
      if "shipgrhead"."ghlevel" = 1 then
        "shipgrhead"."ghlevElseq"
      else if "shipgrhead"."ghlevel" = 2 then
          "shipgrhead"."ghprevlevElseq"
        else(select "shipgr2"."ghprevlevElseq"
            from "DBA"."shipgrhead" as "shipgr2"
            where "shipgr2"."ghshipid" = "shiphead"."shcode"
            and "shipgr2"."ghlevel" = 2
            and "shipgr2"."ghlevElseq" = "shipgrhead"."ghprevlevElseq")
        endif
      endif asc,
      if "shipgrhead"."ghlevel" = 3 then
        "shipgrhead"."ghprevlevElseq"
      else "shipgrhead"."ghlevElseq"
      endif asc,
      "shipgrhead"."ghlevel" asc,
      "shipgrhead"."ghlevElseq" asc)
      from "DBA"."shipgrhead"
      where "shipgrhead"."ghshipid" = "shiphead"."shcode"),'') as "colisage",
    (select first "projhead"."phdatcrea"
      from "DBA"."salline" as "sal","DBA"."projhead","DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_datecrea",
    (select first "projhead"."phcode"
      from "DBA"."salline" as "sal","DBA"."projhead","DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_num",
    "st"."stuseadrescomp" as "shipto_useadrescomp",
    "st"."stadrescomp1" as "shipto_adrescomp1",
    "st"."stadrescomp2" as "shipto_adrescomp2",
    "st"."stadrescomp3" as "shipto_adrescomp3",
    "st"."stadrescomp4" as "shipto_adrescomp4",
    "st"."stadrescomp5" as "shipto_adrescomp5",
    "st"."stadrescomp6" as "shipto_adrescomp6",
    '' as "sale_creauser",
    '' as "creauser_name",
    '' as "creauser_tel",
    '' as "creauser_mail",
    "st"."stcode" as "shipto_adcode",
    "st"."stseq" as "shipto_seq",
    "socity"."adlegalform" as "socity_LegalForm"
    from "DBA"."shipcost"
      ,"DBA"."shiphead"
      ,"DBA"."adresses" as "socity"
      ,"DBA"."shipto"
      ,"DBA"."shipto" as "st"
    where "shipcost"."sccode" = "shiphead"."shcode"
    and "socity"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"(("shiphead"."shmccode"),'##########')
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "shiphead"."shcust"),'##########')
    endif
    and "shipto"."stcode" = "shiphead"."shcust"
    and "shipto"."stseq" = "shiphead"."shshipto"
    and "st"."stcode" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipadcode"
    else "shipto"."stcode"
    endif
    and "st"."stseq" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipseq"
    else "shipto"."stseq"
    endif
    group by "shipcost"."sccode","shipcost"."scdesc","shipcost"."scum","shipcost"."scstdval","shiphead"."shcode","shiphead"."shshipto",
    "socity_adr1","socity_adr2","socity_zip","socity_loc","socity_countrid","socity_tel","socity_fax","socity_mail","socity_url","socity_bank1","socity_bic1","socity_bank2","socity_bic2","cust_name","socity_code",
    "socity_tva","socity_reg","socity_name","socity_desc","shipto_desc","shipto_adr1","shipto_adr2","shipto_zip","shipto_loc",
    "shipto_countr","shipto_tel","shipto_fax","shipto"."stshipadcode","shipto"."sttype","shiphead"."shcust","shiphead"."shcomment",
    "shiphead"."shdate","contact_seq","Contact_Name","Contact_1Name","Contact_Tel","Contact_Mail","salesman_code","salesman_desc","ship_reservation","ship_weight","truck_code","truck_typdesc","truck_adcode","colisage","shiphead"."shcode",
    "shipto_useadrescomp","shipto_adrescomp1","shipto_adrescomp2","shipto_adrescomp3","shipto_adrescomp4","shipto_adrescomp5","shipto_adrescomp6","shipto_adcode","shipto_seq","socity_LegalForm","shipto_contact" union all
  select 10,
    0,
    0,
    0,
    0,
    '',
    'DISCOUNT',
    '',
    '',
    0,
    '',
    0,
    '',
    0,
    '',
    'DISCOUNT',
    'DISCOUNT',
    '',
    '',
    '',
    '',
    0,
    '',
    'DISCOUNT',
    1,
    "Min"("adresses"."adristcust"),
    "Sum"("shipline"."slqty"*(if "IsNull"("salline"."slvalsddisc",0) <> 0 then
      "salline"."slvalsddisc"*"salline"."sluomconv"
    else "salline"."slunitprice"
    endif)) as "ValExclDisc",
    0,
    1,
    '',
    0,
    'Y',
    0,
    'N',
    (select "parameters"."pmcval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'SHOWKIT') as "showkit",
    "shiphead"."shcomment",
    "shiphead"."shdate",
    "shiphead"."shcust" as "cust", /*HA2536*/
    (select "adresses"."adname"
      from "DBA"."adresses"
      where "adresses"."adcode" = "cust") as "cust_name",
    "socity"."adcode" as "socity_code",
    "socity"."adadr1" as "socity_adr1",
    "socity"."adadr2" as "socity_adr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_countrid",
    "socity"."adtel" as "socity_tel",
    "socity"."adfax" as "socity_fax",
    "socity"."admail" as "socity_mail",
    "socity"."adurl" as "socity_url",
    "socity"."adbank" as "socity_bank1",
    "socity"."adbic1" as "socity_bic1",
    "socity"."adbank2" as "socity_bank2",
    "socity"."adbic2" as "socity_bic2",
    "socity"."adtva" as "socity_tva",
    "socity"."adreg" as "socity_reg",
    "socity"."adname" as "socity_name",
    "socity"."addesc2" as "socity_desc",
    "shipto"."stdesc" as "shipto_desc",
    "st"."stadr1" as "shipto_adr1",
    "st"."stadr2" as "shipto_adr2",
    "st"."stzip" as "shipto_zip",
    "st"."stloc" as "shipto_loc",
    "st"."stcountr" as "shipto_countr",
    "st"."sttel" as "shipto_tel",
    "st"."stfax" as "shipto_fax",
    "st"."stcontact" as "shipto_contact", /*HA2486*/
    (select "salhead"."shadcontact"
      from "DBA"."salhead"
      where "salhead"."shcode" = "shipline"."slsalorder") as "contact_seq",
    (select "contacts"."ctname"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "shipline"."slsalorder") as "Contact_Name",
    (select "contacts"."ctFirstname"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "shipline"."slsalorder") as "Contact_1Name",
    (select "contacts"."cttel"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "shipline"."slsalorder") as "Contact_Tel",
    (select "contacts"."ctmail"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "shipline"."slsalorder") as "Contact_Mail",
    (select "salhead"."shsalesman"
      from "DBA"."salhead"
      where "salhead"."shcode" = "salline"."slcode") as "salesman_code",
    (select "salesman"."smname"
      from "DBA"."salesman","DBA"."salhead"
      where "salesman"."smcode" = "salhead"."shsalesman"
      and "salhead"."shcode" = "salline"."slcode") as "salesman_desc",
    "shiphead"."shreservation" as "ship_reservation",
    "shiphead"."shgroweight" as "ship_weight",
    (select first "truckline"."tlcode"
      from "DBA"."truckline"
      where "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline" order by 1 asc) as "truck_code",
    (select first "truckref"."trdesc"
      from "DBA"."truckline"
        ,"DBA"."truckhead"
        ,"DBA"."truckref"
      where "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp"
      order by 1 asc) as "truck_typdesc",
    (select first "truckref"."tradcode"
      from "DBA"."truckline"
        ,"DBA"."truckhead"
        ,"DBA"."truckref"
      where "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp"
      and "truckref"."trinout" = 'O'
      order by 1 asc) as "truck_adcode",
    "IsNull"((select "List"(if "shipgrhead"."ghlevel" = 1 then
        ''
      else if "shipgrhead"."ghlevel" = 2 then
          '  '
        else '    '
        endif
      endif
      +"IsNull"("shipgrhead"."ghdesc",'')
      +if "Trim"("IsNull"("shipgrhead"."ghsize",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghsize"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghvolume",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghvolume"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghweight",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghweight"
      endif
      +if "Trim"("IsNull"((select "choiceline"."clname"
        from "DBA"."choiceline"
        where "choiceline"."clcode" = 'SHTY'
        and "choiceline"."clline" = "shipgrhead"."ghtype"),'')) = '' then
        ''
      else ' '+(select "choiceline"."clname"
          from "DBA"."choiceline"
          where "choiceline"."clcode" = 'SHTY'
          and "choiceline"."clline" = "shipgrhead"."ghtype")
      endif,
      "Char"(10) order by
      if "shipgrhead"."ghlevel" = 1 then
        "shipgrhead"."ghlevElseq"
      else if "shipgrhead"."ghlevel" = 2 then
          "shipgrhead"."ghprevlevElseq"
        else(select "shipgr2"."ghprevlevElseq"
            from "DBA"."shipgrhead" as "shipgr2"
            where "shipgr2"."ghshipid" = "shiphead"."shcode"
            and "shipgr2"."ghlevel" = 2
            and "shipgr2"."ghlevElseq" = "shipgrhead"."ghprevlevElseq")
        endif
      endif asc,
      if "shipgrhead"."ghlevel" = 3 then
        "shipgrhead"."ghprevlevElseq"
      else "shipgrhead"."ghlevElseq"
      endif asc,
      "shipgrhead"."ghlevel" asc,
      "shipgrhead"."ghlevElseq" asc)
      from "DBA"."shipgrhead"
      where "shipgrhead"."ghshipid" = "shiphead"."shcode"),'') as "colisage",
    (select first "projhead"."phdatcrea"
      from "DBA"."salline" as "sal"
        ,"DBA"."projhead"
        ,"DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_datecrea",
    (select first "projhead"."phcode"
      from "DBA"."salline" as "sal"
        ,"DBA"."projhead"
        ,"DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_num",
    "st"."stuseadrescomp" as "shipto_useadrescomp",
    "st"."stadrescomp1" as "shipto_adrescomp1",
    "st"."stadrescomp2" as "shipto_adrescomp2",
    "st"."stadrescomp3" as "shipto_adrescomp3",
    "st"."stadrescomp4" as "shipto_adrescomp4",
    "st"."stadrescomp5" as "shipto_adrescomp5",
    "st"."stadrescomp6" as "shipto_adrescomp6",
    '' as "sale_creauser",
    '' as "creauser_name",
    '' as "creauser_tel",
    '' as "creauser_mail",
    "st"."stcode" as "shipto_adcode",
    "st"."stseq" as "shipto_seq",
    "socity"."adlegalform" as "socity_LegalForm"
    from "DBA"."shiphead"
      ,"DBA"."shipline"
      ,"DBA"."salline"
      ,"DBA"."adresses"
      ,"DBA"."adresses" as "socity"
      ,"DBA"."shipto"
      ,"DBA"."shipto" as "st"
    where "shipline"."slcode" = "shiphead"."shcode"
    and "shipline"."slsalorder" = "salline"."slcode"
    and "shipline"."slsalline" = "salline"."slline"
    and "adresses"."adcode" = "shiphead"."shcust"
    and "adresses"."adristcust" <> 0
    and "salline"."slsample" = 'N'
    and "socity"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"(("shiphead"."shmccode"),'##########')
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "shiphead"."shcust"),'##########')
    endif
    and "shipto"."stcode" = "shiphead"."shcust"
    and "shipto"."stseq" = "shiphead"."shshipto"
    and "st"."stcode" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipadcode"
    else "shipto"."stcode"
    endif
    and "st"."stseq" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipseq"
    else "shipto"."stseq"
    endif
    group by "shipto"."stshipadcode","shipto"."sttype","shiphead"."shcust","socity_adr1","socity_adr2","socity_zip","socity_loc","socity_countrid","socity_tel","socity_fax","socity_mail","socity_url","socity_bank1","socity_bic1","socity_bank2","socity_bic2","socity_tva","socity_reg","socity_name","socity_desc","shipto_desc","cust_name","socity_code",
    "shipto_adr1","shipto_adr2","shipto_zip","shipto_loc","shipto_countr","shipto_tel","shipto_fax","shiphead"."shcomment",
    "shiphead"."shdate","contact_seq","Contact_Name","Contact_1Name","Contact_Tel","Contact_Mail","salesman_code","salesman_desc","ship_reservation","ship_weight","truck_code","truck_typdesc","truck_adcode","colisage","shiphead"."shcode",
    "shipto_useadrescomp","shipto_adrescomp1","shipto_adrescomp2","shipto_adrescomp3","shipto_adrescomp4","shipto_adrescomp5","shipto_adrescomp6","shipto_adcode","shipto_seq","socity_LegalForm","shipto_contact" union all
  select 8,
    0,
    0,
    0,
    0,
    '',
    "packings"."pkname",
    '',
    '',
    "shippack"."spqty",
    "shippack"."spinv",
    0,
    '',
    0,
    '',
    "packings"."pkname",
    "packings"."pkname",
    '',
    '',
    (select first "salhead"."shcurr"
      from "DBA"."salhead"
        ,"DBA"."shipline"
      where "shipline"."slsalorder" = "salhead"."shcode"
      and "shipline"."slcode" = "shiphead"."shcode"
      order by "salhead"."shcode" desc) as "Curr",'',
    "packings"."pkstdcost",
    "shippack"."spcode",
    "packings"."pkname",
    (select "currencies"."cuconv"
      from "DBA"."currencies"
      where "currencies"."cucode" = "Curr") as "CurrConv",
    "adresses"."adristcust",
    0 as "ValExclDisc",
    0,
    1,'',
    0,'Y',
    0,'N',
    (select "parameters"."pmcval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'SHOWKIT') as "showkit",
    "shiphead"."shcomment",
    "shiphead"."shdate",
    "shiphead"."shcust" as "cust", /*HA2536*/
    (select "adresses"."adname"
      from "DBA"."adresses"
      where "adresses"."adcode" = "cust") as "cust_name",
    "socity"."adcode" as "socity_code",
    "socity"."adadr1" as "socity_adr1",
    "socity"."adadr2" as "socity_adr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_countrid",
    "socity"."adtel" as "socity_tel",
    "socity"."adfax" as "socity_fax",
    "socity"."admail" as "socity_mail",
    "socity"."adurl" as "socity_url",
    "socity"."adbank" as "socity_bank1",
    "socity"."adbic1" as "socity_bic1",
    "socity"."adbank2" as "socity_bank2",
    "socity"."adbic2" as "socity_bic2",
    "socity"."adtva" as "socity_tva",
    "socity"."adreg" as "socity_reg",
    "socity"."adname" as "socity_name",
    "socity"."addesc2" as "socity_desc",
    "shipto"."stdesc" as "shipto_desc",
    "st"."stadr1" as "shipto_adr1",
    "st"."stadr2" as "shipto_adr2",
    "st"."stzip" as "shipto_zip",
    "st"."stloc" as "shipto_loc",
    "st"."stcountr" as "shipto_countr",
    "st"."sttel" as "shipto_tel",
    "st"."stfax" as "shipto_fax",
    "st"."stcontact" as "shipto_contact", /*HA2486*/
    null as "contact_seq",
    null as "Contact_Name",
    null as "Contact_1Name",
    null as "Contact_Tel",
    null as "Contact_Mail",
    null as "salesman_code",
    null as "salesman_desc",
    "shiphead"."shreservation" as "ship_reservation",
    "shiphead"."shgroweight" as "ship_weight",
    (select first "truckline"."tlcode"
      from "DBA"."truckline"
        ,"DBA"."shipline"
      where "shipline"."slcode" = "shiphead"."shcode"
      and "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline" order by 1 asc) as "truck_code",
    (select first "truckref"."trdesc"
      from "DBA"."truckline"
        ,"DBA"."truckhead"
        ,"DBA"."truckref"
        ,"DBA"."shipline"
      where "shipline"."slcode" = "shiphead"."shcode"
      and "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp" order by 1 asc) as "truck_typdesc",
    (select first "truckref"."tradcode"
      from "DBA"."truckline"
        ,"DBA"."truckhead"
        ,"DBA"."truckref"
        ,"DBA"."shipline"
      where "shipline"."slcode" = "shiphead"."shcode"
      and "truckline"."tlshiphead" = "shipline"."slcode"
      and "truckline"."tlshipline" = "shipline"."slline"
      and "truckline"."tlcode" = "truckhead"."thcode"
      and "truckhead"."thtyp" = "truckref"."trtyp"
      and "truckref"."trinout" = 'O' order by 1 asc) as "truck_adcode",
    "IsNull"((select "List"(if "shipgrhead"."ghlevel" = 1 then
        ''
      else if "shipgrhead"."ghlevel" = 2 then
          '  '
        else '    '
        endif
      endif
      +"IsNull"("shipgrhead"."ghdesc",'')
      +if "Trim"("IsNull"("shipgrhead"."ghsize",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghsize"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghvolume",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghvolume"
      endif
      +if "Trim"("IsNull"("shipgrhead"."ghweight",'')) = '' then
        ''
      else ' '+"shipgrhead"."ghweight"
      endif
      +if "Trim"("IsNull"((select "choiceline"."clname"
        from "DBA"."choiceline"
        where "choiceline"."clcode" = 'SHTY'
        and "choiceline"."clline" = "shipgrhead"."ghtype"),'')) = '' then
        ''
      else ' '+(select "choiceline"."clname"
          from "DBA"."choiceline"
          where "choiceline"."clcode" = 'SHTY'
          and "choiceline"."clline" = "shipgrhead"."ghtype")
      endif,
      "Char"(10) order by
      if "shipgrhead"."ghlevel" = 1 then
        "shipgrhead"."ghlevElseq"
      else if "shipgrhead"."ghlevel" = 2 then
          "shipgrhead"."ghprevlevElseq"
        else(select "shipgr2"."ghprevlevElseq"
            from "DBA"."shipgrhead" as "shipgr2"
            where "shipgr2"."ghshipid" = "shiphead"."shcode"
            and "shipgr2"."ghlevel" = 2
            and "shipgr2"."ghlevElseq" = "shipgrhead"."ghprevlevElseq")
        endif
      endif asc,
      if "shipgrhead"."ghlevel" = 3 then
        "shipgrhead"."ghprevlevElseq"
      else "shipgrhead"."ghlevElseq"
      endif asc,
      "shipgrhead"."ghlevel" asc,
      "shipgrhead"."ghlevElseq" asc)
      from "DBA"."shipgrhead"
      where "shipgrhead"."ghshipid" = "shiphead"."shcode"),'') as "colisage",
    (select first "projhead"."phdatcrea"
      from "DBA"."salline" as "sal"
        ,"DBA"."projhead"
        ,"DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_datecrea",
    (select first "projhead"."phcode"
      from "DBA"."salline" as "sal"
        ,"DBA"."projhead"
        ,"DBA"."shipline" as "shipl"
      where "shipl"."slcode" = "shiphead"."shcode"
      and "sal"."slcode" = "shipl"."slsalorder"
      and "sal"."slline" = "shipl"."slsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_num",
    "st"."stuseadrescomp" as "shipto_useadrescomp",
    "st"."stadrescomp1" as "shipto_adrescomp1",
    "st"."stadrescomp2" as "shipto_adrescomp2",
    "st"."stadrescomp3" as "shipto_adrescomp3",
    "st"."stadrescomp4" as "shipto_adrescomp4",
    "st"."stadrescomp5" as "shipto_adrescomp5",
    "st"."stadrescomp6" as "shipto_adrescomp6",
    '' as "sale_creauser",
    '' as "creauser_name",
    '' as "creauser_tel",
    '' as "creauser_mail",
    "st"."stcode" as "shipto_adcode",
    "st"."stseq" as "shipto_seq",
    "socity"."adlegalform" as "socity_LegalForm"
    from "DBA"."shippack"
      ,"DBA"."packings"
      ,"DBA"."adresses"
      ,"DBA"."shiphead"
      ,"DBA"."adresses" as "socity"
      ,"DBA"."shipto"
      ,"DBA"."shipto" as "st"
    where "packings"."pkcode" = "shippack"."sppackid"
    and "shippack"."spinv" not in( 'C','S','R' ) 
    and "shippack"."spcode" = "shiphead"."shcode"
    and "shiphead"."shcust" = "adresses"."adcode"
    and "socity"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"(("shiphead"."shmccode"),'##########')
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "shiphead"."shcust"),'##########')
    endif
    and "shipto"."stcode" = "shiphead"."shcust"
    and "shipto"."stseq" = "shiphead"."shshipto"
    and "st"."stcode" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipadcode"
    else "shipto"."stcode"
    endif
    and "st"."stseq" = if "IsNull"("shipto"."sttype",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipseq"
    else "shipto"."stseq"
    endif
```

## Tables source

- `adresses`
- `choiceline`
- `contacts`
- `currencies`
- `items`
- `linkmcad`
- `lots`
- `packings`
- `parameters`
- `progparam`
- `projhead`
- `salesman`
- `salhead`
- `salline`
- `shipcost`
- `shipgrhead`
- `shiphead`
- `shipline`
- `shippack`
- `shipto`
- `truckhead`
- `truckline`
- `truckref`
- `users`
- `yv_linkitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `ship_type` | Type |
| `ship_code` | Code identifiant |
| `ship_line` | Numero de ligne |
| `sale_code` | Code identifiant |
| `sale_line` | Numero de ligne |
| `item_code` | Code identifiant |
| `ship_custname` | Nom/designation |
| `lot_code` | Code identifiant |
| `lot_etiq` | Lot |
| `ship_qty` | Quantite |
| `ship_status_inv` | Statut |
| `ship_inv` | Facture |
| `shipline_comment` | Commentaire |
| `ship_analyse` | Expedition |
| `ship_interco` | Expedition |
| `item_name` | Nom/designation |
| `item_desc` | Description |
| `item_defaultlot` | Article |
| `sale_custref` | Client |
| `sale_curr` | Devise |
| `sale_uomord` | Vente |
| `saleline_stdval` | Numero de ligne |
| `linkitemcust_ref` | Client |
| `linkitemcust_desc` | Description |
| `Curr_Conv` | Devise |
| `cust_Rist` | Client |
| `ValExclDisc` | Remise |
| `saleline_unitprice` | Prix |
| `saleline_uomconv` | Numero de ligne |
| `sale_shipcomment` | Commentaire |
| `saleline_ghost` | Numero de ligne |
| `saleline_printghost` | Numero de ligne |
| `sals` | Vente |
| `saleline_kit` | Numero de ligne |
| `saleline_sample` | Numero de ligne |
| `showkit` | Showkit |
| `ship_comment` | Commentaire |
| `ship_date` | Date |
| `cust` | Client |
| `cust_name` | Nom/designation |
| `socity_code` | Code identifiant |
| `socity_adr1` | Ville |
| `socity_adr2` | Ville |
| `socity_zip` | Ville |
| `socity_loc` | Ville |
| `socity_countrid` | Ville |
| `socity_tel` | Ville |
| `socity_fax` | Fax |
| `socity_mail` | Email |
| `socity_url` | Ville |
| `socity_bank1` | Ville |
| `socity_bic1` | Ville |
| `socity_bank2` | Ville |
| `socity_bic2` | Ville |
| `socity_tva` | Ville |
| `socity_reg` | Ville |
| `socity_name` | Nom/designation |
| `socity_desc` | Description |
| `shipto_desc` | Description |
| `shipto_adr1` | Expedition |
| `shipto_adr2` | Expedition |
| `shipto_zip` | Code postal |
| `shipto_loc` | Expedition |
| `shipto_countr` | Expedition |
| `shipto_tel` | Expedition |
| `shipto_fax` | Fax |
| `shipto_contact` | Contact |
| `contact_seq` | Contact |
| `Contact_Name` | Nom/designation |
| `Contact_1Name` | Nom/designation |
| `Contact_Tel` | Contact |
| `Contact_Mail` | Email |
| `salesman_code` | Code identifiant |
| `salesman_desc` | Description |
| `ship_reservation` | TVA |
| `ship_weight` | Poids |
| `truck_code` | Code identifiant |
| `truck_typdesc` | Description |
| `truck_adcode` | Code identifiant |
| `shipgr2` | Expedition |
| `colisage` | Colisage |
| `sal` | Vente |
| `shipl` | Expedition |
| `quote_datecrea` | Date |
| `quote_num` | Quote num |
| `shipto_useadrescomp` | Expedition |
| `shipto_adrescomp1` | Expedition |
| `shipto_adrescomp2` | Expedition |
| `shipto_adrescomp3` | Expedition |
| `shipto_adrescomp4` | Expedition |
| `shipto_adrescomp5` | Expedition |
| `shipto_adrescomp6` | Expedition |
| `sale_creauser` | Utilisateur |
| `creauser_name` | Nom/designation |
| `creauser_tel` | Utilisateur |
| `creauser_mail` | Email |
| `shipto_adcode` | Code identifiant |
| `shipto_seq` | Expedition |
| `socity_LegalForm` | Ville |
| `socity` | Ville |
| `st` | St |
| `shcurr` | Devise |
| `Curr` | Devise |
| `CurrConv` | Devise |
