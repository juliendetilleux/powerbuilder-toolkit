# d_clot_stock_var_print_test

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT distinct itcode,
			itname,
			itcptanal,
         ( select imputcpt.icref from imputcpt  WHERE itcptanal = imputcpt.iccode ) as cptcode ,  
         ( select imputcpt.icdesc from imputcpt  WHERE  itcptanal = imputcpt.iccode ) as cptname ,  
			isnull(( select sum( clotfinit.cival) 
				  from clotfinit
				 where clotfinit.ciitem = items.itcode
					and clotfinit.ciperiod = :Sel_period1 
					and clotfinit.cityp = 'I' ), 0 ) as Val_Per1 ,
			isnull(( select sum( clotfinit.cival) 
				  from clotfinit
				 where clotfinit.ciitem = items.itcode
					and clotfinit.ciperiod = :Sel_period2 
					and clotfinit.cityp = 'I' ), 0 ) as Val_Per2
    FROM items,   
         clotfinit  
   WHERE ( clotfinit.ciitem = items.itcode ) and  
         ( clotfinit.ciperiod in ( :Sel_period1 , :Sel_period2 ) ) AND  
         ( clotfinit.cityp = 'I' )  
GROUP BY itcode,
			itname,
			itcptanal  
ORDER BY cptname ASC,   
         itcode ASC


```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itcptanal |
| ccptcode |
| ccptname |
| cval_per1 |
| cval_per2 |

