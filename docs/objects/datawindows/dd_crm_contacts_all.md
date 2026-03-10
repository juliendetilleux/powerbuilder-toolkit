# dd_crm_contacts_all

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT	ctadcode,
		ctline,
		ctname,
		ctfirstname
    FROM contacts
	WHERE ctactiv = 'Y'
order by ctname
```

## Colonnes
| Colonne |
|---------|
| ctadcode |
| ctline |
| ctname |
| ctfirstname |

