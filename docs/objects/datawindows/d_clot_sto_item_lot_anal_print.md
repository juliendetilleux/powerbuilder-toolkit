# d_clot_sto_item_lot_anal_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT 'II' As Origin,
			items.itcode,   
         items.itname,   
         items.itum,   
         items.itconvusr,   
         items.itumusr,   
         items.itstdpur,  
			items.itdefaultlot,
         clotfinit.ciqty,   
			clotfinit.cival / clotfinit.ciqty As Lot_UnitVal,
         clotfinit.cival,
			clotfinit.ciqty  As ciqty2,
			IsNull( ( Select imputcpt.icref
							From imputcpt
						  Where imputcpt.iccode = items.itcptanal ), '' ) As AnalRef ,
			If AnalRef = '' Then 'Non Défini'
								 Else ( Select imputcpt.icdesc
											 From imputcpt
											Where imputcpt.iccode = items.itcptanal ) 
								 EndIf As AnalDesc
    FROM items,   
         clotfinit
   WHERE clotfinit.ciitem = items.itcode and  
         clotfinit.ciperiod = :Sel_period AND  
         clotfinit.cityp = 'I' AND  
         clotfinit.ciqty <> 0 And
			Not Exists( Select *
							  From clotstocklot
							 Where clotstocklot.clperiod = clotfinit.ciperiod And
									 clotstocklot.clitem = clotfinit.ciitem  			)

Union All

  SELECT 'IL' As Origin,
			items.itcode,   
         items.itname,   
         items.itum,   
         items.itconvusr,   
         items.itumusr,   
         items.itstdpur,  
			items.itdefaultlot,
         ( Select lots.lostock 
				 From	lots
				Where lots.locode = items.itdefaultlot ) As LotQty,   
			( clotfinit.cival / ciqty2 ) As Lot_UnitVal,
         LotQty * Lot_UnitVal ,
			clotfinit.ciqty    As ciqty2,
			IsNull( ( Select imputcpt.icref
							From imputcpt
						  Where imputcpt.iccode = items.itcptanal ), '' ) As AnalRef ,
			If AnalRef = '' Then 'Non Défini'
								 Else ( Select imputcpt.icdesc
											 From imputcpt
											Where imputcpt.iccode = items.itcptanal ) 
								 EndIf As AnalDesc
    FROM items,   
         clotfinit
   WHERE clotfinit.ciitem = items.itcode and  
         clotfinit.ciperiod = :Sel_period AND  
         clotfinit.cityp = 'I' AND  
         Lo
```

## Colonnes
| Colonne |
|---------|
| origin |
| items_itcode |
| items_itname |
| items_itum |
| items_itconvusr |
| items_itumusr |
| items_itstdpur |
| items_itdefaultlot |
| clotfinit_ciqty |
| lot_unitval |
| clotfinit_cival |
| clotfinit_ciqty2 |
| analref |
| analdesc |

