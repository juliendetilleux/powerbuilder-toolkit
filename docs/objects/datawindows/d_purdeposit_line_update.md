# d_purdeposit_line_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purreqline.plcode,
		purreqline.plline,
		purreqline.plitem,
		items.itname,
		items.itusr01,
		purreqline.plqty,
		purreqline.plvalue,
		purreqline.pldatcrea,
		purreqline.plcreauser,
		purreqline.plstatus,
		purreqline.pldatreq
    FROM purreqline , items  
  WHERE items.itcode = purreqline.plitem AND 
			purreqline.plcode = :al_code AND
			purreqline.plstatus <> 6 
ORDER BY purreqline.plline
```

## Colonnes
| Colonne |
|---------|
| plcode |
| plline |
| plitem |
| itname |
| items_itusr01 |
| plqty |
| plvalue |
| pldatcrea |
| plcreauser |
| plstatus |
| pldatreq |

