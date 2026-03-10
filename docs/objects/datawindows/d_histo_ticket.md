# d_histo_ticket

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
- **Table principale**: 0

## SQL
```sql
SELECT tickethead.thcode,   
         	tickethead.thdate,				
			sum (tltotval)
    FROM tickethead join ticketline on thcode=tlcode
where tickethead.thcash = :as_cash
group by thcode, thdate
order by thcode desc
```

## Colonnes
| Colonne |
|---------|
| tickethead_thcode |
| tickethead_thdate |
| compute_0003 |

