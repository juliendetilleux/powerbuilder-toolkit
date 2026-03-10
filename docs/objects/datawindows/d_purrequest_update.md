# d_purrequest_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purreqhead.pqcode,   
         purreqhead.pqstatus,   
         purreqhead.pqdatreq,   
         purreqhead.pqaut,
		purreqhead.pqdatcrea,
		purreqhead.pqcreauser,
		purreqhead.pqautuser,
		purreqhead.pqautdate
    FROM purreqhead   
  WHERE purreqhead.pqcode = :al_code


```

## Colonnes
| Colonne |
|---------|
| pqcode |
| pqstatus |
| pqdatreq |
| pqaut |
| pqdatcrea |
| pqcreauser |
| pqautuser |
| pqautdate |

