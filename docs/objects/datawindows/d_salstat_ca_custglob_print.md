# d_salstat_ca_custglob_print

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
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itumusr,   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) netval,   
         sum( if invoiceline.iltype <> 'R' then invoiceline.ilqty * invoicehead.ihfacnot else 0 endif ) pmixqty,
         invoicehead.ihcust,
         salhead.shsalesman,
         adresses.adgrcust
    FROM adresgroup,   
         adresses,   
         invoicehead,   
         invoiceline,   
         items,
  	    salhead  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( adresses.adcode = invoicehead.ihcust ) and  
         ( adresses.adgrcust = adresgroup.agcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( invoiceline.ilsalorder = salhead.shcode ) and  
         ( invoicehead.ihdate >= :Start_date ) AND  
         ( invoicehead.ihdate <= :Stop_date ) and
         ( invoiceline.iltype in ( 'A',  'I' ) )    AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */

/* and   ( adresses.adcode = salhead.shcust ) */ 

GROUP BY adresgroup.agcode,   
         adresgroup.agdesc,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adloc,
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itumusr,
         invoicehead.ihcust,
         salhead.shsalesman,
         adresses.adgrcust  
UNION all 
  SELECT adresgroup.agcode,   
         adresgroup.agdesc,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adloc,
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itumusr,   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) netval,   
         sum( if invoicel
```

## Colonnes
| Colonne |
|---------|
| adresgroup_agcode |
| adresgroup_agdesc |
| adresses_adcode |
| adresses_adname |
| adresses_adloc |
| items_itcode |
| items_itname |
| items_itum |
| items_itumusr |
| cnetval |
| cpmixqty |
| invoicehead_ihcust |
| salhead_shsalesman |
| adresses_adgrcust |

