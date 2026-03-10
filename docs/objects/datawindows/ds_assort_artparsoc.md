# ds_assort_artparsoc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT assortment.ascode,
		assortment.asdesc,
		assortment.ascmnt,
		items.itcode,   
         items.itname,   
         items.itum,   
         items.ittyp,   
         linkitad.lkcode,   
         linkitad.lkcurr,   
         linkitad.lkum,   
         linkitad.lkactiv,
		linkitad.lkadref		//sp0159
    FROM items,   
         linkitad,
		assortment  
   WHERE ( linkitad.lkitem = items.itcode ) and  
         ( ( linkitad.lkadcode = assortment.ascode ) AND  
         ( linkitad.lktyp = 'A' ) )   
ORDER BY assortment.ascode,
		items.itcode

```

## Colonnes
| Colonne |
|---------|
| assortment_ascode |
| assortment_asdesc |
| assortment_ascmnt |
| items_itcode |
| items_itname |
| items_itum |
| items_ittyp |
| linkitad_lkcode |
| linkitad_lkcurr |
| linkitad_lkum |
| linkitad_lkactiv |
| linkitad_lkadref |

