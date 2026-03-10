# d_tracliamont2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         transactions.trname,   
         histostock.hsordno,  
         histostock.hsordlin,
         sum(histostock.hsqty),   
         histostock.hsum,   
         items.itname,   
         histostock.hsitem,   
         histostock.hslot,   
         transactions.triconnum,   
         lots.lolotctrl,   
         histostock.hsordtyp,
         items.itdefaultlot  ,
		isnull( (select lostatus from lots where locode = histostock.hslot), '' ) as lostatus       
    FROM histostock,   
         items,   
         transactions,   
         lots  
   WHERE ( histostock.hscode = transactions.trcode ) and  
         ( histostock.hsitem = items.itcode ) and  
         ( histostock.hslot = lots.locode ) and  
         ( histostock.hscode In ( 'DLMO', 'RTMO') Or ( histostock.hscode = 'RNAM' And histostock.hsqty < 0 ) ) AND  
         ( histostock.hslot <> :ra_lot ) AND  
         ( histostock.hsordno = :ra_ordno ) And
			( histostock.hsordtyp = :ra_ordtyp ) And
   		histostock.hsqty <> 0 
GROUP BY histostock.hscode,   
         histostock.hsordtyp,   
         lots.lolotctrl,   
         transactions.triconnum,   
         transactions.trname,   
         items.itname,   
         histostock.hsum,   
         histostock.hslot,   
         histostock.hsitem,
         histostock.hsordlin,   
         histostock.hsordno,  
         items.itdefaultlot,
		lostatus         
ORDER BY histostock.hsordno DESC ,   
         histostock.hsitem,   
         histostock.hslot,
			histostock.hscode

```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| transactions_trname |
| histostock_hsordno |
| histostock_hsordlin |
| totqty |
| histostock_hsum |
| items_itname |
| histostock_hsitem |
| histostock_hslot |
| transactions_triconnum |
| lots_lolotctrl |
| histostock_hsordtyp |
| items_itdefaultlot |
| lostatus |

