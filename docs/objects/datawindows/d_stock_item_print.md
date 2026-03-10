# d_stock_item_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         (select sum(lostock) from lots where loitem = items.itcode and lots.lost like :lot_wc) as itstock,   
         (select sum(loalloc) from lots where loitem = items.itcode and lots.lost like :lot_wc) as italloc,   
         items.itum,   
         items.itcat  
    FROM items  
   WHERE ( items.itcode like :Selected_item )   and items.itactiv = 'Y' and items.itcode not like '#####%'
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itstock |
| items_italloc |
| items_itum |
| itcat |

