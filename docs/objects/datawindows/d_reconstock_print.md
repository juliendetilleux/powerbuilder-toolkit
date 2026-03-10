# d_reconstock_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,     
         items.itname,     
         items.itstock,     
         items.itstdpur,
         items.itstat1,     
         items.itstat2,          
         items.itum,     
         isnull ( 
                  ( select sum(histostock.hsqty * transactions.trsign * -1)
                     from histostock , transactions 
                    where histostock.hscode = transactions.trcode
                      and histostock.hsitem = items.itcode
                      and histostock.hsdatim > :stockdate
                  ) , 0
                ) as stockmvmt,      
         itstat1.imdesc,     
         itstat2.isdesc
    FROM items,     
         itstat1,     
         itstat2    

   WHERE items.itcode not like '%##[CMPRS]'     
     AND items.itstat1 = itstat1.imcode     
     AND items.itstat2 = itstat2.iscode2     
     AND itstat1.imcode = itstat2.iscode     

ORDER BY items.itstat1 , items.itstat2 , items.itname     

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itstock |
| itstdpur |
| itstat1 |
| itstat2 |
| itum |
| stockmvmt |
| itstat1_imdesc |
| itstat2_isdesc |

