# d_salechoose

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
select salhead.shcode,
		( select first salline.sldatship from salline where salline.slcode = salhead.shcode order by salline.sldatship) as shipdat,
		salhead.shdatreq
from salhead
where salhead.shstatus < '5' and
		 salhead.shcust = :as_adcode
order by shipdat, salhead.shcode
```

## Colonnes
| Colonne |
|---------|
| shcode |
| shipdat |
| shdatreq |

