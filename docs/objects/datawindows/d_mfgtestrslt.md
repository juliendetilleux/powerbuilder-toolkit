# d_mfgtestrslt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
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
		mfgwctests.wtdate  
    FROM mfgwctests,   
         qctest  
   WHERE ( mfgwctests.wtidtest = qctest.qttestid ) and  
         ( (mfgwctests.wtcode = :ral_of ) AND  
         ( mfgwctests.wtline = :ral_wtline ) )   
order by  mfgwctests.wtseq ASC,
			 mfgwctests.wtidreplicat ASC

```

## Colonnes
| Colonne |
|---------|
| wtcode |
| wtline |
| wttest |
| wtdesc |
| wtcmnt |
| wtthnval_min |
| wtthnval_max |
| wtthtval |
| wtum |
| wtseq |
| wtchoice |
| wtrsltrange |
| wtidreplicat |
| wtidtest |
| qttyp |
| qtum |
| mfgwctests_wtnval |
| mfgwctests_wtbval |
| mfgwctests_wttval |
| mfgwctests_wtrsltchoice |
| wtwkcode |
| wtdate |

