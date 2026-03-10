# d_mfgmes_step

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
SELECT mfgwcreqs.mwline,
		mfgwcreqs.mwwccode, 
		mfgwcreqs.mwfinish, 
		mfgwcreqs.mwoper,
		mfgwcreqs.mwdatefinish,
		mfgwcreqs.mwqty,
		mfgwcreqs.mwum,
		mfgwcreqs.mwcoeff
   FROM mfghead, 
		mfgwcreqs 
 WHERE mfghead.mhcode = mfgwcreqs.mwcode AND 
		mfgwcreqs.mwcode = :al_of  
ORDER BY mfgwcreqs.mwline 
```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwline |
| mfgwcreqs_mwwccode |
| mfgwcreqs_mwfinish |
| mfgwcreqs_mwoper |
| mfgwcreqs_mwdatefinish |
| mfgwcreqs_mwqty |
| mfgwcreqs_mwum |
| mfgwcreqs_mwcoeff |

