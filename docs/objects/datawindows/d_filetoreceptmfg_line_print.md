# d_filetoreceptmfg_line_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT fileMFG.fm_filename,
		fileMFG.fm_date,
		fileMFG.fm_user,
		filetoreceptMFG_line.fl_fileline,
		filetoreceptMFG_line.fl_mfghead_mhcode,
		filetoreceptMFG_line.fl_loc,
		filetoreceptMFG_line.fl_lot,
		filetoreceptMFG_line.fl_qty_torecept, 
		filetoreceptMFG_line.fl_status,
		filetoreceptMFG_line.fl_report,
		filetoreceptMFG_line.fl_item as item_code
    FROM filetoreceptMFG_line JOIN fileMFG ON fileMFG.fm_id = filetoreceptMFG_line.fl_fk_fm_id
   WHERE fileMFG.fm_id BETWEEN :al_id_Start AND :al_id_Stop AND
		filetoreceptMFG_line.fl_status > 0
ORDER BY fileMFG.fm_id desc, filetoreceptMFG_line.fl_id
```

## Colonnes
| Colonne |
|---------|
| filemfg_fm_filename |
| filemfg_fm_date |
| filemfg_fm_user |
| filetoreceptmfg_line_fl_fileline |
| filetoreceptmfg_line_fl_mfghead_mhcode |
| filetoreceptmfg_line_fl_loc |
| filetoreceptmfg_line_fl_lot |
| filetoreceptmfg_line_fl_qty_torecept |
| filetoreceptmfg_line_fl_status |
| filetoreceptmfg_line_fl_report |
| item_code |

