# dd_assortment

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT assortment.ascode,
		assortment.asdesc
    FROM assortment

UNION ALL 

  SELECT null,
		'Aucun'
    FROM dummy
	 
ORDER BY 1 ASC   

```

## Colonnes
| Colonne |
|---------|
| ascode |
| asdesc |

