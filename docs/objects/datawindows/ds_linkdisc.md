# ds_linkdisc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT linkdisc.ldcode,   
         linkdisc.ldkey,   
         linkdisc.ldtyp,   
         linkdisc.ldqty1,   
         linkdisc.ldqty2,   
         linkdisc.lddiscpc,   
         linkdisc.ldlvl,   
         linkdisc.ldstartdat,   
         linkdisc.ldstopdat  
    FROM linkdisc    
    WHERE linkdisc.ldstopdat   > :adt_lastsync  
```

## Colonnes
| Colonne |
|---------|
| ldcode |
| ldkey |
| ldtyp |
| ldqty1 |
| ldqty2 |
| lddiscpc |
| ldlvl |
| ldstartdat |
| ldstopdat |

