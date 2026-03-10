# zmod_shiptruck_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT truckhead.thcode,   
         truckhead.thdat,   
         shipline.slitem,   
         items.itname,   
         shipline.slqty,   
         shiphead.shprseq,   
         adresses.adname,   
			isnull(adresses.adtel,'') as adtel,
			isnull(shipto.sttel,'') as sttel,
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stzip,   
         shipto.stloc, 
         shipto.stcmnt,   
         truckhead.thdriver,   
         truckref.trdesc,   
         shiphead.shcode,   
         adresses.adcode,   
         truckline.tlweight,
		shiphead.shcust,
		shiphead.shshipto,
		shipline.sllot,
		items.itdefaultlot,
		items.itum,
		( select first ilcode from invoiceline where invoiceline.ilsalorder = shipline.slsalorder  ) as invnum ,
		( select loorgcode from lots where locode = shipline.sllot ) as lotprt,
		(select count(*)
		    from shipgrhead
		 where shipgrhead.ghshipid = shiphead.shcode and
				shipgrhead.ghlevel = 1)  as nbpal
    FROM shiphead,   
         shipline,   
         truckhead,   
         truckline,   
         items,   
         adresses,   
         shipto,   
         truckref  
   WHERE ( truckhead.thcode = truckline.tlcode ) and  
         ( truckline.tlshiphead = shiphead.shcode ) and  
         ( truckline.tlshiphead = shipline.slcode ) and   
         ( truckline.tlsalhead = shipline.slsalorder ) and 
         ( truckline.tlsalline = shipline.slsalline ) and  
         ( shipline.slitem = items.itcode ) and  
         ( adresses.adcode = shiphead.shcust ) and  
         ( adresses.adcode = shipto.stcode ) and  
         ( shipto.stseq = shiphead.shshipto ) and  
         ( truckhead.thtyp = truckref.trtyp ) and  
         ( ( truckhead.thcode = :Selected_truck ) )   
ORDER BY shiphead.shprseq, adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| truckhead_thcode |
| truckhead_thdat |
| shipline_slitem |
| items_itname |
| shipline_slqty |
| shiphead_shprseq |
| adresses_adname |
| adresses_adtel |
| shipto_sttel |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcmnt |
| truckhead_thdriver |
| truckref_trdesc |
| shiphead_shcode |
| adresses_adcode |
| truckline_tlweight |
| shiphead_shcust |
| shiphead_shshipto |
| shipline_sllot |
| items_itdefaultlot |
| items_itum |
| cinvnum |
| lotprt |
| nbpal |

