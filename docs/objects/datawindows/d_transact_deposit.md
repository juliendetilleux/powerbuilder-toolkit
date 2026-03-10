# d_transact_deposit

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
         lots.loorgcode hsprgcmnt,
			' ' as RcpoCmnt,
		garaghead.ggcode,
		garaghead.ggchassis,
		garaghead.ggregistre,
		garaghead.ggdtreg,
		garaghead.ggcertifconf,
		garaghead.ggctrltech,
		garaghead.ggcarnimmat,
		garaghead.ggidentif,
		garaghead.ggkm
    FROM histostock, lots left outer join garaghead on lots.loorgcode=garaghead.ggchassis
   WHERE histostock.hsseq = :Selected_sequence    
	and lots.locode = histostock.hslot

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
| lots_hsprgcmnt |
| rcpocmnt |
| garaghead_ggcode |
| garaghead_ggchassis |
| garaghead_ggregistre |
| garaghead_ggdtreg |
| garaghead_ggcertifconf |
| garaghead_ggctrltech |
| garaghead_ggcarnimmat |
| garaghead_ggidentif |
| garaghead_ggkm |

