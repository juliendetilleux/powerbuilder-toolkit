# d_qry_shiptos

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stseq,   
         shipto.stdesc,   
         shipto.stmain  
    FROM shipto  
   WHERE shipto.stcode = :Selected_ad   and shipto.stactiv = 'Y'
ORDER BY shipto.stseq ASC   

```

## Colonnes
| Colonne |
|---------|
| stseq |
| stdesc |
| stmain |

