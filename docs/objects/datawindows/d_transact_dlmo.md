# d_transact_dlmo

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
         histostock.hsqtytarif,
		isnull( items.itisumtarif, 'N' ) as itisumtarif,
		isnull( items.itumtarif, 'KG' ) as itumtarif,
		(select ppvalue from progparam where ppcode = 'ITUMTRF' ) as ITUMTRF 
    FROM histostock join items on items.itcode = histostock.hsitem  
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
| clotdat |
| hscomment |
| hsordlin |
| hsprgcmnt |
| hsqtytarif |
| itisumtarif |
| itumtarif |
| itumtrf |

