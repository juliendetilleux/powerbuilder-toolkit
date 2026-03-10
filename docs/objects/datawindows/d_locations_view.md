# d_locations_view

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
SELECT locations.lccode ,    
       'O' as status ,
	locations.lcgroup   
  
        FROM locations   
 
        WHERE locations.lcintext = 'I'   
					AND locations.lcactiv = 'Y'   
   				AND lccode in ( SELECT distinct stocks.stloc   
                    FROM stocks   
                   WHERE stocks.stqty <> 0   
                 )   
union all    

SELECT locations.lccode ,    
       'F' as status  ,
	locations.lcgroup   
  FROM locations   
 WHERE locations.lcintext = 'I'   
		AND locations.lcactiv = 'Y'   
   	AND lccode not in ( SELECT distinct stocks.stloc   
                    FROM stocks   
                   WHERE stocks.stqty <> 0   
                 )   

ORDER BY 1   

```

## Colonnes
| Colonne |
|---------|
| lccode |
| status |
| lcgroup |

