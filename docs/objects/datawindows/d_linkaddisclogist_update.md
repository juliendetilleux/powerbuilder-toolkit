# d_linkaddisclogist_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkaddisclogist.lddiscount,   
         linkaddisclogist.ldcode,   
         linkaddisclogist.ldcust,   
         linkaddisclogist.ldadresgroup  
    FROM linkaddisclogist   
   WHERE ( linkaddisclogist.lddiscount = IsNull(:ran_discount, linkaddisclogist.lddiscount)) AND  
         ( linkaddisclogist.ldcode = IsNull(:ran_code,linkaddisclogist.ldcode) )  

```

## Colonnes
| Colonne |
|---------|
| lddiscount |
| ldcode |
| ldcust |
| ldadresgroup |

