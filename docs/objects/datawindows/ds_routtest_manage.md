# ds_routtest_manage

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT routtest.rtcode,   
         routtest.rtline,   
         routtest.rtidtest,   
         routtest.rtcmnt,   
         routtest.rttval,   
         routtest.rtum,   
         routtest.rtrsltrange,   
         routtest.rtdesc,   
         routtest.rtseq,   
         routtest.rtnval_max,   
         routtest.rtnval_min,   
         routtest.rtchoiceid,   
         routtest.rtreplicat,   
         routtest.rtreplicatqty  
    FROM routtest  
   WHERE (routtest.rtcode IN (:ral_rltest))   
ORDER BY routtest.rtcode ASC,   
         routtest.rtline ASC,   
         routtest.rtseq ASC   

```

## Colonnes
| Colonne |
|---------|
| rtcode |
| rtline |
| rtidtest |
| rtcmnt |
| rttval |
| rtum |
| rtrsltrange |
| rtdesc |
| rtseq |
| rtnval_max |
| rtnval_min |
| rtchoiceid |
| rtreplicat |
| rtreplicatqty |

