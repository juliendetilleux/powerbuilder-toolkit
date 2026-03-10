# dd_ratehead_curr_all

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         ratehead.rhrpcode,   
         ratehead.rhdesc,   
         isnull(ratehead.rhtyp, 'T') as rhtyp   
    FROM ratehead  
   WHERE ( ratehead.rhactiv = 'Y' ) AND  
         ( ratehead.rhcurr = :ras_Curr )   
ORDER BY ratehead.rhdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| rhcode |
| rhrpcode |
| rhdesc |
| rhtyp |

