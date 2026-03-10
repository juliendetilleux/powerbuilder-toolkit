# Vue: yv_proforma

## Description

Vue pour la generation de factures proforma.

## SQL

```sql
create view //-----------------------------------------------------------------------------------------------------------
  "DBA"."yv_proforma"
  as select "Profohead"."phcode" as "proforma_code",
    "Profohead"."phcust" as "proforma_cust_code",
    "Profohead"."phdate" as "proforma_date",
    "Profohead"."phcurr" as "proforma_curr",
    "Profohead"."phtvaref" as "proforma_TVAREF",
    "Profohead"."phpaymnt" as "proforma_paymnt_type",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'PAYM'
      and "choices"."chcode" = "Profohead"."phpaymnt") as "proforma_paymnt_desc",
    "Profohead"."phsalval" as "proforma_salval",
    "Profohead"."phtvaval" as "proforma_tvaval",
    "Profohead"."phtotval" as "proforma_totval",
    "Profohead"."phcomment" as "proforma_comment",
    "Profohead"."phexpiry" as "proforma_exppiry_date",
    "Profohead"."phtyptva" as "proforma_TVA_typ",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'TVAT'
      and "choices"."chcode" = "Profohead"."phtyptva") as "proforma_TVA_typdesc",
    "Profohead"."phdlvt" as "proforma_TVA_dlvt_typ",
    (select "choices"."chname"
      from "DBA"."choices"
      where "choices"."chtype" = 'DLVT'
      and "choices"."chcode" = "Profohead"."phdlvt") as "proforma_dlvt_typdesc",
    "Profohead"."phpaymode" as "proforma_paymode",
    (select "paymode"."pmdescint"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "profohead"."phpaymode") as "proforma_paymode_intdesc",
    (select "paymode"."pmdescext"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "profohead"."phpaymode") as "proforma_paymode_extdesc",
    (select "paymode"."pmdetail"
      from "DBA"."paymode"
      where "paymode"."pmcode" = "profohead"."phpaymode") as "proforma_paymode_comment",
    "Profohead"."phactiv" as "proforma_activ",
    "Profohead"."phrist" as "proforma_rist",
    "Profohead"."phesct" as "proforma_esct",
    "Profohead"."phristval" as "proforma_ristval",
    "Profohead"."phesctval" as "proforma_esctval",
    (select "users"."usname"
      from "DBA"."users"
      where "users"."uscode" = (select "parameters"."pmcval"
        from "DBA"."parameters"
        where "parameters"."pmcode" = 'USINGINV')) as "signatory",
    (select "users"."ustitle"
      from "DBA"."users"
      where "users"."uscode" = (select "parameters"."pmcval"
        from "DBA"."parameters"
        where "parameters"."pmcode" = 'USINGINV')) as "title",
    "Profoline"."plline" as "profoline_line",
    "Profoline"."plitcustnam" as "profoline_desc",
    "Profoline"."plqty" as "profoline_qtypmix",
    "Profoline"."plqtycust" as "profoline_qtycust",
    "Profoline"."pluomconv" as "profoline_uomconv",
    "Profoline"."plstdval" as "profoline_stdval",
    "Profoline"."plsalval" as "profoline_salval",
    "Profoline"."plnetval" as "profoline_netval",
    "Profoline"."plorval" as "profoline_orval",
    "Profoline"."pltva" as "profoline_tva",
    "Profoline"."pltvaval" as "profoline_tvaval",
    "Profoline"."pltotval" as "profoline_totval",
    "Profoline"."pluomord" as "profoline_uomord",
    "Profoline"."plcomment" as "profoline_comment",
    (select "Choices"."chname"
      from "DBA"."Choices"
      where "Choices"."chtype" = 'DLVT'
      and "Choices"."chcode" = "Profoline"."pldlvt") as "Incotermes",
    "Profoline"."pldlvtplace" as "profoline_dlvtplace",
    "Profoline"."plrist" as "profoline_rist",
    "Profoline"."plbastva" as "profoline_basval",
    "Profoline"."plrealtva" as "profoline_realval",
    "Profoline"."pltype" as "profoline_typ",
    "Profoline"."plsalorder" as "profoline_saleorder",
    "Profoline"."plsalline" as "profoline_saleline",
    "Profoline"."plshiporder" as "profoline_shiporder",
    "Profoline"."plshipline" as "profoline_shipline",
    "Profoline"."plitem" as "profoline_item",
    "Items"."itname" as "item_name",
    "Items"."itdesc2" as "item_desc2",
    "Items"."itdefaultlot" as "item_defaultlot",
    (select "intrastat"."isref"
      from "DBA"."intrastat"
      where "intrastat"."iscode" = "Items"."itintrastat") as "item_intrastat",
    "Items"."itwistat" as "item_netweightintrastat",
    (select "yv_linkitad"."lkadref"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "Items"."itcode"
      and "yv_linkitad"."lkadcode" = "Profohead"."phcust"
      and "yv_linkitad"."lkactiv" = 'Y') as "linkitemcust_custref",
    (select "yv_linkitad"."lkadref2"
      from "DBA"."yv_linkitad"
      where "yv_linkitad"."lktyp" = 'S'
      and "yv_linkitad"."lkitem" = "Items"."itcode"
      and "yv_linkitad"."lkadcode" = "Profohead"."phcust"
      and "yv_linkitad"."lkactiv" = 'Y') as "linkitemcust_custdesc",
    "adresses"."adname" as "socity_name",
    "adresses"."adadr1" as "socity_adr1",
    "adresses"."adadr2" as "socity_adr2",
    "adresses"."adzip" as "socity_zip",
    "adresses"."adloc" as "socity_loc",
    "adresses"."adcountr" as "socity_country",
    "adresses"."adtel" as "socity_tel",
    "adresses"."adfax" as "socity_fax",
    "adresses"."admail" as "socity_mail",
    "adresses"."adurl" as "socity_url",
    "adresses"."adbank" as "socity_bank1",
    "adresses"."adbic1" as "socity_bic1",
    "adresses"."adbank2" as "socity_bank2",
    "adresses"."adbic2" as "socity_bic2",
    "adresses"."adtva" as "socity_tva",
    "adresses"."adreg" as "socity_reg",
    "adresses"."adcode" as "socity_code",
    "adresses"."adlegalform" as "socity_legalform",
    "cust"."adcode" as "cust_code",
    "cust"."adname" as "cust_name",
    "cust"."adadr1" as "cust_adr1",
    "cust"."adadr2" as "cust_adr2",
    "cust"."adzip" as "cust_zip",
    "cust"."adloc" as "cust_loc",
    "cust"."adcountr" as "cust_country",
    "cust"."adtel" as "cust_tel",
    "cust"."adfax" as "cust_fax",
    "cust"."admail" as "cust_mail",
    "cust"."adurl" as "cust_url",
    "cust"."adtva" as "cust_tva",
    (select "salhead"."shcustref"
      from "DBA"."salhead"
      where "salhead"."shcode" = "Profoline"."plsalorder") as "sale_custref",
    (select "salhead"."shdatcrea"
      from "DBA"."salhead"
      where "salhead"."shcode" = "Profoline"."plsalorder") as "sale_creadate",
    (select "salhead"."shadcontact"
      from "DBA"."salhead"
      where "salhead"."shcode" = "Profoline"."plsalorder") as "contact_seq",
    (select "contacts"."ctname"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "Profoline"."plsalorder") as "Contact_Name",
    (select "contacts"."ctfirstname"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "Profoline"."plsalorder") as "Contact_1Name",
    (select "contacts"."cttel"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "Profoline"."plsalorder") as "Contact_Tel",
    (select "contacts"."ctmail"
      from "DBA"."contacts","DBA"."salhead"
      where "contacts"."ctadcode" = "salhead"."shcust"
      and "contacts"."ctline" = "salhead"."shadcontact"
      and "salhead"."shcode" = "Profoline"."plsalorder") as "Contact_Mail",
    "adresses"."addesc2" as "Socity_LongName",
    "adresses"."adiban1" as "Socity_iban1",
    "adresses"."adiban2" as "Socity_iban2",
    "cust"."addesc2" as "cust_LongName",
    "cust"."adlegalform" as "cust_legalform"
    from "DBA"."Profohead"
      ,"DBA"."adresses"
      ,"DBA"."adresses" as "cust"
      ,"DBA"."profoline" left outer join "DBA"."Items" on "profoline"."plitem" = "Items"."itcode"
    where "Profohead"."phcode" = "Profoline"."plcode"
    and "Profohead"."phcust" = "cust"."adcode"
    and "adresses"."adcode" = if "IsNull"((select "progparam"."ppvalue"
      from "DBA"."progparam"
      where "progparam"."ppcode" = 'MULTICO'),'') = '1' then
      "IsNull"(("Profohead"."phmccode"),'##########')
    else "IsNull"((select "linkmcad"."lkmccode"
        from "DBA"."linkmcad"
        where "linkmcad"."lkadcode" = "Profohead"."phcust"),'##########')
    endif
```

