# zmod_routtest_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT items.itcode,   
         items.itname,  
		items.itum, 
         workcenters.wccode,   
         workcenters.wcname,   
         routtest.rtseq,   
         routtest.rtdesc,   
         routtest.rtrsltrange,   
         routtest.rtnval_max,   
         routtest.rtnval_min,   
         routtest.rtum,   
         routtest.rttval,   
         routtest.rtchoiceid,   
         routtest.rtreplicat,   
         routtest.rtreplicatqty,   
         routtest.rtcmnt,   
         routline.rltype,   
         routline.rlline,   
         qctest.qttyp  
    FROM items,   
         routline,   
         routtest,   
         workcenters,   
         qctest  
   WHERE ( items.itcode = routline.rlcode ) and  
         ( routline.rlwccode = workcenters.wccode ) and  
         ( routline.rltest = routtest.rtcode ) and  
         ( qctest.qttestid = routtest.rtidtest ) and  
		( routline.rltest =:ral_rltest )
ORDER BY routline.rlline ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| workcenters_wccode |
| workcenters_wcname |
| rtseq |
| routtest_rtdesc |
| routtest_rtrsltrange |
| routtest_rtnval_max |
| routtest_rtnval_min |
| routtest_rtum |
| routtest_rttval |
| routtest_rtchoiceid |
| routtest_rtreplicat |
| routtest_rtreplicatqty |
| routtest_rtcmnt |
| routline_rltype |
| routline_rlline |
| qctest_qttyp |

