# d_dsh_in_pur

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
select 
    purline.plcode, 
    purline.plqtyord,
    convert(date,purline.pldatreq),
    convert(date,purline.pldatsup),
    purline.plqtyrec,
    convert(date,purline.pldatrec),
    purline.plqtyord - purline.plqtyrec,
	plstatus
from purline 
where plitem=:as_itcode


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
| plstatus |

