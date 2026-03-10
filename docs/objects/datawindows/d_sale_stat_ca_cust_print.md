# d_sale_stat_ca_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresgroup.agcode,   
         adresgroup.agdesc,   
         adresses.adcode,   
         adresses.adname,
         adresses.adloc,  
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) netval,   
         sum(  invoiceline.ilqty * invoicehead.ihfacnot) pmixqty,
         invoicehead.ihcust,
         salhead.shsalesman,
         adresses.adgrcust
    FROM adresgroup,   
         adresses,   
         invoicehead,   
         invoiceline,
  	    	salhead  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( adresses.adcode = invoicehead.ihcust ) and  
         ( adresses.adgrcust = adresgroup.agcode ) and 
         ( invoiceline.ilsalorder = salhead.shcode ) and  
         ( invoicehead.ihdate >= :Start_date ) AND  
         ( invoicehead.ihdate <= :Stop_date ) and
         ( invoiceline.iltype in ( 'A',  'I' ) )   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
GROUP BY adresgroup.agcode,   
         adresgroup.agdesc,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adloc,
         invoicehead.ihcust,
         salhead.shsalesman,
         adresses.adgrcust    

UNION all   

  SELECT adresgroup.agcode,   
         adresgroup.agdesc,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adloc  ,
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) netval,   
         sum(  invoiceline.ilqty * invoicehead.ihfacnot) pmixqty,
         invoicehead.ihcust,
         adresses.adsalesman,
         adresses.adgrcust
    FROM adresgroup,   
         adresses,   
         invoicehead,   
         invoiceline
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( adresses.adcode = invoicehead.ihcust ) and  
         ( adresses.adgrcust = adresgroup.agcode ) and  
         ( invoicehead.ihdate >= :Start_date ) AND  
         ( invoicehead.ihda
```

## Colonnes
| Colonne |
|---------|
| adresgroup_agcode |
| adresgroup_agdesc |
| adresses_adcode |
| adresses_adname |
| adresses_adloc |
| cnetval |
| cpmixqty |
| invoicehead_ihcust |
| salhead_shsalesman |
| adresses_adgrcust |

