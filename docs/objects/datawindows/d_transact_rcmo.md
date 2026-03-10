# d_transact_rcmo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hsseq,   
         histostock.hscode,   
         histostock.hsordtyp,   
         histostock.hsordno,   
         histostock.hsitem,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsval,   
         histostock.hsuser,   
         histostock.hsdatim,   
         histostock.hscomment,   
         histostock.hsordlin,   
         histostock.hsprgcmnt  ,
		CAST('N' as char(1)) as setdefaultloc,
	    histostock.hsqtytarif,
	    items.itumtarif ,
	    items.itisumtarif 
    FROM histostock JOIN items ON histostock.hsitem = items.itcode 
   WHERE histostock.hsseq = :Selected_sequence 
		   

```

## Colonnes
| Colonne |
|---------|
| hsseq |
| hscode |
| hsordtyp |
| hsordno |
| hsitem |
| hslot |
| hsloc |
| hsqty |
| hsum |
| hsval |
| hsuser |
| hsdatim |
| hscomment |
| hsordlin |
| hsprgcmnt |
| setdefaultloc |
| hsqtytarif |
| items_itumtarif |
| items_itisumtarif |

