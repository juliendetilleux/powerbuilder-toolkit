# d_salline_mp_notavailable

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
/*HA2417*/
  SELECT salhead.shcode,
			salline.slline,
			String( salhead.shcode) + '/' + String( salline.slline) As Cmd,   
         If Trim( IsNull( salline.slcustref, '')) = '' Then
					salhead.shcustref
				Else
					salline.slcustref
				EndIf As CustRef ,   
         items.itcode,   
         items.itname,   
         salline.sldatreq, 
			salline.slstatus,
			( Select choices.chname 
				 From choices 
				Where choices.chtype = 'CUSS' AND 
						choices.chcode = salline.slstatus ) As Sal_Status,  
         items.ittyp,
			( salline.slqtyreq - salline.slqtyalloc - salline.slqtyreal ) As NeedQty ,
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
			( Select adresses.adcode + '  ' + adresses.adna
```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salline_slline |
| cmd |
| custref |
| items_itcode |
| items_itname |
| salline_sldatreq |
| salline_slstatus |
| sal_status |
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

