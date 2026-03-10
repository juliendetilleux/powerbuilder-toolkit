# Procedure: sp_advsched_assign_machineday_O

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE DBA."sp_advsched_assign_machineday_O" (IN ai_schednum numeric(3,0), IN adt_datestart datetime, IN adt_timestop time, IN ai_mwcode integer, IN ai_mwline integer,
																IN ai_machine integer, IN ai_hourly_day integer, IN ai_type numeric(1,0), INOUT ai_min_toassign integer)
BEGIN	
	//pour cette machine pour ce jour, assigner le temps disponible (sens : de la fin de journ�e au d�but de journ�e)
	DECLARE lb_goon numeric(1,0);
	DECLARE li_time_minimum integer;
	DECLARE lt_timestart time;
	DECLARE lt_timestop time;
	DECLARE lt_timebefore time;
	DECLARE lt_newtimestop time;
	DECLARE lt_timestart_int time;
	DECLARE lt_timestop_int time;
	DECLARE lt_timestart_mfg time;
	DECLARE lt_timestop_mfg time;
	DECLARE lt_time_max time;
	DECLARE lt_timestart_othermachine time;
	DECLARE lt_timestop_othermachine time;
	DECLARE li_min_available integer;
	DECLARE li_min_assigned integer;

	SELECT pmival
	  INTO li_time_minimum
	  FROM parameters
	 WHERE pmcode = 'ADVSCHTM' ;

	if li_time_minimum is null then
		set li_time_minimum = 0;
	end if;

	set lt_timestart = adt_datestart;
	set lt_timestop = adt_timestop;
/*
	//chercher la date de fin si cet ligne d of est utilis� sur une autre machine
	SELECT first (mastart)
	  INTO lt_timestop
	  FROM mfgwcreqs_advsc
	 WHERE mamwcode = ai_mwcode AND
		mamwline = ai_mwline AND
		date(mastart) = date(adt_datestart) AND
		maschednum = ai_schednum AND
		maduration > 0 AND
		mfgwcreqs_advsc.matype <> 3
	ORDER BY mastart asc;

	if lt_timestop is null then	
		set lt_timestop = adt_timestop;
	elseif lt_timestop > adt_timestop then
		set lt_timestop = adt_timestop;
	end if;
*/
	//chercher si il y a un interval apr�s la date de fin
	SELECT first histart
	  INTO lt_timebefore
	  FROM hourly_day_int
	 WHERE hihourly_day = ai_hourly_day AND
			histop > lt_timestop AND
			histart <> histop
	ORDER BY histart asc ;

	if lt_timebefore is not null then	
		if lt_timebefore < lt_timestop then
			set lt_timestop = lt_timebefore;
		end if;
	end if;
/*
	set lt_timebefore = null;

	//chercher si cette machine est d�j� utilis� apr�s la date de fin
	SELECT first mastart
	  INTO lt_timebefore
	  FROM mfgwcreqs_advsc
	 WHERE (mamachine = ai_machine) AND
		date(mastart) = date(adt_datestart) AND
		cast( minutes( mastart, maduration ) as time) > lt_timestop AND
		maduration > 0 AND
		maschednum = ai_schednum AND
		mfgwcreqs_advsc.matype <> 3
	ORDER BY mastart asc ;

	if lt_timebefore is not null then	
		if lt_timebefore > lt_timestop then
			set lt_timestop = lt_timebefore;
		end if;
	end if;*/

	//v�rifi� si le temps disponible est superieur au temps minimum
	set li_min_available = minutes(lt_timestart, lt_timestop) ;
	if li_min_available >= li_time_minimum OR ai_min_toassign <= li_min_available then	
		set lb_goon = 1;	
	else
		set lb_goon = 0;	//si non on n assigne rien
	end if;

	//boucle tanqu il y a du temps dans ce jour pour cette machine
	time_loop:		
	LOOP				
		IF lb_goon = 0 or ai_min_toassign <= 0 THEN
			LEAVE time_loop
```

*Source tronquee (7123 caracteres au total)*
