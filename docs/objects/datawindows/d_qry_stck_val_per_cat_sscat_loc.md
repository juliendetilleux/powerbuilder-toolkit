# d_qry_stck_val_per_cat_sscat_loc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select 

    stitem, stlot, stloc, stqty, items.itname, items.itstat1, items.itstat2, isnull (itstat1.imdesc, '_NO Cat.') as cat   , isnull (itstat2.isdesc, '_NO Ss-Cat.' ) as sscat, items.itstdpur, itum, lobascost, loxtrcost

from 

    stocks , items , itstat1, itstat2, lots

where 

    	stqty <> 0 and
    	items.itcode = stocks.stitem and
    	items.itstat1 = itstat1.imcode and 
    	items.itstat1 = itstat2.iscode and 
    	items.itstat2 = itstat2.iscode2 and
	stocks.stlot = lots.locode

order by 
    cat, 
    sscat,
    stloc asc
```

## Colonnes
| Colonne |
|---------|
| stocks_stitem |
| stocks_stlot |
| stocks_stloc |
| stocks_stqty |
| items_itname |
| items_itstat1 |
| items_itstat2 |
| cat |
| sscat |
| items_itstdpur |
| items_itum |
| lots_lobascost |
| lots_loxtrcost |

