# d_salediscount

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT salediscount.sdcode,   
         if salediscount.sdstat1 = '*' then 'Tous' else (select itstat1.imdesc from itstat1 where itstat1.imcode = salediscount.sdstat1) endif as sdstat1,   
         if salediscount.sdstat2 = '*' then 'Tous' else (select itstat2.isdesc from itstat2 where itstat2.iscode = salediscount.sdstat1 and itstat2.iscode2 = salediscount.sdstat2) endif as sdstat2,   
         salediscount.sddisc,   
         salediscount.sdqty ,
		salediscount.sdstat1 as stat1,
		salediscount.sdstat2 as stat2 
    FROM salediscount   

```

## Colonnes
| Colonne |
|---------|
| sdcode |
| sdstat1 |
| sdstat2 |
| sddisc |
| sdqty |
| stat1 |
| stat2 |

