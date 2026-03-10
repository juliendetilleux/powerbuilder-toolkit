# ds_sale_purauto_create

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode
    FROM salhead,   
   WHERE salhead.shstatus < '5' AND
		salhead.shcode > (select pmival from parameters where pmcode = 'PURAUTOC') AND
		now() > dateadd( minute, (select round(pmnval,0) from parameters where pmcode = 'PURAUTOC'), salhead.shdatcrea ) AND
		EXISTS (select salline.slline
					 from salline,
						items
				   where salline.slcode = salhead.shcode and
						salline.slitem = items.itcode and
						salline.slqtyreq > 0 and
						items.ittyp in ('C','D','P') and
						items.itpol = 'C' and
						items.itpurchaseauto = 'Y'and
						(exists (select linkitad.lkcode
								    from linkitad, adresses
								 where linkitad.lktyp = 'P' and
									linkitad.lkitem = items.itcode and
									linkitad.lkmain = 'Y' and
									linkitad.lkadcode = adresses.adcode/* and
									trim(isnull(adresses.admail,'')) <> ''*/) 
						OR 
						1 = (select count(linkitad.lkcode)
								    from linkitad, adresses
								 where linkitad.lktyp = 'P' and
									linkitad.lkitem = items.itcode and
									linkitad.lkadcode = adresses.adcode /*and
									trim(isnull(adresses.admail,'')) <> ''*/) )) 
  
ORDER BY salhead.shcode ASC

```

## Colonnes
| Colonne |
|---------|
| shcode |

