# d_shiptruck_mod2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT distinct truckhead.thcode,   
         truckhead.thdat,   
         ( select first invoicehead.ihcode from invoicehead where shipline.slinvno = invoicehead.ihcode ) as ihcode,
         ( select first invoicehead.ihtotval * invoicehead.ihfacnot  from invoicehead where shipline.slinvno = invoicehead.ihcode ) as totval,
         ( select first salhead.shcmnt from salhead where shipline.slsalorder = salhead.shcode ) as cmnt,
         adresses.adname as adname,
         shipto.stdesc as stname,
         shipto.stadr1 as adadr1,
         shipto.stzip as adzip,
         shipto.stloc as adloc,
         shipto.sttel as sttel,
         adresses.adtel as adtel,
         adresses.adristcust,
			truckref.trdesc,
         (select choices.chname from choices where choices.chtype = 'PAYM' and choices.chcode = invoicehead.ihpaymnt) as paym,
			truckhead.thcmnt,
			truckhead.thdriver,
         shiphead.shprseq,
		(select count(*)
		    from shipgrhead
		 where shipgrhead.ghshipid = shiphead.shcode and
				shipgrhead.ghlevel = 1)  as nbpal
    FROM salhead,   
         shiphead,   
         shipline,   
         truckhead,   
         truckline,   
         adresses,
         invoicehead,
			truckref,
			shipto
   WHERE ( truckhead.thcode = truckline.tlcode ) and  
         ( truckhead.thtyp = truckref.trtyp ) and  
         ( truckline.tlshiphead = shiphead.shcode ) and  
         ( truckline.tlshiphead = shipline.slcode ) and  
         ( truckline.tlshipline = shipline.slline ) and  
         ( shipline.slsalorder = salhead.shcode ) and  
         ( truckhead.thcode = :Selected_truck ) and
         ( adresses.adcode = salhead.shcust ) and
         ( shipto.stcode = shiphead.shcust ) and
         ( shipto.stseq = shiphead.shshipto ) and
         ( adresses.adinvm = '1' ) and
         ( shipline.slinvno = invoicehead.ihcode )
 
 UNION ALL 
 
  SELECT distinct truckhead.thcode,   
         truckhead.thdat,   
         shiphead.s
```

## Colonnes
| Colonne |
|---------|
| truckhead_thcode |
| truckhead_thdat |
| invoicehead_ihcode |
| invoicehead_totval |
| ccmnt |
| adresses_adname |
| shipto_stname |
| shipto_adadr1 |
| shipto_adzip |
| shipto_adloc |
| shipto_sttel |
| adresses_adtel |
| adresses_adristcust |
| truckref_trdesc |
| cpaym |
| truckhead_thcmnt |
| truckhead_thdriver |
| shiphead_shprseq |
| nbpal |

