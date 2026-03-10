# dd_etiq_trsp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT etiq_trsp.et_name,   
         etiq_trsp.et_id  
    FROM etiq_trsp   
  WHERE et_actif = 'Y'
ORDER BY etiq_trsp.et_id  
```

## Colonnes
| Colonne |
|---------|
| et_name |
| et_id |

