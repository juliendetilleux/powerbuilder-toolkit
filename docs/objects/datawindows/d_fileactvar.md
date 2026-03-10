# d_fileactvar

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
SELECT fileactvar.farunid,   
		fileactvar.fasalorder,   
		fileactvar.fasalline,   
		fileactvar.farespons,   
		fileactvar.falinetype,   
		fileactvar.fainvhead,   
		fileactvar.fainvline,   
		fileactvar.fafileref,   
		fileactvar.fafileline,   
		fileactvar.fatimereal,   
		fileactvar.fatimeinv,   
		fileactvar.fatimevarconf,
		cast(null as decimal(5,2)) as timeinv,
		cast(null as decimal(5,2)) as timevarconf
	FROM fileactvar  
	WHERE fileactvar.farunid = :an_runid
		AND (fileactvar.fainvhead IS NULL
			OR fileactvar.fainvhead = 0)
            

```

## Colonnes
| Colonne |
|---------|
| farunid |
| fasalorder |
| fasalline |
| farespons |
| falinetype |
| fainvhead |
| fainvline |
| fafileref |
| fafileline |
| fatimereal |
| fatimeinv |
| fatimevarconf |
| timeinv |
| timevarconf |

