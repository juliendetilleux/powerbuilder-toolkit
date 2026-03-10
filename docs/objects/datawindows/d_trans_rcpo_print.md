# d_trans_rcpo_print

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
         adresses.adname,   
         histostock.hsdatim,   
         items.itdefaultlot,   
         histostock.hsordno,   
         histostock.hsordlin,   
         histostock.hsuser  ,
			( Select purline.plsalhead
             From purline
            Where purline.plcode = histostock.hsordno  And 
                  purline.plline = histostock.hsordlin     ) As SalHead ,
			( Select purline.plsalline
             From purline
            Where purline.plcode = histostock.hsordno  And 
                  purline.plline = histostock.hsordlin     ) As SalLine ,
			purhead.phrcpocmnt
    FROM histostock,   
         items,   
         adresses,   
         purhead  
   WHERE ( histostock.hsitem = items.itcode ) and  
         ( purhead.phsupp = adresses.adcode ) and  
         ( histostock.hsordno = purhead.phcode ) and  
         ( ( histostock.hsseq = :id_histostock ) )    

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
| adresses_adname |
| histostock_hsdatim |
| items_itdefaultlot |
| histostock_hsordno |
| histostock_hsordlin |
| histostock_hsuser |
| csalhead |
| csalline |
| purhead_phrcpocmnt |

