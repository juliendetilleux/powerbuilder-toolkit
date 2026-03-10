# d_mfgwctests_rslt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwctests.wtcode,   
         mfgwctests.wtline,   
         mfgwctests.wttest,   
         mfgwctests.wtdesc,   
         mfgwctests.wtcmnt,   
         mfgwctests.wtthnval_min,   
         mfgwctests.wtthnval_max,   
         mfgwctests.wtthtval,   
         isnull( mfgwctests.wtum, '' ) as wtum ,   
         mfgwctests.wtseq,   
         mfgwctests.wtchoice,   
         mfgwctests.wtrsltrange,   
         mfgwctests.wtidreplicat,   
         mfgwctests.wtidtest,   
         qctest.qttyp,   
         qctest.qtum,   
         mfgwctests.wtnval,   
         mfgwctests.wtbval,   
         mfgwctests.wttval,   
         mfgwctests.wtrsltchoice,
		mfgwctests.wtwkcode,
		mfgwctests.wtdate, 
		CAST( NULL as  char(40)) as mfgwctests_wtrsltchoice_text,
		mfgwctests.wtbloc,
		(select qctchoice.qcrslt
			 from qctchoice  
			where qctchoice.qcseq = mfgwctests.wtrsltchoice and
					qctchoice.qcchoiceid = mfgwctests.wtchoice ) as qcrslt  
    FROM mfgwctests,   
         qctest  
   WHERE ( mfgwctests.wtidtest = qctest.qttestid ) and  
         ( mfgwctests.wtcode = :al_of ) AND  
         ( mfgwctests.wtline = :al_wtline )    
order by  mfgwctests.wtseq ASC,
			 mfgwctests.wtidreplicat ASC
```

## Colonnes
| Colonne |
|---------|
| mfgwctests_wtcode |
| mfgwctests_wtline |
| mfgwctests_wttest |
| mfgwctests_wtdesc |
| mfgwctests_wtcmnt |
| mfgwctests_wtthnval_min |
| mfgwctests_wtthnval_max |
| mfgwctests_wtthtval |
| wtum |
| mfgwctests_wtseq |
| mfgwctests_wtchoice |
| mfgwctests_wtrsltrange |
| mfgwctests_wtidreplicat |
| mfgwctests_wtidtest |
| qctest_qttyp |
| qctest_qtum |
| mfgwctests_wtnval |
| mfgwctests_wtbval |
| mfgwctests_wttval |
| mfgwctests_wtrsltchoice |
| mfgwctests_wtwkcode |
| mfgwctests_wtdate |
| mfgwctests_wtrsltchoice_text |
| mfgwctests_wtbloc |
| qcrslt |

