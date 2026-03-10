# d_ratehead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         ratehead.rhactiv,   
         ratehead.rhrpcode,   
         ratehead.rhcurr,   
         ratehead.rhdesc,   
         ratehead.rhstroke,
			ratehead.rhtyp,
		ratehead.rhmod,
		isnull(ratehead.rhnet,'N') as rhnet  
    FROM ratehead  
   WHERE ( ratehead.rhcode = IsNull(:selected_rate,ratehead.rhcode) ) 

```

## Colonnes
| Colonne |
|---------|
| rhcode |
| rhactiv |
| rhrpcode |
| rhcurr |
| rhdesc |
| rhstroke |
| rhtyp |
| rhmod |
| rhnet |

