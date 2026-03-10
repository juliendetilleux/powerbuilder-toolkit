# d_brf_transact_rcsc

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
         lots.locode,   
         lots.loorgcode,
		(select itname from items where itcode = histostock.hsitem) as itname,    
		(select getdate() from items where itcode = histostock.hsitem) as clotdat
    FROM histostock,   
         lots  
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
| lots_locode |
| lots_loorgcode |
| itname |
| clotdat |

