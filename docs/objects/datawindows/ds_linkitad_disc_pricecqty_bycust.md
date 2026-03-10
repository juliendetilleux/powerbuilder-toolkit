# ds_linkitad_disc_pricecqty_bycust

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkitad.lkadcode as socity,
	    linkitad.lkitem as item,   
         linkdisc.ldqty2 as qty_min,   
         linkdisc.lddiscpc as price,   
         linkdisc.ldstartdat as date_start,   
         linkdisc.ldstopdat as date_stop 
    FROM linkitad
		LEFT OUTER JOIN linkdisc ON linkitad.lkcode = linkdisc.ldcode AND 
												linkdisc.ldtyp = '6' AND 
												linkdisc.ldstopdat > now()
  WHERE linkitad.lktyp = 'S' AND
		linkitad.lkactiv = 'Y' AND
		linkitad.lkadcode = :as_cust
ORDER BY linkitad.lkadcode,
	    linkitad.lkitem,
	    linkdisc.ldqty2
```

## Colonnes
| Colonne |
|---------|
| linkitad_socity |
| linkitad_item |
| linkdisc_qty_min |
| linkdisc_price |
| linkdisc_date_start |
| linkdisc_date_stop |

