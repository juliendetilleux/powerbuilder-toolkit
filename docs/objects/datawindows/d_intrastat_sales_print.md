# d_intrastat_sales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcountrid,   
         intrastat.isref,   
         intrastat.isdesc,   
         invoicehead.ihcode,   
         invoicehead.ihcust,   
         invoiceline.illine,   
         invoiceline.ilitem,   
         invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv val_ligne,   
         intrastat.istyp,   
         if  invoiceline.iltype <> 'R'  then items.itwistat * invoiceline.ilqty * invoicehead.ihfacnot else 0 endif mas_1,   
         if  invoiceline.iltype <> 'R'  then items.itweight * invoiceline.ilqty * invoicehead.ihfacnot else 0 endif mas_2  
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
         ( invoicehead.ihcptper In (:rn_periode )) AND  
         ( invoiceline.iltype in ('I' , 'C', 'R') ) AND  
         ( country.cointrastat = 'Y' ) And
			( invoicehead.ihmccode = :ras_McCoCode )
ORDER BY intrastat.isref ASC,   
         adresses.adcountrid ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adcountrid |
| intrastat_isref |
| intrastat_isdesc |
| invoicehead_ihcode |
| invoicehead_ihcust |
| invoiceline_illine |
| invoiceline_ilitem |
| cval_ligne |
| intrastat_istyp |
| cmas_1 |
| cmas_2 |

