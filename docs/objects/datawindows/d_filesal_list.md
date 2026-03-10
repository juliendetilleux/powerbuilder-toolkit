# d_filesal_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
	SELECT salhead.shdatcrea as sal_datcrea,
			'C' as sal_type,
			salline.slcode as sal_ordno,
			salline.slline as sal_ordline,
			items.itcode as sal_itcode,
			items.itname as sal_itname,
			adresses.adname as sal_cust,
			choices.chname as sal_status,
			salline.slqtyreq as sal_qtyreq,
			salline.slqtyreal as sal_qtyreal,
			salline.slqtyinv as sal_qtyinv,
			if slstatus between '1' and '6'
				 then (( sal_qtyreq - sal_qtyinv ) * sal_salval)
				 else 0
			 endif as sal_invval_left,
			salline.slsalval as sal_salval,
			salline.slqtyreq * items.itstdpur as sal_revcost,
			(select sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv)
				 from invoiceline, invoicehead
				 where invoicehead.ihcode = invoiceline.ilcode and
						 invoiceline.ilsalorder = salline.slcode and
						 invoiceline.ilsalline = salline.slline) as sal_inv,
			salhead.shcurr as sal_curr,
			salline.slfileline,
			(select fileline.fldesc
				 from fileline
				 where fileline.flcode = salline.slfileref and
						 fileline.flline = salline.slfileline) as filelinedesc,
			salline.sldatreq saldat,
			items.ittyp as item_type  ,
			1 As InvFacNot,
			salline.slcomment	 		
		FROM salhead,
			salline,
			items,
			adresses,
			choices,
			currencies
		WHERE salline.slcode = salhead.shcode
			AND items.itcode = salline.slitem
			AND adresses.adcode = salhead.shcust
			AND choices.chcode = salline.slstatus
			AND currencies.cucode = salhead.shcurr
			AND salline.slfileref = :ran_fhcode
			AND choices.chtype = 'CUSS'
			AND salline.slstatus < '9' 
 UNION ALL
	SELECT salhead.shdatcrea,
			'C',
			salpline.slcode,
			salpline.slline,
			items.itcode,
			items.itname,
			adresses.adname,
			choices.chname,
			salpline.slqtyreq as sal_qtyreq,
			salpline.slqtyreal as sal_qtyreal,
			(select sum(invoiceline.ilqty) from invoiceline where invoiceline.ilsalorder = salpline.slcode and invoiceline.ilsalline = salpline.slline) as sal_qt
```

## Colonnes
| Colonne |
|---------|
| salhead_sal_datcrea |
| csal_type |
| salline_sal_ordno |
| salline_sal_ordline |
| items_sal_itcode |
| items_sal_itname |
| adresses_sal_cust |
| choices_sal_status |
| salline_sal_qtyreq |
| salline_sal_qtyreal |
| salline_sal_qtyinv |
| csal_invval_left |
| salline_sal_salval |
| csal_revcost |
| csal_inv |
| salhead_sal_curr |
| salline_slfileline |
| cfilelinedesc |
| salline_saldat |
| items_item_type |
| salhead_invfacnot |
| salline_slcomment |

