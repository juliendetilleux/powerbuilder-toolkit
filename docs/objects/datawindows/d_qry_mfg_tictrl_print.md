# d_qry_mfg_tictrl_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode, 
         mfgcosts.mctype,
         workcenters.wcname,
		sum(mfgcosts.mcqalloc) as mcqalloc,
		sum(mfgcosts.mcqreal) as mcqreal,
		sum(mfgcosts.mcvalloc) as mcvalloc,
		sum(mfgcosts.mcvreal) as mcvreal,
         mfghead.mhmfgdat
	FROM mfghead, mfgcosts, workcenters
	WHERE mfghead.mhmfgdat >= :date_start AND 
         mfghead.mhmfgdat <= :date_end AND 
         mfghead.mhstatus = '8' AND 
         mfghead.mhcode = mfgcosts.mccode AND
         mfgcosts.mcitem = workcenters.wccode AND
         mfgcosts.mctype = 'L'
    GROUP BY mfghead.mhcode, 
		mfgcosts.mctype, 
		workcenters.wcname,
         mfghead.mhmfgdat 

   ORDER BY workcenters.wcname, 
		mfghead.mhmfgdat,  
         mfghead.mhcode
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfgcosts_mctype |
| workcenters_wcname |
| cmcqalloc |
| cmcqreal |
| cmcvalloc |
| cmcvreal |
| mfghead_mhmfgdat |

