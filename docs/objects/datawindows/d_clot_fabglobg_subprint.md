# d_clot_fabglobg_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT substr(clotfinit.ciperiod,1,4) an,   
         substr(clotfinit.ciperiod,5,2) mon,   
         clotfinit.cival
    FROM clotfinit
   WHERE (( substr(clotfinit.ciperiod,1,4) = :Sel_period ) OR  
         ( substr(clotfinit.ciperiod,1,4) = :Ref_period )) AND
			( clotfinit.cityp ='M') AND
         ( clotfinit.ciitem = :article)

```

## Colonnes
| Colonne |
|---------|
| an |
| mon |
| cival |

