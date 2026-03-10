# d_clot_fabglob_subprint2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT Sum( clotfinit_a.cival) cival_1,   
         Sum( clotfinit_b.cival) cival_2,   
         substr(clotfinit_a.ciperiod,1,4) ansel,   
         substr(clotfinit_b.ciperiod,1,4) anref,   
         clotfinit_a.ciperiod period1,   
         clotfinit_b.ciperiod period2
    FROM clotfinit clotfinit_a,   
         clotfinit clotfinit_b,  
   WHERE ( clotfinit_a.ciitem = :item) AND
			( clotfinit_b.ciitem = :item) AND
			( substr(clotfinit_a.ciperiod,1,4) = :Sel_period ) AND  
         ( substr(clotfinit_b.ciperiod,1,4) = :Ref_period ) AND  
         ( substr(clotfinit_a.ciperiod,5,2) = substr(clotfinit_b.ciperiod,5,2) ) AND
			( clotfinit_a.cityp = 'M') AND 
			( clotfinit_b.cityp = 'M') 

Group By ansel,   
         anref,   
         period1,   
         period2
			  

order by substr(period1,5,2)

```

## Colonnes
| Colonne |
|---------|
| ccival_1 |
| ccival_2 |
| cansel |
| canref |
| clotfinit_period1 |
| clotfinit_period2 |

