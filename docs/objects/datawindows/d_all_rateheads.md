# d_all_rateheads

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         ratehead.rhdesc,   
         ratehead.rhcurr,   
         ratehead.rhrpcode,   
         ratehead.rhactiv,   
         ratehead.rhstroke,
		isnull(ratehead.rhtyp, 'T') as rhtyp,
		isnull(rhmod, 'N' ) rhmod    
    FROM ratehead  
ORDER BY ratehead.rhdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| ratehead_rhcode |
| ratehead_rhdesc |
| ratehead_rhcurr |
| ratehead_rhrpcode |
| ratehead_rhactiv |
| rhstroke |
| rhtyp |
| rhmod |

