# d_import_wms_error

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT import_wms.iw_id,   
		CASE left(import_wms.iw_filename, 3)
		  WHEN 'CSO' THEN 'Expédition'
		  WHEN 'VST' THEN 'Différence inventaire'
		  WHEN 'CRP' THEN 'Réception achat'
		  WHEN 'CRE' THEN 'Clôture cmd achat'
		  WHEN 'STO' THEN 'Inventaire journalier automatique'
		  WHEN 'CSS' THEN 'Modification état du lot'
		  WHEN 'EIM' THEN 'Retour erreur intégration du WMS'
		  ELSE '?'
		  END as typ_file,
         import_wms.iw_filename,   
         import_wms.iw_fileline,   
         import_wms.iw_date,   
         import_wms.iw_status,   
         import_wms.iw_content,   
         import_wms.iw_message  
    FROM import_wms  
  WHERE import_wms.iw_status = 3 AND
		date( import_wms.iw_date ) BETWEEN date( :adt_datestart ) AND date( :adt_datestop )
ORDER BY substring( import_wms.iw_filename, 6, length( import_wms.iw_filename ) - 9 )
            

```

## Colonnes
| Colonne |
|---------|
| iw_id |
| typ_file |
| iw_filename |
| iw_fileline |
| iw_date |
| iw_status |
| iw_content |
| iw_message |

