# d_linkaddiscount_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkaddiscount.lddiscount,   
         linkaddiscount.ldcode,   
         linkaddiscount.ldcust,   
         linkaddiscount.ldadresgroup  
    FROM linkaddiscount   
   WHERE ( linkaddiscount.lddiscount = IsNull(:ran_discount, linkaddiscount.lddiscount)) AND  
         ( linkaddiscount.ldcode = IsNull(:ran_code, linkaddiscount.ldcode))  

```

## Colonnes
| Colonne |
|---------|
| lddiscount |
| ldcode |
| ldcust |
| ldadresgroup |

