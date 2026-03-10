# d_purrequest_line

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purreqline.plcode,
		purreqline.plline,
		purreqline.plitem,
		(select itname from items where itcode = purreqline.plitem) as itname,
		purreqline.plqty,
		purreqline.plvalue,
		purreqline.pldatreq,
		purreqline.plstatus
    FROM purreqline   
  WHERE purreqline.plcode = :al_code AND
	plstatus <> 6

ORDER BY purreqline.plline

```

## Colonnes
| Colonne |
|---------|
| plcode |
| plline |
| plitem |
| itname |
| plqty |
| plvalue |
| pldatreq |
| plstatus |

