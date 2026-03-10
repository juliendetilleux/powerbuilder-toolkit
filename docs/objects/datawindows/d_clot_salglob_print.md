# d_clot_salglob_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  Select sum(clotfinhead_a.chsal)                                                    SalVal_Sel , 
         substr( clotfinhead_a.chperiod, 1, 4)                                  Year_sel   ,  
         clotfinhead_a.chperiod                                                 Period_Sel ,
         SubStr( clotfinhead_a.chperiod, 5, 2)                                  Month_Sel  ,  
         ( Select sum(clotfinhead_b.chsal)
				 From clotfinhead clotfinhead_b
            Where ( SubStr( clotfinhead_b.chperiod, 1, 4) = :Ref_period ) 	AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinhead_b.chmccode,'##########')) /*jm012 */ And
                  ( SubStr( clotfinhead_b.chperiod, 5, 2) = Month_Sel  )      ) SalVal_Ref
    From clotfinhead clotfinhead_a  
   Where ( SubStr( clotfinhead_a.chperiod, 1, 4) = :Sel_period ) 	AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinhead_a.chmccode,'##########')) /*jm012 */
Group By Year_sel,Period_Sel,Month_Sel,SalVal_Ref
Order By SubStr( clotfinhead_a.chperiod, 5, 2)




```

## Colonnes
| Colonne |
|---------|
| salval_sel |
| year_sel |
| period_sel |
| month_sel |
| salval_ref |

