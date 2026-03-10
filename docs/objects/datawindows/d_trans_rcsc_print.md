# d_trans_rcsc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsitem,   
         histostock.hslot,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         histostock.hsdatim,   
         items.itdefaultlot,   
         histostock.hsordno,   
         histostock.hsordlin,   
         histostock.hsuser  
    FROM histostock,   
         items
   WHERE ( histostock.hsitem = items.itcode ) and  
         ( histostock.hsseq = :id_histostock )    

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsitem |
| histostock_hslot |
| histostock_hscomment |
| histostock_hsprgcmnt |
| histostock_hsdatim |
| items_itdefaultlot |
| histostock_hsordno |
| histostock_hsordlin |
| histostock_hsuser |

