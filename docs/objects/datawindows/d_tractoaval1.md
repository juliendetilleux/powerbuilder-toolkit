# d_tractoaval1

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         transactions.trname,   
         histostock.hsordno,   
         sum(histostock.hsqty),   
         histostock.hsum,   
         transactions.triconnum,   
         histostock.hslot,   
         histostock.hsordtyp,   
         histostock.hsordlin ,
		(select itlot from items where itcode = hsitem) as itlot,
		isnull( (select lostatus from lots where locode = histostock.hslot), '' ) as lostatus      
    FROM histostock,   
         transactions
   WHERE ( histostock.hscode = transactions.trcode ) and  
         ( ( histostock.hscode in ('DLMO','DLXO','RNAM','DLST','RTXO','AJST','AJCL','AJDS','AJSM') ) AND  
         ( histostock.hslot = :ra_lot ) ) and
			histostock.hsqty <> 0   
GROUP BY histostock.hscode,   
         histostock.hsordtyp,   
         transactions.triconnum,   
         transactions.trname,   
         histostock.hsum,   
         histostock.hslot,   
         histostock.hsordno,   
         histostock.hsordlin,
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
| histostock_hsordlin |
| itlot |
| lostatus |

