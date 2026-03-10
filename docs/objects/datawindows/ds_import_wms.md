# ds_import_wms

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
		( iw_fileline = 1  OR LEFT( iw_filename, 3 ) not in ( 'CSO', 'CRP', 'CRE' ) ) AND
		( LEFT( iw_filename, 3 ) not in ( 'STO', 'CCS' ) OR left( import_wms.iw_content, 8 ) = 'ENTREPOT' ) 
ORDER BY IF LEFT( iw_filename, 3 ) = 'CRP' THEN 1 ELSE 2 ENDIF,
	substring( import_wms.iw_filename, 6, length( import_wms.iw_filename ) - 9 )
            

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

