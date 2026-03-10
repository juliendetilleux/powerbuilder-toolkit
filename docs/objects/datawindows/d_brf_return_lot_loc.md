# d_brf_return_lot_loc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
select matallocs.maloc
	  from matallocs
	  where 	matallocs.malot = :Sel_lot AND
				matallocs.maissuedqty > 0 
```

## Colonnes
| Colonne |
|---------|
| maloc |

