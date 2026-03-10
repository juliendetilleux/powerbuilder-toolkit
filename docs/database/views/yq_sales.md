# Vue: yq_sales

## Description

Vue de requete sur les ventes avec details complets (en-tetes, lignes, montants).

## SQL

```sql
create view "DBA"."yq_sales" as
  select "invoicehead"."ihcode" as "invoice_id",
    "invoicehead"."ihcodemc" as "invoice_number",
    "invoicehead"."ihmccode" as "invoicer_id",
    (select "admultico"."adname"
      from "DBA"."adresses" as "admultico"
      where "admultico"."adcode" = "invoicehead"."ihmccode") as "invoicer_name",
    if "invoicehead"."ihtypinv" = '1' then
      'INVOICE'
    else 'CREDITNOTE'
    endif as "document_type",
    "invoicehead"."ihcurr" as "invoice_currency",
    "Date"("invoicehead"."ihdate") as "invoice_date",
    "Date"("invoicehead"."ihexpiry") as "invoice_expiry_date",
    "invoicehead"."ihcust" as "customer_code",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'TVAT'
      and "choices"."chcode" = "invoicehead"."ihtyptva") as "vat_type",
    "adresses"."adname" as "customer_name",
    "adresses"."adadr1" as "customer_adres1",
    "adresses"."adadr2" as "customer_adres2",
    "adresses"."adzip" as "customer_zip",
    "adresses"."adloc" as "customer_location",
    "adresses"."adcountrid" as "customer_country",
    "adresses"."adcustzone" as "customer_zone_id",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADCZ'
      and "choiceline"."clline" = "adresses"."adcustzone") as "custome_zone_name",
    "adresses"."adgrcust" as "customer_group",
    (select "adresgroup"."agdesc"
      from "DBA"."adresgroup"
      where "adresgroup"."agcode" = "adresses"."adgrcust") as "customer_group_name",
    if "IsNull"("invoiceline"."ilsalorder",0) > 0 then
      (select "sh2"."shsalesman"
        from "DBA"."salhead" as "sh2"
        where "sh2"."shcode" = "invoiceline"."ilsalorder")
    else(select "ad2"."adsalesman"
        from "DBA"."adresses" as "ad2"
        where "ad2"."adcode" = "invoicehead"."ihcust")
    endif as "salesman",
    "invoiceline"."iltype" as "invoiceline_type",
    "IsNull"("invoiceline"."ilitem",'') as "item_code",
    if "invoiceline"."iltype" = 'P' or "invoiceline"."iltype" = 'N' then
      "invoiceline"."ilitcustnam"
    else if "IsNull"("invoiceline"."ilitem",'') > '' then
        (select "items"."itname"
          from "DBA"."items"
          where "items"."itcode" = "invoiceline"."ilitem")
      else ''
      endif
    endif as "item_name",
    if "item_code" > '' then
      (select "items"."itstat1"
        from "DBA"."items"
        where "items"."itcode" = "invoiceline"."ilitem")
    else ''
    endif as "item_group_id",
    (select "itstat1"."imdesc"
      from "DBA"."itstat1"
      where "itstat1"."imcode" = "item_group_id") as "item_group_name",
    if "item_code" > '' then
      (select "items"."itstat2"
        from "DBA"."items"
        where "items"."itcode" = "invoiceline"."ilitem")
    else ''
    endif as "item_subgroup_id",
    (select "itstat2"."isdesc"
      from "DBA"."itstat2"
      where "itstat2"."iscode" = "item_group_id"
      and "itstat2"."iscode2" = "item_subgroup_id") as "item_subgroup_name",
    if "invoiceline"."iltype" = 'R' then
      0
    else "invoiceline"."ilqty"*"invoicehead"."ihfacnot"
    endif as "invoiced_qty",
    if "item_code" > '' then
      (select "items"."itum"
        from "DBA"."items"
        where "items"."itcode" = "invoiceline"."ilitem")
    else ''
    endif as "item_unit",
    "invoiceline"."ilnetval"*"invoicehead"."ihfacnot" as "invoiced_value_currency",
    "invoiceline"."ilnetval"*"invoicehead"."ihfacnot"/"IsNull"("invoicehead"."ihcurconv",1) as "invoiced_value",
    "invoiceline"."iltva" as "vat_level",
    "invoiceline"."ilcptsal" as "account_number",
    if "IsNull"("invoiceline"."ilshipto",0) = 0 then
      if "IsNull"("invoiceline"."ilshiporder",0) = 0 then
        (select first "shipto"."stdesc"
          from "DBA"."shipto"
          where "shipto"."stcode" = "invoicehead"."ihcust"
          and "shipto"."stmain" = 'Y'
          order by "shipto"."stactiv" desc,
          "shipto"."stseq" asc)
      else(select "shipto"."stdesc"
          from "DBA"."shipto"
            ,"DBA"."shiphead"
          where "shipto"."stcode" = "shiphead"."shcust"
          and "shipto"."stseq" = "shiphead"."shshipto"
          and "shiphead"."shcode" = "invoiceline"."ilshiporder")
      endif
    else(select "shipto"."stdesc"
        from "DBA"."shipto"
        where "shipto"."stcode" = "invoicehead"."ihcust"
        and "shipto"."stseq" = "invoiceline"."ilshipto")
    endif as "shipto_name",
    "invoiceline"."ilshiporder" as "shipping_id",
    "invoiceline"."ilshipline" as "shipping_line",
    (select "shiphead"."shdate"
      from "DBA"."shiphead"
      where "shiphead"."shcode" = "invoiceline"."ilshiporder") as "shipping_date",
    "invoiceline"."ilsalorder" as "sale_order_id",
    "invoiceline"."ilsalline" as "sale_order_line",
    "invoiceline"."ilfileref" as "project_id",
    (select "filehead"."fhdesc"
      from "DBA"."filehead"
      where "filehead"."fhcode" = "invoiceline"."ilfileref") as "project_name",
    (select "filefamily"."ffdesc"
      from "DBA"."filehead","DBA"."filefamily"
      where "filehead"."fhcode" = "invoiceline"."ilfileref"
      and "filehead"."fhstat1" = "filefamily"."ffcode") as "project_family",
    "invoiceline"."ilfileline" as "subproject_id",
    (select "fileline"."fldesc"
      from "DBA"."fileline"
      where "fileline"."flcode" = "invoiceline"."ilfileref"
      and "fileline"."flline" = "invoiceline"."ilfileline") as "subproject_name",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTA'
      and "choiceline"."clline" = "adresses"."adactivite") as "customer_activity",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADSO'
      and "choiceline"."clline" = "adresses"."adsource") as "customer_source",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTP'
      and "choiceline"."clline" = "adresses"."adtype") as "customer_type",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU0'
      and "choiceline"."clline" = "adresses"."adcrmuf00") as "cust_uf00",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU1'
      and "choiceline"."clline" = "adresses"."adcrmuf01") as "cust_uf01",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU2'
      and "choiceline"."clline" = "adresses"."adcrmuf02") as "cust_uf02",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU3'
      and "choiceline"."clline" = "adresses"."adcrmuf03") as "cust_uf03",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU4'
      and "choiceline"."clline" = "adresses"."adcrmuf04") as "cust_uf04",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU5'
      and "choiceline"."clline" = "adresses"."adcrmuf05") as "cust_uf05",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU6'
      and "choiceline"."clline" = "adresses"."adcrmuf06") as "cust_uf06",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU7'
      and "choiceline"."clline" = "adresses"."adcrmuf07") as "cust_uf07",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU8'
      and "choiceline"."clline" = "adresses"."adcrmuf08") as "cust_uf08",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU9'
      and "choiceline"."clline" = "adresses"."adcrmuf09") as "cust_uf09",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUA'
      and "choiceline"."clline" = "adresses"."adcrmuf10") as "cust_uf10",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUB'
      and "choiceline"."clline" = "adresses"."adcrmuf11") as "cust_uf11",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUC'
      and "choiceline"."clline" = "adresses"."adcrmuf12") as "cust_uf12",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUD'
      and "choiceline"."clline" = "adresses"."adcrmuf13") as "cust_uf13",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUE'
      and "choiceline"."clline" = "adresses"."adcrmuf14") as "cust_uf14",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUF'
      and "choiceline"."clline" = "adresses"."adcrmuf15") as "cust_uf15",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUG'
      and "choiceline"."clline" = "adresses"."adcrmuf16") as "cust_uf16",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUH'
      and "choiceline"."clline" = "adresses"."adcrmuf17") as "cust_uf17",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUI'
      and "choiceline"."clline" = "adresses"."adcrmuf18") as "cust_uf18",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUJ'
      and "choiceline"."clline" = "adresses"."adcrmuf19") as "cust_uf19",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUK'
      and "choiceline"."clline" = "adresses"."adcrmuf20") as "cust_uf20",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUL'
      and "choiceline"."clline" = "adresses"."adcrmuf21") as "cust_uf21",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUM'
      and "choiceline"."clline" = "adresses"."adcrmuf22") as "cust_uf22",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUN'
      and "choiceline"."clline" = "adresses"."adcrmuf23") as "cust_uf23",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUO'
      and "choiceline"."clline" = "adresses"."adcrmuf24") as "cust_uf24",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUP'
      and "choiceline"."clline" = "adresses"."adcrmuf25") as "cust_uf25",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUQ'
      and "choiceline"."clline" = "adresses"."adcrmuf26") as "cust_uf26",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUR'
      and "choiceline"."clline" = "adresses"."adcrmuf27") as "cust_uf27",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUS'
      and "choiceline"."clline" = "adresses"."adcrmuf28") as "cust_uf28",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUT'
      and "choiceline"."clline" = "adresses"."adcrmuf29") as "cust_uf29",
    "invoicehead"."ihcptper" as "accounting_period",
    "IsNull"((select "clotfinit"."cistdconf"
      from "DBA"."clotfinit"
      where "clotfinit"."ciperiod" = "invoicehead"."ihcptper"
      and "clotfinit"."cityp" = 'I'
      and "clotfinit"."ciitem" = "invoiceline"."ilitem"
      and "clotfinit"."cimccode" = "invoicer_id"),
    (select if "IsNull"("items"."itisumtarIf",'N') = 'N' then
        "items"."itstdpur"
      else "IsNull"("items"."itumtbAscost",0)+"IsNull"("items"."itumtxtrcost",0)
      endif
      from "DBA"."items"
      where "items"."itcode" = "invoiceline"."ilitem")) as "cost",
    (select "IsNull"("bomhead"."bhramval",0)
      +"IsNull"("bomhead"."bhmacval",0)
      +"IsNull"("bomhead"."bhlabval",0)
      +"IsNull"("bomhead"."bhxtrval",0)
      from "DBA"."bomhead"
      where "bomhead"."bhcode" = "invoiceline"."ilitem"
      and "bomhead"."bhtype" = '0') as "theorical_cost",
    (select "IsNull"("items"."itwistat",0)
      from "DBA"."items"
      where "items"."itcode" = "invoiceline"."ilitem") as "item_netweight",
    (select "IsNull"("items"."itweight",0)
      from "DBA"."items"
      where "items"."itcode" = "invoiceline"."ilitem") as "item_grossweight",
    (select "IsNull"("items"."itumusr",'')
      from "DBA"."items"
      where "items"."itcode" = "invoiceline"."ilitem") as "stat_unit",
    (select "IsNull"("items"."itconvusr",0)
      from "DBA"."items"
      where "items"."itcode" = "invoiceline"."ilitem") as "stat_convers",
    "IsNull"((select "clotfinit"."cistdconf"
      from "DBA"."clotfinit"
      where "clotfinit"."ciperiod" = "invoicehead"."ihcptper"
      and "clotfinit"."cityp" = 'T'
      and "clotfinit"."ciitem" = "invoiceline"."ilitem"),0) as "transport_cost",
    (select if "items"."itdefaultlot" = "shipline"."sllot" then
        "shipline"."slbAscost"
      else "lots"."lobAscost"
      endif
      from "DBA"."shipline"
        ,"DBA"."items"
        ,"DBA"."lots"
      where "shipline"."slcode" = "invoiceline"."ilshiporder"
      and "shipline"."slline" = "invoiceline"."ilshipline"
      and "shipline"."slitem" = "items"."itcode"
      and "shipline"."sllot" = "lots"."locode") as "lotbAsecost",
    (select if "items"."itdefaultlot" = "shipline"."sllot" then
        "shipline"."slxtrcost"
      else "lots"."loxtrcost"
      endif
      from "DBA"."shipline"
        ,"DBA"."items"
        ,"DBA"."lots"
      where "shipline"."slcode" = "invoiceline"."ilshiporder"
      and "shipline"."slline" = "invoiceline"."ilshipline"
      and "shipline"."slitem" = "items"."itcode"
      and "shipline"."sllot" = "lots"."locode") as "loxtrcost",
    "invoicehead"."ihpaydate" as "invoice_paydate",
    "invoicehead"."ihpaidamount" as "invoice_paidamount",
    "IsNull"((select "salline"."slprorig"
      from "DBA"."salline"
      where "salline"."slline" = "invoiceline"."ilsalline"
      and "salline"."slcode" = "invoiceline"."ilsalorder"),'-') as "priceorigin",
    "IsNull"((select "salline"."slbAseprice"
      from "DBA"."salline"
      where "salline"."slline" = "invoiceline"."ilsalline"
      and "salline"."slcode" = "invoiceline"."ilsalorder"
      and "salline"."slprorig" = 'T'),"Invoiceline"."ilorval"*"invoiceline"."iluomconv") as "orderbAseprice",
    "IsNull"((select "salline"."slorval"
      from "DBA"."salline"
      where "salline"."slline" = "invoiceline"."ilsalline"
      and "salline"."slcode" = "invoiceline"."ilsalorder"),"Invoiceline"."ilorval"*"invoiceline"."iluomconv") as "orderprice",
    "IsNull"((select "salline"."slunitprice"
      from "DBA"."salline"
      where "salline"."slline" = "invoiceline"."ilsalline"
      and "salline"."slcode" = "invoiceline"."ilsalorder"),"Invoiceline"."ilorval"*"invoiceline"."iluomconv") as "ordernetprice",
    "Invoiceline"."ilorval"*"invoiceline"."iluomconv" as "invoicebAseprice",
    "Invoiceline"."ilstdval"*"invoiceline"."iluomconv" as "invoicediscprice",
    "invoiceline"."ilnetval"/"invoiceline"."ilqty" as "invoicenetprice",
    (select if "items"."itdefaultlot" = "shipline"."sllot" then
        (select "linkitad"."lkadcode"
          from "DBA"."linkitad"
          where "linkitad"."lkitem" = "invoiceline"."ilitem"
          and "linkitad"."lktyp" = 'P'
          and "linkitad"."lkmain" = 'Y')
      else(select "lots"."loadcode"
          from "DBA"."lots"
          where "lots"."locode" = "shipline"."sllot")
      endif
      from "DBA"."shipline","DBA"."items"
      where "shipline"."slcode" = "invoiceline"."ilshiporder"
      and "shipline"."slline" = "invoiceline"."ilshipline"
      and "shipline"."slitem" = "items"."itcode") as "supplier_code",
    (select if "items"."itdefaultlot" = "shipline"."sllot" then
        (select "supp"."adname"
          from "DBA"."linkitad","DBA"."adresses" as "supp"
          where "linkitad"."lkitem" = "invoiceline"."ilitem"
          and "linkitad"."lktyp" = 'P'
          and "linkitad"."lkmain" = 'Y'
          and "supp"."adcode" = "linkitad"."lkadcode")
      else(select "supp"."adname"
          from "DBA"."lots","DBA"."adresses" as "supp"
          where "lots"."locode" = "shipline"."sllot"
          and "supp"."adcode" = "lots"."loadcode")
      endif
      from "DBA"."shipline","DBA"."items"
      where "shipline"."slcode" = "invoiceline"."ilshiporder"
      and "shipline"."slline" = "invoiceline"."ilshipline"
      and "shipline"."slitem" = "items"."itcode") as "supplier_name",
    (select "shipline"."slqty"
      from "DBA"."shipline"
      where "shipline"."slcode" = "invoiceline"."ilshiporder"
      and "shipline"."slline" = "invoiceline"."ilshipline") as "invoiced_qty_pc",
    "IsNull"((select "items"."itisumtarIf"
      from "DBA"."items"
      where "items"."itcode" = "invoiceline"."ilitem"),'N') as "is_um_tarIf",
    "adresses"."adtel" as "customer_phone",
    "invoiceline"."illine" as "invoice_line",
    if "is_um_tarIf" <> 'Y' then
      1
    else(select "items"."itumtarIfconv"
        from "DBA"."items"
        where "items"."itcode" = "invoiceline"."ilitem")
    endif as "is_umtarIfconv",
    (select "salhead"."shadcontact"
      from "DBA"."salhead"
      where "salhead"."shcode" = "invoiceline"."ilsalorder") as "contact_seq",
    (select "contacts"."ctname"
      from "DBA"."contacts"
        ,"DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "invoiceline"."ilsalorder") as "Contact_Name",
    (select "contacts"."ctfirstname"
      from "DBA"."contacts"
        ,"DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "invoiceline"."ilsalorder") as "Contact_1Name",
    (select "contacts"."cttel"
      from "DBA"."contacts"
        ,"DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "invoiceline"."ilsalorder") as "Contact_Tel",
    (select "contacts"."ctmail"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "invoiceline"."ilsalorder") as "Contact_Mail",
    (select first "projhead"."phdatcrea"
      from "DBA"."salline" as "sal"
        ,"DBA"."projhead"
        ,"DBA"."invoiceline" as "invl"
      where "invl"."ilcode" = "invoicehead"."ihcode"
      and "sal"."slcode" = "invl"."ilsalorder"
      and "sal"."slline" = "invl"."ilsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_datecrea",
    (select first "projhead"."phcode"
      from "DBA"."salline" as "sal"
        ,"DBA"."projhead"
        ,"DBA"."invoiceline" as "invl"
      where "invl"."ilcode" = "invoicehead"."ihcode"
      and "sal"."slcode" = "invl"."ilsalorder"
      and "sal"."slline" = "invl"."ilsalline"
      and "IsNull"("sal"."sldvihead",0) > 0
      and "projhead"."phcode" = "sal"."sldvihead") as "quote_num",
    "IsNull"((select "yv_linkitad"."lkadref"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "invoiceline"."ilitem"
      and "yv_linkitad"."lkadcode" = "invoicehead"."ihcust"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_custref",
    "IsNull"((select "yv_linkitad"."lkadref2"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "invoiceline"."ilitem"
      and "yv_linkitad"."lkadcode" = "invoicehead"."ihcust"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_custdesc",
    "IsNull"((select "Items"."itdesc2"
      from "DBA"."items"
      where "items"."itcode" = "invoiceline"."ilitem"),'') as "item_desc2",
    if "IsNull"("invoiceline"."ilshipto",0) = 0 then
      if "IsNull"("invoiceline"."ilshiporder",0) = 0 then
        (select first "shipto"."stseq"
          from "DBA"."shipto"
          where "shipto"."stcode" = "invoicehead"."ihcust"
          and "shipto"."stmain" = 'Y'
          order by "shipto"."stactiv" desc,
          "shipto"."stseq" asc)
      else(select "shipto"."stseq"
          from "DBA"."shipto"
            ,"DBA"."shiphead"
          where "shipto"."stcode" = "shiphead"."shcust"
          and "shipto"."stseq" = "shiphead"."shshipto"
          and "shiphead"."shcode" = "invoiceline"."ilshiporder")
      endif
    else "invoiceline"."ilshipto"
    endif as "shipto_id",
    "invoicehead"."ihpaymode" as "invoice_paymode",
    (select "paymode"."pmdescint"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "invoicehead"."ihpaymode") as "invoice_paymode_intdesc",
    (select "paymode"."pmdescext"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "invoicehead"."ihpaymode") as "invoice_paymode_extdesc",
    (select "paymode"."pmdetail"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "invoicehead"."ihpaymode") as "invoice_paymode_comment",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PAYM'
      and "choices"."chcode" = "invoicehead"."ihpaymnt") as "invoice_paymntperiod",
    "adresses"."addesc2" as "customer_longname",
    "adresses"."adlegalform" as "customer_legalform",
    "adresses"."adcountr" as "customer_countryname"
    from "DBA"."invoiceline"
      ,"DBA"."invoicehead"
      ,"DBA"."adresses"
    where "invoiceline"."ilcode" = "invoicehead"."ihcode"
    and "invoicehead"."ihcust" = "adresses"."adcode"
    and "invoiceline"."iltype" not in( 'Y','Z' ) 
    and "invoiceline"."ilqty" <> 0 union all
  select "tickethead"."thcode" as "invoice_id",
    "tickethead"."thcode" as "invoice_number",
    '##########' as "invoicer_id",
    (select "admultico"."adname"
      from "DBA"."adresses" as "admultico"
      where "admultico"."adcode" = '##########') as "invoicer_name",
    'CAsHTICKET' as "document_type",
    'EUR' as "invoice_currency",
    "Date"("tickethead"."thdate") as "invoice_date",
    "Date"("tickethead"."thdate") as "invoice_expiry_date",
    "adresses"."adcode" as "customer_code",
    'TTTC' as "vat_type",
    "adresses"."adname" as "customer_name",
    "adresses"."adadr1" as "customer_adres1",
    "adresses"."adadr2" as "customer_adres2",
    "adresses"."adzip" as "customer_zip",
    "adresses"."adloc" as "customer_location",
    "adresses"."adcountrid" as "customer_country",
    "adresses"."adcustzone" as "customer_zone_id",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADCZ'
      and "choiceline"."clline" = "adresses"."adcustzone") as "custome_zone_name",
    "adresses"."adgrcust" as "customer_group",
    (select "adresgroup"."agdesc"
      from "DBA"."adresgroup"
      where "adresgroup"."agcode" = "adresses"."adgrcust") as "customer_group_name",
    "adresses"."adsalesman" as "salesman",
    "ticketline"."tltype" as "invoiceline_type",
    "ticketline"."tlitem" as "item_code",
    (select "items"."itname"
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "item_name",
    (select "items"."itstat1"
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "item_group_id",
    (select "itstat1"."imdesc"
      from "DBA"."itstat1"
      where "itstat1"."imcode" = "item_group_id") as "item_group_name",
    (select "items"."itstat2"
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "item_subgroup_id",
    (select "itstat2"."isdesc"
      from "DBA"."itstat2"
      where "itstat2"."iscode" = "item_group_id"
      and "itstat2"."iscode2" = "item_subgroup_id") as "item_subgroup_name",
    "ticketline"."tlqty" as "invoiced_qty",
    (select "items"."itum"
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "item_unit",
    "ticketline"."tlsalval" as "invoiced_value_currency",
    "ticketline"."tlsalval" as "invoiced_value",
    "ticketline"."tltva" as "vat_level",
    '' as "account_number",
    '' as "shipto_name",
    0 as "shipping_id",
    0 as "shipping_line",
    "tickethead"."thdate" as "shipping_date",
    0 as "sale_order_id",
    0 as "sale_order_line",
    0 as "project_id",
    '' as "project_name",
    '' as "project_family",
    0 as "subproject_id",
    '' as "subproject_name",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTA'
      and "choiceline"."clline" = "adresses"."adactivite") as "customer_activity",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADSO'
      and "choiceline"."clline" = "adresses"."adsource") as "customer_source",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTP'
      and "choiceline"."clline" = "adresses"."adtype") as "customer_type",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU0'
      and "choiceline"."clline" = "adresses"."adcrmuf00") as "cust_uf00",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU1'
      and "choiceline"."clline" = "adresses"."adcrmuf01") as "cust_uf01",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU2'
      and "choiceline"."clline" = "adresses"."adcrmuf02") as "cust_uf02",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU3'
      and "choiceline"."clline" = "adresses"."adcrmuf03") as "cust_uf03",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU4'
      and "choiceline"."clline" = "adresses"."adcrmuf04") as "cust_uf04",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU5'
      and "choiceline"."clline" = "adresses"."adcrmuf05") as "cust_uf05",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU6'
      and "choiceline"."clline" = "adresses"."adcrmuf06") as "cust_uf06",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU7'
      and "choiceline"."clline" = "adresses"."adcrmuf07") as "cust_uf07",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU8'
      and "choiceline"."clline" = "adresses"."adcrmuf08") as "cust_uf08",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU9'
      and "choiceline"."clline" = "adresses"."adcrmuf09") as "cust_uf09",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUA'
      and "choiceline"."clline" = "adresses"."adcrmuf10") as "cust_uf10",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUB'
      and "choiceline"."clline" = "adresses"."adcrmuf11") as "cust_uf11",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUC'
      and "choiceline"."clline" = "adresses"."adcrmuf12") as "cust_uf12",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUD'
      and "choiceline"."clline" = "adresses"."adcrmuf13") as "cust_uf13",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUE'
      and "choiceline"."clline" = "adresses"."adcrmuf14") as "cust_uf14",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUF'
      and "choiceline"."clline" = "adresses"."adcrmuf15") as "cust_uf15",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUG'
      and "choiceline"."clline" = "adresses"."adcrmuf16") as "cust_uf16",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUH'
      and "choiceline"."clline" = "adresses"."adcrmuf17") as "cust_uf17",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUI'
      and "choiceline"."clline" = "adresses"."adcrmuf18") as "cust_uf18",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUJ'
      and "choiceline"."clline" = "adresses"."adcrmuf19") as "cust_uf19",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUK'
      and "choiceline"."clline" = "adresses"."adcrmuf20") as "cust_uf20",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUL'
      and "choiceline"."clline" = "adresses"."adcrmuf21") as "cust_uf21",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUM'
      and "choiceline"."clline" = "adresses"."adcrmuf22") as "cust_uf22",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUN'
      and "choiceline"."clline" = "adresses"."adcrmuf23") as "cust_uf23",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUO'
      and "choiceline"."clline" = "adresses"."adcrmuf24") as "cust_uf24",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUP'
      and "choiceline"."clline" = "adresses"."adcrmuf25") as "cust_uf25",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUQ'
      and "choiceline"."clline" = "adresses"."adcrmuf26") as "cust_uf26",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUR'
      and "choiceline"."clline" = "adresses"."adcrmuf27") as "cust_uf27",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUS'
      and "choiceline"."clline" = "adresses"."adcrmuf28") as "cust_uf28",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUT'
      and "choiceline"."clline" = "adresses"."adcrmuf29") as "cust_uf29",
    "dateformat"("tickethead"."thdate",'YYYYMM') as "accounting_period",
    "IsNull"((select "clotfinit"."cistdconf"
      from "DBA"."clotfinit"
      where "clotfinit"."ciperiod" = "accounting_period"
      and "clotfinit"."cityp" = 'I'
      and "clotfinit"."ciitem" = "ticketline"."tlitem"
      and "clotfinit"."cimccode" = "invoicer_id"),
    (select if "IsNull"("items"."itisumtarIf",'N') = 'N' then
        "items"."itstdpur"
      else "IsNull"("items"."itumtbAscost",0)+"IsNull"("items"."itumtxtrcost",0)
      endif
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem")) as "cost",
    (select "IsNull"("bomhead"."bhramval",0)
      +"IsNull"("bomhead"."bhmacval",0)
      +"IsNull"("bomhead"."bhlabval",0)
      +"IsNull"("bomhead"."bhxtrval",0)
      from "DBA"."bomhead"
      where "bomhead"."bhcode" = "ticketline"."tlitem"
      and "bomhead"."bhtype" = '0') as "theorical_cost",
    (select "IsNull"("items"."itwistat",0)
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "item_netweight",
    (select "IsNull"("items"."itweight",0)
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "item_grossweight",
    (select "IsNull"("items"."itumusr",'')
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "stat_unit",
    (select "IsNull"("items"."itconvusr",0)
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "stat_convers",
    "IsNull"((select "clotfinit"."cistdconf"
      from "DBA"."clotfinit"
      where "clotfinit"."ciperiod" = "accounting_period"
      and "clotfinit"."cityp" = 'T'
      and "clotfinit"."ciitem" = "ticketline"."tlitem"),0) as "transport_cost",
    "ticketline"."tlbAscost" as "lotbAsecost",
    "ticketline"."tlxtrcost" as "loxtrcost",
    "tickethead"."thdate",
    "ticketline"."tltotval",
    '-' as "priceorigin",
    "ticketline"."tlsalval"/"ticketline"."tlqty" as "orderbAseprice",
    "ticketline"."tlsalval"/"ticketline"."tlqty" as "orderprice",
    "ticketline"."tlsalval"/"ticketline"."tlqty" as "ordernetprice",
    "ticketline"."tlsalval"/"ticketline"."tlqty" as "invoicebAseprice",
    "ticketline"."tlsalval"/"ticketline"."tlqty" as "invoicediscprice",
    "ticketline"."tlsalval"/"ticketline"."tlqty" as "invoicenetprice",
    (select "linkitad"."lkadcode"
      from "DBA"."linkitad"
      where "linkitad"."lkitem" = "ticketline"."tlitem"
      and "linkitad"."lktyp" = 'P'
      and "linkitad"."lkmain" = 'Y') as "supplier_code",
    (select "supp"."adname"
      from "DBA"."linkitad","DBA"."adresses" as "supp"
      where "linkitad"."lkitem" = "ticketline"."tlitem"
      and "linkitad"."lktyp" = 'P'
      and "linkitad"."lkmain" = 'Y'
      and "supp"."adcode" = "linkitad"."lkadcode") as "supplier_name",
    if "is_um_tarIf" = 'Y' and "is_umtarIfconv" <> 0 then
      if "IsNull"("ticketline"."tlqtypc",0) = 0 then
        "ticketline"."tlqty"/"is_umtarIfconv"
      else "ticketline"."tlqtypc"
      endif
    else "ticketline"."tlqty"
    endif as "invoiced_qty_pc",
    (select "items"."itisumtarIf"
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem") as "is_um_tarIf",
    "adresses"."adtel" as "customer_phone",
    "ticketline"."tlline" as "invoice_line",
    if "is_um_tarIf" <> 'Y' then
      1
    else(select "items"."itumtarIfconv"
        from "DBA"."items"
        where "items"."itcode" = "ticketline"."tlitem")
    endif as "is_umtarIfconv",
    null as "contact_seq",
    null as "Contact_Name",
    null as "Contact_1Name",
    null as "Contact_Tel",
    null as "Contact_Mail",
    null as "quote_datecrea",
    null as "quote_num",
    "IsNull"((select "yv_linkitad"."lkadref"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "ticketline"."tlitem"
      and "yv_linkitad"."lkadcode" = "adresses"."adcode"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_custref",
    "IsNull"((select "yv_linkitad"."lkadref2"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "ticketline"."tlitem"
      and "yv_linkitad"."lkadcode" = "adresses"."adcode"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_custdesc",
    "IsNull"((select "Items"."itdesc2"
      from "DBA"."items"
      where "items"."itcode" = "ticketline"."tlitem"),'') as "item_desc2",
    0 as "shipto_id",
    (select "ad"."adpaymode"
      from "DBA"."adresses" as "ad"
      where "ad"."adcode" = "adresses"."adcode") as "invoice_paymode",
    (select "paymode"."pmdescint"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "invoice_paymode") as "invoice_paymode_intdesc",
    (select "paymode"."pmdescext"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "invoice_paymode") as "invoice_paymode_extdesc",
    (select "paymode"."pmdetail"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "invoice_paymode") as "invoice_paymode_comment",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PAYM'
      and "choices"."chcode" = "adresses"."adcustpay") as "invoice_paymntperiod",
    "adresses"."addesc2" as "customer_longname",
    "adresses"."adlegalform" as "customer_legalform",
    "adresses"."adcountr" as "customer_countryname"
    from "DBA"."ticketline","DBA"."tickethead","DBA"."adresses"
    where "ticketline"."tlcode" = "tickethead"."thcode"
    and "ticketline"."tlcAsh" = "tickethead"."thcAsh"
    and "adresses"."adcode" = (select "parameters"."pmcval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'DIRCTSAL')
    and "ticketline"."tltype" = 'I'
    and "ticketline"."tlqty" <> 0
    and not exists(select *
      from "DBA"."ticketline_invoiceline"
      where "ticketline_invoiceline"."titlcode" = "ticketline"."tlcode"
      and "ticketline_invoiceline"."tithcAsh" = "ticketline"."tlcAsh"
      and "ticketline_invoiceline"."titlline" = "ticketline"."tlline")
```

