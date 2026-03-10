# Vue: yq_purchases

## Description

Vue de requete sur les commandes d'achat avec details fournisseurs et lignes.

## SQL

```sql
create view //-----------------------------------------------------------------------------------------------------------
  "DBA"."yq_purchases" as
  select '0' as "order_typ",
    "adresses"."adcode" as "supplier_code",
    "adresses"."adname" as "supplier_name",
    "adresses"."adadr1" as "supplier_adres1",
    "adresses"."adadr2" as "supplier_adres2",
    "adresses"."adzip" as "supplier_zip",
    "adresses"."adloc" as "supplier_location",
    "adresses"."adtva" as "supplier_VAT",
    "adresses"."adcountrid" as "supplier_country",
    "adresses"."adcurr" as "supplier_currency",
    "adresses"."adtel" as "supplier_phone",
    "adresses"."adfax" as "supplier_fax",
    "adresses"."admail" as "supplier_email",
    "adresses"."adurl" as "supplier_web",
    "purhead"."phcode" as "order_number",
    "purhead"."phcurr" as "order_currency",
    "purhead"."phdatcrea" as "order_creation_date",
    (select "users"."usname"
      from "DBA"."users"
      where "users"."uscode" = "purhead"."phpurchaser") as "purchaser_name",
    "purhead"."phdlvt" as "incoterm",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'DLVT'
      and "choices"."chcode" = "purhead"."phdlvt") as "incoterm_desc",
    "purhead"."phdlvtplace" as "incoterm_place",
    "purline"."plline" as "order_line",
    "purline"."plstatus" as "line_code_status",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PURS'
      and "choices"."chcode" = "purline"."plstatus") as "line_status",
    if "IsNull"("items"."itisumtarif",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'ITUMTRF'),'') = '1' then
      "purline"."plqtyreq"
    else "purline"."plqtyord"
    endif as "order_order_qty",
    "purline"."pluomord" as "order_order_unit",
    "purline"."pluomconv" as "order_unit_conversion",
    "purline"."plqtyreq" as "order_qty",
    "purline"."pldatreq" as "requested_available_date",
    "purline"."pldatsup" as "requested_delivery_date",
    if "IsNull"("items"."itisumtarif",'') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'ITUMTRF'),'') = '1' then
      "purline"."plstdval"*"purline"."pluomconv"
    else "purline"."plstdval"
    endif as "purchase_unitcost",
    "purline"."plpurval" as "purchase_value",
    "purline"."plqtyrec" as "received_quantity",
    "purline"."plqtyinv" as "invoiced_quantity",
    "purline"."pldatrec" as "last_receipt_date",
    "purline"."pladref" as "line_suppref",
    "purline"."plrapnb" as "line_nbrap",
    "purline"."pllastrap" as "line_lastrap",
    "purline"."plsalhead" as "line_saleorder",
    "purline"."plsalline" as "line_saleline",
    "purline"."plinvclot" as "line_invoiced",
    "IsNull"("purline"."plval","purline"."plstdval") as "line_plval",
    "purline"."plrist" as "line_rist",
    "purline"."plcmnt" as "line_comment",
    cast(null as numeric(6)) as "ref_ord_ST",
    (select "linkitad"."lkadref"
      from "DBA"."linkitad"
      where "linkitad"."lktyp" = 'P'
      and "linkitad"."lkitem" = "items"."itcode"
      and "linkitad"."lkadcode" = "purhead"."phsupp"
      and "linkitad"."lkactiv" = 'Y') as "link_itemadress_ref",
    (select "linkitad"."lkadref2"
      from "DBA"."linkitad"
      where "linkitad"."lktyp" = 'P'
      and "linkitad"."lkitem" = "items"."itcode"
      and "linkitad"."lkadcode" = "purhead"."phsupp"
      and "linkitad"."lkactiv" = 'Y') as "link_itemadress_ref2",
    "items"."itcode" as "item_code",
    "items"."itname" as "item_name",
    "items"."itdesc2" as "item_longname",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'ICMT'
      and "comments"."cokey" = "purline"."plitem"
      and "comments"."cotab" = '1'
      and "comments"."coprpur" = 'Y') as "item_comment",
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "purline"."plitem"
      and "itemlang"."illgcode" = 'FR') as "item_name_FR",
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "purline"."plitem"
      and "itemlang"."illgcode" = 'NL') as "item_name_NL",
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "purline"."plitem"
      and "itemlang"."illgcode" = 'EN') as "item_name_EN",
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "purline"."plitem"
      and "itemlang"."illgcode" = 'GE') as "item_name_GE",
    "items"."itsecur" as "item_minimum_stock",
    "items"."itleadtime" as "item_total_lead_time",
    "items"."itavailtime" as "item_internal_time",
    "items"."itstdpur" as "item_eval_cost",
    (select "tvalvl_country"."tclvl"
      from "DBA"."tvalvl","DBA"."tvalvl_country"
      where "tvalvl"."ttcode" = "tvalvl_country"."tccode"
      and "tvalvl"."ttcode" = "items"."ittvalvl") as "TVA_level",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTA'
      and "choiceline"."clline" = "adresses"."adactivite") as "supplier_activity",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADSO'
      and "choiceline"."clline" = "adresses"."adsource") as "supplier_source",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTP'
      and "choiceline"."clline" = "adresses"."adtype") as "supplier_type",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU0'
      and "choiceline"."clline" = "adresses"."adcrmuf00") as "supplier_uf00",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU1'
      and "choiceline"."clline" = "adresses"."adcrmuf01") as "supplier_uf01",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU2'
      and "choiceline"."clline" = "adresses"."adcrmuf02") as "supplier_uf02",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU3'
      and "choiceline"."clline" = "adresses"."adcrmuf03") as "supplier_uf03",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU4'
      and "choiceline"."clline" = "adresses"."adcrmuf04") as "supplier_uf04",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU5'
      and "choiceline"."clline" = "adresses"."adcrmuf05") as "supplier_uf05",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU6'
      and "choiceline"."clline" = "adresses"."adcrmuf06") as "supplier_uf06",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU7'
      and "choiceline"."clline" = "adresses"."adcrmuf07") as "supplier_uf07",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU8'
      and "choiceline"."clline" = "adresses"."adcrmuf08") as "supplier_uf08",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU9'
      and "choiceline"."clline" = "adresses"."adcrmuf09") as "supplier_uf09",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUA'
      and "choiceline"."clline" = "adresses"."adcrmuf10") as "supplier_uf10",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUB'
      and "choiceline"."clline" = "adresses"."adcrmuf11") as "supplier_uf11",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUC'
      and "choiceline"."clline" = "adresses"."adcrmuf12") as "supplier_uf12",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUD'
      and "choiceline"."clline" = "adresses"."adcrmuf13") as "supplier_uf13",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUE'
      and "choiceline"."clline" = "adresses"."adcrmuf14") as "supplier_uf14",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUF'
      and "choiceline"."clline" = "adresses"."adcrmuf15") as "supplier_uf15",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUG'
      and "choiceline"."clline" = "adresses"."adcrmuf16") as "supplier_uf16",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUH'
      and "choiceline"."clline" = "adresses"."adcrmuf17") as "supplier_uf17",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUI'
      and "choiceline"."clline" = "adresses"."adcrmuf18") as "supplier_uf18",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUJ'
      and "choiceline"."clline" = "adresses"."adcrmuf19") as "supplier_uf19",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUK'
      and "choiceline"."clline" = "adresses"."adcrmuf20") as "supplier_uf20",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUL'
      and "choiceline"."clline" = "adresses"."adcrmuf21") as "supplier_uf21",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUM'
      and "choiceline"."clline" = "adresses"."adcrmuf22") as "supplier_uf22",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUN'
      and "choiceline"."clline" = "adresses"."adcrmuf23") as "supplier_uf23",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUO'
      and "choiceline"."clline" = "adresses"."adcrmuf24") as "supplier_uf24",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUP'
      and "choiceline"."clline" = "adresses"."adcrmuf25") as "supplier_uf25",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUQ'
      and "choiceline"."clline" = "adresses"."adcrmuf26") as "supplier_uf26",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUR'
      and "choiceline"."clline" = "adresses"."adcrmuf27") as "supplier_uf27",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUS'
      and "choiceline"."clline" = "adresses"."adcrmuf28") as "supplier_uf28",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUT'
      and "choiceline"."clline" = "adresses"."adcrmuf29") as "supplier_uf29",
    "socity"."adcode" as "socity_code", /*HA2486*/
    "socity"."adname" as "socity_name",
    "socity"."adadr1" as "socity_adadr1",
    "socity"."adadr2" as "socity_adadr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_country",
    "socity"."adtel" as "socity_tel",
    "socity"."adfax" as "socity_fax",
    "socity"."admail" as "socity_mail",
    "socity"."adurl" as "socity_url",
    "socity"."adbank" as "socity_bank",
    "socity"."adbic1" as "socity_bic1",
    "socity"."adbank2" as "socity_bank2",
    "socity"."adbic2" as "socity_bic2",
    "socity"."adtva" as "socity_tva",
    "socity"."adreg" as "socity_reg",
    "purhead"."phfileref" as "order_fileref",
    "purhead"."phfileline" as "order_fileline",
    (select "filehead"."fhdesc"
      from "DBA"."filehead"
      where "filehead"."fhcode" = "order_fileref") as "order_fileref_desc",
    (select "fileline"."fldesc"
      from "DBA"."fileline"
      where "fileline"."flcode" = "order_fileref"
      and "fileline"."flline" = "order_fileline") as "order_fileline_desc",
    "purhead"."phdatsupply" as "order_shipdate",
    "purhead"."phpurchaser" as "cntref",
    "purhead"."phcmnt" as "order_comment",
    "purhead"."phcntid" as "order_contractid",
    "purhead"."phcntref" as "order_contractref",
    "purhead"."phcntref" as "order_contactref",
    (select "users"."ustel"
      from "DBA"."users"
      where "users"."uscode" = "cntref") as "purchaser_tel",
    (select "users"."usmail"
      from "DBA"."users"
      where "users"."uscode" = "cntref") as "purchaser_mail",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chcode" = "purhead"."phsupppay"
      and "choices"."chtype" = 'PAYM') as "pay_term",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'CMGR'
      and "comments"."cotab" = '1'
      and "comments"."coprpur" = 'Y') as "general_cmnt1",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'FR'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_FR",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'NL'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_NL",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'EN'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_EN",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'GE'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_GE",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'CMGR'
      and "comments"."cotab" = '2'
      and "comments"."coprpur" = 'Y') as "general_cmnt2",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'FR'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_FR",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'NL'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_NL",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'EN'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_EN",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'GE'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_GE",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'CMSP'
      and "comments"."cotab" = '1') as "spec_cmnt",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'FR') as "spec_cmnt_FR",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'NL') as "spec_cmnt_NL",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'EN') as "spec_cmnt_EN",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'GE') as "spec_cmnt_GE",
    "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') as "param_SHIPDELIV",
    "realshipto"."stdesc" as "shipto_desc",
    "realshipto"."stadr1" as "shipto_adr1",
    "realshipto"."stadr2" as "shipto_adr2",
    "realshipto"."stzip" as "shipto_zip",
    "realshipto"."stloc" as "shipto_loc",
    "realshipto"."stcountr" as "shipto_country",
    "shipto"."stseq" as "shipto_origseq",
    "purhead"."phrefint" as "Ref_Int",
    "socity"."adiban1" as "socity_iban1", /*HA2486*/
    "socity"."adiban2" as "socity_iban2" /*HA2486*/
    from "DBA"."adresses"
      ,"DBA"."adresses" as "socity"
      ,"DBA"."purhead"
      ,"DBA"."purline"
      ,"DBA"."items"
      ,"DBA"."shipto"
      ,"DBA"."shipto" as "realshipto"
    where "adresses"."adcode" = "purhead"."phsupp"
    and "purline"."plitem" = "items"."itcode"
    and "purhead"."phcode" = "purline"."plcode"
    and "socity"."adcode" = '##########'
    and "shipto"."stseq" = "purline"."plshipto"
    and "shipto"."stcode" = "socity"."adcode"
    and "realshipto"."stcode" = if "IsNull"("shipto"."sttype",'') = 'Y' and "param_SHIPDELIV" = '1' then
      "IsNull"("shipto"."stshipadcode",'')
    else "shipto"."stcode"
    endif
    and "realshipto"."stseq" = if "IsNull"("shipto"."sttype",'') = 'Y' and "param_SHIPDELIV" = '1' then
      "IsNull"("shipto"."stshipseq",1)
    else "shipto"."stseq"
    endif union all
  select "IsNull"("purghead"."phtype",'2') as "order_typ",
    "adresses"."adcode" as "supplier_code",
    "adresses"."adname" as "supplier_name",
    "adresses"."adadr1" as "supplier_adres1",
    "adresses"."adadr2" as "supplier_adres2",
    "adresses"."adzip" as "supplier_zip",
    "adresses"."adloc" as "supplier_location",
    "adresses"."adtva" as "supplier_VAT",
    "adresses"."adcountrid" as "supplier_country",
    "adresses"."adcurr" as "supplier_currency",
    "adresses"."adtel" as "supplier_phone",
    "adresses"."adfax" as "supplier_fax",
    "adresses"."admail" as "supplier_email",
    "adresses"."adurl" as "supplier_web",
    "purghead"."phcode" as "order_number",
    "purghead"."phcurr" as "order_currency",
    "purghead"."phdatcrea" as "order_creation_date",
    (select "users"."usname"
      from "DBA"."users"
      where "users"."uscode" = "purghead"."phpurchaser") as "purchaser_name",
    "purghead"."phdlvt" as "incoterm",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'DLVT'
      and "choices"."chcode" = "purghead"."phdlvt") as "incoterm_desc",
    "purghead"."phdlvtplace" as "incoterm_place",
    "purgline"."plline" as "order_line",
    "purgline"."plstatus" as "line_code_status",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PURS'
      and "choices"."chcode" = "purgline"."plstatus") as "line_status",
    "purgline"."plqty" as "order_order_qty",
    "purgline"."pluomord" as "order_order_unit",
    1 as "order_unit_conversion",
    "purgline"."plqty" as "order_qty",
    "purgline"."pldatreq" as "requested_available_date",
    "purgline"."pldatreq" as "requested_delivery_date",
    "purgline"."plstdval" as "purchase_unitcost",
    "purgline"."plpurval" as "purchase_value",
    "purgline"."plqtyrec" as "received_quantity",
    "purgline"."plqtyinv" as "invoiced_quantity",
    "purgline"."pldatrec" as "last_receipt_date",
    '' as "line_suppref",
    "purgline"."plrapnb" as "line_nbrap",
    "purgline"."pllastrap" as "line_lastrap",
    "purgline"."plsalhead" as "line_saleorder",
    "purgline"."plsalline" as "line_saleline",
    "purgline"."plinvclot" as "line_invoiced",
    "purgline"."plstdval" as "line_plval",
    0 as "line_rist",
    "purgline"."plcmnt" as "line_comment",
    "purgline"."plrefnum" as "ref_ord_ST",
    '' as "link_itemadress_ref",
    '' as "link_itemadress_ref2",
    '' as "item_code",
    "purgline"."pldesc" as "item_name",
    '' as "item_longname",
    '' as "item_comment",
    '' as "item_name_FR",
    '' as "item_name_NL",
    '' as "item_name_EN",
    '' as "item_name_GE",
    0 as "item_minimum_stock",
    0 as "item_total_lead_time",
    0 as "item_internal_time",
    null as "item_eval_cost",
    null as "TVA_level",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTA'
      and "choiceline"."clline" = "adresses"."adactivite") as "supplier_activity",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADSO'
      and "choiceline"."clline" = "adresses"."adsource") as "supplier_source",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADTP'
      and "choiceline"."clline" = "adresses"."adtype") as "supplier_type",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU0'
      and "choiceline"."clline" = "adresses"."adcrmuf00") as "supplier_uf00",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU1'
      and "choiceline"."clline" = "adresses"."adcrmuf01") as "supplier_uf01",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU2'
      and "choiceline"."clline" = "adresses"."adcrmuf02") as "supplier_uf02",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU3'
      and "choiceline"."clline" = "adresses"."adcrmuf03") as "supplier_uf03",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU4'
      and "choiceline"."clline" = "adresses"."adcrmuf04") as "supplier_uf04",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU5'
      and "choiceline"."clline" = "adresses"."adcrmuf05") as "supplier_uf05",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU6'
      and "choiceline"."clline" = "adresses"."adcrmuf06") as "supplier_uf06",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU7'
      and "choiceline"."clline" = "adresses"."adcrmuf07") as "supplier_uf07",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU8'
      and "choiceline"."clline" = "adresses"."adcrmuf08") as "supplier_uf08",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADU9'
      and "choiceline"."clline" = "adresses"."adcrmuf09") as "supplier_uf09",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUA'
      and "choiceline"."clline" = "adresses"."adcrmuf10") as "supplier_uf10",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUB'
      and "choiceline"."clline" = "adresses"."adcrmuf11") as "supplier_uf11",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUC'
      and "choiceline"."clline" = "adresses"."adcrmuf12") as "supplier_uf12",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUD'
      and "choiceline"."clline" = "adresses"."adcrmuf13") as "supplier_uf13",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUE'
      and "choiceline"."clline" = "adresses"."adcrmuf14") as "supplier_uf14",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUF'
      and "choiceline"."clline" = "adresses"."adcrmuf15") as "supplier_uf15",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUG'
      and "choiceline"."clline" = "adresses"."adcrmuf16") as "supplier_uf16",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUH'
      and "choiceline"."clline" = "adresses"."adcrmuf17") as "supplier_uf17",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUI'
      and "choiceline"."clline" = "adresses"."adcrmuf18") as "supplier_uf18",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUJ'
      and "choiceline"."clline" = "adresses"."adcrmuf19") as "supplier_uf19",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUK'
      and "choiceline"."clline" = "adresses"."adcrmuf20") as "supplier_uf20",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUL'
      and "choiceline"."clline" = "adresses"."adcrmuf21") as "supplier_uf21",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUM'
      and "choiceline"."clline" = "adresses"."adcrmuf22") as "supplier_uf22",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUN'
      and "choiceline"."clline" = "adresses"."adcrmuf23") as "supplier_uf23",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUO'
      and "choiceline"."clline" = "adresses"."adcrmuf24") as "supplier_uf24",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUP'
      and "choiceline"."clline" = "adresses"."adcrmuf25") as "supplier_uf25",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUQ'
      and "choiceline"."clline" = "adresses"."adcrmuf26") as "supplier_uf26",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUR'
      and "choiceline"."clline" = "adresses"."adcrmuf27") as "supplier_uf27",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUS'
      and "choiceline"."clline" = "adresses"."adcrmuf28") as "supplier_uf28",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'ADUT'
      and "choiceline"."clline" = "adresses"."adcrmuf29") as "supplier_uf29",
    "socity"."adcode" as "socity_code", /*HA2486*/
    "socity"."adname" as "socity_name",
    "socity"."adadr1" as "socity_adadr1",
    "socity"."adadr2" as "socity_adadr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_country",
    "socity"."adtel" as "socity_tel",
    "socity"."adfax" as "socity_fax",
    "socity"."admail" as "socity_mail",
    "socity"."adurl" as "socity_url",
    "socity"."adbank" as "socity_bank",
    "socity"."adbic1" as "socity_bic1",
    "socity"."adbank2" as "socity_bank2",
    "socity"."adbic2" as "socity_bic2",
    "socity"."adtva" as "socity_tva",
    "socity"."adreg" as "socity_reg",
    "purghead"."phfileref" as "order_fileref",
    "purghead"."phfileline" as "order_fileline",
    (select "filehead"."fhdesc"
      from "DBA"."filehead"
      where "filehead"."fhcode" = "order_fileref") as "order_fileref_desc",
    (select "fileline"."fldesc"
      from "DBA"."fileline"
      where "fileline"."flcode" = "order_fileref"
      and "fileline"."flline" = "order_fileline") as "order_fileline_desc",
    null as "order_shipdate",
    "purghead"."phpurchaser" as "cntref",
    "purghead"."phcmnt" as "order_comment",
    null as "order_contractid",
    null as "order_contractref",
    null as "order_contactref",
    (select "users"."ustel"
      from "DBA"."users"
      where "users"."uscode" = "cntref") as "purchaser_tel",
    (select "users"."usmail"
      from "DBA"."users"
      where "users"."uscode" = "cntref") as "purchaser_mail",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chcode" = "purghead"."phsupppay"
      and "choices"."chtype" = 'PAYM') as "pay_term",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'CMGR'
      and "comments"."cotab" = '1'
      and "comments"."coprpur" = 'Y') as "general_cmnt1",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'FR'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_FR",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'NL'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_NL",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'EN'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_EN",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'GE'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt1_GE",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'CMGR'
      and "comments"."cotab" = '2'
      and "comments"."coprpur" = 'Y') as "general_cmnt2",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'FR'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_FR",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'NL'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_NL",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'EN'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_EN",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMGR'
      and "comments_lang"."cotab" = '2'
      and "comments_lang"."colang" = 'GE'
      and "comments_lang"."coprpur" = 'Y') as "general_cmnt2_GE",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'CMSP'
      and "comments"."cotab" = '1') as "spec_cmnt",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'FR') as "spec_cmnt_FR",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'NL') as "spec_cmnt_NL",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'EN') as "spec_cmnt_EN",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '1'
      and "comments_lang"."colang" = 'GE') as "spec_cmnt_GE",
    "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') as "param_SHIPDELIV",
    "realshipto"."stdesc" as "shipto_desc",
    "realshipto"."stadr1" as "shipto_adr1",
    "realshipto"."stadr2" as "shipto_adr2",
    "realshipto"."stzip" as "shipto_zip",
    "realshipto"."stloc" as "shipto_loc",
    "realshipto"."stcountr" as "shipto_country",
    "shipto"."stseq" as "shipto_origseq",
    "purghead"."phrefint" as "Ref_Int",
    "socity"."adiban1" as "socity_iban1", /*HA2486*/
    "socity"."adiban2" as "socity_iban2" /*HA2486*/
    from "DBA"."adresses"
      ,"DBA"."adresses" as "socity"
      ,"DBA"."purghead"
      ,"DBA"."purgline"
      ,"DBA"."shipto"
      ,"DBA"."shipto" as "realshipto"
    where "adresses"."adcode" = "purghead"."phsupp"
    and "purghead"."phcode" = "purgline"."plcode"
    and "socity"."adcode" = '##########'
    and "shipto"."stseq" = "purgline"."plshipto"
    and "shipto"."stcode" = "socity"."adcode"
    and "realshipto"."stcode" = if "IsNull"("shipto"."sttype",'') = 'Y' and "param_SHIPDELIV" = '1' then
      "IsNull"("shipto"."stshipadcode",'')
    else "shipto"."stcode"
    endif
    and "realshipto"."stseq" = if "IsNull"("shipto"."sttype",'') = 'Y' and "param_SHIPDELIV" = '1' then
      "IsNull"("shipto"."stshipseq",1)
    else "shipto"."stseq"
    endif
```

