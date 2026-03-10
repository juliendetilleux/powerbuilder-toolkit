# d_qctest_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT qctest.qttestid,   
         qctest.qtname,   
         qctest.qtactiv,   
         qctest.qtcmnt,   
         qctest.qttyp,   
         qctest.qtnameext,   
         qctest.qtlabo,   
         qctest.qtchoiceid  
    FROM qctest  
ORDER BY qctest.qttestid ASC   

```

## Colonnes
| Colonne |
|---------|
| qttestid |
| qtname |
| qtactiv |
| qtcmnt |
| qttyp |
| qtnameext |
| qtlabo |
| qtchoiceid |

