# Vue: yv_confsale

## Description

Vue de confirmation de vente avec details de commande et livraison.

## SQL

```sql
create view "DBA"."yv_confsale" as
  select '10' as "cmd_type",
    "shipto"."stdesc" as "shipto_stdesc",
    "st"."stadr1" as "shipto_adr1",
    "st"."stadr2" as "shipto_adr2",
    "st"."stzip" as "shipto_zip",
    "st"."stloc" as "shipto_loc",
    "st"."stcountr" as "shipto_countr",
    "items"."itname" as "item_name",
    "salline"."sluomord" as "saleline_uomord",
    "items"."itcode" as "item_code",
    "items"."itqtypal" as "item_qtypal",
    "items"."itintrastat" as "item_refintrastat",
    (select "intrastat"."isref"
      from "DBA"."intrastat"
      where "intrastat"."isactiv" = 'Y'
      and "intrastat"."iscode" = "items"."itintrastat") as "item_intrastat",
    (if "IsNull"("salline"."slvalsddisc",0) <> 0 then
      "salline"."slvalsddisc"
    else "salline"."slstdval"
    endif) as "saleline_stdval",
    "salline"."slqtyord" as "saleline_qtycust",
    "salline"."slqtyreq" as "saleline_qtypmix",
    "salline"."sldatreq" as "saleline_datereq",
    "salline"."slline" as "saleline_line",
    "salhead"."shcurr" as "sale_curr",
    "salhead"."shcmnt" as "sale_cmnt",
    "salhead"."shdatcrea" as "sale_datcrea",
    "salhead"."shdatreq" as "sale_datreq",
    "items"."itdesc2" as "item_longdesc",
    "salhead"."shcode" as "sale_num",
    "salhead"."shcustref" as "sale_custref",
    "salhead"."shsalesman" as "salesman_code",
    (select "salesman"."smname"
      from "DBA"."salesman"
      where "salesman"."smcode" = "salhead"."shsalesman") as "salesman_desc",
    (select "yv_linkitad"."lkcode"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lkitem" = "items"."itcode"
      and "yv_linkitad"."lkadcode" = "salhead"."shcust"
      and "yv_linkitad"."lkactiv" = 'Y'
      and "yv_linkitad"."lktyp" = 'S') as "linkitemcust_code",
    (select "yv_linkitad"."lkadref"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lkitem" = "items"."itcode"
      and "yv_linkitad"."lkadcode" = "salhead"."shcust"
      and "yv_linkitad"."lkactiv" = 'Y'
      and "yv_linkitad"."lktyp" = 'S') as "linkitemcust_ref",
    (select "yv_linkitad"."lkadref2"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lkitem" = "items"."itcode"
      and "yv_linkitad"."lkadcode" = "salhead"."shcust"
      and "yv_linkitad"."lkactiv" = 'Y'
      and "yv_linkitad"."lktyp" = 'S') as "linkitemcust_desc",
    (select "linkitadpack"."lpitadlayer"
      from "DBA"."linkitadpack"
      where "linkitadpack"."lpitem" = "items"."itcode"
      and "linkitadpack"."lpadcode" = "salhead"."shcust"
      and "linkitadpack"."lptyp" = 'S') as "linkitemcustpack_nbgroup_layers",
    (select "linkitadpack"."lpnblayer"
      from "DBA"."linkitadpack"
      where "linkitadpack"."lpitem" = "items"."itcode"
      and "linkitadpack"."lpadcode" = "salhead"."shcust"
      and "linkitadpack"."lptyp" = 'S') as "linkitemcustpack_nblayersbypal",
    (select "linkitadpack"."lpumgroup"
      from "DBA"."linkitadpack"
      where "linkitadpack"."lpitem" = "items"."itcode"
      and "linkitadpack"."lpadcode" = "salhead"."shcust"
      and "linkitadpack"."lptyp" = 'S') as "linkitemcustpack_unitbygroup",
    "salline"."slcomment" as "saleline_cmnt",
    "salline"."slsalghost" as "saleline_headkit",
    (select first "Count"()
      from "DBA"."salline" as "sals"
      where "sals"."slcode" = "salhead"."shcode"
      and "sals"."slsalghost" = "salline"."slline"
      order by 1 asc) as "saleline_isheadkit",
    "salline"."slsample" as "saleline_sample",
    "salline"."slrist" as "saleline_rist",
    "salline"."slsddisc" as "saleline_ristquantit",
    "salline"."slprorig" as "saleline_origprice",
    "salline"."slratehead" as "saleline_Fromrate",
    "salline"."slqtyinv" as "saleline_qtyinv",
    "salline"."slorval" as "saleline_orval",
    "salline"."slsalval" as "saleline_salval",
    "salline"."slunitprice" as "saleline_unitprice",
    "salline"."slbaseprice" as "saleline_baseprice",
    "salline"."slvalsddisc" as "saleline_valsddisc",
    "salline"."slorigval" as "saleline_origval",
    "salline"."slfileref" as "saleline_fileref",
    "salline"."slfileline" as "saleline_fileline",
    "salline"."sldvihead" as "saleline_numquote",
    "salline"."sldviline" as "saleline_numlinequote",
    "salhead"."shcustpay" as "sale_typpay",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PAYM'
      and "choices"."chcode" = "salhead"."shcustpay") as "sale_typpaydesc",
    "salhead"."shdlvt" as "sale_dlvt",
    (select "Choices"."chname"
      from "DBA"."Choices"
      where "Choices"."chtype" = 'DLVT'
      and "Choices"."chcode" = "sale_dlvt") as "sale_dlvtdesc",
    "salhead"."shdlvtplace" as "sale_dlvtplace",
    "salhead"."shcust" as "cust_code",
    "adresses"."adtvatyp" as "cust_tvatyp",
    "adresses"."adname" as "cust_name",
    "adresses"."addesc2" as "Cust_LongName", /*HA2486*/
    "adresses"."adlegalform" as "Cust_LegalForm", /*HA2486*/
    "adresses"."adadr1" as "cust_adr1",
    "adresses"."adadr2" as "cust_adr2",
    "adresses"."adzip" as "cust_zip",
    "adresses"."adloc" as "cust_loc",
    "adresses"."adcountr" as "cust_countr",
    "adresses"."adtel" as "cust_tel",
    "adresses"."adfax" as "cust_fax",
    "socity"."adcode" as "socity_code",
    "socity"."adname" as "socity_Name",
    "socity"."addesc2" as "socity_LongName",
    "socity"."adlegalform" as "socity_LegalForm", /*HA2486*/
    "socity"."adadr1" as "socity_adr1",
    "socity"."adadr2" as "socity_adr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_countr",
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
    "salhead"."shadcontact" as "contact_num",
    (select "contacts"."ctname"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact") as "Contact_Name",
    (select "contacts"."ctfirstname"
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
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'SALA'
      and "choices"."chcode" = "salhead"."shautho") as "sale_authorizatio",
    "salhead"."shdirectsal" as "sale_directsale",
    "salline"."sldatship" as "saleline_dateship",
    "salline"."slqtyreal" as "saleline_qtyreal",
    "salline"."slqtyalloc" as "saleline_qtyalloc",
    "salline"."slallocprinted" as "saleline_allocprinted",
    "IsNull"((select "yv_linkitad"."lkcalcdluo"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "salline"."slitem"
      and "yv_linkitad"."lkadcode" = "salhead"."shcust"
      and "yv_linkitad"."lkactiv" = 'Y'),'N') as "linkitemcust_calcdluo",
    "IsNull"((select "yv_linkitad"."lkpcratesregroup"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "salline"."slitem"
      and "yv_linkitad"."lkadcode" = "salhead"."shcust"
      and "yv_linkitad"."lkactiv" = 'Y'),'N') as "linkitemcust_cratesregroup",
    "IsNull"((select "yv_linkitad"."lkremval"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "salline"."slitem"
      and "yv_linkitad"."lkadcode" = "salhead"."shcust"
      and "yv_linkitad"."lkactiv" = 'Y'),0) as "linkitemcust_remval",
    "IsNull"((select "parameters"."pmcval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'REMREF'),'R') as "Param_remref",
    "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'CALCDLUO'),'') as "Param_CALCDLUO",
    "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') as "Param_SHIPDELIV",
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
    (select "tvalvl_country"."tclvl"
      from "DBA"."tvalvl_country"
      where "tvalvl_country"."tccode" = "items"."ittvalvl"
      and "tvalvl_country"."tccountry" = "socity"."adcountrid") as "item_tvarate",
    "socity"."adiban1" as "socity_iban1",
    "socity"."adiban2" as "socity_iban2",
    "st"."stcode" as "shipto_adcode",
    "st"."stseq" as "shipto_seq",
    "adresses"."aduseadrescomp" as "cust_useadrescomp",
    "adresses"."adadrescomp1" as "cust_adrescomp1",
    "adresses"."adadrescomp2" as "cust_adrescomp2",
    "adresses"."adadrescomp3" as "cust_adrescomp3",
    "adresses"."adadrescomp4" as "cust_adrescomp4",
    "adresses"."adadrescomp5" as "cust_adrescomp5",
    "adresses"."adadrescomp6" as "cust_adrescomp6",
    "st"."stuseadrescomp" as "shipto_useadrescomp",
    "st"."stadrescomp1" as "shipto_adrescomp1",
    "st"."stadrescomp2" as "shipto_adrescomp2",
    "st"."stadrescomp3" as "shipto_adrescomp3",
    "st"."stadrescomp4" as "shipto_adrescomp4",
    "st"."stadrescomp5" as "shipto_adrescomp5",
    "st"."stadrescomp6" as "shipto_adrescomp6",
    "st"."stcontact" as "Shipto_Contact" /*HA2486*/
    from "DBA"."shipto"
      ,"DBA"."shipto" as "st"
      ,"DBA"."salhead"
      ,"DBA"."salline"
      ,"DBA"."items"
      ,"DBA"."adresses"
      ,"DBA"."adresses" as "socity"
    where "salline"."slcode" = "salhead"."shcode"
    and "salline"."slitem" = "items"."itcode"
    and "shipto"."stseq" = "salline"."slshipto"
    and "salhead"."shcust" = "shipto"."stcode"
    and "adresses"."adcode" = "salhead"."shcust"
    and "salline"."slstatus" < '5'
    and("salline"."slprintghost" <> 'N' or "salline"."slprintghost" is null)
    and "st"."stcode" = if "IsNull"("shipto"."sttype",'N') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipadcode"
    else "shipto"."stcode"
    endif
    and "st"."stseq" = if "IsNull"("shipto"."sttype",'N') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipseq"
    else "shipto"."stseq"
    endif
    and "socity"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"("salhead"."shmccode",'##########') /*os2351*/
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "salhead"."shcust"),'##########')
    endif union all
  select '20',
    "shipto"."stdesc" as "shipto_stdesc", /*HA2547*/
    "st"."stadr1" as "shipto_adr1", /*HA2547*/
    "st"."stadr2" as "shipto_adr2", /*HA2547*/
    "st"."stzip" as "shipto_zip", /*HA2547*/
    "st"."stloc" as "shipto_loc", /*HA2547*/
    "st"."stcountr" as "shipto_countr", /*HA2547*/
    "salaux"."sadesc",
    "salaux"."saum",'',
    null,
    null,
    null,
    "salaux"."sastdval",
    "salaux"."saqty",
    "salaux"."saqty",
    null,
    "salaux"."saline",
    "salhead"."shcurr",
    "salhead"."shcmnt" as "sale_cmnt",
    "salhead"."shdatcrea" as "sale_datcrea",
    "salhead"."shdatreq" as "sale_datreq",'',
    "salhead"."shcode",
    "salhead"."shcustref",
    "salhead"."shsalesman" as "salesman_code",
    (select "salesman"."smname"
      from "DBA"."salesman"
      where "salesman"."smcode" = "salhead"."shsalesman") as "salesman_desc",
    '',
    '',
    '',
    '',
    '',
    '',
    "salaux"."sacomment",
    0,
    null,'N',
    0 as "saleline_rist",
    0 as "saleline_ristquantit",
    null as "saleline_origprice",
    null as "saleline_Fromrate",
    null as "saleline_qtyinv",
    null as "saleline_qtyorval",
    "salaux"."sasalval" as "saleline_salval",
    "salaux"."sastdval" as "saleline_unitprice",
    null as "saleline_baseprice",
    null as "saleline_valsddisc",
    null as "saleline_origval",
    "salaux"."safileref" as "saleline_fileref",
    "salaux"."safileline" as "saleline_fileline",
    0 as "saleline_numquote",
    0 as "saleline_numlinequote",
    "salhead"."shcustpay" as "sale_typpay",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PAYM'
      and "choices"."chcode" = "salhead"."shcustpay") as "sale_typpaydesc",
    "salhead"."shdlvt" as "sale_dlvt",
    (select "Choices"."chname"
      from "DBA"."Choices"
      where "Choices"."chtype" = 'DLVT'
      and "Choices"."chcode" = "sale_dlvt") as "sale_dlvtdesc",
    "salhead"."shdlvtplace" as "sale_dlvtplace",
    "salhead"."shcust" as "cust_code",
    "adresses"."adtvatyp" as "cust_tvatyp",
    "adresses"."adname" as "cust_name",
    "adresses"."addesc2" as "Cust_LongName", /*HA2486*/
    "adresses"."adlegalform" as "Cust_LegalForm", /*HA2486*/
    "adresses"."adadr1" as "cust_adr1",
    "adresses"."adadr2" as "cust_adr2",
    "adresses"."adzip" as "cust_zip",
    "adresses"."adloc" as "cust_loc",
    "adresses"."adcountr" as "cust_countr",
    "adresses"."adtel" as "cust_tel",
    "adresses"."adfax" as "cust_fax",
    "socity"."adcode" as "socity_code",
    "socity"."adname" as "socity_Name",
    "socity"."addesc2" as "socity_LongName",
    "socity"."adlegalform" as "socity_LegalForm", /*HA2486*/
    "socity"."adadr1" as "socity_adr1",
    "socity"."adadr2" as "socity_adr2",
    "socity"."adzip" as "socity_zip",
    "socity"."adloc" as "socity_loc",
    "socity"."adcountr" as "socity_countr",
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
    "salhead"."shadcontact" as "contact_num",
    (select "contacts"."ctname"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact") as "Contact_Name",
    (select "contacts"."ctfirstname"
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
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'SALA'
      and "choices"."chcode" = "salhead"."shautho") as "sale_authorizatio",
    "salhead"."shdirectsal" as "sale_directsale",
    null as "saleline_dateship",
    0 as "saleline_qtyreal",
    0 as "saleline_qtyalloc",
    '' as "saleline_allocprinted",
    'N' as "linkitemcust_calcdluo",
    'N' as "linkitemcust_cratesregroup",
    0 as "linkitemcust_remval",
    "IsNull"((select "parameters"."pmcval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'REMREF'),'R') as "Param_remref",
    "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'CALCDLUO'),'') as "Param_CALCDLUO",
    "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') as "Param_SHIPDELIV",
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
    "IsNull"((select "tvalvl_country"."tclvl"
      from "DBA"."tvalvl_country"
      where "tvalvl_country"."tccode" = (select "choiceline"."clival2"
        from "DBA"."choiceline"
        where "choiceline"."clcode" = 'FATY'
        and "choiceline"."clline" = "salaux"."safatype")
      and "tvalvl_country"."tccountry" = "socity"."adcountrid"),"IsNull"((select "parameters"."pmnval"
      from "DBA"."parameters"
      where "parameters"."pmcode" = 'TVAFRAIS'),21)) as "item_tvarate",
    "socity"."adiban1" as "socity_iban1",
    "socity"."adiban2" as "socity_iban2",
    "st"."stcode" as "shipto_adcode", /*HA2547*/
    "st"."stseq" as "shipto_seq", /*HA2547*/
    "adresses"."aduseadrescomp" as "cust_useadrescomp",
    "adresses"."adadrescomp1" as "cust_adrescomp1",
    "adresses"."adadrescomp2" as "cust_adrescomp2",
    "adresses"."adadrescomp3" as "cust_adrescomp3",
    "adresses"."adadrescomp4" as "cust_adrescomp4",
    "adresses"."adadrescomp5" as "cust_adrescomp5",
    "adresses"."adadrescomp6" as "cust_adrescomp6",
    "st"."stuseadrescomp" as "shipto_useadrescomp",
    "st"."stadrescomp1" as "shipto_adrescomp1", /*HA2547*/
    "st"."stadrescomp2" as "shipto_adrescomp2", /*HA2547*/
    "st"."stadrescomp3" as "shipto_adrescomp3", /*HA2547*/
    "st"."stadrescomp4" as "shipto_adrescomp4", /*HA2547*/
    "st"."stadrescomp5" as "shipto_adrescomp5", /*HA2547*/
    "st"."stadrescomp6" as "shipto_adrescomp6", /*HA2547*/
    "st"."stcontact" as "Shipto_Contact" /*HA2486*/ /*HA2547*/
    from "DBA"."shipto" /*HA2547*/
      ,"DBA"."shipto" as "st" /*HA2547*/
      ,"DBA"."salhead"
      ,"DBA"."salaux"
      ,"DBA"."adresses"
      ,"DBA"."adresses" as "socity"
    where "salaux"."sacode" = "salhead"."shcode"
    and "adresses"."adcode" = "salhead"."shcust"
    and "salaux"."sastatus" < '5'
    and "socity"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"("salhead"."shmccode",'##########') /*os2351*/
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "salhead"."shcust"),'##########')
    endif
    and "shipto"."stseq" = "salaux"."sashipto"
    and "salhead"."shcust" = "shipto"."stcode"
    and "st"."stcode" = if "IsNull"("shipto"."sttype",'N') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipadcode"
    else "shipto"."stcode"
    endif
    and "st"."stseq" = if "IsNull"("shipto"."sttype",'N') = 'Y' and "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'SHIPDELIV'),'') = '1' then
      "shipto"."stshipseq"
    else "shipto"."stseq"
    endif
```

