# Procedure: sp_advsched_assign_machineday_J

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_assign_machineday_J (IN ai_schednum numeric(3,0), IN adt_datestart datetime, IN adt_timestop time, IN ai_mwcode integer, IN ai_mwline integer,
																IN ai_machine integer, IN ai_hourly_day integer, IN ai_type numeric(1,0), INOUT ai_min_toassign integer)
BEGIN	
	//pour cette machine pour ce jour, assigner le temps disponible(sens : du d�but de journ�e � la fin de journ�e)
	DECLARE lb_goon numeric(1,0);
	DECLARE li_time_minimum integer;
	DECLARE lt_timestart time;
	DECLARE lt_timebefore time;
	DECLARE lt_newtimestart time;
	DECLARE lt_timestart_int time;
	DECLARE lt_timestop_int time;
	DECLARE lt_timestart_mfg time;
	DECLARE lt_timestop_mfg time;
	DECLARE lt_timestart_othermachine time;
	DECLARE lt_timestop_othermachine time;
	DECLARE lt_time_max time;
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
/*
	//chercher la date de d�but si cet ligne d of est utilis� sur une autre machine
	SELECT first cast( minutes( mastart, maduration ) as time)
	  INTO lt_timestart
	  FROM mfgwcreqs_advsc
	 WHERE mamwcode = ai_mwcode AND
		mamwline = ai_mwline AND
		date(mastart) = date(adt_datestart) AND
		maschednum = ai_schednum AND
		maduration > 0 AND
		mfgwcreqs_advsc.matype <> 3
	ORDER BY mastart desc;

	if lt_timestart is null then	
		set lt_timestart = adt_datestart;
	elseif lt_timestart < adt_datestart then
		set lt_timestart = adt_datestart;
	end if;

	set lt_timebefore = null;
*/
	//chercher si il y a un interval avant la date de d�but
	SELECT first histop
	  INTO lt_timebefore
	  FROM hourly_day_int
	 WHERE hihourly_day = ai_hourly_day AND
			histart < lt_timestart AND
			histart <> histop
	ORDER BY histart desc ;

	if lt_timebefore is not null then	
		if lt_timebefore > lt_timestart then
			set lt_timestart = lt_timebefore;
		end if;
	end if;
/*
	set lt_timebefore = null;

	//chercher si cette machine est d�j� utilis� avant la date de d�but
	SELECT first cast( minutes( mastart, maduration ) as time)
	  INTO lt_timebefore
	  FROM mfgwcreqs_advsc
	 WHERE (mamachine = ai_machine) AND
		date(mastart) = date(adt_datestart) AND
		cast(mastart as time) < lt_timestart AND
		maduration > 0 AND
		maschednum = ai_schednum  AND
		mfgwcreqs_advsc.matype <> 3
	ORDER BY mastart desc ;

	if lt_timebefore is not null then	
		if lt_timebefore > lt_timestart then
			set lt_timestart = lt_timebefore;
		end if;
	end if;
*/
	//v�rifi� si le temps disponible est superieur au temps minimum
	set li_min_available = minutes(lt_timestart, adt_timestop) ;
	if li_min_available >= li_time_minimum OR ai_min_toassign <= li_min_available then	
		set lb_goon = 1;	
	else
		set lb_goon = 0;	//si non on n assigne rien
	end if;

	//boucle tanqu il y a du temps dans ce jour pour cette machine
	time_loop:		
	LOOP				
		IF lb_goon = 0 or ai_min_to
```

*Source tronquee (6982 caracteres au total)*
