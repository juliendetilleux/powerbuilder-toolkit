# d_crm_apphead_form

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT 	apphead.ahid,
		apphead.ahcode,
		apphead.ahname,
		apphead.ahaction,
		day(apphead.ahmajdat),
		month(apphead.ahmajdat),
		apphead.ahdefval,
		apphead.ahactiv,
		apphead.ahsee	
    FROM apphead
	where apphead.ahid = :an_ahid
```

## Colonnes
| Colonne |
|---------|
| ahid |
| ahcode |
| ahname |
| ahaction |
| day |
| month |
| ahdefval |
| ahactiv |
| ahsee |

