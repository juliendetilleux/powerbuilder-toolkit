# Vue: yq_contacts

## Description

Vue de requete sur les contacts avec informations personnelles et rattachement aux adresses.

## SQL

```sql
create view "DBA"."yq_contacts"
  as select "adresses"."adcode" as "company_code",
    "adresses"."adname" as "company_name",
    "adresses"."adactiv" as "company_activ",
    "adresses"."adadr1" as "company_adres1",
    "adresses"."adadr2" as "company_adres2",
    "adresses"."adzip" as "company_zip",
    "adresses"."adloc" as "company_location",
    "adresses"."adcountrid" as "company_country",
    "adresses"."adlang" as "company_lang",
    "adresses"."adcurr" as "company_currency",
    "adresses"."adreg" as "company_reg",
    "adresses"."adtva" as "company_TVA",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'TVAT' and "choices"."chcode" = "adresses"."adtvatyp") as "company_TVAtyp",
    "adresses"."adtel" as "company_phone",
    "adresses"."adtel2" as "company_phone2",
    "adresses"."adfax" as "company_fax",
    "adresses"."admail" as "company_mail",
    "adresses"."adurl" as "company_web",
    "adresses"."adbank" as "company_bank1",
    "adresses"."adbank2" as "company_bank2",
    "adresses"."adsupp" as "company_supp",
    "adresses"."adpurchaser" as "purchaser",
    "adresses"."adgrsupp" as "supplier_groupid",
    (select "adresgroup"."agdesc" from "DBA"."adresgroup" where "adresgroup"."agcode" = "adresses"."adgrsupp") as "supplier_groupname",
    "adresses"."adcust" as "company_cust",
    "adresses"."adgrcust" as "customer_groupid",
    (select "adresgroup"."agdesc" from "DBA"."adresgroup" where "adresgroup"."agcode" = "adresses"."adgrcust") as "customer_groupname",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADCZ' and "choiceline"."clline" = "adresses"."adcustzone") as "customer_zone",
    "adresses"."adsalesman" as "salesman",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADTA' and "choiceline"."clline" = "adresses"."adactivite") as "company_activity",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADSO' and "choiceline"."clline" = "adresses"."adsource") as "company_source",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'ADTP' and "choiceline"."clline" = "adresses"."adtype") as "company_type",
    "contacts"."ctline" as "contact_id",
    (select "choices"."chname" from "DBA"."choices" where "choices"."chtype" = 'CIV1' and "choices"."chcode" = "contacts"."ctciv1") as "contact_civility",
    "contacts"."ctname" as "contact_name",
    "contacts"."ctfirstname" as "contact_firstname",
    "contacts"."ctfunction" as "contact_function",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'FUNC' and "choiceline"."clline" = "contacts"."ctfunc") as "contact_function2",
    "contacts"."cttel" as "contact_tel",
    "contacts"."ctfax" as "contact_fax",
    "contacts"."ctgsm" as "contact_gsm",
    "contacts"."ctmail" as "contact_mail",
    "contacts"."ctcomm" as "contact_info",
    "contacts"."ctservice" as "contact_service",
    "contacts"."ctlangue" as "contact_lang",
    "contacts"."ctcmnt" as "contact_cmnt",
    "contacts"."ctactiv" as "contact_activ",
    "contacts"."ctmain" as "contact_main",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU1' and "choiceline"."clline" = "contacts"."ctcrmuf01") as "contact_uf01",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU2' and "choiceline"."clline" = "contacts"."ctcrmuf02") as "contact_uf02",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU3' and "choiceline"."clline" = "contacts"."ctcrmuf03") as "contact_uf03",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU4' and "choiceline"."clline" = "contacts"."ctcrmuf04") as "contact_uf04",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU5' and "choiceline"."clline" = "contacts"."ctcrmuf05") as "contact_uf05",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU6' and "choiceline"."clline" = "contacts"."ctcrmuf06") as "contact_uf06",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU7' and "choiceline"."clline" = "contacts"."ctcrmuf07") as "contact_uf07",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU8' and "choiceline"."clline" = "contacts"."ctcrmuf08") as "contact_uf08",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTU9' and "choiceline"."clline" = "contacts"."ctcrmuf09") as "contact_uf09",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTUA' and "choiceline"."clline" = "contacts"."ctcrmuf10") as "contact_uf10",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTUB' and "choiceline"."clline" = "contacts"."ctcrmuf11") as "contact_uf11",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTUC' and "choiceline"."clline" = "contacts"."ctcrmuf12") as "contact_uf12",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTUD' and "choiceline"."clline" = "contacts"."ctcrmuf13") as "contact_uf13",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTUE' and "choiceline"."clline" = "contacts"."ctcrmuf14") as "contact_uf14",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CTUF' and "choiceline"."clline" = "contacts"."ctcrmuf15") as "contact_uf15"
    from "DBA"."adresses","DBA"."contacts"
    where "adresses"."adcode" not like '#######%'
    and "adresses"."adcode" = "contacts"."ctadcode"
```

## Tables source

- `adresgroup`
- `adresses`
- `choiceline`
- `choices`
- `contacts`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `company_code` | Code identifiant |
| `company_name` | Nom/designation |
| `company_activ` | Company activ |
| `company_adres1` | Company adres1 |
| `company_adres2` | Company adres2 |
| `company_zip` | Code postal |
| `company_location` | Company location |
| `company_country` | Pays |
| `company_lang` | Company lang |
| `company_currency` | Devise |
| `company_reg` | Company reg |
| `company_TVA` | Company tva |
| `company_TVAtyp` | TVA |
| `company_phone` | Telephone |
| `company_phone2` | Telephone |
| `company_fax` | Fax |
| `company_mail` | Email |
| `company_web` | Company web |
| `company_bank1` | Company bank1 |
| `company_bank2` | Company bank2 |
| `company_supp` | Fournisseur |
| `purchaser` | Achat |
| `supplier_groupid` | Fournisseur |
| `supplier_groupname` | Nom/designation |
| `company_cust` | Client |
| `customer_groupid` | Client |
| `customer_groupname` | Nom/designation |
| `customer_zone` | Client |
| `salesman` | Vente |
| `company_activity` | Company activity |
| `company_source` | Company source |
| `company_type` | Type |
| `contact_id` | Contact |
| `contact_civility` | Contact |
| `contact_name` | Nom/designation |
| `contact_firstname` | Nom/designation |
| `contact_function` | Contact |
| `contact_function2` | Contact |
| `contact_tel` | Contact |
| `contact_fax` | Fax |
| `contact_gsm` | Contact |
| `contact_mail` | Email |
| `contact_info` | Contact |
| `contact_service` | Contact |
| `contact_lang` | Contact |
| `contact_cmnt` | Commentaire |
| `contact_activ` | Contact |
| `contact_main` | Contact |
| `contact_uf01` | Contact |
| `contact_uf02` | Contact |
| `contact_uf03` | Contact |
| `contact_uf04` | Contact |
| `contact_uf05` | Contact |
| `contact_uf06` | Contact |
| `contact_uf07` | Contact |
| `contact_uf08` | Contact |
| `contact_uf09` | Contact |
| `contact_uf10` | Contact |
| `contact_uf11` | Contact |
| `contact_uf12` | Contact |
| `contact_uf13` | Contact |
| `contact_uf14` | Contact |
| `contact_uf15` | Contact |
