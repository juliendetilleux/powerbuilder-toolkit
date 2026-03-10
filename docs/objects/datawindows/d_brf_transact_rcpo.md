# d_brf_transact_rcpo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
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
         histostock.hsprgcmnt,
			' ' as RcpoCmnt  ,
		CAST(null as numeric(12,3)) as qtytarif  ,
		CAST(null as char(2)) as umtarif,
		(select itname from items where itcode = histostock.hsitem) as itname, 
         (select getdate() from items where itcode = histostock.hsitem) as clotdat,
		0 as solde
    FROM histostock  
   WHERE histostock.hsseq = :Selected_sequence    

```

## Colonnes
| Colonne |
|---------|
| hsseq |
| solde_t |
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
| rcpocmnt |
| qtytarif |
| umtarif |
| itname |
| clotdat |
| solde |

