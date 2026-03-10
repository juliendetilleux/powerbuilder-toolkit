# d_invoice_infomaker_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
WITH  invoice_print as 

( SELECT invoicehead.ihcode as invoice_id,
 invoicehead.ihcodemc as invoice_number,
 invoicehead.ihmccode as invoicer_id,
 (select admultico.adname from DBA.adresses as admultico where admultico.adcode = invoicehead.ihcust) as invoicer_name,
 if invoicehead.ihtypinv = '1' then 'INVOICE'
 else 'CREDITNOTE'
 endif as document_type,invoicehead.ihcurr as invoice_currency,
 date(invoicehead.ihdate) as invoice_date,
 date(invoicehead.ihexpiry) as invoice_expiry_date,
 invoicehead.ihcust as customer_code,
 (select choices.chname from DBA.choices where choices.chtype = 'TVAT' and choices.chcode = invoicehead.ihtyptva) as vat_type,
 adresses.adname as customer_name,
 adresses.adadr1 as customer_adres1,
 adresses.adadr2 as customer_adres2,
 adresses.adzip as customer_zip,
 adresses.adloc as customer_location,
 adresses.adcountr as customer_country,
 adresses.adcustzone as customer_zone_id,
 adresses.adlang, 
 invoiceline.iltype as invoiceline_type,
 isnull(invoiceline.ilitem,'') as item_code,
 if invoiceline.iltype = 'P' then
	invoiceline.ilitcustnam
 else if isnull(invoiceline.ilitem,'') > '' then
			(select items.itname from DBA.items where items.itcode = invoiceline.ilitem)
		else ''
		endif
 endif as item_name,
 (select itdesc2 from items where items.itcode = invoiceline.ilitem) as item_desc60,
 (select ildesc from itemlang where ilitcode = invoiceline.ilitem and illgcode = 'NL') as item_descNL,
 (select ildesc from itemlang where ilitcode = invoiceline.ilitem and illgcode = 'EN') as item_descEN,
 invoiceline.ilqty*invoicehead.ihfacnot as invoiced_qty,
 invoiceline.ilqtycust*invoicehead.ihfacnot as invoiced_custqty,
 if item_code > '' then
	(select items.itum from DBA.items where items.itcode = invoiceline.ilitem)
 else ''
 endif as item_unit,
 invoiceline.ilnetval*invoicehead.ihfacnot as invoiced_value_currency,
 invoiceline.ilnetval*invoicehead.ihfacnot/invoicehead.ihcurconv as invoiced_value,
 invoicelin
```

## Colonnes
| Colonne |
|---------|
| invoice_number |
| customer_name |
| customer_adres1 |
| customer_adres2 |
| customer_zip |
| customer_country |
| customer_location |
| item_name |
| invoiced_qty |
| our_name |
| our_adres1 |
| our_adres2 |
| our_zip |
| our_location |
| our_country |
| our_zone_id |
| invoice_totsalval |
| invoice_tottvaval |
| invoice_totval |
| invoice_headcmnt |
| invoice_cmnt |
| cmntgen1 |
| cmntgen1_lang |
| cmntgen2 |
| cmntgen2_lang |
| cmntspec |
| cmntspec_lang |
| tva_0 |
| tva_6 |
| tva_12 |
| tva_21 |
| origprice |
| vat_level |
| invoiced_value_currency |
| our_tel |
| our_fax |
| our_mail |
| our_url |
| our_bank |
| our_tva |
| our_reg |
| item_desc60 |
| item_descnl |
| item_descen |
| invoiced_unitvalue |
| sale_ref |
| lot |
| intrastat |
| link_itemcust_ref |
| link_itemcust_desc |
| ean1 |
| ean2 |
| ean3 |

