# d_crm_apphead_list

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
		apphead.ahmajdat,
		apphead.ahdefval,
		apphead.ahactiv				
    FROM apphead
	ORDER BY ahactiv desc, ahcode
```

## Colonnes
| Colonne |
|---------|
| ahid |
| ahcode |
| ahname |
| ahaction |
| ahmajdat |
| ahdefval |
| ahactiv |

