# d_sale_stat_valitem_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoiceline.ilitem,   
         items.itname,   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) as valline,   
         sum(ilqty * invoicehead.ihfacnot) as qtyline,   
         items.itum,  
			IsNull( items.itisumtarif, 'N') As IsUmTarif, //HA2384
         invoicehead.ihcust,   
         salhead.shsalesman,
			adresses.adgrcust
    FROM invoiceline left outer join salhead on    invoiceline.ilsalorder = salhead.shcode,   
         invoicehead,   
         items,   
         adresses  
			

   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( invoicehead.ihdate >= :Sel_start ) AND  
         ( invoicehead.ihdate <= :sel_end ) and
			--( invoiceline.ilsalorder = salhead.shcode)  and   
			--(salhead.shcust = invoicehead.ihcust ) and
			/*( invoiceline.iltype in ( 'A', 'C', 'I', 'D','R' ) )   AND*/( invoiceline.iltype in ( 'A', 'I' ) ) and 
			( adresses.adcode = invoicehead.ihcust )   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
GROUP BY invoiceline.ilitem,   
         items.itname,   
         items.itum,
	    	invoicehead.ihcust,   
         salhead.shsalesman,
			adresses.adgrcust,
			IsUmTarif //HA2384   
UNION ALL 
  SELECT invoiceline.ilitem,   
         items.itname,   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) as valline,   
         sum(ilqty * invoicehead.ihfacnot) as qtyline,   
         items.itum,   
			IsNull( items.itisumtarif, 'N') As IsUmTarif, //HA2384
         invoicehead.ihcust,   
         adresses.adsalesman,
			adresses.adgrcust  
    FROM invoiceline   ,
         invoicehead,   
          items,
			adresses    
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and
          ( invoicehead.ihdate >= :Sel_start ) AND  
         ( invoicehead.ihdate <= :sel_en
```

## Colonnes
| Colonne |
|---------|
| invoiceline_ilitem |
| items_itname |
| cvalline |
| cqtyline |
| items_itum |
| isumtarif |
| invoicehead_ihcust |
| salhead_shsalesman |
| adresses_adgrcust |

