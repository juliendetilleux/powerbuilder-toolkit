# d_stockmini

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
			items.itname,
			(isnull((SELECT sum(histostock.hsqty)
					  FROM histostock
					WHERE histostock.hscode = ('DLXO') AND
								histostock.hsitem = items.itcode AND
								histostock.hsdatim between :adt_short and today()),0) - isnull((SELECT sum(histostock.hsqty)
																													  FROM histostock
																													WHERE histostock.hscode = ('RTXO') AND
																																histostock.hsitem = items.itcode AND
																																histostock.hsdatim between :adt_short and today()),0))
						 * :al_nbcouv / datediff( day, :adt_short, today() ) as qtyshortdate,
			(isnull((SELECT sum(histostock.hsqty)
					  FROM histostock
					WHERE histostock.hscode = ('DLXO') AND
								histostock.hsitem = items.itcode AND
								histostock.hsdatim between :adt_long and today()),0) - isnull((SELECT sum(histostock.hsqty)
																												  FROM histostock
																												WHERE histostock.hscode = ('RTXO') AND
																															histostock.hsitem = items.itcode AND
																															histostock.hsdatim between :adt_long and today()),0))
						 * :al_nbcouv / datediff( day, :adt_long, today() ) as qtylongdate,
			CAST(null as numeric(8,0)) as qtycoeff,
			items.itsecur,
			items.itsecur as oldsecur,
			items.itum, 
			CAST(:ad_coeff as numeric(16,10)) as coeff
    FROM items   
  WHERE items.itsale = 'Y' AND
			items.itactiv = 'Y'  
ORDER BY items.itcode


```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| qtyshortdate |
| qtylongdate |
| qtycoeff |
| itsecur |
| oldsecur |
| itum |
| coeff |

