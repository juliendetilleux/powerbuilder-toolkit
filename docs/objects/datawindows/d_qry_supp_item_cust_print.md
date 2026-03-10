# d_qry_supp_item_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT (select adresgroup.agcode 
				from adresses, adresgroup 
				where adresses.adcode = adresses_adcode and 
						adresses.adgrsupp = adresgroup.agcode) as agcode,   
        (select adresgroup.agdesc 
				from adresses, adresgroup 
				where adresses.adcode = adresses_adcode and 
						adresses.adgrsupp = adresgroup.agcode) as agdesc,   
         adresses.adcode as adcode_cust,   
         adresses.adname as adname_cust,   
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itumusr,   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) netval,   
         sum(  invoiceline.ilqty * invoicehead.ihfacnot) pmixqty,
         invoicehead.ihcust,
         salhead.shsalesman,
         adresses.adgrcust,
		isnull((select first lkadcode from linkitad where lkitem = items.itcode and lktyp = 'P' and lkactiv = 'Y' and lkmain = 'Y'),'') as adresses_adcode,
		isnull((select first lkadcode from linkitad where lkitem = items.itcode and lktyp = 'P' and lkactiv = 'Y' and lkmain = 'Y'),'') as adresses_adname,
		items.itstat1,
		items.itstat2 
    FROM adresses,   
         invoicehead,   
         invoiceline,   
         items,
	  	   salhead  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( adresses.adcode = invoicehead.ihcust ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( invoicehead.ihdate >= :Start_date ) AND  
		( invoiceline.ilsalorder = salhead.shcode ) and  
         ( invoicehead.ihdate <= :Stop_date ) and
         ( invoiceline.iltype in ( 'A', 'I' ) )
/*  and 
         ( adresses.adcode = salhead.shcust ) */ 
GROUP BY agcode,   
         agdesc,   
         adcode_cust,   
         adname_cust,   
         items.itcode,   
         items.itname,   
         items.itum,   
         items.itumusr,
         invoicehead.ihcust,
         salhead.shsalesman,
         adresses.adgrcust,
		adresses_adcode,
	
```

## Colonnes
| Colonne |
|---------|
| adresgroup_agcode |
| adresgroup_agdesc |
| adcode_cust |
| adname_cust |
| items_itcode |
| items_itname |
| items_itum |
| items_itumusr |
| cnetval |
| cpmixqty |
| invoicehead_ihcust |
| salhead_shsalesman |
| adresses_adgrcust |
| adresses_adcode |
| adresses_adname |
| items_itstat1 |
| items_itstat2 |

