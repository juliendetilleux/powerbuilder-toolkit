# d_item_detail_export

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT *,   
			( SELECT tvalvl_country.tclvl FROM tvalvl_country 
			WHERE tvalvl_country.tccode = items.ittvalvl AND
					tvalvl_country.tccountry = (select adcountrid from adresses
														where adcode = isnull(items.itmccode,'##########')) ) tva_level,
			( SELECT imputcpt.icref FROM imputcpt WHERE imputcpt.iccode = items.itcptpur ) imput_purchase,
			( SELECT imputcpt.icref FROM imputcpt WHERE imputcpt.iccode = items.itcptsal ) imput_sales,
			( SELECT imputcpt.icref FROM imputcpt WHERE imputcpt.iccode = items.itcptanal ) imput_analytic,   
			( SELECT intrastat.isref FROM intrastat WHERE intrastat.iscode = items.itintrastat ) intrastat
    FROM items   
   WHERE items.itcode not like '###########%'     
Order by itcode  
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itactiv |
| itcrit1 |
| itcrit2 |
| itcrit3 |
| itum |
| ittyp |
| itcons |
| itsale |
| itlot |
| itqc |
| itval |
| itloc |
| itpol |
| itpsize |
| itpinsize |
| itpinnb |
| itpnbdays |
| itsecur |
| itleadtime |
| itavailtime |
| itbomlvl |
| itbom |
| itstdcost |
| itstdsal |
| itstdpur |
| itstock |
| italloc |
| itwip |
| itfrozen |
| itdefaultlot |
| itctrl |
| itsernum |
| itlastissue |
| itweight |
| ittvalvl |
| itintrastat |
| itcptpur |
| itcptsal |
| itstat1 |
| itstat2 |
| itconvusr |
| itumusr |
| itplgroup |
| itean |
| itcptanal |
| itqtypal |
| itdesc2 |
| itwistat |
| itsubstpl |
| itsubstit |
| itorcountry |
| itmfggroup |
| itcat |
| itowner |
| itvol |
| itcreauser |
| itcreadat |
| itmodifuser |
| itmodifdat |
| itbcqty |
| itbcauto |
| itetigro |
| itetipal |
| itstkavg |
| itstkused |
| itstkrot |
| itean2 |
| itean2conv |
| itean3 |
| itean3conv |
| iteanref |
| itean2ref |
| itean3ref |
| itetiitem |
| itcptinv |
| ittransfered |
| itif2trf |
| itrcnopur |
| itbascost |
| itmfgxtrcost |
| itwc |
| itpurxtrcost |
| itclotctrl |
| itclotref |
| itfinalprice |
| italttyp |
| itlblproc |
| ittare |
| itsalghost |
| itcommission |
| ittddatemodif |
| ittdbomlvl |
| ittechdatarecalc |
| ittdtorecalc |
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
| itetiitemof |
| itetigroof |
| itetipalof |
| itetiitemofprnt |
| itetigroofprnt |
| itetipalofprnt |
| itbackflushexp |
| itcol2 |
| itcratesweight |
| itwebtype |
| itwebum |
| itwebatcom |
| itwebvisible |
| itumean2 |
| itumean3 |
| itplu |
| itdirsaldesc |
| itbatchmfg |
| itwebtype2 |
| ititemof |
| itisfrozen |
| itbcdweightsal |
| itmfggeneric |
| itstkused2 |
| itpurchaseauto |
| itshowetiq |
| itupdpurcost |
| itdateupdpurcost |
| itisumtarif |
| itumtarif |
| itumtarifconv |
| itumtbascost |
| itumtxtrcost |
| itismonit |
| ittoalloc |
| itusr01 |
| itusr02 |
| itusr03 |
| itusr04 |
| itratemodval |
| itatedaterupd |
| itqtydisc |
| itfreezable |
| itnbdayfreeze |
| itnbdaythaw |
| itqtyfile |
| itlocpic |
| itusr05 |
| itusr06 |
| itmccode |
| itcont |
| itnbdaycont |
| itacount |
| ittrfsupp |
| ituseeaninv |
| itlblproc2 |
| itusr07 |
| it_sortfoodcash |
| it_excl_rec_daa |
| itusr08 |
| itstat3 |
| itstat4 |
| itoption |
| itlength |
| itwidth |
| itheight |
| itspare |
| itcanrebilling |
| itusebatch |
| itqtybybatch |
| itusr09 |
| itusr10 |
| itptshipnotice |
| itsquaremeter |
| tva_level |
| imput_purchase |
| imput_sales |
| imput_analytic |
| intrastat |

