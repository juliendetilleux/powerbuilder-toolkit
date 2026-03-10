# d_qry_tictrl_daywork_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT	 workers.wkname,
			workline.wldat,             
			workline.wlstart,
			workline.wlend,	
			workline.wlwrktime
    FROM workline  join workers on workline.wlwkcode = workers.wkcode
    WHERE ( workline.wldat >= :Start_date ) AND  
         ( workline.wldat <= :End_date )   AND
		workline.wltyp = 1
    order by workline.wldat, workers.wkname
		

```

## Colonnes
| Colonne |
|---------|
| workers_wkname |
| workline_wldat |
| workline_wlstart |
| workline_wlend |
| workline_wlwrktime |

