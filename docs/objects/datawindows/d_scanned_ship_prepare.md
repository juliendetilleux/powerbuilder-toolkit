# d_scanned_ship_prepare

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT CAST(null as numeric(4,0)) as slline,   
  		CAST(null as char(12)) as slitem,
        	CAST(null as char(30)) as itname,   
		CAST(null as char(10)) as lot,	    
        	CAST(null as char(10)) as loc,      
        	CAST(null as numeric(10,3)) as slqtyreq,
		CAST(null as char(1)) as isconsigne,
		CAST(null as numeric(3,0)) as level,
		CAST(null as numeric(4,0)) as parentid,
		CAST(null as numeric(4,0)) as id,
		CAST(null as char(10)) as lot_éti,
        	CAST(null as numeric(10,3)) as weignt,
		Cast(null as numeric(3,0)) as FirstLevelId, /*HA2445*/
		Cast( Null As Char( 1)) As EtiGroup /*HA2648-15406*/
    FROM dummy

```

## Colonnes
| Colonne |
|---------|
| slline |
| slitem |
| itname |
| lot |
| loc |
| slqtyreq |
| isconsigne |
| level |
| parentid |
| id |
| weight |
| firstlevelid |
| etigroup |

