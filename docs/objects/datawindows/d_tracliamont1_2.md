# d_tracliamont1_2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT distinct histostock.hscode,   
         transactions.trname,   
         histostock.hsordno,   
         sum(histostock.hsqty),   
         histostock.hsum,   
         transactions.triconnum,   
         histostock.hslot,   
         histostock.hsordtyp,   
         min(histostock.hsprgcmnt) histostock_hsprgcmnt,   
		(select itlot from items where itcode = hsitem) as itlot,
		isnull( (select lostatus from lots where locode = histostock.hslot), '' ) as lostatus      
    FROM histostock,   
         transactions
   WHERE ( histostock.hscode = transactions.trcode ) and  
         ( histostock.hscode in ('RCMO','RCPO','RCSC','OPBL','RTPO','RTSC') OR  
         ( histostock.hscode = 'RNAM' AND  
         histostock.hsqty > 0 ) ) AND  
         ( histostock.hslot = :ra_lot  ) 
GROUP BY histostock.hscode,   
         histostock.hsordtyp,   
         transactions.triconnum,
         transactions.trname,   
         histostock.hsum,   
         histostock.hslot,   
         histostock.hsordno,
		hsitem,
		lostatus      
ORDER BY histostock.hscode DESC,   
         histostock.hsordno DESC,   
         histostock.hslot ASC   

```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| transactions_trname |
| histostock_hsordno |
| totqty |
| histostock_hsum |
| transactions_triconnum |
| histostock_hslot |
| histostock_hsordtyp |
| chistostock_hsprgcmnt |
| itlot |
| lostatus |

