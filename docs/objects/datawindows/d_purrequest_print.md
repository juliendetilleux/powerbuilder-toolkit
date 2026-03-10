# d_purrequest_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT purreqhead.pqcode,
		purreqhead.pqstatus,
		purreqhead.pqdatreq,
		purreqhead.pqaut,
		purreqhead.pqdatcrea,
		purreqhead.pqautdate,
		purreqhead.pqautuser,
		purreqhead.pqcreauser
    FROM purreqhead  
   WHERE purreqhead.pqcode = :an_puroder    

```

## Colonnes
| Colonne |
|---------|
| pqcode |
| pqstatus |
| pqdatreq |
| pqaut |
| pqdatcrea |
| pqautdate |
| pqautuser |
| pqcreauser |

