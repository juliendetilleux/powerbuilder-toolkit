# d_wc_finished_byday_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT mfgwcreqs.mwcode,
		mfgwcreqs.mwwccode,
		workcenters.wcname,
		mfgwcreqs.mwdatefinish
  FROM mfgwcreqs
		JOIN workcenters ON mfgwcreqs.mwwccode = workcenters.wccode
 WHERE isnull( mwfinish, 'N' ) = 'Y' AND
		date( mfgwcreqs.mwdatefinish ) = date(:adt_date)
ORDER by mfgwcreqs.mwdatefinish 
```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwcode |
| mfgwcreqs_mwwccode |
| workcenters_wcname |
| mfgwcreqs_mwdatefinish |

