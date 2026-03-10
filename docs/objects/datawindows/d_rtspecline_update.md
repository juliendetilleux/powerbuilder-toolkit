# d_rtspecline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT qctest.qttyp,   
         routtest.rtcode,   
         routtest.rtline,   
         routtest.rtidtest,   
         routtest.rtdesc,   
         routtest.rtcmnt,   
         routtest.rtum,   
         routtest.rtseq,   
         routtest.rttval,   
         routtest.rtnval_max,   
         routtest.rtnval_min,   
         routtest.rtrsltrange,   
         routtest.rtchoiceid,   
         routtest.rtreplicat,   
         routtest.rtreplicatqty,   
         items.itum,
	    routtest.rtbloc   
    FROM qctest,   
         routtest,   
         routline,   
         items  
   WHERE ( qctest.qttestid = routtest.rtidtest ) and  
         ( routtest.rtcode = routline.rltest ) and  
         ( routline.rlcode = items.itcode ) and  
         ( routtest.rtcode = :rtcode ) AND  
         ( routtest.rtline = :rtline )    

```

## Colonnes
| Colonne |
|---------|
| qctest_qttyp |
| routtest_rtcode |
| routtest_rtline |
| routtest_rtidtest |
| routtest_rtdesc |
| routtest_rtcmnt |
| routtest_rtum |
| routtest_rtseq |
| routtest_rttval |
| routtest_rtnval_max |
| routtest_rtnval_min |
| routtest_rtrsltrange |
| routtest_rtchoiceid |
| routtest_rtreplicat |
| routtest_rtreplicatqty |
| items_itum |
| routtest_rtbloc |

