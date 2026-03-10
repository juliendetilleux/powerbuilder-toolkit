# d_shiptruck_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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
         shipto.stdesc,   
         shipto.stzip,   
         shipto.stcmnt,   
         shipto.stcode,   
         shipto.stseq,   
         truckhead.thdriver,   
         truckref.trdesc,   
         shiphead.shcode,   
         adresses.adcode,   
         shipto.stloc,   
         items.itumusr,   
         items.itconvusr,   
         truckline.tlweight,   
         truckline.tlqty  ,
		(select count(*)
		    from shipgrhead
		 where shipgrhead.ghshipid = shiphead.shcode and
				shipgrhead.ghlevel = 1)  as nbpal
    FROM salhead,   
         shiphead,   
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
         ( truckline.tlshipline = shipline.slline ) and  
         ( shipline.slsalorder = salhead.shcode ) and  
         ( shipline.slitem = items.itcode ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( adresses.adcode = shipto.stcode ) and  
         ( shipto.stseq = shiphead.shshipto ) and  
         ( truckhead.thtyp = truckref.trtyp ) and  
         ( ( truckhead.thcode = :Selected_truck ) )   
ORDER BY shiphead.shprseq ASC   

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
| shipto_stdesc |
| shipto_stzip |
| shipto_stcmnt |
| shipto_stcode |
| shipto_stseq |
| truckhead_thdriver |
| truckref_trdesc |
| shiphead_shcode |
| adresses_adcode |
| shipto_stloc |
| items_itumusr |
| items_itconvusr |
| truckline_tlweight |
| truckline_tlqty |
| nbpal |

