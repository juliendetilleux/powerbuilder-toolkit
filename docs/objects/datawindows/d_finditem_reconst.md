# d_finditem_reconst

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _monthclot
- **Table principale**: 0

## SQL
```sql
Select 
stocks.stitem,
items.itname,
stocks.stlot,
stocks.stloc,
0 as stqty,
lots.lolotctrl,
items.itum,
items.itdefaultlot
from
stocks,
items,
lots,
where
stocks.stitem= items.itcode
and stocks.stlot= lots.locode
and stocks.stitem not in (select csitem from clotstocks where csloc=stloc and cslot=stlot)
union
Select 
clotstocks.csitem,
items.itname,
clotstocks.cslot,
clotstocks.csloc,
clotstocks.csqtyorig,
lots.lolotctrl,
items.itum,
items.itdefaultlot
from
clotstocks,
items,
lots,
where
clotstocks.csitem= items.itcode
and clotstocks.cslot= lots.locode
order by 1, 3, 4
```

## Colonnes
| Colonne |
|---------|
| stitem |
| items_itname |
| stlot |
| stloc |
| stqty |
| lots_lolotctrl |
| items_itum |
| items_itdefaultlot |

