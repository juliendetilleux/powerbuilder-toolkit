# d_qctest_choice

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qctest.qttestid,   
         qctest.qtname  
    FROM qctest  
   WHERE ( qctest.qtactiv = 'Y' )    

```

## Colonnes
| Colonne |
|---------|
| qctest_qttestid |
| qtname |

