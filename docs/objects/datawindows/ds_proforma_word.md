# ds_proforma_word

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT Profohead.phcode,
		Profohead.phcust,
		Profohead.phdate,
		Profohead.phcurr,
		Profohead.phtvaref,
		Profohead.phpaymnt,
		Profohead.phsalval,
		Profohead.phtvaval,
		Profohead.phtotval,
		Profohead.phcomment,
		Profohead.phexpiry,
		Profohead.phtyptva,
		Profohead.phcurconv,
		Profohead.phdlvt,
		Profohead.phpaymode,
		Profohead.phactiv,
		Profohead.phrist,
		Profohead.phesct,
		Profohead.phristval,
		Profohead.phesctval,
		(select users.usname from users where users.uscode =
			(select parameters.pmcval from parameters where parameters.pmcode = 'USINGINV' ) ) as signatory,
		(select users.ustitle from users where users.uscode =
			(select parameters.pmcval from parameters where parameters.pmcode = 'USINGINV' ) ) as title, 

		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2571*/
			isnull(phmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = Profohead.phcust),'##########')
		ENDIF as mcdo 	

    FROM Profohead
	WHERE Profohead.phcode = :an_proforma

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phcust |
| phdate |
| phcurr |
| phtvaref |
| phpaymnt |
| phsalval |
| phtvaval |
| phtotval |
| phcomment |
| phexpiry |
| phtyptva |
| phcurconv |
| phdlvt |
| phpaymode |
| phactiv |
| phrist |
| phesct |
| phristval |
| phesctval |
| signatory |
| title |
| mcdo |

