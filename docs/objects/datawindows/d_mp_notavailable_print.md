# d_mp_notavailable_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
/*HA2400*/
  SELECT mfghead.mhcode,   
         mfghead.mhrefint,   
         items.itcode,   
         items.itname,   
         mfghead.mhreqdat,   
         items.ittyp,
			( Select Sum( ml_2.mllallocqty - ( If ml_2.mlissuedqty > ml_2.mlpallocqty Then
															ml_2.mlissuedqty
													  Else
															ml_2.mlpallocqty
													  EndIf ) ) 
				 From mfglallocs ml_2
				Where ml_2.mlcode = mfglallocs.mlcode And
						ml_2.mlitem = items.itcode           ) As NeedQty ,
			( Select Sum( lots.lostock - lots.loalloc)
				 From lots 
				Where lots.loitem = items.itcode And
						lots.lostatus <> 'R' And
						IsNull( lots.loexpdat, Date( '2999-12-31')) > Date( Now()) ) As AvailStock,
			NeedQty - AvailStock As LessQty,
			( Select First purline.plcode
				 From purline  
   			Where purline.plitem = items.itcode AND  
						IsNull( purline.plqtyrec, 0) < purline.plqtyreq AND  
						purline.plstatus < '6'  
				Order By purline.pldatsup Asc ) As PurOrdNum ,
			( Select First purline.pldatsup
				 From purline  
   			Where purline.plitem = items.itcode AND  
						IsNull( purline.plqtyrec, 0) < purline.plqtyreq AND  
						purline.plstatus < '6'  
				Order By purline.pldatsup Asc ) As PurOrdDat ,
			( Select First purline.plqtyreq - purline.plqtyrec 
				 From purline  
   			Where purline.plitem = items.itcode AND  
						IsNull( purline.plqtyrec, 0) < purline.plqtyreq AND  
						purline.plstatus < '6'  
				Order By purline.pldatsup Asc ) As PurOrdQty  ,		
			IsNull( ( Select First purline.plstatus
							From purline  
  						  Where purline.plitem = items.itcode AND  
								  IsNull( purline.plqtyrec, 0) < purline.plqtyreq AND  
								  purline.plstatus < '6'  
					  Order By purline.pldatsup Asc ), '1' )  As PurOrdStatus ,
			( Select adresses.adcode + '  ' + adresses.adname
				 From adresses,
						purhead  
   			Where purhead.phsupp = adresses.adcode AND  
						purhead.phcode = PurO
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhrefint |
| items_itcode |
| items_itname |
| mfghead_mhreqdat |
| items_ittyp |
| needqty |
| availstock |
| lessqty |
| purordnum |
| purorddat |
| purordqty |
| purordstatus |
| purordsupp |
| mfgordnum |
| mfgorddat |
| mfgordqty |

