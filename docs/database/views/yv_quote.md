# Vue: yv_quote

## Description

Vue des devis/cotations avec details lignes et montants.

## SQL

```sql
create view "DBA"."yv_quote"
  as select "projhead"."phcode" as "quote_code",
    "projhead"."phdesc" as "quote_desc",
    "projhead"."phdesc2" as "quote_longdesc",
    "projhead"."phcustref" as "quote_ref",
    "projhead"."phadid" as "quote_cust_code",
    "adresses"."adname" as "cust_AdName",
    if "trim"("IsNull"("adresses"."adlang",'')) = '' then
      (select "adresses"."adlang"
        from "DBA"."adresses"
        where "adresses"."adcode" = '##########')
    else "adresses"."adlang"
    endif as "cust_lang",
    "projhead"."phstid" as "quote_shipto_num",
    "projhead"."phdatreq" as "quote_datreq",
    "projhead"."phdatcrea" as "quote_datcrea",
    "projhead"."phcurr" as "quote_Curr",
    "projhead"."phrate" as "quote_Rate",
    "projhead"."phrist" as "quote_Rist",
    "projhead"."phexpdate" as "quote_validity_date",
    "projhead"."phstatus" as "quote_Status",
    "projhead"."phtype" as "quote_type",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PAYM'
      and "choices"."chcode" = "projhead"."phcustpay") as "quote_custpay",
    "projhead"."phfam1" as "quote_fam1code",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'PGR1'
      and "choiceline"."clline" = "projhead"."phfam1") as "quote_fam1desc",
    "projhead"."phfam2" as "quote_fam2code",
    (select "choiceline"."clname"
      from "DBA"."choiceline"
      where "choiceline"."clcode" = 'PGR2'
      and "choiceline"."clline" = "projhead"."phfam2") as "quote_fam2desc",
    "projhead"."phdlvt" as "quote_dlvt_typ",
    (select "Choices"."chname"
      from "DBA"."Choices"
      where "Choices"."chtype" = 'DLVT'
      and "Choices"."chcode" = "projhead"."phdlvt") as "quote_dlvt_typdesc",
    "projhead"."phdlvtplace" as "quote_dlvt_place",
    "projhead"."phsalesman" as "salesman_code",
    (select "salesman"."smname"
      from "DBA"."salesman"
      where "salesman"."smcode" = "projhead"."phsalesman") as "salesman_name",
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'CMSP'
      and "comments"."cotab" = '7') as "specmnt_MonoLang",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '7'
      and "comments_lang"."colang" = 'FR') as "spec_cmnt_FR",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '7'
      and "comments_lang"."colang" = 'NL') as "spec_cmnt_NL",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '7'
      and "comments_lang"."colang" = 'EN') as "spec_cmnt_EN",
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where "comments_lang"."cotype" = 'CMSP'
      and "comments_lang"."cotab" = '7'
      and "comments_lang"."colang" = 'GE') as "spec_cmnt_GE",
    "shipto"."stdesc" as "Shipto_Desc",
    "st"."stadr1" as "Shipto_Adr1",
    "st"."stadr2" as "Shipto_Adr2",
    "st"."stzip" as "Shipto_Zip",
    "st"."stloc" as "Shipto_Loc",
    "st"."stcountr" as "Shipto_Country",
    "projhead"."phadcontact" as "Contact_num",
    (select "contacts"."ctname"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "projhead"."phadid"
      and "contacts"."ctline" = "projhead"."phadcontact") as "Contact_Name",
    (select "contacts"."ctfirstname"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "projhead"."phadid"
      and "contacts"."ctline" = "projhead"."phadcontact") as "Contact_1Name",
    (select "contacts"."cttel"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "projhead"."phadid"
      and "contacts"."ctline" = "projhead"."phadcontact") as "Contact_Tel",
    (select "contacts"."ctmail"
      from "DBA"."contacts"
      where "contacts"."ctadcode" = "projhead"."phadid"
      and "contacts"."ctline" = "projhead"."phadcontact") as "Contact_Mail",
    "projvrsn"."pvcode" as "quoteline_idline",
    "projvrsn"."pvdesc" as "quoteline_desc",
    "projvrsn"."pvstatus" as "quoteline_status",
    "projvrsn"."pvqty" as "quoteline_qty",
    "projvrsn"."pvrampurval" as "quoteline_matpurval",
    "projvrsn"."pvramsalval" as "quoteline_matsalval",
    "projvrsn"."pvlabpurval" as "quoteline_labpurval",
    "projvrsn"."pvlabsalval" as "quoteline_labsalval",
    "projvrsn"."pvmacpurval" as "quoteline_macpurval",
    "projvrsn"."pvmacsalval" as "quoteline_macsalval",
    "projvrsn"."pvothpurval" as "quoteline_other_purval",
    "projvrsn"."pvothsalval" as "quoteline_other_salval",
    "projvrsn"."pvpurval" as "quoteline_purval",
    "projvrsn"."pvsalval" as "quoteline_salval",
    "projvrsn"."pvbaseprice" as "quoteline_baseprice",
    "projvrsn"."pvtyp" as "quoteline_typ",
    "projvrsn"."pvuplab" as "quoteline_lab_marg",
    "projvrsn"."pvupmat" as "quoteline_mat_marg",
    "projvrsn"."pvupoth" as "quoteline_other_marg",
    "projvrsn"."pvupglob" as "quoteline_global_marg",
    "projvrsn"."pvitem" as "quoteline_item",
    "projvrsn"."pvratehead" as "quoteline_rate",
    "projvrsn"."pvsort" as "quoteline_sort",
    "projvrsn"."pvcmnt" as "quoteline_cmnt",
    (select "items"."itname"
      from "DBA"."items"
      where "items"."itcode" = "projvrsn"."pvitem") as "quoteline__itemname",
    "projvrsn"."pvpriceorg" as "quoteline_origine_price",
    if "projvrsn"."pvrist" is null then
      0
    else "projvrsn"."pvrist"
    endif as "quoteline_rist",
    "IsNull"("projvrsn"."pvoptional",'N') as "quoteline_optional",
    "projvrsn"."pvsortgroup" as "quoteline_groupsort",
    "projvrsn"."pvdgcode" as "quoteline_sortbygroup",
    "IsNull"((select "devgroup"."dgdesc"
      from "DBA"."devgroup"
      where "devgroup"."dgpvhid" = "projvrsn"."pvphid"
      and "devgroup"."dgcode" = "projvrsn"."pvdgcode"),'') as "quoteline_groupdesc",
    "adresses"."adname" as "cust_code",
    "adresses"."adlegalform" as "cust_legalform",
    "adresses"."adadr1" as "cust_adre1",
    "adresses"."adadr2" as "cust_adre2",
    "adresses"."adzip" as "cust_zipcode",
    "adresses"."adloc" as "cust_loc",
    "adresses"."adtel" as "cust_tel",
    "adresses"."adfax" as "cust_fax",
    "adresses"."admail" as "cust_mail",
    "adresses"."adurl" as "cust_web",
    "adresses"."adtva" as "cust_tva",
    "adresses"."adcountr" as "cust_country",
    "adresses"."adiban1" as "cust_iban1",
    "mcdo"."adadr1" as "mcdo_adre1",
    "mcdo"."adadr2" as "mcdo_adre2",
    "mcdo"."adzip" as "mcdo_zipcode",
    "mcdo"."adloc" as "mcdo_loc",
    "mcdo"."adtel" as "mcdo_tel",
    "mcdo"."adiban1" as "mcdo_iban1",
    "mcdo"."adbic1" as "mcdo_bic1",
    "mcdo"."adiban2" as "mcdo_iban2",
    "mcdo"."adbic2" as "mcdo_bic2",
    "mcdo"."adtva" as "mcdo_tvat",
    "mcdo"."adfax" as "mcdo_fax",
    "mcdo"."admail" as "mcdo_mail",
    "mcdo"."adurl" as "mcdo_web",
    "mcdo"."adcountr" as "mcdo_countr",
    "mcdo"."adcode" as "mcdo_code",
    "mcdo"."adname" as "mcdo_name",
    "IsNull"((select "yv_linkitad"."lkadref"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "projvrsn"."pvitem"
      and "yv_linkitad"."lkadcode" = "projhead"."phadid"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_custref",
    "IsNull"((select "yv_linkitad"."lkadref2"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "projvrsn"."pvitem"
      and "yv_linkitad"."lkadcode" = "projhead"."phadid"
      and "yv_linkitad"."lkactiv" = 'Y'),'') as "linkitemcust_custdesc",
    "IsNull"((select "Items"."itdesc2"
      from "DBA"."items"
      where "items"."itcode" = "projvrsn"."pvitem"),'') as "item_desc2",
    "IsNull"((select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'ICMT'
      and "comments"."cokey" = "projvrsn"."pvitem"
      and "comments"."coline" = 0
      and "comments"."cotab" = '1'),'') as "items_cmnt1",
    "IsNull"((select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'ICMT'
      and "comments"."cokey" = "projvrsn"."pvitem"
      and "comments"."coline" = 0
      and "comments"."cotab" = '2'),'') as "items_cmnt2",
    "IsNull"((select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'ICMT'
      and "comments"."cokey" = "projvrsn"."pvitem"
      and "comments"."coline" = 0
      and "comments"."cotab" = '3'),'') as "items_cmnt3",
    "IsNull"((select "comments"."cocmnt"
      from "DBA"."comments"
      where "comments"."cotype" = 'ICMT'
      and "comments"."cokey" = "projvrsn"."pvitem"
      and "comments"."coline" = 0
      and "comments"."cotab" = '4'),'') as "items_cmnt4",
    "st"."stcode" as "shipto_Adcode",
    "st"."stseq" as "shipto_seq"
    from "DBA"."projvrsn"
      ,"DBA"."projhead"
      ,"DBA"."adresses"
      ,"DBA"."adresses" as "mcdo"
      ,"DBA"."shipto"
      ,"DBA"."shipto" as "st"
    where "projhead"."phcode" = "projvrsn"."pvphid"
    and "projhead"."phadid" = "adresses"."adcode"
    and "shipto"."stcode" = "projhead"."phadid"
    and "shipto"."stseq" = "projhead"."phstid"
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
    and "mcdo"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"("projhead"."phmccode",'##########')
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "projhead"."phadid"),'##########')
    endif
```

