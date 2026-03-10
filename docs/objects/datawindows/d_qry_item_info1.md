# d_qry_item_info1

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.itpol,   
         items.itpsize,   
         items.itpinsize,   
         items.itpinnb,   
         items.itpnbdays,   
         items.itsecur,   
         items.itleadtime,   
         items.itavailtime,   
         items.itstdpur,   
         items.ittyp,   
         items.itsernum,   
         items.itval,   
         items.itqc,   
         items.itlot,   
         items.itstat1,   
         items.itstat2,   
         items.itumusr,   
         items.itconvusr,
			items.itdesc2,
			items.ittransfered,
			( Select imputcpt.icref
				 From imputcpt
				Where imputcpt.iccode = items.itcptpur )    As CptPur ,  
			( Select imputcpt.icref
				 From imputcpt
				Where imputcpt.iccode = items.itcptsal )    As CptSal ,
			( Select tvalvl_country.tclvl
				 From tvalvl_country
				Where tvalvl_country.tccode = ittvalvl and
					tvalvl_country.tccountry = (select adcountrid from adresses where adcode = isnull(items.itmccode, '##########')))			     As TvaLvl ,
			items.itweight,
			items.itwistat,
			( Select itstat1.imdesc
				 From itstat1
				Where itstat1.imcode = items.itstat1      ) As Stat1Desc ,
			( Select itstat2.isdesc
				 From itstat2
				Where itstat2.iscode  = items.itstat1 And 
						itstat2.iscode2 = items.itstat2     ) As Stat2Desc	,
			items.itstdsal,
			items.itstock,
			( Select intrastat.isref
				 From intrastat
				Where intrastat.iscode = items.itintrastat ) As Intrastat,
			items.itorcountry,
			items.itcptinv,
			items.itcptanal,
			items.itfinalprice,
			items.itcons,
			items.itowner,
			items.itqtypal,
			items.itqtyfile,
			items.itlocpic 		 
    FROM items
   WHERE items.itcode = :Selected_item  

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| itpol |
| itpsize |
| itpinsize |
| itpinnb |
| itpnbdays |
| itsecur |
| itleadtime |
| itavailtime |
| itstdpur |
| ittyp |
| itsernum |
| itval |
| itqc |
| itlot |
| itstat1 |
| itstat2 |
| itumusr |
| itconvusr |
| items_itdesc2 |
| items_ittransfered |
| cptpur |
| cptsal |
| tvalvl |
| items_itweight |
| items_itwistat |
| stat1desc |
| stat2desc |
| itstdsal |
| itstock |
| intrastat |
| itorcountry |
| itcptinv |
| itcptanal |
| itfinalprice |
| itcons |
| itowner |
| itqtypal |
| itqtyfile |
| itlocpic |

