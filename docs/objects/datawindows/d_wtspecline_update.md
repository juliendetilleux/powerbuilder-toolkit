# d_wtspecline_update

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
         mfgwctests.wtum,   
         mfgwctests.wtseq,   
         mfgwctests.wtchoice,   
         mfgwctests.wtrsltrange,   
         mfgwctests.wtidreplicat,   
         mfgwctests.wtidtest,   
         qctest.qttyp,
		qctest.qtum ,   
         mfgwctests.wtbloc 
    FROM mfgwctests,   
         qctest  
   WHERE ( mfgwctests.wtidtest = qctest.qttestid )    and
			( (mfgwctests.wtcode =:ral_of ) and
			( mfgwctests.wtline =:ral_wtline ) and
			( mfgwctests.wttest =:ral_wttest ) and
			( mfgwctests.wtidreplicat =:ral_wtidreplicat ) )

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
| wtbloc |

