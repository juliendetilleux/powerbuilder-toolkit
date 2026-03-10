# ds_compare_lots_within_shiplines

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
 SELECT shipline.sllot ,
			isnull(lots.loorgcode,'') as code_lotptr 
			     
				
	 FROM shipline,lots,salline     
	 WHERE shipline.slsalorder = salline.slcode and     
			 shipline.slsalline = salline.slline and     
			 shipline.sllot = lots.locode and     
			 shipline.slcode =   :ral_shipnotice      
 order by code_lotptr ; 
```

## Colonnes
| Colonne |
|---------|
| shipline_sllot |
| code_lotptr |

