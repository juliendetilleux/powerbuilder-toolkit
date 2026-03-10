# dd_qctest_wt_test

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qctest.qttestid,   
         qctest.qtactiv,   
         qctest.qtname,   
         qctest.qttyp,   
         qctest.qtcmnt,   
         qctest.qtum,   
         qctest.qtnameext,   
         qctest.qtshowext,   
         qctest.qtshowsum,   
         qctest.qtchoiceid  
    FROM qctest  
   WHERE qctest.qtactiv = 'Y' AND
		qctest.qttyp <> 'T'  
ORDER BY qctest.qttestid ASC   

```

## Colonnes
| Colonne |
|---------|
| qttestid |
| qtactiv |
| qtname |
| qttyp |
| qtcmnt |
| qtum |
| qtnameext |
| qtshowext |
| qtshowsum |
| qtchoiceid |

