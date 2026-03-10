# d_purrequest

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purreqhead.pqcode,   
         (select clname from choiceline where clcode = 'PURQ' and clline = purreqhead.pqstatus) as pqstatus,   
         purreqhead.pqdatreq,   
         purreqhead.pqaut,
		purreqhead.pqcreauser,
		purreqhead.pqdatcrea 

    FROM purreqhead   
  WHERE purreqhead.pqstatus >= :al_stat1 AND
		purreqhead.pqstatus <= :al_stat2 
  
ORDER BY purreqhead.pqdatreq asc
```

## Colonnes
| Colonne |
|---------|
| pqcode |
| pqstatus |
| pqdatreq |
| pqaut |
| pqcreauser |
| pqdatcrea |

