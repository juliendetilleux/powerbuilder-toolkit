# Procedure: sp_advsched_del

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE DBA.sp_advsched_del (IN ai_schednum numeric(3,0), IN ai_type numeric(1))
BEGIN
	//proc�dure de suppression des mfgwcreqs_advsc avant de faire l ordonnancement
	//ai_type = 0 supprime toute les assignation excepter celle d�j� commenc� ou les forc�e, 1 = supprime toute les assignations
	if ai_type = 1 then
		
		//os3053 - sauvegarde des poste de charge dans advsched_lastdel
		INSERT INTO advsched_lastdel(
			al_of_fk_mfgwcreqs,
			al_ofwc_fk_mfgwcreqs)
		SELECT distinct mfgwcreqs_advsc.mamwcode,
				mfgwcreqs_advsc.mamwline
			FROM mfgwcreqs_advsc
			WHERE maschednum = ai_schednum ;
										
		DELETE FROM mfgwcreqs_advsc
			WHERE maschednum = ai_schednum ;
	else
		//os3053 - sauvegarde des poste de charge dans advsched_lastdel
		INSERT INTO advsched_lastdel(
			al_of_fk_mfgwcreqs,
			al_ofwc_fk_mfgwcreqs)
		SELECT distinct mfgwcreqs_advsc.mamwcode,
				mfgwcreqs_advsc.mamwline
			FROM mfgwcreqs_advsc
			WHERE maschednum = ai_schednum AND
				((mastart > now() AND matype <> 1) OR
                 (matype = 3 ) OR
					(not EXISTS( select * from mfghead join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
									where mfghead.mhstatus < '8' and
										isnull(mfgwcreqs.mwfinish, '') <> 'Y' and
										mfgwcreqs.mwcode = mfgwcreqs_advsc.mamwcode and
										mfgwcreqs.mwline = mfgwcreqs_advsc.mamwline) )) ;
		
		DELETE FROM mfgwcreqs_advsc
			WHERE maschednum = ai_schednum AND
				((mastart > now() AND matype <> 1) OR
                 (matype = 3 ) OR
					(not EXISTS( select * from mfghead join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
									where mfghead.mhstatus < '8' and
										isnull(mfgwcreqs.mwfinish, '') <> 'Y' and
										mfgwcreqs.mwcode = mfgwcreqs_advsc.mamwcode and
										mfgwcreqs.mwline = mfgwcreqs_advsc.mamwline) )) ;
	end if;
END
```
