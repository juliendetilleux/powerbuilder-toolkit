# d_mfg_testsreportqty_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT distinct mfgcosts.mccode, 
		items.itcode,
		items.itname,
		items.itum,
		mfghead.mhmfgqtyqty,
		mfgcosts.mccode,  
         workcenters.wcname,   
         mfgcosts.mcseq,
		mfgcosts.mcqty  as stepqty,
		mfgcosts.mcum as stepum ,
		mfgcosts.mcqty * mfgcosts.mccoeff as stepfinalqty 
    FROM mfgcosts,   
         workcenters,     
		items,
		mfghead  
   WHERE ( items.itcode = mfghead.mhitem ) and
		( mfghead.mhcode = mfgcosts.mccode ) and
		( mfgcosts.mcitem = workcenters.wccode ) and 
         mfgcosts.mccode = :ral_of   and 
		mfgcosts.mctype = 'L' and
		isnull( mfgcosts.mccoeff, 0 )  <> 0 
ORDER BY   mfgcosts.mcseq ASC

```

## Colonnes
| Colonne |
|---------|
| mfgcosts_mccode |
| items_itcode |
| items_itname |
| items_itum |
| mfghead_mhmfgqtyqty |
| mfgcosts_mccode |
| workcenters_wcname |
| mfgcosts_mcseq |
| stepqty |
| mfgcosts_stepum |
| stepfinalqty |