## Tables source

- `Choices`
- `adresses`
- `choiceline`
- `choices`
- `contacts`
- `intrastat`
- `items`
- `linkitadpack`
- `linkmcad`
- `parameters`
- `progparam`
- `salaux`
- `salesman`
- `salhead`
- `salline`
- `shipto`
- `tvalvl_country`
- `users`
- `yv_linkitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `cmd_type` | Type |
| `shipto_stdesc` | Description |
| `shipto_adr1` | Expedition |
| `shipto_adr2` | Expedition |
| `shipto_zip` | Code postal |
| `shipto_loc` | Expedition |
| `shipto_countr` | Expedition |
| `item_name` | Nom/designation |
| `saleline_uomord` | Numero de ligne |
| `item_code` | Code identifiant |
| `item_qtypal` | Quantite |
| `item_refintrastat` | Article |
| `item_intrastat` | Article |
| `saleline_stdval` | Numero de ligne |
| `saleline_qtycust` | Quantite |
| `saleline_qtypmix` | Quantite |
| `saleline_datereq` | Date |
| `saleline_line` | Numero de ligne |
| `sale_curr` | Devise |
| `sale_cmnt` | Commentaire |
| `sale_datcrea` | Vente |
| `sale_datreq` | Vente |
| `item_longdesc` | Description |
| `sale_num` | Vente |
| `sale_custref` | Client |
| `salesman_code` | Code identifiant |
| `salesman_desc` | Description |
| `linkitemcust_code` | Code identifiant |
| `linkitemcust_ref` | Client |
| `linkitemcust_desc` | Description |
| `linkitemcustpack_nbgroup_layers` | Client |
| `linkitemcustpack_nblayersbypal` | Client |
| `linkitemcustpack_unitbygroup` | Client |
| `saleline_cmnt` | Commentaire |
| `saleline_headkit` | Numero de ligne |
| `sals` | Vente |
| `saleline_isheadkit` | Numero de ligne |
| `saleline_sample` | Numero de ligne |
| `saleline_rist` | Numero de ligne |
| `saleline_ristquantit` | Numero de ligne |
| `saleline_origprice` | Prix |
| `saleline_Fromrate` | Numero de ligne |
| `saleline_qtyinv` | Quantite |
| `saleline_orval` | Numero de ligne |
| `saleline_salval` | Numero de ligne |
| `saleline_unitprice` | Prix |
| `saleline_baseprice` | Prix |
| `saleline_valsddisc` | Numero de ligne |
| `saleline_origval` | Numero de ligne |
| `saleline_fileref` | Numero de ligne |
| `saleline_fileline` | Numero de ligne |
| `saleline_numquote` | Numero de ligne |
| `saleline_numlinequote` | Numero de ligne |
| `sale_typpay` | Vente |
| `sale_typpaydesc` | Description |
| `sale_dlvt` | Vente |
| `sale_dlvtdesc` | Description |
| `sale_dlvtplace` | Vente |
| `cust_code` | Code identifiant |
| `cust_tvatyp` | Client |
| `cust_name` | Nom/designation |
| `Cust_LongName` | Nom/designation |
| `Cust_LegalForm` | Client |
| `cust_adr1` | Client |
| `cust_adr2` | Client |
| `cust_zip` | Client |
| `cust_loc` | Client |
| `cust_countr` | Client |
| `cust_tel` | Client |
| `cust_fax` | Fax |
| `socity_code` | Code identifiant |
| `socity_Name` | Nom/designation |
| `socity_LongName` | Nom/designation |
| `socity_LegalForm` | Ville |
| `socity_adr1` | Ville |
| `socity_adr2` | Ville |
| `socity_zip` | Ville |
| `socity_loc` | Ville |
| `socity_countr` | Ville |
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
| `contact_num` | Contact |
| `Contact_Name` | Nom/designation |
| `Contact_1Name` | Nom/designation |
| `Contact_Tel` | Contact |
| `Contact_Mail` | Email |
| `sale_authorizatio` | Vente |
| `sale_directsale` | Vente |
| `saleline_dateship` | Date |
| `saleline_qtyreal` | Quantite |
| `saleline_qtyalloc` | Quantite |
| `saleline_allocprinted` | Numero de ligne |
| `linkitemcust_calcdluo` | Client |
| `linkitemcust_cratesregroup` | Client |
| `linkitemcust_remval` | Client |
| `Param_remref` | Reference |
| `Param_CALCDLUO` | Param calcdluo |
| `Param_SHIPDELIV` | Livraison |
| `sale_creauser` | Utilisateur |
| `creauser_name` | Nom/designation |
| `creauser_tel` | Utilisateur |
| `creauser_mail` | Email |
| `item_tvarate` | Article |
| `socity_iban1` | Ville |
| `socity_iban2` | Ville |
| `shipto_adcode` | Code identifiant |
| `shipto_seq` | Expedition |
| `cust_useadrescomp` | Client |
| `cust_adrescomp1` | Client |
| `cust_adrescomp2` | Client |
| `cust_adrescomp3` | Client |
| `cust_adrescomp4` | Client |
| `cust_adrescomp5` | Client |
| `cust_adrescomp6` | Client |
| `shipto_useadrescomp` | Expedition |
| `shipto_adrescomp1` | Expedition |
| `shipto_adrescomp2` | Expedition |
| `shipto_adrescomp3` | Expedition |
| `shipto_adrescomp4` | Expedition |
| `shipto_adrescomp5` | Expedition |
| `shipto_adrescomp6` | Expedition |
| `Shipto_Contact` | Contact |
| `st` | St |
| `socity` | Ville |
| `saleline_qtyorval` | Quantite |