## Tables source

- `adresses`
- `choiceline`
- `choices`
- `comments`
- `comments_lang`
- `filehead`
- `fileline`
- `itemlang`
- `items`
- `linkitad`
- `progparam`
- `purghead`
- `purgline`
- `purhead`
- `purline`
- `shipto`
- `tvalvl`
- `tvalvl_country`
- `users`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `order_typ` | Order typ |
| `supplier_code` | Code identifiant |
| `supplier_name` | Nom/designation |
| `supplier_adres1` | Fournisseur |
| `supplier_adres2` | Fournisseur |
| `supplier_zip` | Fournisseur |
| `supplier_location` | Fournisseur |
| `supplier_VAT` | Fournisseur |
| `supplier_country` | Fournisseur |
| `supplier_currency` | Fournisseur |
| `supplier_phone` | Telephone |
| `supplier_fax` | Fax |
| `supplier_email` | Email |
| `supplier_web` | Fournisseur |
| `order_number` | Order number |
| `order_currency` | Devise |
| `order_creation_date` | Date |
| `purchaser_name` | Nom/designation |
| `incoterm` | Incoterm |
| `incoterm_desc` | Description |
| `incoterm_place` | Incoterm place |
| `order_line` | Numero de ligne |
| `line_code_status` | Code identifiant |
| `line_status` | Statut |
| `order_order_qty` | Quantite |
| `order_order_unit` | Unite |
| `order_unit_conversion` | Unite |
| `order_qty` | Quantite |
| `requested_available_date` | Date |
| `requested_delivery_date` | Date |
| `purchase_unitcost` | Cout |
| `purchase_value` | Achat |
| `received_quantity` | Received quantity |
| `invoiced_quantity` | Facture |
| `last_receipt_date` | Date |
| `line_suppref` | Fournisseur |
| `line_nbrap` | Numero de ligne |
| `line_lastrap` | Numero de ligne |
| `line_saleorder` | Numero de ligne |
| `line_saleline` | Numero de ligne |
| `line_invoiced` | Numero de ligne |
| `line_plval` | Numero de ligne |
| `line_rist` | Numero de ligne |
| `line_comment` | Commentaire |
| `ref_ord_ST` | Reference |
| `link_itemadress_ref` | Article |
| `link_itemadress_ref2` | Article |
| `item_code` | Code identifiant |
| `item_name` | Nom/designation |
| `item_longname` | Nom/designation |
| `item_comment` | Commentaire |
| `item_name_FR` | Nom/designation |
| `item_name_NL` | Nom/designation |
| `item_name_EN` | Nom/designation |
| `item_name_GE` | Nom/designation |
| `item_minimum_stock` | Article |
| `item_total_lead_time` | Article |
| `item_internal_time` | Article |
| `item_eval_cost` | Cout |
| `TVA_level` | Tva level |
| `supplier_activity` | Fournisseur |
| `supplier_source` | Fournisseur |
| `supplier_type` | Fournisseur |
| `supplier_uf00` | Fournisseur |
| `supplier_uf01` | Fournisseur |
| `supplier_uf02` | Fournisseur |
| `supplier_uf03` | Fournisseur |
| `supplier_uf04` | Fournisseur |
| `supplier_uf05` | Fournisseur |
| `supplier_uf06` | Fournisseur |
| `supplier_uf07` | Fournisseur |
| `supplier_uf08` | Fournisseur |
| `supplier_uf09` | Fournisseur |
| `supplier_uf10` | Fournisseur |
| `supplier_uf11` | Fournisseur |
| `supplier_uf12` | Fournisseur |
| `supplier_uf13` | Fournisseur |
| `supplier_uf14` | Fournisseur |
| `supplier_uf15` | Fournisseur |
| `supplier_uf16` | Fournisseur |
| `supplier_uf17` | Fournisseur |
| `supplier_uf18` | Fournisseur |
| `supplier_uf19` | Fournisseur |
| `supplier_uf20` | Fournisseur |
| `supplier_uf21` | Fournisseur |
| `supplier_uf22` | Fournisseur |
| `supplier_uf23` | Fournisseur |
| `supplier_uf24` | Fournisseur |
| `supplier_uf25` | Fournisseur |
| `supplier_uf26` | Fournisseur |
| `supplier_uf27` | Fournisseur |
| `supplier_uf28` | Fournisseur |
| `supplier_uf29` | Fournisseur |
| `socity_code` | Code identifiant |
| `socity_name` | Nom/designation |
| `socity_adadr1` | Ville |
| `socity_adadr2` | Ville |
| `socity_zip` | Ville |
| `socity_loc` | Ville |
| `socity_country` | Pays |
| `socity_tel` | Ville |
| `socity_fax` | Fax |
| `socity_mail` | Email |
| `socity_url` | Ville |
| `socity_bank` | Ville |
| `socity_bic1` | Ville |
| `socity_bank2` | Ville |
| `socity_bic2` | Ville |
| `socity_tva` | Ville |
| `socity_reg` | Ville |
| `order_fileref` | Reference |
| `order_fileline` | Numero de ligne |
| `order_fileref_desc` | Description |
| `order_fileline_desc` | Description |
| `order_shipdate` | Date |
| `cntref` | Reference |
| `order_comment` | Commentaire |
| `order_contractid` | Order contractid |
| `order_contractref` | Reference |
| `order_contactref` | Reference |
| `purchaser_tel` | Achat |
| `purchaser_mail` | Email |
| `pay_term` | Pay term |
| `general_cmnt1` | Commentaire |
| `general_cmnt1_FR` | Commentaire |
| `general_cmnt1_NL` | Commentaire |
| `general_cmnt1_EN` | Commentaire |
| `general_cmnt1_GE` | Commentaire |
| `general_cmnt2` | Commentaire |
| `general_cmnt2_FR` | Commentaire |
| `general_cmnt2_NL` | Commentaire |
| `general_cmnt2_EN` | Commentaire |
| `general_cmnt2_GE` | Commentaire |
| `spec_cmnt` | Commentaire |
| `spec_cmnt_FR` | Commentaire |
| `spec_cmnt_NL` | Commentaire |
| `spec_cmnt_EN` | Commentaire |
| `spec_cmnt_GE` | Commentaire |
| `param_SHIPDELIV` | Livraison |
| `shipto_desc` | Description |
| `shipto_adr1` | Expedition |
| `shipto_adr2` | Expedition |
| `shipto_zip` | Code postal |
| `shipto_loc` | Expedition |
| `shipto_country` | Pays |
| `shipto_origseq` | Expedition |
| `Ref_Int` | Reference |
| `socity_iban1` | Ville |
| `socity_iban2` | Ville |
| `socity` | Ville |
| `realshipto` | Expedition |
