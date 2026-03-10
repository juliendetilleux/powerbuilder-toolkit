# d_assortment_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT assortment.ascode,
		assortment.asdesc,
		assortment.ascmnt 
    FROM assortment
 WHERE assortment.ascode = :ll_ascode 

```

## Colonnes
| Colonne |
|---------|
| ascode |
| asdesc |
| ascmnt |

