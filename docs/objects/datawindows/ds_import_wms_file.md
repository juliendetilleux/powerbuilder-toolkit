# ds_import_wms_file

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT import_wms.iw_id,   
         import_wms.iw_filename,   
         import_wms.iw_fileline,   
         import_wms.iw_date,   
         import_wms.iw_status,   
         import_wms.iw_content,   
         import_wms.iw_message  
    FROM import_wms  
  WHERE import_wms.iw_status = 1 AND
		iw_fileline > 1 AND
		import_wms.iw_filename = :as_filename AND
		datediff( SECOND, import_wms.iw_date, (select max( iw.iw_date ) from import_wms as iw where import_wms.iw_filename = iw.iw_filename and iw.iw_fileline = 1 and iw.iw_status in(1, 4)  ) ) < 10
ORDER BY import_wms.iw_id
            

```

## Colonnes
| Colonne |
|---------|
| iw_id |
| iw_filename |
| iw_fileline |
| iw_date |
| iw_status |
| iw_content |
| iw_message |

