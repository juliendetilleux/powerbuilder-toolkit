# d_transact_rcpo

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
         histostock.hsprgcmnt,
		histostock.hspn,
			' ' as RcpoCmnt,
		CAST(null as numeric(12,3)) as qtytarif  ,
		(select itname from items where  items.itcode= histostock.hsitem) as itname  ,
		CAST(null as char(2)) as umtarif,
		(select date(getdate()) from progparam where ppcode = 'CLOTURWIP' ) as clotdat  ,
		CAST('N' as char(1)) as setdefaultloc,
		( select isnull(itval,0) from  items where  items.itcode= histostock.hsitem) as itval
    FROM histostock  
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
| hspn |
| rcpocmnt |
| qtytarif |
| itname |
| umtarif |
| clotdat |
| setdefaultloc |
| itval |

