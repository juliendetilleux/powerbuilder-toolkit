# Procedure: sp_advsched_startdate_wc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_startdate_wc (IN ai_schednum numeric(3,0), IN as_ADVSCHD2 char(1), IN ai_mwcode integer, IN ai_sort integer, OUT adt_date datetime)
//result(lt_date datetime)
BEGIN
	//chercher la date commencement (selon param�tre ADVSCHD2 = J date du jour ou date de fin du poste de charge pr�c�dent de cet OF, si ADVSCHD2 = O date de l�OF ou date de fin du poste de charge pr�c�dent de cet OF)
	
	if as_ADVSCHD2 = 'J' then
		//recherche de la date de fin du poste de charge pr�c�dent
		SELECT max(DATEADD( MINUTE, mfgwcreqs_advsc.maduration, mfgwcreqs_advsc.mastart ))
		  INTO adt_date
		  FROM mfgwcreqs_advsc, mfgwcreqs
		 WHERE mfgwcreqs.mwcode = ai_mwcode AND
			mfgwcreqs.mwadvscsort < ai_sort AND
			mfgwcreqs.mwadvscsort is not null AND
			mfgwcreqs_advsc.mamwcode = mfgwcreqs.mwcode AND
			mfgwcreqs_advsc.mamwline = mfgwcreqs.mwline AND
			mfgwcreqs_advsc.maschednum = ai_schednum AND
			mfgwcreqs_advsc.matype <> 3 ;

	else

		//recherche de la date de fin du poste de charge suivant
		SELECT max(DATEADD( MINUTE, mfgwcreqs_advsc.maduration, mfgwcreqs_advsc.mastart ))
		  INTO adt_date
		  FROM mfgwcreqs_advsc, mfgwcreqs
		 WHERE mfgwcreqs.mwcode = ai_mwcode AND
			mfgwcreqs.mwadvscsort > ai_sort AND
			mfgwcreqs.mwadvscsort is not null AND
			mfgwcreqs_advsc.mamwcode = mfgwcreqs.mwcode AND
			mfgwcreqs_advsc.mamwline = mfgwcreqs.mwline AND
			mfgwcreqs_advsc.maschednum = ai_schednum AND
			mfgwcreqs_advsc.matype <> 3 ;

	end if;

	if adt_date is null then
		set adt_date = now();
	elseif adt_date < now() then
		set adt_date = now();
	end if;

	//select adt_date from dummy;
END
```
