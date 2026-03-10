# d_qry_ordcpny_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
 SELECT IF :MultiCo = '*' THEN 'Toutes les compagnies' ELSE (SELECT adname  FROM adresses WHERE adcode =:MultiCo) ENDIF as compName, 'A'
```

## Colonnes
| Colonne |
|---------|
| compname |
| compute_0002 |

