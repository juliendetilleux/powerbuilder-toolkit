# d_clot_purglob_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT clotfinhead_a.chpur as chpur_sel,   
         clotfinhead_b.chpur chpur_ref,   
         substr(clotfinhead_a.chperiod,1,4) ansel,   
         substr(clotfinhead_b.chperiod,1,4) anref,   
         clotfinhead_a.chperiod,   
         clotfinhead_b.chperiod  
    FROM clotfinhead clotfinhead_a,   
         clotfinhead clotfinhead_b  
   WHERE ( substr(clotfinhead_a.chperiod,1,4) = :Sel_period ) AND  
         ( substr(clotfinhead_b.chperiod,1,4) = :Ref_period ) AND  
         ( substr(clotfinhead_a.chperiod,5,2) = substr(clotfinhead_b.chperiod,5,2) )  
order by substr(clotfinhead_a.chperiod,5,2)
```

## Colonnes
| Colonne |
|---------|
| clotfinhead_chpur_sel |
| clotfinhead_chpur_ref |
| cansel |
| canref |
| clotfinhead_chperiod |
| clotfinhead_chperiod |

