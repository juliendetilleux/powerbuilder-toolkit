# d_mfg_testsreport_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT distinct mfgcosts.mccode, 
		mfgcosts.mcseq, 
		items.itcode,
		items.itname,
		items.itum,
		mfghead.mhmfgqty,
		mfgcosts.mcitem,  
         workcenters.wcname,   
         mfgwctests.wtseq,   
         mfgwctests.wtidreplicat,   
         mfgwctests.wtdesc,   
         mfgwctests.wtcmnt,   
         mfgwctests.wtrsltrange,   
         mfgwctests.wtthnval_min,   
         mfgwctests.wtthnval_max,   
         isnull(mfgwctests.wtum,'') as unites,   
         mfgwctests.wtchoice,   
         mfgwctests.wtthtval,   
         mfgwctests.wtnval,   
         mfgwctests.wtbval,   
         mfgwctests.wttval,   
         isnull((select qctchoice.qcdesc from qctchoice where ( qctchoice.qcchoiceid = mfgwctests.wtchoice )  and  ( mfgwctests.wtrsltchoice = qctchoice.qcseq )),'') as choice_desc,   
         isnull((select qctchoice.qcrslt  from qctchoice where ( qctchoice.qcchoiceid = mfgwctests.wtchoice )  and  ( mfgwctests.wtrsltchoice = qctchoice.qcseq )),'') as choice_rslt,   
         qctest.qttyp,
		qctest.qtnameext 
    FROM mfgcosts,   
         mfgwctests,   
         workcenters,     
         qctest,
		items,
		mfghead  
   WHERE ( workcenters.wccode = mfgcosts.mcitem ) and  
		( items.itcode = mfghead.mhitem ) and
		( mfghead.mhcode = mfgcosts.mccode ) and
         ( mfgcosts.mccode = mfgwctests.wtcode ) and  
		( mfgcosts.mcseq = mfgwctests.wtline ) and
         ( mfgwctests.wtidtest = qctest.qttestid ) and
         ( mfgcosts.mccode = :ral_of )  and 
		( mfgcosts.mctype = 'L' )


UNION ALL 

  SELECT distinct mfgwcreqs.mwcode, 
         mfgwcreqs.mwline,
		 items.itcode,
		items.itname,
		items.itum,
		mfghead.mhmfgqty,
		mfgwcreqs.mwwccode,  
         workcenters.wcname,   
         mfgwctests.wtseq,   
         mfgwctests.wtidreplicat,   
         mfgwctests.wtdesc,   
         mfgwctests.wtcmnt,   
         mfgwctests.wtrsltrange,   
         mfgwctests.wtthnval_min,   
         mfgwctests.wtthnv
```

## Colonnes
| Colonne |
|---------|
| mfgcosts_mccode |
| mfgcosts_mcseq |
| items_itcode |
| items_itname |
| items_itum |
| mfghead_mhmfgqty |
| mfgcosts_mcitem |
| workcenters_wcname |
| wtseq |
| wtidreplicat |
| mfgwctests_wtdesc |
| mfgwctests_wtcmnt |
| mfgwctests_wtrsltrange |
| mfgwctests_wtthnval_min |
| mfgwctests_wtthnval_max |
| unites |
| mfgwctests_wtchoice |
| mfgwctests_wtthtval |
| wtnval |
| wtbval |
| mfgwctests_wttval |
| choice_desc |
| choice_rslt |
| qctest_qttyp |
| qctest_qtnameext |

