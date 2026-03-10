# dd_crm_apphead_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT  ahid,
			 ahcode,
			 ahname,
        		 isnull((select count(laadcode) from linkappad where laahid = apphead.ahid), 0) as nbad
	FROM apphead
	WHERE ahactiv = 'Y'
        and nbad > 0;
```

## Colonnes
| Colonne |
|---------|
| ahid |
| ahcode |
| ahname |
| nbad |

