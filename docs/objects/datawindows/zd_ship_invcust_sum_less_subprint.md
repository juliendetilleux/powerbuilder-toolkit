# zd_ship_invcust_sum_less_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode,
			salline.slline,
			salline.sluomord,   
         salline.slqtyord,     
         salline.slqtyreq,  
         salline.sluomconv,   
         salline.slqtyreal,  
			If Date( :radt_DateShip) = '2999-12-31' Then '%' Else String( Date(:radt_DateShip)) EndIf DateRef,
			salhead.shcustref,	
			salhead.shcust,
			( Select adresses.adname
				 From adresses
				Where adresses.adcode = salhead.shcust ) As AdrsName
    FROM salline,  
         salhead
   WHERE salhead.shcode = salline.slcode and  
			salhead.shcust in ( Select adresses.adcode
										  From adresses
										 Where adresses.adinvadid = :ras_Cust ) and
			String( Date( salline.sldatreq)) Like DateRef and
			Left( salhead.shcustref,( If Locate( salhead.shcustref, '-') = 0 
													Then Length ( salhead.shcustref ) 
													Else Locate( salhead.shcustref, '-') - 1 EndIf )) Like :ras_CustRef And
			( salline.slqtyreq - salline.slqtyreal ) > 0 And
			salline.slitem = :ras_Item
Order By salhead.shcust

```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_slline |
| salline_sluomord |
| salline_slqtyord |
| salline_slqtyreq |
| salline_sluomconv |
| salline_slqtyreal |
| dateref |
| salhead_shcustref |
| salhead_shcust |
| adrsname |

