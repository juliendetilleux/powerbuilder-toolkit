# zd_clot_sal_family_item_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  Select items.itcode					As Item			,
		 	items.itname					As ItName		,
		 	Sum( If clotfinit.ciperiod >= :ras_PerStart1 And clotfinit.ciperiod <= :ras_PerStart2 Then
						clotfinit.cival
					Else
						0
					EndIF ) 					As ValStart		,
			Sum( If clotfinit.ciperiod >= :ras_PerStop1 And clotfinit.ciperiod <= :ras_PerStop2 Then
						clotfinit.cival
					Else
						0
					EndIF ) 					As ValStop		 
  	 From items		 ,    
		 	clotfinit
 	Where items.itcode    = clotfinit.ciitem And
		 	clotfinit.cityp = 'S'              And
		 	( clotfinit.ciperiod Between :ras_PerStart1 And :ras_PerStart2 Or
		     clotfinit.ciperiod Between :ras_PerStop1  And :ras_PerStop2     ) And
		 	items.itstat1   = :ras_ItStat     AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */ 
Group By Item			,
			ItName		

Order By Item
```

## Colonnes
| Colonne |
|---------|
| items_item |
| items_itname |
| cvalstart |
| cvalstop |

