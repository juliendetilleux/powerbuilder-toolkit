# d_purrequest_line_update

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
		purreqline.pldatcrea,
		purreqline.plcreauser,
		purreqline.plstatus,
		purreqline.pldatreq
    FROM purreqline   
  WHERE purreqline.plcode = :al_code AND
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
| plqty |
| plvalue |
| pldatcrea |
| plcreauser |
| plstatus |
| pldatreq |

