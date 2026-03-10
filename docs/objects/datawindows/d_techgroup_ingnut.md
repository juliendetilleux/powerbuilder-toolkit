# d_techgroup_ingnut

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT gicode,
		gilgcode,
		gidesc
    FROM groupingnut, lang
 WHERE lang.lgcode = groupingnut.gilgcode
ORDER BY gicode,
		gilgcode 
```

## Colonnes
| Colonne |
|---------|
| gicode |
| gilgcode |
| gidesc |

