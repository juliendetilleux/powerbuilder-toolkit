# Vue: yq_companies

## Description

Vue de requete sur les societes/entreprises (clients, fournisseurs) avec coordonnees completes.

## SQL

```sql
create view "DBA"."yq_companies"
  as select "adresses"."adcode" as "company_code",
    "adresses"."adname" as "company_name",
    "adresses"."addesc2" as "company_longname",
    "adresses"."adactiv" as "company_activ",
    "isnull"((select "linkmcad"."lkmccode" from "DBA"."linkmcad" where "linkmcad"."lkadcode" = "adresses"."adcode"),'##########') as "multico_id",
    "adresses"."adlegalform" as "company_form",
    "adresses"."adadr1" as "company_adres1",
    "adresses"."adadr2" as "company_adres2",
    "adresses"."adzip" as "company_zip",
    "adresses"."adloc" as "company_location",
    "adresses"."adcountrid" as "company_country_id",
    "adresses"."adlang" as "company_language",
    "adresses"."adcurr" as "company_currency",
    "adresses"."adreg" as "company_reg_id",
    "adresses"."adtva" as "company_VAT_code",
    "adresses"."adtvatyp" as "company_TVA_typ",
    "adresses"."adtel" as "company_phone1",
    "adresses"."adtel2" as "company_phone2",
    "adresses"."adfax" as "company_fax",
    "adresses"."admail" as "company_email",
    "adresses"."adurl" as "company_web",
    "adresses"."adbank" as "company_bank1",
    "adresses"."adbank2" as "company_bank2",
    "adresses"."adgrading" as "company_reliability",
    "adresses"."adcustzone" as "geographical_zone_id",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADCZ' and "choiceline"."clline" = "adresses"."adcustzone") as "geographical_zone_name",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADTA' and "choiceline"."clline" = "adresses"."adactivite") as "company_activity",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADSO' and "choiceline"."clline" = "adresses"."adsource") as "company_source",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADTP' and "choiceline"."clline" = "adresses"."adtype") as "company_type",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU0' and "choiceline"."clline" = "adresses"."adcrmuf00") as "company_uf00",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU1' and "choiceline"."clline" = "adresses"."adcrmuf01") as "company_uf01",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU2' and "choiceline"."clline" = "adresses"."adcrmuf02") as "company_uf02",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU3' and "choiceline"."clline" = "adresses"."adcrmuf03") as "company_uf03",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU4' and "choiceline"."clline" = "adresses"."adcrmuf04") as "company_uf04",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU5' and "choiceline"."clline" = "adresses"."adcrmuf05") as "company_uf05",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU6' and "choiceline"."clline" = "adresses"."adcrmuf06") as "company_uf06",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU7' and "choiceline"."clline" = "adresses"."adcrmuf07") as "company_uf07",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU8' and "choiceline"."clline" = "adresses"."adcrmuf08") as "company_uf08",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADU9' and "choiceline"."clline" = "adresses"."adcrmuf09") as "company_uf09",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUA' and "choiceline"."clline" = "adresses"."adcrmuf10") as "company_uf10",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUB' and "choiceline"."clline" = "adresses"."adcrmuf11") as "company_uf11",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUC' and "choiceline"."clline" = "adresses"."adcrmuf12") as "company_uf12",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUD' and "choiceline"."clline" = "adresses"."adcrmuf13") as "company_uf13",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUE' and "choiceline"."clline" = "adresses"."adcrmuf14") as "company_uf14",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUF' and "choiceline"."clline" = "adresses"."adcrmuf15") as "company_uf15",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUG' and "choiceline"."clline" = "adresses"."adcrmuf16") as "company_uf16",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUH' and "choiceline"."clline" = "adresses"."adcrmuf17") as "company_uf17",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUI' and "choiceline"."clline" = "adresses"."adcrmuf18") as "company_uf18",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUJ' and "choiceline"."clline" = "adresses"."adcrmuf19") as "company_uf19",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUK' and "choiceline"."clline" = "adresses"."adcrmuf20") as "company_uf20",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUL' and "choiceline"."clline" = "adresses"."adcrmuf21") as "company_uf21",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUM' and "choiceline"."clline" = "adresses"."adcrmuf22") as "company_uf22",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUN' and "choiceline"."clline" = "adresses"."adcrmuf23") as "company_uf23",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUO' and "choiceline"."clline" = "adresses"."adcrmuf24") as "company_uf24",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUP' and "choiceline"."clline" = "adresses"."adcrmuf25") as "company_uf25",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUQ' and "choiceline"."clline" = "adresses"."adcrmuf26") as "company_uf26",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUR' and "choiceline"."clline" = "adresses"."adcrmuf27") as "company_uf27",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUS' and "choiceline"."clline" = "adresses"."adcrmuf28") as "company_uf28",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADUT' and "choiceline"."clline" = "adresses"."adcrmuf29") as "company_uf29",
    "adresses"."adcreauser" as "company_creator",
    "adresses"."adcreadat" as "company_date_creation",
    "adresses"."admodifuser" as "company_modificator",
    "date"("adresses"."admoddat") as "company_date_modified",
    "adresses"."adsupp" as "company_supp",
    "adresses"."adpurchaser" as "purchaser",
    "adresses"."adgrsupp" as "supplier_groupid",
    (select "adresgroup"."agdesc" from "DBA"."adresgroup" where "adresgroup"."agcode" = "adresses"."adgrsupp") as "supplier_groupname",
    "adresses"."adidcptsupp" as "supplier_account_id",
    "isnull"((select "max"("purhead"."phdatcrea") from "DBA"."purhead" where "purhead"."phsupp" = "adresses"."adcode" and "purhead"."phstatus" < '9'),"date"('1900-01-01')) as "last_supplier_order_date",
    "adresses"."adcust" as "company_cust",
    "adresses"."adgrcust" as "customer_group_id",
    (select "adresgroup"."agdesc" from "DBA"."adresgroup" where "adresgroup"."agcode" = "adresses"."adgrcust") as "customer_group_name",
    "adresses"."adsalesman" as "salesman_id",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'SALA' and "choices"."chcode" = "adresses"."adsalesauth") as "sales_autorisation",
    "adresses"."adisbackorder" as "customer_backorder",
    "adresses"."adcreditctrl" as "customer_credit_ctrl",
    "adresses"."adcreditval" as "customer_credit_value",
    "adresses"."adristcust" as "customer_discount",
    "adresses"."adesctcust" as "customer_escount",
    "adresses"."adescdcust" as "customer_escount_days",
    "adresses"."adristrate" as "customer_rate_discount",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'PAYM' and "choices"."chcode" = "adresses"."adcustpay") as "invoice_terms",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'INVM' and "choices"."chcode" = "adresses"."adinvm") as "invoice_mode",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'DLVT' and "choices"."chcode" = "adresses"."addlvt") as "incoterms",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADCZ' and "choiceline"."clline" = "adresses"."adinvtyp") as "invoice_group",
    "adresses"."adinvedi" as "invoice_edi",
    "adresses"."addesadvedi" as "shipping_edi",
    "adresses"."adinvpdf" as "invoice_pdf",
    "adresses"."adinvpdfmail" as "invoice_pdf_mail",
    "adresses"."adidcptcust" as "customer_account_id",
    "isnull"((select "max"("salhead"."shdatcrea") from "DBA"."salhead" where "salhead"."shcust" = "adresses"."adcode" and "salhead"."shstatus" < '9'),"date"('1900-01-01')) as "last_customer_order_date"
    from "DBA"."adresses" where
    "adresses"."adcode" not like '#######%'
```

