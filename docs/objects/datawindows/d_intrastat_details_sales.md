# d_intrastat_details_sales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcountrid,   
         intrastat.isref,   
         intrastat.isdesc,   
         invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv  val_ligne,   
         intrastat.istyp,   
         items.itwistat * invoiceline.ilqty * invoicehead.ihfacnot mass_1,   
         items.itweight * invoiceline.ilqty * invoicehead.ihfacnot mass_2,
			invoiceline.ilcode, 
			invoiceline.illine,
			adresses.adcode,
			adresses.adname,
			invoicehead.ihdate,
			items.itcode,
			items.itname,
			items.itum,
			invoiceline.ilqty  
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
         ( invoiceline.iltype in ('I' , 'C') ) AND  
         ( country.cointrastat = 'Y' ) ) and 
			intrastat.isref = :as_ref and
			adresses.adcountrid = :as_countryid  
ORDER BY invoiceline.ilcode ASC,   
         invoiceline.illine ASC    

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
| invoiceline_ilcode |
| invoiceline_illine |
| adresses_adcode |
| adresses_adname |
| invoicehead_ihdate |
| items_itcode |
| items_itname |
| items_itum |
| invoiceline_ilqty |

