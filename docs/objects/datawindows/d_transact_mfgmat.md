# d_transact_mfgmat

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
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
			(select itname from items where itcode = hsitem) as itname,
			lots.loexpdat,
			(select sum(h1.hsqty) 
				from histostock as h1 
				where h1.hscode = 'RCMO' and 
					h1.hsordtyp = 'M' and 
					h1.hslot = histostock.hslot and
					h1.hsloc = histostock.hsloc and
					h1.hsordno = histostock.hsordno and
					h1.hsordlin = 0 /*os2519*/) as qtyenter ,
			(select sum( isnull( h1.hsqtytarif, 0 ) ) 
				from histostock as h1 
				where h1.hscode = 'RCMO' and 
					h1.hsordtyp = 'M' and 
					h1.hslot = histostock.hslot and
					h1.hsloc = histostock.hsloc and
					h1.hsordno = histostock.hsordno and
					h1.hsordlin = 0 ) as qtyentertrf /*os2751*/,
			'' as typ,
			(select itlot from items where itcode = histostock.hsitem) as itparlot,
		CAST('N' as char(1)) as setdefaultloc, 		
         histostock.hsqtytarif,
		isnull( items.itisumtarif, '' ) as itisumtarif, 
		isnull((select ppvalue from progparam where ppcode = 'ITUMTRF' ) , '' ) as ITUMTRF,
		isnull( ( SELECT choiceline.clname FROM choiceline where clcode = 'CTG2'  and clline = items.itstat4 ), '' ) as catof
    FROM histostock join items on histostock.hsitem = items.itcode, lots  
   WHERE histostock.hsseq = :Selected_sequence AND  
			histostock.hslot = lots.locode AND
			histostock.hsordlin = 0 /*os2519*/ 

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
| itname |
| lots_loexpdat |
| cqtyenter |
| qtyentertrf |
| ctyp |
| itparlot |
| setdefaultloc |
| histostock_hsqtytarif |
| itisumtarif |
| itumtrf |
| catof |

