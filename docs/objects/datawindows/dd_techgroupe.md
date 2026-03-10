# dd_techgroupe

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT gicode,
			(select gr.gidesc from groupingnut as gr where gr.gicode = groupingnut.gicode and gr.gilgcode = adresses.adlang) as sharpgidesc  
    FROM groupingnut,
		adresses
  WHERE adresses.adcode = '##########'
 GROUP BY gicode,
		sharpgidesc
ORDER BY gicode
```

## Colonnes
| Colonne |
|---------|
| gicode |
| sharpgidesc |

