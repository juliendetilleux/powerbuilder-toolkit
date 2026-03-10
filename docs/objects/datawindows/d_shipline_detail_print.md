# d_shipline_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcust,   
         shiphead.shshipto,   
         adresses.adname,   
         items.itname,   
         shipline.slitem,   
         shipline.slsalorder,   
         shipline.slsalline,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         lots.locode,   
         lots.loexpdat,   
         shipline.slcomment,
	    shipline.slqty,
		items.itum,
		( select lkadref2
		     from linkitad
			Where linkitad.lktyp = 'S' And
					 linkitad.lkitem =  shipline.slitem And
					 linkitad.lkadcode = shiphead.shcust ) As DescClient  ,
		( select lkadref
		     from linkitad
			Where linkitad.lktyp = 'S' And
					 linkitad.lkitem =  shipline.slitem And
					 linkitad.lkadcode = shiphead.shcust ) As CodeArtClient  ,
		salhead.shcustref,
		items.itdesc2,
		isnull(adcust.adadr1, '') as cust_adadr1,
		isnull(adcust.adzip, '') as cust_adzip,
		isnull(adcust.adloc, '') as cust_adloc,
		isnull(adcust.adtel, '') as cust_adtel,
		isnull(adcust.adfax, '') as cust_adfax,
		isnull(adcust.adlang, '') as cust_adlang,
		isnull(adresses.adlang, '') as adlang
    FROM shiphead,    
         shipline,   
         adresses,   
		adresses as adcust,
         items,   
         shipto,   
         lots,
	   salhead  
   WHERE ( shipline.slcode = shiphead.shcode ) and  
         ( shiphead.shcust = adresses.adcode ) and  
		adcust.adcode = '##########' AND
         ( shipline.slitem = items.itcode ) and  
         ( shiphead.shcust = shipto.stcode ) and  
         ( shiphead.shshipto = shipto.stseq ) and  
         ( shipline.sllot = lots.locode ) and  
         ( ( shipline.slcode = :Sel_ship ) AND  
         ( shipline.slline = :Sel_line ) )  And 
	( shipline.slsalorder =   salhead.shcode )

```

## Colonnes
| Colonne |
|---------|
| shiphead_shcust |
| shiphead_shshipto |
| adresses_adname |
| items_itname |
| shipline_slitem |
| shipline_slsalorder |
| shipline_slsalline |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| lots_locode |
| lots_loexpdat |
| shipline_slcomment |
| shipline_slqty |
| items_itum |
| descclient |
| codeartclient |
| salhead_shcustref |
| items_itdesc2 |
| cust_adadr1 |
| cust_adzip |
| cust_adloc |
| cust_adtel |
| cust_adfax |
| cust_adlang |
| adlang |

