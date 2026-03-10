# d_filetoallocate_line_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT filetoallocate.fa_filename,
		filetoallocate.fa_date,
		filetoallocate.fa_user,
		filetoallocate_line.fl_fileline,
		filetoallocate_line.fl_salhead_shcode,
		filetoallocate_line.fl_loc,
		filetoallocate_line.fl_lot,
		filetoallocate_line.fl_qty_toalloc, 
		filetoallocate_line.fl_status,
		filetoallocate_line.fl_report,
		( select loitem from lots where locode = filetoallocate_line.fl_lot ) as item_code
    FROM filetoallocate_line JOIN filetoallocate ON filetoallocate.fa_id = filetoallocate_line.fl_fk_fa_id
   WHERE filetoallocate.fa_id BETWEEN :al_id_Start AND :al_id_Stop AND
		filetoallocate_line.fl_status > 0
ORDER BY filetoallocate.fa_id desc, filetoallocate_line.fl_id
```

## Colonnes
| Colonne |
|---------|
| filetoallocate_fa_filename |
| filetoallocate_fa_date |
| filetoallocate_fa_user |
| filetoallocate_line_fl_fileline |
| filetoallocate_line_fl_salhead_shcode |
| filetoallocate_line_fl_loc |
| filetoallocate_line_fl_lot |
| filetoallocate_line_fl_qty_toalloc |
| filetoallocate_line_fl_status |
| filetoallocate_line_fl_report |
| item_code |

