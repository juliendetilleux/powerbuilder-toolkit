# d_shipgr_show

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shipgrline.glshipline,   
         shipline.slitem,   
         items.itname,   
         shipgrline.glqty,   
         shipgrhead.ghdesc,
         shipline.sllot,
         items.itdefaultlot, 
         shipgrhead.ghsscc,
	    (select loorgcode from lots where locode = shipline.sllot) as loorgcode   
    FROM items,   
         shipgrhead,   
         shipgrline,   
         shipline  
   WHERE ( shipgrline.glshipid = shipgrhead.ghshipid ) and  
         ( shipgrline.gllevel = shipgrhead.ghlevel + 1 ) and  
         ( shipgrline.glprevlevelseq = shipgrhead.ghlevelseq ) and  
         ( shipgrline.glshipid = shipline.slcode ) and  
         ( shipgrline.glshipline = shipline.slline ) and  
         ( shipline.slitem = items.itcode ) and  
         ( ( shipgrhead.ghshipid = :sel_ship ) )  
ORDER BY  shipgrline.glshipline 

```

## Colonnes
| Colonne |
|---------|
| shipgrline_glshipline |
| shipline_slitem |
| items_itname |
| shipgrline_glqty |
| shipgrhead_ghdesc |
| shipline_sllot |
| items_itdefaultlot |
| shipgrhead_ghsscc |
| loorgcode |

