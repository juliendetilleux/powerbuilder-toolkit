# dd_hourly

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT hyid, 
	hyname, 
	hyactif
	FROM hourly   
  WHERE hyactif = 'Y'
	ORDER BY hyname

```

## Colonnes
| Colonne |
|---------|
| hyid |
| hyname |
| hyactif |

