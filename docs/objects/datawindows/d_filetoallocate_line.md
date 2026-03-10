# d_filetoallocate_line

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT fl_id,
		fl_fk_fa_id,
		fl_fileline,
		fl_salhead_shcode,
		fl_salline_slline,
		fl_loc,
		fl_lot,
		fl_qty_toalloc,
		fl_status,
		fl_report,
		filetoallocate.fa_filename,
		filetoallocate.fa_date,
		filetoallocate.fa_user,
		adresses.adcode,
		adresses.adname,
		items.itcode,
		items.itname
   FROM filetoallocate_line JOIN filetoallocate ON filetoallocate.fa_id = filetoallocate_line.fl_fk_fa_id
		LEFT OUTER JOIN salhead ON salhead.shcode = filetoallocate_line.fl_salhead_shcode
		LEFT OUTER JOIN adresses ON adresses.adcode = salhead.shcust
		LEFT OUTER JOIN salline ON salline.slcode = filetoallocate_line.fl_salhead_shcode AND salline.slline = filetoallocate_line.fl_salline_slline
		LEFT OUTER JOIN items ON items.itcode = salline.slitem
   WHERE  filetoallocate.fa_date between :adt_datestart AND :adt_datestop
ORDER BY filetoallocate.fa_date ASC, 
		filetoallocate_line.fl_fileline

```

## Colonnes
| Colonne |
|---------|
| filetoallocate_line_fl_id |
| filetoallocate_line_fl_fk_fa_id |
| filetoallocate_line_fl_fileline |
| filetoallocate_line_fl_salhead_shcode |
| filetoallocate_line_fl_salline_slline |
| filetoallocate_line_fl_loc |
| filetoallocate_line_fl_lot |
| filetoallocate_line_fl_qty_toalloc |
| filetoallocate_line_fl_status |
| filetoallocate_line_fl_report |
| filetoallocate_fa_filename |
| filetoallocate_fa_date |
| filetoallocate_fa_user |
| adresses_adcode |
| adresses_adname |
| items_itcode |
| items_itname |

