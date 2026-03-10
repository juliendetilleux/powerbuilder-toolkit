# d_intrastat_sales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcountrid,   
         intrastat.isref,   
         intrastat.isdesc,   
         sum( invoiceline.ilnetval  / invoicehead.ihcurconv ) val_ligne,   // sum( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) val_ligne,   
         intrastat.istyp,   
         sum ( if  invoiceline.iltype <> 'R'  then  items.itwistat * invoiceline.ilqty * invoicehead.ihfacnot  else 0 endif ) mass_1,   
         sum(  if  invoiceline.iltype <> 'R'  then items.itweight * invoiceline.ilqty * invoicehead.ihfacnot  else 0 endif ) mass_2  
    FROM adresses,   
         items,   
         intrastat,    
         invoicehead,   
         invoiceline,   
         country  
   WHERE ( items.itintrastat = intrastat.iscode ) and  
         ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoicehead.ihcust = adresses.adcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( adresses.adcountrid = country.cocode ) and  
         ( ( invoicehead.ihcptper In (:rn_invoiceperiode )) AND  
         ( invoiceline.iltype in ('I' , 'C','R') ) AND  
         ( country.cointrastat = 'Y' ) )  And
			( invoicehead.ihmccode = :ras_McCoCode )
GROUP BY intrastat.isref,  
			adresses.adcountrid,   
       		  intrastat.isdesc,
			intrastat.istyp  
ORDER BY intrastat.isref ASC,   
         adresses.adcountrid ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adcountrid |
| intrastat_isref |
| intrastat_isdesc |
| cval_ligne |
| intrastat_istyp |
| cmass_1 |
| cmass_2 |

