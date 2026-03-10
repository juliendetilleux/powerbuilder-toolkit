# d_of_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
	SELECT 'OF_Sale_NC' AS of_type,
			mhcode,
			mhreldat,
			mhreqdat,
			(SELECT sum(mllallocqty * itstdpur) FROM mfglallocs,items WHERE itcode = mlitem AND mlcode = mfghead.mhcode) AS reqmatvalit,
			(SELECT sum(mlpallocqty * itstdpur) FROM mfglallocs,items WHERE itcode = mlitem AND mlcode = mfghead.mhcode) AS realmatvalit,
			(SELECT sum(mwreqmac * wcmacprop) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) AS reqmacvalwc,
			(SELECT sum(mwreamac * wcmacprop) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) AS realmacvalwc,
			(IF mhsubc <> 'Y' THEN (SELECT sum(mwreqlab * wccost) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) ELSE 0 ENDIF) AS reqmovalwc,
			(IF mhsubc <> 'Y' THEN (SELECT sum(mwrealab * wccost) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) ELSE 0 ENDIF) AS realmovalwc,
			(IF mhsubc = 'Y' THEN (SELECT sum(mwreqlab * wccost) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) ELSE 0 ENDIF) AS reqstvalwc,
			(IF mhsubc = 'Y' THEN (SELECT sum(mwrealab * wccost) FROM mfgwcreqs,workcenters WHERE mwwccode = wccode AND mwcode = mfghead.mhcode) ELSE 0 ENDIF) AS realstvalwc,
			(IFNULL(reqmatvalit,0,reqmatvalit)) AS reqmatval,
			(IFNULL(realmatvalit,0,realmatvalit)) AS realmatval,
			(IFNULL(reqmacvalwc,0,reqmacvalwc)) AS reqmacval,
			(IFNULL(realmacvalwc,0,realmacvalwc)) AS realmacval,
			(IFNULL(reqmovalwc,0,reqmovalwc)) AS reqmoval,
			(IFNULL(realmovalwc,0,realmovalwc)) AS realmoval,
			(IFNULL(reqstvalwc,0,reqstvalwc)) AS reqstval,
			(IFNULL(realstvalwc,0,realstvalwc)) AS realstval,
			mhfileline as mhfileline,
			(select fileline.fldesc from fileline where ((fileline.flline = mfghead.mhfileline and fileline.flcode = mfghead.mhfileref) )) as filelinedesc
		FROM mfghead,
			salhead
		WHERE (shfileref = :an_fileref OR mhfileref = :an_fileref)
			AND shcode = mhsalhead
			
```

## Colonnes
| Colonne |
|---------|
| cof_type |
| mfghead_mhcode |
| mfghead_mhreldat |
| mfghead_mhreqdat |
| creqmatvalit |
| crealmatvalit |
| creqmacvalwc |
| crealmacvalwc |
| creqmovalwc |
| crealmovalwc |
| creqstvalwc |
| crealstvalwc |
| reqmatval |
| realmatval |
| creqmacval |
| crealmacval |
| creqmoval |
| crealmoval |
| creqstval |
| crealstval |
| mfghead_mhfileline |
| cfilelinedesc |

