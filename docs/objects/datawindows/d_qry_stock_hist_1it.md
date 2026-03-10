# d_qry_stock_hist_1it

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         histostock.hsitem,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsordno,   
         histostock.hsseq,   
         histostock.hsdatim,   
         items.itdefaultlot,   
         transactions.trsign,   
         items.itstock,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		isnull( histostock.hsqtytarif, 0 ) as hsqtytarif  
    FROM histostock JOIN items ON histostock.hsitem = items.itcode   
         					JOIN transactions ON histostock.hscode = transactions.trcode 
   WHERE ( histostock.hsitem = :Selected_item ) AND  
         ( histostock.hsdatim >= :Startdate )    
ORDER BY histostock.hsseq DESC   

```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| histostock_hsitem |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsordno |
| histostock_hsseq |
| histostock_hsdatim |
| items_itdefaultlot |
| transactions_trsign |
| items_itstock |
| itisumtarif |
| itumtarif |
| itumtrf |
| hsqtytarif |

