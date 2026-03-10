# d_dsh_in_pur_oldcode

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
select 
    purline.plcode, 
    purline.plqtyord,
    purline.pldatreq,
    purline.pldatsup,
    purline.plqtyrec,
    purline.pldatrec,
    purline.plqtyord - purline.plqtyrec
from purline 
where plitem=:as_olditcode
```

## Colonnes
| Colonne |
|---------|
| plcode |
| plqtyord |
| pldatreq |
| pldatsup |
| plqtyrec |
| pldatrec |
| compute_0007 |

