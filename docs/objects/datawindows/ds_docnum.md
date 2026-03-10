# ds_docnum

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT parameters.pmcode,   
         parameters.pmname,   
         parameters.pmival,
			cast( 0 as numeric(12,0) ) as newval 
    FROM parameters  
   WHERE parameters.pmcode in ( 'LASTINV' , 'LASTPIN' , 'LASTXORD', 'LASTPROF', 'LASTPORD', 'LASTSORD' , 'LASTCORD', 'LASTTRUK' )   
ORDER BY parameters.pmcode ASC   

```

## Colonnes
| Colonne |
|---------|
| pmcode |
| pmname |
| pmival |
| newval |

