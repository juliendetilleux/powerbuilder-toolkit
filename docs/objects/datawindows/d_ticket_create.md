# d_ticket_create

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
- **Table principale**: 0

## SQL
```sql
select 
	adname,
	adtel,
	cast ( null as char(10) ) as itcode,
	cast ( null as decimal (10,4)) as unitcost,
	cast ( null as integer ) as qty,
	cast ( null as decimal (4,2) ) as tvalvl

from 

	adresses

where 

adcode = '##########'
```

## Colonnes
| Colonne |
|---------|
| adname |
| adtel |
| itcode |
| unitcost |
| qty |
| tvalvl |

