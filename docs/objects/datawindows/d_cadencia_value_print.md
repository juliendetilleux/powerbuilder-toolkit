# d_cadencia_value_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         items.itum,   
         adresses.adname,   
         adresses.adcode,   
         items.itcode,  
		items.itstat1,
		items.itstat2,
		isnull(linkitad.lkadref2,'') as lkadref2,
		adresses.adgrcust
    FROM items   ,   
         adresses,   
          yv_linkitad as linkitad
   WHERE  linkitad.lkitem = items.itcode AND
		linkitad.lkadcode = adresses.adcode AND
		linkitad.lktyp = 'S' AND
		linkitad.lkactiv = 'Y' and 
		items.itactiv = 'Y'
ORDER BY adresses.adcode,
		items.itcode,
		items.itstat1,
		items.itstat2 

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| items_itum |
| adresses_adname |
| adresses_adcode |
| items_itcode |
| items_itstat1 |
| items_itstat2 |
| lkadref2 |
| adresses_adgrcust |

