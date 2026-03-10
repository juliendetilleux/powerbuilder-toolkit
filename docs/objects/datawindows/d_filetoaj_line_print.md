# d_filetoaj_line_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT fileAJ.fa_filename,
		fileAJ.fa_date,
		fileAJ.fa_user,
		filetoAJ_line.fl_fileline,
		isnull( transactions.trname, filetoAJ_line.fl_type ) as type,
		filetoAJ_line.fl_loc_start,
		filetoAJ_line.fl_lot,
		filetoAJ_line.fl_qty, 
		filetoAJ_line.fl_loc_dest,
		filetoAJ_line.fl_status,
		filetoAJ_line.fl_report,
		( select loitem from lots where locode = filetoAJ_line.fl_lot ) as item_code
    FROM filetoAJ_line JOIN fileAJ ON fileAJ.fa_id = filetoAJ_line.fl_fk_fa_id
		LEFT OUTER JOIN transactions ON transactions.trcode = filetoAJ_line.fl_type
   WHERE fileAJ.fa_id BETWEEN :al_id_Start AND :al_id_Stop AND
		filetoAJ_line.fl_status > 0
ORDER BY type, fileAJ.fa_id desc, filetoAJ_line.fl_id
```

## Colonnes
| Colonne |
|---------|
| fileaj_fa_filename |
| fileaj_fa_date |
| fileaj_fa_user |
| filetoaj_line_fl_fileline |
| type |
| filetoaj_line_fl_loc_start |
| filetoaj_line_fl_lot |
| filetoaj_line_fl_qty |
| filetoaj_line_fl_loc_dest |
| filetoaj_line_fl_status |
| filetoaj_line_fl_report |
| item_code |

