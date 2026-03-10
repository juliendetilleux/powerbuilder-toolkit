# dd_crm_appheadlist_company

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT  linkappad.laahid,
			 apphead.ahcode,
			 apphead.ahname
	FROM linkappad join apphead on linkappad.laahid = apphead.ahid
	WHERE ahactiv = 'Y' and laadcode = :as_adcode
	ORDER BY apphead.ahcode;
```

## Colonnes
| Colonne |
|---------|
| linkappad_laahid |
| ahcode |
| ahname |

