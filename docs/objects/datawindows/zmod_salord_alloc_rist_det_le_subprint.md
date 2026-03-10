# zmod_salord_alloc_rist_det_le_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  Select salline.slcode				 								As salorder		,
			salline.slline												As salline		,
			adresses.adristcust										As AdRistCust 	,
			salline.slqtyalloc * salline.slunitprice			As ValExclDisc	
    From salline	,
			salhead  ,
			adresses
	Where salhead.shcode			 = salline.slcode		And
			salline.slsample		 = 'N'					And
			salline.slstatus 		 < '6'					And
			salline.slqtyalloc	 > 0						And
			salline.slshipto		 = :ran_Shipto			And
			salhead.shcust			 = adresses.adcode	And
			adresses.adristcust	<> 0						And
			salhead.shcode			  In  ( Select Distinct salline.slcode
													 From salhead ,
															salline 
													Where salhead.shcode     = salline.slcode And
															salline.slqtyalloc > 0					And
															salhead.shcust		 = :ras_Cust		And
															salline.slshipto   = :ran_Shipto        )
Union All

  Select 9999999						 								As salorder		,
			0																As salline		,
			adresses.adristcust										As AdRistCust 	,
			0																As ValExclDisc	
    From adresses
	Where adresses.adcode = :ras_Cust
			
Order By 1, 2
```

## Colonnes
| Colonne |
|---------|
| salline_salorder |
| salline_salline |
| cadristcust |
| cvalexcldisc |

