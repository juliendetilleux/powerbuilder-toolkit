# d_adresses_barcode_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT 
	adcode,   
	adname  
FROM 
	adresses
where
	adactiv = 'Y' and
	adcode not like '#####%'
order by 
	adname, adcode

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |

