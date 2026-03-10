# zd_clot_sal_family_item_detper_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  Select 1									As LineType		,
			items.itcode					As Item			,
		 	items.itname					As ItName		,
		 	Sum( If clotfinit.ciperiod >= :ras_PerStart1 And clotfinit.ciperiod <= :ras_PerStart2 Then
						clotfinit.cival
					Else
						0
					EndIF ) 					As ValStart		,
			0 									As ValStop		,
		 	clotfinit.ciperiod			As Period       
  	 From items		 ,    
		 	clotfinit
 	Where items.itcode    = clotfinit.ciitem And
		 	clotfinit.cityp = 'S'              And
		 	( clotfinit.ciperiod Between :ras_PerStart1 And :ras_PerStart2 Or
		     clotfinit.ciperiod Between :ras_PerStop1  And :ras_PerStop2     ) And
		 	items.itstat1   = :ras_ItStat      
Group By Item			,
			ItName		,
			Period     

Union All    

  Select 2									As LineType		,
			items.itcode					As Item			,
		 	items.itname					As ItName		,
			0 									As ValStart		,
			Sum( If clotfinit.ciperiod >= :ras_PerStop1 And clotfinit.ciperiod <= :ras_PerStop2 Then
						clotfinit.cival
					Else
						0
					EndIF ) 					As ValStop		,
		 	clotfinit.ciperiod			As Period       
  	 From items		 ,    
		 	clotfinit
 	Where items.itcode    = clotfinit.ciitem And
		 	clotfinit.cityp = 'S'              And
		 	( clotfinit.ciperiod Between :ras_PerStart1 And :ras_PerStart2 Or
		     clotfinit.ciperiod Between :ras_PerStop1  And :ras_PerStop2     ) And
		 	items.itstat1   = :ras_ItStat      
Group By Item			,
			ItName		,
			Period          
    
Order By 1
```

## Colonnes
| Colonne |
|---------|
| items_linetype |
| items_item |
| items_itname |
| cvalstart |
| items_valstop |
| clotfinit_period |

