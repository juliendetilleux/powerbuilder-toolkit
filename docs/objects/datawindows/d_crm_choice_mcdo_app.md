# d_crm_choice_mcdo_app

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT 	if exists (select * from linkappmcdo where lmahid = :an_ahid and mccode = lmmcdo ) then 1 else 0 end if as linked,
		multico.mccode,
		adresses.adname
    FROM multico join adresses on multico.mccode = adresses.adcode
	where mcactiv = 'Y'
	order by adname
```

## Colonnes
| Colonne |
|---------|
| linked |
| mccode |
| adname |

