# d_ship_cust_pack_summary_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT Distinct If Date( :radt_DateShip) = '2999-12-31' Then '%' Else String( Date( :radt_DateShip)) EndIf DateRef,
			Left( salhead.shcustref,( If Locate( salhead.shcustref, '-') = 0 
													Then Length ( salhead.shcustref ) 
													Else Locate( salhead.shcustref, '-') - 1 EndIf ))	As CustReference	,
			salline.sldatreq,  //HA2393
			shipline.slcode,
			shippack.sppackid,
			shippack.spqty,
			( Select packings.pkname
				 From packings 
				Where packings.pkcode = shippack.sppackid ) As PackDesc,
			( Select shipto.stdesc 
				 From shipto
				Where shipto.stcode = shiphead.shcust And
						shipto.stseq = shiphead.shshipto     ) As ShiptoDesc
    FROM salline,  
         salhead,
			shiphead,
			shipline,
			shippack
   WHERE salhead.shcode = salline.slcode and  
			salhead.shcust = :ras_Cust and
			String( Date( salline.sldatreq)) Like DateRef and
			Left( salhead.shcustref,( If Locate( salhead.shcustref, '-') = 0 
													Then Length ( salhead.shcustref ) 
													Else Locate( salhead.shcustref, '-') - 1 EndIf )) Like :ras_CustRef And
			salline.slcode = shipline.slsalorder And
			salline.slline = shipline.slsalline And
			shipline.slcode = shiphead.shcode And
			shippack.spcode = shipline.slcode 
Order By shipline.slcode

```

## Colonnes
| Colonne |
|---------|
| dateref |
| custreference |
| salline_sldatreq |
| shipline_slcode |
| shippack_sppackid |
| shippack_spqty |
| packdesc |
| shiptodesc |

