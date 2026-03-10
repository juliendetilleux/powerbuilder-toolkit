# d_mfg_testsshow

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfgcosts.mccode,   
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
         mfgcosts.mcseq , 
		mfgwctests.wtwkcode, 
		mfgwctests.wtdate

    FROM mfgcosts,   
         mfgwctests,   
         workcenters,    
         qctest  
   WHERE ( workcenters.wccode = mfgcosts.mcitem ) and  
         ( mfgcosts.mccode = mfgwctests.wtcode ) and  
		( mfgcosts.mcseq = mfgwctests.wtline ) and
		( mfgcosts.mctype = 'E' ) and
         ( mfgwctests.wtidtest = qctest.qttestid ) and  
         mfgcosts.mccode = :ral_of   
ORDER BY mfgcosts.mcseq ASC,   
         mfgwctests.wtseq ASC,   
         mfgwctests.wtidreplicat ASC   

```

## Colonnes
| Colonne |
|---------|
| mfgcosts_mccode |
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
| mfgcosts_mcseq |
| mfgwctests_wtwkcode |
| mfgwctests_wtdate |

