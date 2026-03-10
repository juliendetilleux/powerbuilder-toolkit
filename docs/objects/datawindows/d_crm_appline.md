# d_crm_appline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT alid,
			alahid,
			alname,
			alsort,
			alnumact,
			aldefval,
			alCAminval,
			alCAmaxval
    FROM appline
	Where alahid = :an_ahid
order by alsort

```

## Colonnes
| Colonne |
|---------|
| alid |
| alahid |
| alname |
| alsort |
| alnumact |
| aldefval |
| alcaminval |
| alcamaxval |

