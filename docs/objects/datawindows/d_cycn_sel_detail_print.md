# d_cycn_sel_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql



SELECT cycntline.clnumcc,   
         cycntline.clstitem,   
         cycntline.clstlot,   
         cycntline.clstloc,   
         cycntline.clstqty,   
         items.itum,   
         items.itname,   
        ( select choices.chname from choices where choices.chtype = 'CYCT' and (select cycnthead.chstatus from cycnthead where cycnthead.chnumcc = :num_cycn) = choices.chcode),
ITEMS.ITSTDPUR          
    FROM cycntline,   
         items  
   WHERE ( cycntline.clstitem = items.itcode ) and  
		(cycntline.clnumcc = :num_cycn ) 
ORDER BY cycntline.clstloc ASC,   
         cycntline.clstitem ASC,   
         cycntline.clstlot ASC   










```

## Colonnes
| Colonne |
|---------|
| clnumcc |
| clstitem |
| clstlot |
| clstloc |
| cycntline_clstqty |
| items_itum |
| items_itname |
| choices_chname |
| items_itstdpur |

