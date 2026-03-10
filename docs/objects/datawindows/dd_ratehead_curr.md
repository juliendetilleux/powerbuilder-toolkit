# dd_ratehead_curr

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         ratehead.rhrpcode,   
         ratehead.rhdesc  
    FROM ratehead  
   WHERE ( ratehead.rhactiv = 'Y' ) AND  
			( ratehead.rhtyp = 'T' ) AND 
         ( ratehead.rhcurr = :ras_Curr )   
ORDER BY ratehead.rhdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| rhcode |
| rhrpcode |
| rhdesc |

