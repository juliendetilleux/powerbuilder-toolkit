# d_cmnt_cell_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT cc_id,
		cc_datecrea,
		cc_cell,
		cc_cmnt,
		cc_see,
		cc_user_see,
		cc_datesee
    FROM Cells_cmnt
 WHERE cc_cell = :al_cell AND
		( cc_see = 0 OR date( cc_datesee ) = date( now() )) 
 ORDER BY cc_see,
		cc_datecrea

```

## Colonnes
| Colonne |
|---------|
| cc_id |
| cc_datecrea |
| cc_cell |
| cc_cmnt |
| cc_see |
| cc_user_see |
| cc_datesee |

