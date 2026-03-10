# d_filepur_receipt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsval,   
         histostock.hsdatim,   
         histostock.hsuser,   
         transactions.trname,   
         users.usname,   
         histostock.hscomment,   
         items.itdefaultlot,
         'A'   
    FROM histostock,   
         transactions,   
         users,   
         items  
   WHERE ( transactions.trcode = histostock.hscode ) and  
         ( users.uscode = histostock.hsuser ) and  
         ( histostock.hsitem = items.itcode ) and  
         ( histostock.hsordtyp = :ras_ordtyp) AND  
         ( histostock.hsordno = :ran_ordno ) AND  
         ( histostock.hsordlin = :ran_ordlin )    

UNION ALL

	SELECT histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsval,   
         histostock.hsdatim,   
         histostock.hsuser,   
         transactions.trname,   
         users.usname,   
         histostock.hscomment,   
         '',
         'C'   
		FROM histostock,   
         transactions,   
         users,
			purgline  
   WHERE ( transactions.trcode = histostock.hscode ) and  
         ( users.uscode = histostock.hsuser ) and  
         ( histostock.hsordtyp = 'M') AND  
			( transactions.trcode = 'RCMO' ) AND
			( purgline.plcode = :ran_ordno ) AND
			( purgline.plline = :ran_ordlin ) AND
			( purgline.plrefnum = histostock.hsordno )
	
```

## Colonnes
| Colonne |
|---------|
| hslot |
| hsloc |
| hsqty |
| hsum |
| hsval |
| hsdatim |
| hsuser |
| transactions_trname |
| users_usname |
| histostock_hscomment |
| items_itdefaultlot |
| compute_0012 |

