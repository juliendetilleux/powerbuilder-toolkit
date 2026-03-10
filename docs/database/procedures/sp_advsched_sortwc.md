# Procedure: sp_advsched_sortwc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_ADVSCHD2 | char(1 | IN |

## Source
```sql
create PROCEDURE sp_advsched_sortwc (IN as_ADVSCHD2 char(1), IN ai_schednum numeric(3,0))
BEGIN
	//proc�dure permettant de g�r� l ordre dans lequel l ordonnacement doit assign� les postes de charges
	//as_ADVSCHD2 date la plus proche pour ordonnancement J = date du jour, sinon O = date requise
	DECLARE li_sort integer;
	DECLARE li_mwcode integer;
	DECLARE li_mwline integer;
	DECLARE li_min_assigned integer;
	DECLARE li_min_toassigne integer;
	DECLARE ld_mwmac numeric(6,2);
	DECLARE ld_mwlab numeric(6,2);
	DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
	DECLARE lb_goon numeric(1,0);
	DECLARE Cur_sortwcJ cursor for
		select mfgwcreqs.mwcode, mfgwcreqs.mwline, mfgwcreqs.mwreqmac - mfgwcreqs.mwreamac, mfgwcreqs.mwreqlab - mfgwcreqs.mwrealab
		from mfghead join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
		where mfghead.mhstatus < '8' and
			isnull(mwfinish, '') <> 'Y'
		order by mfgwcreqs.mwcode, mfgwcreqs.mwline;
	DECLARE Cur_sortwcO cursor for
		select mfgwcreqs.mwcode, mfgwcreqs.mwline, mfgwcreqs.mwreqmac - mfgwcreqs.mwreamac, mfgwcreqs.mwreqlab - mfgwcreqs.mwrealab
		from mfghead join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
		where mfghead.mhstatus < '8' and
			isnull(mwfinish, '') <> 'Y'
		order by mfgwcreqs.mwcode, mfgwcreqs.mwline DESC;

	UPDATE mfgwcreqs
		SET mwadvscsort = null;

	set li_sort = 0 ;


	IF as_ADVSCHD2 = 'J' THEN		

		open Cur_sortwcJ;			
		set lb_goon = 1;
			
		lit_loop:		
		LOOP				
			fetch next Cur_sortwcJ into li_mwcode, li_mwline, ld_mwmac, ld_mwlab;

			IF SQLSTATE = err_notfound or lb_goon = 0 THEN
				LEAVE lit_loop;
			END IF;
			set li_min_assigned = 0;

			if ld_mwmac < 0 then
				set ld_mwmac = 0;
			end if;
			if ld_mwlab < 0 then
				set ld_mwlab = 0;
			end if;

			if ld_mwmac + ld_mwlab > 0 then	//si il reste du temps a assign�
					
				//rechercher combien de temps a d�j� �t� assign� pour ce poste de charge/OF
				call sp_advsched_wc_assigned (li_mwcode, li_mwline, ai_schednum, li_min_assigned);

				set li_min_toassigne = round( (ld_mwmac + ld_mwlab) * 60, 0) ;	//chang� le d�cimal en minutes
				//si le temps d�j� assign� est inf�rieur au temps devant �tre assign�, on met l ordre dans ce poste de charge
				if li_min_assigned < li_min_toassigne then	
					set li_sort = li_sort + 1;
					
					UPDATE mfgwcreqs
						SET mwadvscsort = li_sort
					 WHERE mfgwcreqs.mwcode = li_mwcode AND
						mfgwcreqs.mwline = li_mwline;
				end if;
			end if;

		END LOOP lit_loop;
			
		close Cur_sortwcJ;

	ELSE
	
		open Cur_sortwcO;			
		set lb_goon = 1;
			
		lit_loop:		
		LOOP				
			fetch next Cur_sortwcO into li_mwcode, li_mwline, ld_mwmac, ld_mwlab;

			IF SQLSTATE = err_notfound or lb_goon = 0 THEN
				LEAVE lit_loop;
			END IF;
			set li_min_assigned = 0;

			if ld_mwmac < 0 then
				set ld_mwmac = 0;
			end if;
			if ld_mwlab < 0 then
				set ld_mwlab = 0;
			end if;

			if ld_mwmac + ld_mwlab > 0 then	//si il reste du temps a assign�
					
				//rechercher combien de temps a d�j� �t� assign� pour c
```

*Source tronquee (3626 caracteres au total)*
