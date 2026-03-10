# d_routtest

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT routtest.rtseq,   
         routtest.rtdesc,   
         routtest.rtcode,   
         routtest.rtline,   
         qctest.qttyp,   
         routtest.rtchoiceid ,
	   routtest.rtbloc  
    FROM routtest,   
         qctest  
   WHERE ( qctest.qttestid = routtest.rtidtest ) and  
         ( routtest.rtcode = :rltest )   
ORDER BY routtest.rtseq ASC   

```

## Colonnes
| Colonne |
|---------|
| routtest_rtseq |
| routtest_rtdesc |
| rtcode |
| rtline |
| qctest_qttyp |
| routtest_rtchoiceid |
| routtest_rtbloc |

