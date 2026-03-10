# dd_cpt_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
  SELECT Distinct ifcpt.ictyp  
    FROM ifcpt   
   WHERE ifcpt.ictyp In ( '##########', 'BOB2', 'WB5', 'POPSY', 'EXACT','ASC' ) //HA2188

```

## Colonnes
| Colonne |
|---------|
| ictyp |

