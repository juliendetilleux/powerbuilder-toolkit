# d_salediscount_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT salediscount.sdcode,   
         salediscount.sdstat1,   
         salediscount.sdstat2,   
         salediscount.sddisc,   
         salediscount.sdqty,
	    salediscount.sddatestart,
	    salediscount.sddatestop    
    FROM salediscount  
  WHERE salediscount.sdcode = IsNull(:al_sdcode , salediscount.sdcode)

```

## Colonnes
| Colonne |
|---------|
| sdcode |
| sdstat1 |
| sdstat2 |
| sddisc |
| sdqty |
| sddatestart |
| sddatestop |