## Tables source

- `Choices`
- `Items`
- `Profohead`
- `adresses`
- `choices`
- `contacts`
- `intrastat`
- `linkmcad`
- `parameters`
- `paymode`
- `profoline`
- `progparam`
- `salhead`
- `users`
- `yv_linkitad`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `proforma_code` | Code identifiant |
| `proforma_cust_code` | Code identifiant |
| `proforma_date` | Date |
| `proforma_curr` | Devise |
| `proforma_TVAREF` | Reference |
| `proforma_paymnt_type` | Type |
| `proforma_paymnt_desc` | Description |
| `proforma_salval` | Vente |
| `proforma_tvaval` | Proforma tvaval |
| `proforma_totval` | Proforma totval |
| `proforma_comment` | Commentaire |
| `proforma_exppiry_date` | Date |
| `proforma_TVA_typ` | Proforma tva typ |
| `proforma_TVA_typdesc` | Description |
| `proforma_TVA_dlvt_typ` | Proforma tva dlvt typ |
| `proforma_dlvt_typdesc` | Description |
| `proforma_paymode` | Proforma paymode |
| `proforma_paymode_intdesc` | Description |
| `proforma_paymode_extdesc` | Description |
| `proforma_paymode_comment` | Commentaire |
| `proforma_activ` | Proforma activ |
| `proforma_rist` | Proforma rist |
| `proforma_esct` | Proforma esct |
| `proforma_ristval` | Proforma ristval |
| `proforma_esctval` | Proforma esctval |
| `signatory` | Signatory |
| `title` | Title |
| `profoline_line` | Numero de ligne |
| `profoline_desc` | Description |
| `profoline_qtypmix` | Quantite |
| `profoline_qtycust` | Quantite |
| `profoline_uomconv` | Numero de ligne |
| `profoline_stdval` | Numero de ligne |
| `profoline_salval` | Numero de ligne |
| `profoline_netval` | Numero de ligne |
| `profoline_orval` | Numero de ligne |
| `profoline_tva` | Numero de ligne |
| `profoline_tvaval` | Numero de ligne |
| `profoline_totval` | Numero de ligne |
| `profoline_uomord` | Numero de ligne |
| `profoline_comment` | Commentaire |
| `Incotermes` | Incotermes |
| `profoline_dlvtplace` | Numero de ligne |
| `profoline_rist` | Numero de ligne |
| `profoline_basval` | Numero de ligne |
| `profoline_realval` | Numero de ligne |
| `profoline_typ` | Numero de ligne |
| `profoline_saleorder` | Numero de ligne |
| `profoline_saleline` | Numero de ligne |
| `profoline_shiporder` | Numero de ligne |
| `profoline_shipline` | Numero de ligne |
| `profoline_item` | Article |
| `item_name` | Nom/designation |
| `item_desc2` | Description |
| `item_defaultlot` | Article |
| `item_intrastat` | Article |
| `item_netweightintrastat` | Article |
| `linkitemcust_custref` | Client |
| `linkitemcust_custdesc` | Description |
| `socity_name` | Nom/designation |
| `socity_adr1` | Ville |
| `socity_adr2` | Ville |
| `socity_zip` | Ville |
| `socity_loc` | Ville |
| `socity_country` | Pays |
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
| `socity_code` | Code identifiant |
| `socity_legalform` | Ville |
| `cust_code` | Code identifiant |
| `cust_name` | Nom/designation |
| `cust_adr1` | Client |
| `cust_adr2` | Client |
| `cust_zip` | Client |
| `cust_loc` | Client |
| `cust_country` | Client |
| `cust_tel` | Client |
| `cust_fax` | Fax |
| `cust_mail` | Email |
| `cust_url` | Client |
| `cust_tva` | Client |
| `sale_custref` | Client |
| `sale_creadate` | Date |
| `contact_seq` | Contact |
| `Contact_Name` | Nom/designation |
| `Contact_1Name` | Nom/designation |
| `Contact_Tel` | Contact |
| `Contact_Mail` | Email |
| `Socity_LongName` | Nom/designation |
| `Socity_iban1` | Ville |
| `Socity_iban2` | Ville |
| `cust_LongName` | Nom/designation |
| `cust_legalform` | Client |
| `cust` | Client |
