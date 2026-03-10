# d_clot_fabglob_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT distinct items.itcode,
			items.itname
			
    FROM items,
			clotfinit clotfinit_a,   
         clotfinit clotfinit_b,  
   WHERE ( clotfinit_a.ciitem = items.itcode) AND
			( clotfinit_b.ciitem = items.itcode) AND
			( substr(clotfinit_a.ciperiod,1,4) = :Sel_period ) AND  
         ( substr(clotfinit_b.ciperiod,1,4) = :Ref_period ) AND  
         ( substr(clotfinit_a.ciperiod,5,2) = substr(clotfinit_b.ciperiod,5,2) ) AND
			( clotfinit_a.cityp = 'M') AND 
			( clotfinit_b.cityp = 'M') 


        
			  


         

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |

