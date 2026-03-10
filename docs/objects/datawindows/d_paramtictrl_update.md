# d_paramtictrl_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT parameters.pmcode,   
         parameters.pmcval,   
         parameters.pm_fileval,
		CAST( '00:00' as time ) as timestart,
		CAST( '00:00' as time ) as timestop
    FROM parameters  
  where ( pmcode in ( 'TIClPZAM', 'TIClPZMI', 'TIClPZPM') )    

```

## Colonnes
| Colonne |
|---------|
| pmcode |
| pmcval |
| pm_fileval |
| timestart |
| timestop |

