# dd_ratehead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         ratehead.rhrpcode,   
         ratehead.rhdesc,   
         ratehead.rhcurr  
    FROM ratehead  
   WHERE ratehead.rhactiv = 'Y' AND  
			ratehead.rhtyp = 'T' 
ORDER BY ratehead.rhdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| rhcode |
| rhrpcode |
| rhdesc |
| rhcurr |

