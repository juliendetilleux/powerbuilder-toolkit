# d_crm_choice_adtype

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT 	if exists (select * from linkappadtype where ltahid = :an_ahid and clline = ltadtype) then 1 else 0 end if as linked,
		Clname,
		clline
    FROM choiceline 
	where clcode = 'ADTP' and clactiv = 'Y'
	order by clsort
```

## Colonnes
| Colonne |
|---------|
| linked |
| clname |
| clline |

