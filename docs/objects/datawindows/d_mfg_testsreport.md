# d_mfg_testsreport

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreqs.mwcode,   
         workcenters.wcname,   
         mfgwctests.wtseq,   
         mfgwctests.wtidreplicat,   
         mfgwctests.wtdesc,   
         mfgwctests.wtcmnt,   
         mfgwctests.wtrsltrange,   
         mfgwctests.wtthnval_min,   
         mfgwctests.wtthnval_max,   
         mfgwctests.wtum,   
         mfgwctests.wtchoice,   
         mfgwctests.wtthtval,   
         mfgwctests.wtnval,   
         mfgwctests.wtbval,   
         mfgwctests.wttval,   
         isnull((select qctchoice.qcdesc from qctchoice where ( mfgwctests.wtchoice = qctchoice.qcchoiceid ) and ( mfgwctests.wtrsltchoice = qctchoice.qcseq ) ),'') as choice_desc,   
          isnull((select qctchoice.qcrslt from qctchoice where ( mfgwctests.wtchoice = qctchoice.qcchoiceid ) and ( mfgwctests.wtrsltchoice = qctchoice.qcseq ) ),'') as choice_rslt,   
         qctest.qttyp,    
         mfgwcreqs.mwline  ,
		mfgwctests.wtwkcode, 
		mfgwctests.wtdate
    FROM mfgwcreqs,   
         mfgwctests,   
         workcenters,    
         qctest  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( mfgwcreqs.mwcode = mfgwctests.wtcode ) and  
		( mfgwcreqs.mwline = mfgwctests.wtline ) and
         ( mfgwctests.wtidtest = qctest.qttestid ) and  
         ( mfgwcreqs.mwfinish IN ('Y', 'D') ) AND  
         mfgwcreqs.mwcode = :ral_of   
ORDER BY mfgwcreqs.mwline ASC,   
         mfgwctests.wtseq ASC,   
         mfgwctests.wtidreplicat ASC   

```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwcode |
| workcenters_wcname |
| mfgwctests_wtseq |
| mfgwctests_wtidreplicat |
| mfgwctests_wtdesc |
| mfgwctests_wtcmnt |
| wtrsltrange |
| wtthnval_min |
| wtthnval_max |
| wtum |
| mfgwctests_wtchoice |
| mfgwctests_wtthtval |
| wtnval |
| wtbval |
| wttval |
| choice_desc |
| choice_rslt |
| qctest_qttyp |
| mfgwcreqs_mwline |
| mfgwctests_wtwkcode |
| mfgwctests_wtdate |

