# d_his_ordlin

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         transactions.trname,   
         histostock.hsitem,   
         items.itname,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsordno,   
         histostock.hsseq,   
         histostock.hsdatim,   
         items.itum,   
         lots.lolotctrl  
    FROM histostock,   
         transactions,   
         items,   
         lots  
   WHERE ( histostock.hsitem = items.itcode ) and  
         ( transactions.trcode = histostock.hscode ) and  
         ( histostock.hslot = lots.locode ) and  
         ( histostock.hsordno = :Selected_ordno ) AND  
         ( histostock.hsordlin = :selected_line ) AND  
         histostock.hsordtyp = :Selected_typ  

Union all 
  
  SELECT histostock.hscode,   
         transactions.trname,   
         '',   
         substr(purgline.pldesc,1,30),   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsordno,   
         histostock.hsseq,   
         histostock.hsdatim,   
         '',   
         ''  
    FROM histostock,   
         transactions,   
         purgline   
   WHERE ( transactions.trcode = histostock.hscode ) and
         ( histostock.hsordno = purgline.plcode ) And
         ( histostock.hsordlin = purgline.plline ) And 
         ( histostock.hsordno = :Selected_ordno ) AND  
         ( histostock.hsordlin = :selected_line ) AND  
         histostock.hsordtyp = :Selected_typ  
  
ORDER BY 10 DESC   

```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| transactions_trname |
| histostock_hsitem |
| items_itname |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsordno |
| histostock_hsseq |
| histostock_hsdatim |
| items_itum |
| lots_lolotctrl |

