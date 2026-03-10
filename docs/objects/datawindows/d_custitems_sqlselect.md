# d_custitems_sqlselect

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkitad.lkadref,   
         linkitad.lkadref2,   
         linkitad.lkadcode,   
         linkitad.lkitem,
         linkitad.lktyp,
			items.itactiv,
			items.ittyp,
			items.itsale,
			items.itcat,
			items.itowner,
			items.itcons, 
			adresses.adname
    FROM linkitad , items , adresses
   WHERE lkactiv = 'Y' and 
			items.itactiv = 'Y' and
			items.itcode = linkitad.lkitem and 
         adresses.adcode = linkitad.lkadcode
```

## Colonnes
| Colonne |
|---------|
| lkadref |
| lkadref2 |
| lkadcode |
| lkitem |
| lktyp |
| items_itactiv |
| items_ittyp |
| items_itsale |
| items_itcat |
| items_itowner |
| items_itcons |
| adresses_adname |

