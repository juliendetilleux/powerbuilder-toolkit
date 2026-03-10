# zd_fil_expense_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
SELECT 
	 (SELECT sum( if (SELECT sum(mlpallocqty * itstdpur) FROM mfglallocs,items WHERE itcode = mlitem AND mlcode = mfghead.mhcode) is null then 0 else (SELECT sum(mlpallocqty * itstdpur) FROM mfglallocs,items WHERE itcode = mlitem AND mlcode = mfghead.mhcode) endif
			+ if (SELECT sum(mwreamac * wcmacprop) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) is null then 0 else (SELECT sum(mwreamac * wcmacprop) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) endif
			+ if (SELECT sum(mwrealab * wccost) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) is null then 0 else (SELECT sum(mwrealab * wccost) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) endif ) AS realval 	
		FROM mfghead,
			salhead
		WHERE (shfileref = :ran_fhcode OR mhfileref = :ran_fhcode)
			AND shcode = mhsalhead
			AND mhstatus < '8'),

       (SELECT sum(if (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'M' AND mccode = mfghead.mhcode) is null then 0 else (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'M' AND mccode = mfghead.mhcode) endif
			+if (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'E' AND mccode = mfghead.mhcode)  is null then 0 else (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'E' AND mccode = mfghead.mhcode) endif
			+if (IF mhsubc <> 'Y' THEN (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'L' AND mccode = mfghead.mhcode) ELSE 0 ENDIF)  is null then 0 else (IF mhsubc <> 'Y' THEN (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'L' AND mccode = mfghead.mhcode) ELSE 0 ENDIF) endif
			+if (IF mhsubc =   'Y' THEN (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'S' AND mccode = mfghead.mhcode) ELSE 0 ENDIF) is null then 0 else (IF mhsubc =   'Y' THEN (SELECT sum(mcvreal) FROM mfgcosts WHERE mctype = 'S' AND mccode = mfghead.mhcode) ELSE 0 ENDIF) endif) AS realval3 	 
		FROM mfghead,
			salhead
		WHERE (shfileref = :ran_fhcode OR 
```

## Colonnes
| Colonne |
|---------|
| realval |
| realval3 |
| realval2 |
| realval4 |
| reaval |
| totcost |
| invval |
| invval2 |

