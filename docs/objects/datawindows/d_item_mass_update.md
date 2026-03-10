# d_item_mass_update

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itactiv,   
         items.itlot,   
         items.itqc,   
         items.itval,   
         items.itloc,   
         items.itsecur, 
         items.itsale,   
         items.itleadtime,   
         items.itavailtime,   
         items.itweight,   
         items.itintrastat,   
         items.itcptpur,   
         items.itcptsal,   
         items.itean,   
         items.itwistat,   
         items.itvol,   
         items.itean2,   
         items.itean2conv,   
         items.itean3,   
         items.itean3conv,   
         items.itcat,   
         items.itcptanal,   
         items.itum,   
         items.ittyp,   
         items.itpol,   
         items.itpsize,   
         items.itpinsize,   
         items.itpnbdays,   
         items.iteanref,   
         items.itean2ref,   
         items.itean3ref,  
         items.itstdpur,   
         items.itmodifuser,   
         items.itmodifdat,   
         items.itstdsal,   
         items.itumusr,   
         items.itconvusr,   
         items.itqtypal,   
         items.itorcountry,   
         items.itfinalprice,   
         items.italttyp,   
         items.itstock,   
         items.italloc,   
         items.itstat1,   
         items.itstat2,   
         items.ittare,   
         items.ittvalvl, 
         items.itdesc2,   

			items.itcons, 
			items.itsernum, 
			items.itval, 
			items.itfrozen, 
			items.itbomlvl, 
			items.itbom, 
			items.itpinnb, 
			items.itwip, 
			items.itlastissue, 
			items.itsubstpl, 
			items.itowner, 
			items.itbcqty, 
			items.itbcauto, 
			items.itrcnopur,

			items.ittax01,
			items.ittax02,
			items.ittax03,
			items.ittax04,
			items.ittax05,
			items.ittax06,
			items.ittax07,
			items.ittax08,
			items.ittax09,
			items.ittax10,
			(select isnull(ppvalue,'')
			   from progparam
			  where ppcode = 'ITEMFANT') as itemfan,


```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itactiv |
| itlot |
| itqc |
| itval |
| itloc |
| itsecur |
| itsale |
| itleadtime |
| itavailtime |
| itweight |
| itintrastat |
| itcptpur |
| itcptsal |
| itean |
| itwistat |
| itvol |
| itean2 |
| itean2conv |
| itean3 |
| itean3conv |
| itcat |
| itcptanal |
| itum |
| ittyp |
| itpol |
| itpsize |
| itpinsize |
| itpnbdays |
| iteanref |
| itean2ref |
| itean3ref |
| itstdpur |
| itmodifuser |
| itmodifdat |
| itstdsal |
| itumusr |
| itconvusr |
| itqtypal |
| itorcountry |
| itfinalprice |
| italttyp |
| itstock |
| italloc |
| itstat1 |
| itstat2 |
| ittare |
| ittvalvl |
| itdesc2 |
| itcons |
| itsernum |
| itval |
| itfrozen |
| itbomlvl |
| itbom |
| itpinnb |
| itwip |
| itlastissue |
| itsubstpl |
| itowner |
| itbcqty |
| itbcauto |
| itrcnopur |
| ittax01 |
| ittax02 |
| ittax03 |
| ittax04 |
| ittax05 |
| ittax06 |
| ittax07 |
| ittax08 |
| ittax09 |
| ittax10 |
| itemfan |
| itwebtype |
| itwebtype2 |
| itwebum |
| itwebatcom |
| itwebvisible |
| itplu |
| itdirsaldesc |
| itbatchmfg |
| itbackflushexp |
| itumean2 |
| itumean3 |
| itisfrozen |
| itbcdweightsal |
| itmfggeneric |
| itpurchaseauto |
| itshowetiq |
| itismonit |
| itfreezable |
| itnbdayfreeze |
| itnbdaythaw |
| ittoalloc |
| itqtyfile |
| itlocpic |
| itmccode |
| itcont |
| itnbdaycont |
| itacount |
| itif2trf |
| ittrfsupp |
| itcalcalcool |
| itvalesc |
| itstat3 |
| itstat4 |

