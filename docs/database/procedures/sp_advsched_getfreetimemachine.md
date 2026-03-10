# Procedure: sp_advsched_getfreetimemachine

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_getfreetimemachine (IN ai_schednum numeric(3,0), IN adt_datestart datetime, IN adt_datestop datetime, IN ai_machine integer, OUT ai_duration integer)
	//RESULT (duration integer)
BEGIN
	//proc�dure recherche du temps disponible entre 2 dates pour une machine
	DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
	DECLARE lb_goon numeric(1,0);
	DECLARE ldt_date datetime;
	DECLARE ldt_hdstart time;
	DECLARE ldt_hdstop time;
	DECLARE ls_clwork char(1);	
	DECLARE li_mchourly integer;
	DECLARE ll_hdid integer;
	DECLARE ll_min_day_tot integer;
	DECLARE ll_min_day_int integer;
	DECLARE ll_min_day_assign integer;

	DECLARE Cur_date cursor for
		SELECT date(calline.cldate),
				calline.clwork,
				machine.mchourly
		  FROM machine, calline
		 WHERE machine.mcid = ai_machine AND
				machine.mccal = calline.clcode AND
				date(calline.cldate) between date(adt_datestart) and date(adt_datestop) ;
	
	//initialisation des variables
	set lb_goon = 1;
	set ai_duration = 0;

	open Cur_date;			
	
	date_loop:		
	LOOP				
		fetch next Cur_date into ldt_date, ls_clwork, li_mchourly;
		
		IF SQLSTATE = err_notfound or lb_goon = 0 THEN
			LEAVE date_loop;
		END IF;

		set ll_hdid = null ;

		//v�rifi� si on a pas dans hourly day un jour sp�cifique pour cette machine
		SELECT hourly_day.hdid,
				hourly_day.hdstart,
				hourly_day.hdstop,
				DATEDIFF( MINUTE, hdstart, hdstop )
		  INTO ll_hdid,
				ldt_hdstart,
				ldt_hdstop,
				ll_min_day_tot
		  FROM hourly_day
		 WHERE hourly_day.hdtyp = 'S' AND
			date(hourly_day.hddate) = date(ldt_date) AND
			hourly_day.hdmachine = ai_machine;

		if ll_hdid is null then
			if ls_clwork <> 'N' then
				SELECT hourly_day.hdid,
						hourly_day.hdstart,
						hourly_day.hdstop,
						DATEDIFF( MINUTE, hdstart, hdstop )
				  INTO ll_hdid,
						ldt_hdstart,
						ldt_hdstop,
						ll_min_day_tot
				  FROM hourly_day
				 WHERE hourly_day.hdtyp = 'H' AND
					hourly_day.hddaynum = DOW(ldt_date) AND
					hourly_day.hdhourly = li_mchourly;
			else
				set ll_min_day_tot = 0;
			end if;
		end if;

		if ll_min_day_tot is null then
			set ll_min_day_tot = 0 ;
		end if;

		//on enl�ve les heures d interruptions de l horaire machine
		if ll_hdid is not null then
			if ll_min_day_tot > 0 then
				SELECT sum(DATEDIFF( MINUTE, IF histart < ldt_hdstart THEN ldt_hdstart ELSE histart ENDIF , IF histop > ldt_hdstop THEN ldt_hdstop ELSE histop ENDIF ) )
				  INTO ll_min_day_int
				  FROM hourly_day_int
				 WHERE hihourly_day = ll_hdid AND
						((histart >= ldt_hdstart and histart <= ldt_hdstop) OR (histop <= ldt_hdstop AND histop >= ldt_hdstart)) ;

				if ll_min_day_int is not null then
					if ll_min_day_int > 0 then
						set ll_min_day_tot = ll_min_day_tot - ll_min_day_int;
					end if;
				end if;
			end if;
		end if;

		//on enl�ve les heures pour lequelles cette machine est d�j� utilis�
		if ll_hdid is not null then
			if ll_min_day_tot > 0 then
				SELECT sum(maduration)
				  INTO ll_min_day_assign
				  F
```

*Source tronquee (3622 caracteres au total)*
