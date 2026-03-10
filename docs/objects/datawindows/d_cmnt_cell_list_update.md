# d_cmnt_cell_list_update

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
 WHERE cc_datecrea BETWEEN date( :adt_start ) AND date( :adt_stop )
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

