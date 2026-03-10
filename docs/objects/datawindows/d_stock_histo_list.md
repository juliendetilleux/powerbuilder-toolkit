# d_stock_histo_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
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
         histostock.hsum,   
         histostock.hsordno,   
         histostock.hsseq,   
         histostock.hsdatim,   
         items.itdefaultlot,   
         lots.loadcode,   
         lots.loorgcode,   
         items.itmccode,
		isnull( histostock.hsqtytarif, 0 ) as hsqtytarif,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF  
    FROM histostock JOIN items ON histostock.hsitem = items.itcode
						JOIN transactions ON transactions.trcode = histostock.hscode   
         					JOIN lots ON histostock.hslot = lots.locode 
   WHERE ( histostock.hsitem like :Selected_item ) AND  
         ( histostock.hsdatim >= :Startdate ) AND  
         ( histostock.hsdatim <= :Enddate )    
ORDER BY histostock.hsseq DESC   

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
| histostock_hsum |
| histostock_hsordno |
| histostock_hsseq |
| histostock_hsdatim |
| items_itdefaultlot |
| lots_loadcode |
| lots_loorgcode |
| items_itmccode |
| hsqtytarif |
| itisumtarif |
| itumtarif |
| itumtrf |