## Tables source

- `adresgroup`
- `adresses`
- `bomhead`
- `choiceline`
- `choices`
- `clotfinit`
- `contacts`
- `filefamily`
- `filehead`
- `fileline`
- `invoicehead`
- `invoiceline`
- `items`
- `itstat1`
- `itstat2`
- `linkitad`
- `lots`
- `parameters`
- `paymode`
- `projhead`
- `salhead`
- `salline`
- `shiphead`
- `shipline`
- `shipto`
- `tickethead`
- `ticketline`
- `ticketline_invoiceline`
- `yv_linkitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `invoice_id` | Facture |
| `invoice_number` | Facture |
| `invoicer_id` | Facture |
| `admultico` | Admultico |
| `invoicer_name` | Nom/designation |
| `document_type` | Type |
| `invoice_currency` | Devise |
| `invoice_date` | Date |
| `invoice_expiry_date` | Date |
| `customer_code` | Code identifiant |
| `vat_type` | Type |
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
| `sh2` | Sh2 |
| `ad2` | Ad2 |
| `salesman` | Vente |
| `invoiceline_type` | Numero de ligne |
| `item_code` | Code identifiant |
| `item_name` | Nom/designation |
| `item_group_id` | Article |
| `item_group_name` | Nom/designation |
| `item_subgroup_id` | Article |
| `item_subgroup_name` | Nom/designation |
| `invoiced_qty` | Quantite |
| `item_unit` | Article |
| `invoiced_value_currency` | Devise |
| `invoiced_value` | Facture |
| `vat_level` | TVA |
| `account_number` | Account number |
| `shipto_name` | Nom/designation |
| `shipping_id` | Expedition |
| `shipping_line` | Numero de ligne |
| `shipping_date` | Date |
| `sale_order_id` | Vente |
| `sale_order_line` | Numero de ligne |
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
| `accounting_period` | Accounting period |
| `cost` | Cout |
| `theorical_cost` | Cout |
| `item_netweight` | Article |
| `item_grossweight` | Article |
| `stat_unit` | Unite |
| `stat_convers` | Stat convers |
| `transport_cost` | Cout |
| `lotbAsecost` | Cout |
| `loxtrcost` | Cout |
| `invoice_paydate` | Date |
| `invoice_paidamount` | Montant |
| `priceorigin` | Prix |
| `orderbAseprice` | Prix |
| `orderprice` | Prix |
| `ordernetprice` | Prix |
| `invoicebAseprice` | Prix |
| `invoicediscprice` | Prix |
| `invoicenetprice` | Prix |
| `supplier_code` | Code identifiant |
| `supp` | Fournisseur |
| `supplier_name` | Nom/designation |
| `invoiced_qty_pc` | Quantite |
| `is_um_tarIf` | Is um tarif |
| `customer_phone` | Telephone |
| `invoice_line` | Numero de ligne |
| `is_umtarIfconv` | Is umtarifconv |
| `contact_seq` | Contact |
| `Contact_Name` | Nom/designation |
| `Contact_1Name` | Nom/designation |
| `Contact_Tel` | Contact |
| `Contact_Mail` | Email |
| `sal` | Vente |
| `invl` | Facture |
| `quote_datecrea` | Date |
| `quote_num` | Quote num |
| `linkitemcust_custref` | Client |
| `linkitemcust_custdesc` | Description |
| `item_desc2` | Description |
| `shipto_id` | Expedition |
| `invoice_paymode` | Facture |
| `invoice_paymode_intdesc` | Description |
| `invoice_paymode_extdesc` | Description |
| `invoice_paymode_comment` | Commentaire |
| `invoice_paymntperiod` | Facture |
| `customer_longname` | Nom/designation |
| `customer_legalform` | Client |
| `customer_countryname` | Nom/designation |
| `ad` | Ad |
