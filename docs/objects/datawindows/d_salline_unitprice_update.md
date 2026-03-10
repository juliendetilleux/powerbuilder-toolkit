# d_salline_unitprice_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT Salline.slcode,
		Salline.slline,
		Salhead.shcust,
		Salhead.shcurr,
		Salline.slitem,
		Items.itname,
		Salline.slqtyreq,
		Items.itum,
		Salline.slunitprice,
		(Salline.slunitprice) as unitprice_base,
		Salline.sldatreq,
		Salline.slqtyreal,
		Salline.slstatus,
		Salline.slstdval,
		Salline.slsalval,
		Salline.slorval,
		Salline.slprorig,
		Salline.slpricetype,
		Adresses.adname,
		Salline.slrist,
      	salline.sluomconv,
		salline.slqtyinv,
		shipto.stdesc
	FROM Salline,
		Salhead,
		Items,
		Currencies,
		Adresses,
		shipto
	WHERE Salline.slcode = Salhead.shcode
		AND Items.itcode = Salline.slitem
		AND Currencies.cucode = Salhead.shcurr
		AND Adresses.adcode = Salhead.shcust
		AND Salline.sldatreq >= :adt_date_limite 
		AND ( isnull(salline.slprintghost, 'Y' ) <> 'N' ) 
		AND ( ( Salline.slstatus = '6' and Salline.slqtyinv < Salline.slqtyreal )
		       OR ( Salline.slstatus < '6' and Salline.slqtyinv < Salline.slqtyreq ) )
		AND salline.slshipto = shipto.stseq
		AND adresses.adcode = shipto.stcode
	ORDER BY Salline.slcode,
		Salline.slline
```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_slline |
| salhead_shcust |
| salhead_shcurr |
| salline_slitem |
| items_itname |
| salline_slqtyreq |
| items_itum |
| salline_slunitprice |
| cunitprice_base |
| salline_sldatreq |
| salline_slqtyreal |
| salline_slstatus |
| salline_slstdval |
| salline_slsalval |
| salline_slorval |
| salline_slprorig |
| salline_slpricetype |
| adresses_adname |
| salline_slrist |
| salline_sluomconv |
| salline_slqtyinv |
| shipto_stdesc |

