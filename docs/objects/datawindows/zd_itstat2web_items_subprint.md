# zd_itstat2web_items_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         isnull((Select itemlang.ildesc from itemlang where itemlang.illgcode = :ras_lang and items.itcode = itemlang.ilitcode),items.itname) as article,   
         items.itum,   
         items.itsale,   
         items.ittyp  
    FROM items
   WHERE ( items.itwebvisible = 'Y' ) AND  
         ( items.itwebtype = :al_ItStat1web ) AND  
		(items.itwebtype2 = :al_ItStat2Web ) AND
         ( items.itactiv = 'Y' ) AND  
         ( items.itcode not like '###########%'    ) 
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| article |
| itum |
| itsale |
| ittyp |

