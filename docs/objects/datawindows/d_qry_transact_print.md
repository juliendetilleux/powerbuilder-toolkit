# d_qry_transact_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,   
         histostock.hsitem,   
         items.itname,   
         histostock.hslot,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsordno,   
         histostock.hsseq,   
         histostock.hsdatim,   
         histostock.hsordtyp,   
         ( select transreason.tidesc from transreason 
				where histostock.hsordtyp = transreason.tiimp 
				AND histostock.hscode = transreason.ticode) ,   
         items.itdefaultlot,   
         transactions.trname ,   
         transactions.trsign,   
         histostock.hsval,   
         lots.loorgcode,
			'' adresname,
			items.itactiv,
			items.itstat1,
			items.itstat2,
			histostock.hsloc,
		histostock.hsord2no,
		histostock.hsord2lin,
		histostock.hsuser,
		histostock.hscomment,
		histostock.hsprgcmnt,
		items.itstat3
    FROM histostock,
         items,   
         transactions,   
         lots  
   WHERE ( histostock.hsitem = items.itcode ) and  
         ( histostock.hscode = transactions.trcode ) and  
         ( lots.locode = histostock.hslot ) and  
         ( histostock.hscode like :Selected_tr ) AND  
         ( histostock.hsordtyp like :Selected_reas ) AND  
         ( histostock.hsdatim >= :Startdate ) AND  
         ( histostock.hsdatim <= :Enddate ) AND
			( histostock.hscode not in ( 'RTXO', 'DLXO', 'RCPO', 'RTPO' ) ) 
union all 
  SELECT histostock.hscode,   
         histostock.hsitem,   
         items.itname,   
         histostock.hslot,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsordno,   
         histostock.hsseq,   
         histostock.hsdatim,   
         histostock.hsordtyp,   
         ( select transreason.tidesc from transreason 
				where histostock.hsordtyp = transreason.tiimp 
				AND histostock.hscode = transreason.ticode) ,   
         items.itdefaultlot,   
         transactions.trname ,   
         transactions.trsign,   
   
```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| histostock_hsitem |
| items_itname |
| histostock_hslot |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsordno |
| histostock_hsseq |
| histostock_hsdatim |
| histostock_hsordtyp |
| transreason_tidesc |
| items_itdefaultlot |
| transactions_trname |
| transactions_trsign |
| chsval |
| cloorgcode |
| adresname |
| items_itactiv |
| items_itstat1 |
| items_itstat2 |
| histostock_hsloc |
| histostock_hsord2no |
| histostock_hsord2lin |
| histostock_hsuser |
| histostock_hscomment |
| histostock_hsprgcmnt |
| items_itstat3 |

