# d_palet_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT (select first clsalhead from colisage where clpallet = :as_palette) as salorder,
			(select first clsalline from colisage where clpallet = :as_palette and clsalhead = salorder) as salordline,
			(select shcust from salhead where shcode = salorder) as cust,
			(select slshipto from salline where slcode = salorder and slline = salordline) as stseq,
			(select min(sldatreq) 
				from salline 
				where exists(select * from colisage 
								where clsalhead = salorder and 
									clsalhead = slcode and 
									clsalline = slline and
									clpallet = :as_palette)) as datreq,
			(select shpreparator from salhead where shcode = salorder) as preparator
    FROM dummy

```

## Colonnes
| Colonne |
|---------|
| salorder |
| salordline |
| cust |
| stseq |
| datreq |
| preparator |

