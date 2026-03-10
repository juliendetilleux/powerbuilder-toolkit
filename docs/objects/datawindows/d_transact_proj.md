# d_transact_proj

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
SELECT hscomment,
		histostock.hsqty,
		histostock.hsloc,
		histostock.hslot,
		histostock.hsum,
		histostock.hsitem,
		histostock.hsordtyp,
		histostock.hsval,
		0 as file,
		'' as subfile
	FROM Histostock   

```

## Colonnes
| Colonne |
|---------|
| hscomment |
| hsqty |
| hsloc |
| hslot |
| hsum |
| hsitem |
| hsordtyp |
| hsval |
| file |
| subfile |

