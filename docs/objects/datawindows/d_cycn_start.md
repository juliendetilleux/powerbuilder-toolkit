# d_cycn_start

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clname,   
         locations.lccode,   
         locations.lcgroup  
    FROM choiceline,   
         locations  
   WHERE ( locations.lcgroup = choiceline.clline ) and  
         ( ( choiceline.clcode = 'LOCG' ) AND  
         ( locations.lcactiv = 'Y' ) )   
ORDER BY choiceline.clname ASC,   
	locations.lccode ASC 
```

## Colonnes
| Colonne |
|---------|
| choiceline_clname |
| locations_lccode |
| locations_lcgroup |

