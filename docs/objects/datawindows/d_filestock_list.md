# d_filestock_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         items.itdefaultlot,   
         histostock.hsseq,   
         transactions.trname,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsuser,   
         histostock.hsdatim,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         transactions.trsign,   
         histostock.hsval,   
         histostock.hsordlin,
			(select fldesc from fileline where flcode = :ran_filecode and flline = hsordlin) as fileline,
			hsval,
			transactions.trcode
    FROM items,   
         histostock,   
         transactions  
   WHERE ( items.itcode = histostock.hsitem ) and  
         ( transactions.trcode = histostock.hscode ) and  
         ( ( transactions.trcode in ( 'DLFO' ) ) AND  
         ( histostock.hsordno = :ran_filecode ) AND  
         ( histostock.hsordtyp = 'F' ) )    

 UNION ALL

  SELECT items.itname,   
         items.itdefaultlot,   
         histostock.hsseq,   
         transactions.trname,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsuser,   
         histostock.hsdatim,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         transactions.trsign,   
         histostock.hsval,   
         histostock.hsordlin,
			(select fldesc from fileline where flcode = :ran_filecode and flline = mhfileline),
			hsval,
			transactions.trcode
    FROM items,   
         histostock,   
         transactions,
			mfghead
   WHERE ( items.itcode = histostock.hsitem ) and  
         ( transactions.trcode = histostock.hscode ) and  
         ( ( transactions.trcode in ( 'DLMO' ) ) AND  
         ( histostock.hsordno = mfghead.mhcode ) AND  
         ( histostock.hsordtyp = 'M' ) ) AND
			( mfghead.mhfileref = :ran_filecode)

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| items_itdefaultlot |
| hsseq |
| transactions_trname |
| hslot |
| hsloc |
| hsqty |
| hsum |
| hsuser |
| hsdatim |
| hscomment |
| hsprgcmnt |
| transactions_trsign |
| histostock_hsval |
| histostock_hsordlin |
| cfileline |
| items_hsval |
| transactions_trcode |

