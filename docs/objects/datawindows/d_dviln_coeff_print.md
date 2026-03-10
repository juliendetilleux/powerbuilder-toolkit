# d_dviln_coeff_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  Select projhead.phcode  , 
         projhead.phdesc  ,
         projhead.phdesc2
    From projhead  
   Where projhead.phcode = :ran_ProjId

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phdesc |
| phdesc2 |

