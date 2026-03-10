# d_linkadristqty_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkadristqty.lddiscount,   
         linkadristqty.ldcode,   
         linkadristqty.ldcust,   
         linkadristqty.ldadresgroup   
    FROM linkadristqty   
   WHERE ( linkadristqty.lddiscount = IsNull(:ran_discount, linkadristqty.lddiscount)) AND  
         ( linkadristqty.ldcode = IsNull(:ran_code, linkadristqty.ldcode) )  

```

## Colonnes
| Colonne |
|---------|
| lddiscount |
| ldcode |
| ldcust |
| ldadresgroup |

