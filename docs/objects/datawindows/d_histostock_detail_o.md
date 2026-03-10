# d_histostock_detail_o

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  Select 1,histostock.hsitem,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsuser,   
         histostock.hsdatim,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         histostock.hsordtyp,   
         histostock.hscode,   
         histostock.hsordno,   
         histostock.hsordlin,   
         histostock.hslot,   
         histostock.hsseq,   
         histostock.hscode,   
         histostock.hsval,   
         items.itdefaultlot,
         lots.loorgcode ,
         isnull( histostock.hsord2no, 0 ) as ordno2,   
         isnull(histostock.hsord2lin, 0 ) as ordlin2,
		isnull( histostock.hsqtytarif, 0 ) as hsqtytarif,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,
		(select tidesc from transreason where ticode = histostock.hscode and tiimp = histostock.hsordtyp) as histotype,
		lots.lostatus,
		shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,
		adresses.adname
  FROM {oj ~
```

## Colonnes
| Colonne |
|---------|
| c |
| hsitem |
| hsloc |
| hsqty |
| hsum |
| hsuser |
| hsdatim |
| hscomment |
| hsprgcmnt |
| hsordtyp |
| histostock_hscode |
| histostock_hsordno |
| histostock_hsordlin |
| histostock_hslot |
| hsseq |
| histostock_hscode |
| histostock_hsval |
| items_itdefaultlot |
| lots_loorgcode |
| ordno2 |
| ordlin2 |
| hsqtytarif |
| itisumtarif |
| itumtarif |
| itumtrf |
| histotype |
| lots_lostatus |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| adresses_adname |