## Tables source

- `Choices`
- `adresses`
- `choiceline`
- `choices`
- `comments`
- `comments_lang`
- `contacts`
- `devgroup`
- `items`
- `linkmcad`
- `progparam`
- `projhead`
- `projvrsn`
- `salesman`
- `shipto`
- `yv_linkitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `quote_code` | Code identifiant |
| `quote_desc` | Description |
| `quote_longdesc` | Description |
| `quote_ref` | Reference |
| `quote_cust_code` | Code identifiant |
| `cust_AdName` | Nom/designation |
| `cust_lang` | Client |
| `quote_shipto_num` | Expedition |
| `quote_datreq` | Quote datreq |
| `quote_datcrea` | Quote datcrea |
| `quote_Curr` | Devise |
| `quote_Rate` | Taux |
| `quote_Rist` | Quote rist |
| `quote_validity_date` | Date |
| `quote_Status` | Statut |
| `quote_type` | Type |
| `quote_custpay` | Client |
| `quote_fam1code` | Code identifiant |
| `quote_fam1desc` | Description |
| `quote_fam2code` | Code identifiant |
| `quote_fam2desc` | Description |
| `quote_dlvt_typ` | Quote dlvt typ |
| `quote_dlvt_typdesc` | Description |
| `quote_dlvt_place` | Quote dlvt place |
| `salesman_code` | Code identifiant |
| `salesman_name` | Nom/designation |
| `specmnt_MonoLang` | Commentaire |
| `spec_cmnt_FR` | Commentaire |
| `spec_cmnt_NL` | Commentaire |
| `spec_cmnt_EN` | Commentaire |
| `spec_cmnt_GE` | Commentaire |
| `Shipto_Desc` | Description |
| `Shipto_Adr1` | Expedition |
| `Shipto_Adr2` | Expedition |
| `Shipto_Zip` | Code postal |
| `Shipto_Loc` | Expedition |
| `Shipto_Country` | Pays |
| `Contact_num` | Contact |
| `Contact_Name` | Nom/designation |
| `Contact_1Name` | Nom/designation |
| `Contact_Tel` | Contact |
| `Contact_Mail` | Email |
| `quoteline_idline` | Numero de ligne |
| `quoteline_desc` | Description |
| `quoteline_status` | Statut |
| `quoteline_qty` | Quantite |
| `quoteline_matpurval` | Numero de ligne |
| `quoteline_matsalval` | Numero de ligne |
| `quoteline_labpurval` | Numero de ligne |
| `quoteline_labsalval` | Numero de ligne |
| `quoteline_macpurval` | Numero de ligne |
| `quoteline_macsalval` | Numero de ligne |
| `quoteline_other_purval` | Numero de ligne |
| `quoteline_other_salval` | Numero de ligne |
| `quoteline_purval` | Numero de ligne |
| `quoteline_salval` | Numero de ligne |
| `quoteline_baseprice` | Prix |
| `quoteline_typ` | Numero de ligne |
| `quoteline_lab_marg` | Numero de ligne |
| `quoteline_mat_marg` | Numero de ligne |
| `quoteline_other_marg` | Numero de ligne |
| `quoteline_global_marg` | Numero de ligne |
| `quoteline_item` | Article |
| `quoteline_rate` | Numero de ligne |
| `quoteline_sort` | Numero de ligne |
| `quoteline_cmnt` | Commentaire |
| `quoteline__itemname` | Nom/designation |
| `quoteline_origine_price` | Prix |
| `quoteline_rist` | Numero de ligne |
| `quoteline_optional` | Numero de ligne |
| `quoteline_groupsort` | Numero de ligne |
| `quoteline_sortbygroup` | Numero de ligne |
| `quoteline_groupdesc` | Description |
| `cust_code` | Code identifiant |
| `cust_legalform` | Client |
| `cust_adre1` | Client |
| `cust_adre2` | Client |
| `cust_zipcode` | Code identifiant |
| `cust_loc` | Client |
| `cust_tel` | Client |
| `cust_fax` | Fax |
| `cust_mail` | Email |
| `cust_web` | Client |
| `cust_tva` | Client |
| `cust_country` | Client |
| `cust_iban1` | Client |
| `mcdo_adre1` | Mcdo adre1 |
| `mcdo_adre2` | Mcdo adre2 |
| `mcdo_zipcode` | Code identifiant |
| `mcdo_loc` | Mcdo loc |
| `mcdo_tel` | Mcdo tel |
| `mcdo_iban1` | Mcdo iban1 |
| `mcdo_bic1` | Mcdo bic1 |
| `mcdo_iban2` | Mcdo iban2 |
| `mcdo_bic2` | Mcdo bic2 |
| `mcdo_tvat` | TVA |
| `mcdo_fax` | Fax |
| `mcdo_mail` | Email |
| `mcdo_web` | Mcdo web |
| `mcdo_countr` | Mcdo countr |
| `mcdo_code` | Code identifiant |
| `mcdo_name` | Nom/designation |
| `linkitemcust_custref` | Client |
| `linkitemcust_custdesc` | Description |
| `item_desc2` | Description |
| `items_cmnt1` | Commentaire |
| `items_cmnt2` | Commentaire |
| `items_cmnt3` | Commentaire |
| `items_cmnt4` | Commentaire |
| `shipto_Adcode` | Code identifiant |
| `shipto_seq` | Expedition |
| `mcdo` | Mcdo |
| `st` | St |
