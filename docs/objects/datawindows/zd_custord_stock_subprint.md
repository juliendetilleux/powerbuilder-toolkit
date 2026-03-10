# zd_custord_stock_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT stocks.stlot,
			lots.lostatus,
			stocks.stloc,
			stocks.stqty - stocks.stalloc,
			items.itdefaultlot
 FROM lots,
			stocks,
			items
  WHERE stocks.stlot = lots.locode and
			stocks.stitem = items.itcode and 
			stocks.stitem = :SelItem and
			stocks.stqty - stocks.stalloc > 0
Order by lots. lorecdat  

```

## Colonnes
| Colonne |
|---------|
| stocks_stlot |
| lots_lostatus |
| stocks_stloc |
| compute_0004 |
| items_itdefaultlot |