## Tables source

- `adresgroup`
- `adresses`
- `choiceline`
- `choices`
- `linkmcad`
- `purhead`
- `salhead`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `company_code` | Code identifiant |
| `company_name` | Nom/designation |
| `company_longname` | Nom/designation |
| `company_activ` | Company activ |
| `multico_id` | Multico id |
| `company_form` | Company form |
| `company_adres1` | Company adres1 |
| `company_adres2` | Company adres2 |
| `company_zip` | Code postal |
| `company_location` | Company location |
| `company_country_id` | Pays |
| `company_language` | Company language |
| `company_currency` | Devise |
| `company_reg_id` | Company reg id |
| `company_VAT_code` | Code identifiant |
| `company_TVA_typ` | Company tva typ |
| `company_phone1` | Telephone |
| `company_phone2` | Telephone |
| `company_fax` | Fax |
| `company_email` | Email |
| `company_web` | Company web |
| `company_bank1` | Company bank1 |
| `company_bank2` | Company bank2 |
| `company_reliability` | Company reliability |
| `geographical_zone_id` | Geographical zone id |
| `geographical_zone_name` | Nom/designation |
| `company_activity` | Company activity |
| `company_source` | Company source |
| `company_type` | Type |
| `company_uf00` | Company uf00 |
| `company_uf01` | Company uf01 |
| `company_uf02` | Company uf02 |
| `company_uf03` | Company uf03 |
| `company_uf04` | Company uf04 |
| `company_uf05` | Company uf05 |
| `company_uf06` | Company uf06 |
| `company_uf07` | Company uf07 |
| `company_uf08` | Company uf08 |
| `company_uf09` | Company uf09 |
| `company_uf10` | Company uf10 |
| `company_uf11` | Company uf11 |
| `company_uf12` | Company uf12 |
| `company_uf13` | Company uf13 |
| `company_uf14` | Company uf14 |
| `company_uf15` | Company uf15 |
| `company_uf16` | Company uf16 |
| `company_uf17` | Company uf17 |
| `company_uf18` | Company uf18 |
| `company_uf19` | Company uf19 |
| `company_uf20` | Company uf20 |
| `company_uf21` | Company uf21 |
| `company_uf22` | Company uf22 |
| `company_uf23` | Company uf23 |
| `company_uf24` | Company uf24 |
| `company_uf25` | Company uf25 |
| `company_uf26` | Company uf26 |
| `company_uf27` | Company uf27 |
| `company_uf28` | Company uf28 |
| `company_uf29` | Company uf29 |
| `company_creator` | Company creator |
| `company_date_creation` | Date |
| `company_modificator` | Company modificator |
| `company_date_modified` | Date |
| `company_supp` | Fournisseur |
| `purchaser` | Achat |
| `supplier_groupid` | Fournisseur |
| `supplier_groupname` | Nom/designation |
| `supplier_account_id` | Fournisseur |
| `last_supplier_order_date` | Date |
| `company_cust` | Client |
| `customer_group_id` | Client |
| `customer_group_name` | Nom/designation |
| `salesman_id` | Vente |
| `sales_autorisation` | Vente |
| `customer_backorder` | Client |
| `customer_credit_ctrl` | Client |
| `customer_credit_value` | Client |
| `customer_discount` | Client |
| `customer_escount` | Client |
| `customer_escount_days` | Client |
| `customer_rate_discount` | Client |
| `invoice_terms` | Facture |
| `invoice_mode` | Facture |
| `incoterms` | Incoterms |
| `invoice_group` | Facture |
| `invoice_edi` | Facture |
| `shipping_edi` | Expedition |
| `invoice_pdf` | Facture |
| `invoice_pdf_mail` | Email |
| `customer_account_id` | Client |
| `last_customer_order_date` | Date |
