# d_pur_return_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         histostock.hsordno,   
         histostock.hsordlin,   
         histostock.hsitem,   
         items.itname,   
         histostock.hslot,   
         histostock.hsqty,   
         histostock.hsdatim,   
         histostock.hscomment,   
         histostock.hsum,   
         lots.loorgcode,
	    histostock.hsprgcmnt  
    FROM adresses,   
         histostock,   
         items,   
         purhead,   
         lots  
   WHERE ( purhead.phsupp = adresses.adcode ) and  
         ( histostock.hsitem = items.itcode ) and  
         ( histostock.hsordno = purhead.phcode ) and  
         ( histostock.hslot = lots.locode ) and  
         ( ( histostock.hsseq = :sel_histo ) )    

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| histostock_hsordno |
| histostock_hsordlin |
| histostock_hsitem |
| items_itname |
| histostock_hslot |
| histostock_hsqty |
| histostock_hsdatim |
| histostock_hscomment |
| histostock_hsum |
| lots_loorgcode |
| histostock_hsprgcmnt |

