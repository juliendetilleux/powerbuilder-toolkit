# d_subfile_resp_assessment_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
	SELECT DISTINCT Fileline.flresp,
			Users.usname,
			Fileline.flcode,
			Fileline.flline,
			Fileline.fldesc,
			Filehead.fhdesc,
			Filehead.fhstatus,
			Max(Adrsactions.aaactiondate) AS Actiondate,
			Fileline.flbudget,
			(SELECT sum(aa1.aatiming)
				FROM Adrsactions aa1
				WHERE aa1.aafileref = Fileline.flcode
					AND aa1.aafileline = Fileline.flline) AS Tottime
		FROM Adrsactions,
			Fileline,
			Filehead,
			Users
		WHERE Adrsactions.aaactiondate BETWEEN :adt_start AND :adt_stop
			AND Adrsactions.aafileref = Fileline.flcode
			AND Adrsactions.aafileline = Fileline.flline
			AND Adrsactions.aastatus = '3'
			AND Fileline.flresp IS NOT NULL
			AND trim(Fileline.flresp) <> ''
			AND Users.uscode = Fileline.flresp
			AND Filehead.fhcode = Fileline.flcode
			AND Fileline.flline <> 1
		GROUP BY Fileline.flline,
				Fileline.fldesc,
				Fileline.flbudget,
				Fileline.flresp,
				Users.usname,
				Fileline.flcode,
				Filehead.fhdesc,
				Filehead.fhstatus

 UNION

	SELECT DISTINCT '',
			'Sans responsable',
			Fileline.flcode,
			Fileline.flline,
			Fileline.fldesc,
			Filehead.fhdesc,
			Filehead.fhstatus,
			Max(Adrsactions.aaactiondate),
			Fileline.flbudget,
			(SELECT sum(aa1.aatiming)
				FROM Adrsactions aa1
				WHERE aa1.aafileref = Fileline.flcode
					AND aa1.aafileline = Fileline.flline)
		FROM Adrsactions,
			Fileline,
			Filehead
		WHERE Adrsactions.aaactiondate BETWEEN :adt_start AND :adt_stop
			AND Adrsactions.aafileref = Fileline.flcode
			AND Adrsactions.aafileline = Fileline.flline
			AND Adrsactions.aastatus = '3'
			AND (Fileline.flresp IS NULL
				OR trim(Fileline.flresp) = '')
			AND Filehead.fhcode = Fileline.flcode
			AND Fileline.flline <> 1
		GROUP BY Fileline.flline,
				Fileline.fldesc,
				Fileline.flbudget,
				Fileline.flresp,
				Fileline.flcode,
				Filehead.fhdesc,
				Filehead.fhstatus

 ORDER BY 1,8,3,4 ASC
```

## Colonnes
| Colonne |
|---------|
| fileline_flresp |
| users_usname |
| fileline_flcode |
| fileline_flline |
| fileline_fldesc |
| filehead_fhdesc |
| filehead_fhstatus |
| cactiondate |
| fileline_flbudget |
| ctottime |

