# zd_routing_mes_tests_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
 SELECT 	rtcode,
		rtline,
		rtdesc as wtdesc,
		rtcmnt as wtcmnt,
		rtnval_min as wtthnval_min,
		rtnval_max as wtthnval_max,
		rttval as wtthtval,
		isnull(rtum, '') as wtum,
		rtseq as wtseq,
		rtchoiceid as wtchoice,
		rtrsltrange as wtrsltrange,
		rtreplicat as wtidreplicat,
		rtidtest as wtidtest,
		rtreplicatqty,
		isnull(rtbloc,'N') as rtbloc,   
         qctest.qttyp,   
         qctest.qtum 
   FROM routtest, qctest
 WHERE rtidtest = qctest.qttestid AND
	routtest.rtcode = :rltest

```

## Colonnes
| Colonne |
|---------|
| routtest_rtcode |
| routtest_rtline |
| routtest_wtdesc |
| routtest_wtcmnt |
| routtest_wtthnval_min |
| routtest_wtthnval_max |
| routtest_wtthtval |
| wtum |
| routtest_wtseq |
| routtest_wtchoice |
| routtest_wtrsltrange |
| routtest_wtidreplicat |
| routtest_wtidtest |
| routtest_rtreplicatqty |
| routtest_rtbloc |
| qctest_qttyp |
| qctest_qtum |

