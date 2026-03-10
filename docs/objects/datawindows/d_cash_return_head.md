# d_cash_return_head

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT  thdate,
				thcode,
			  (select sum(tltotval) from ticketline where tlcode = thcode and tlcash = thcash)
    FROM tickethead
	where thcash = :as_cash and
			thdate between :adt_start and :adt_stop
	order by 1 desc

```

## Colonnes
| Colonne |
|---------|
| thdate |
| thcode |
| compute_0003 |

