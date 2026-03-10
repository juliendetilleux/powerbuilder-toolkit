# d_custratesld_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT linkdisc.ldstartdat,   
         linkdisc.ldstopdat,   
         linkdisc.ldtyp,   
         linkdisc.ldqty1,   
         linkdisc.ldqty2,   
         linkdisc.lddiscpc,   
         linkdisc.ldlvl,   
         linkdisc.ldkey  
    FROM linkdisc,   
         yv_linkitad as linkitad 
   WHERE linkdisc.ldcode = linkitad.lkcode AND 
         linkitad.lkadcode = :as_AdCode AND   
         linkitad.lkitem = :as_ItCode AND 
         linkitad.lktyp = 'S' AND
	    linkitad.lkactiv = 'Y' 
ORDER BY linkdisc.ldstartdat ASC   

```

## Colonnes
| Colonne |
|---------|
| ldstartdat |
| ldstopdat |
| ldtyp |
| ldqty1 |
| ldqty2 |
| lddiscpc |
| ldlvl |
| ldkey |

