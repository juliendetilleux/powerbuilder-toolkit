# Procedure: sp_advsched_assign_mfgwcreqs_advsc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_assign_mfgwcreqs_advsc(IN ai_schednum numeric(3,0), IN as_ADVSCHD1 char(1), IN as_ADVSCHD2 char(1), IN adt_date datetime,
												IN adt_timestop time, IN ai_maid integer, IN al_machineid integer, IN al_duration integer)
BEGIN
	//proc�dure qui vas mettre une mfgwcreqs_advsc a un jour choisi
	//si al_duration = 0 , on prend la dur�e de l assignation
	DECLARE ll_hdid integer;
	DECLARE ll_mchourly integer;
	DECLARE ldt_hdstart time;
	DECLARE ldt_hdstop time;	
	DECLARE ls_clwork char(1);
	DECLARE ls_mccal char(6);
	DECLARE ll_mamwcode integer;
	DECLARE ll_mamwline integer;
	DECLARE ll_matype integer;
	DECLARE ll_maduration integer;
	DECLARE ll_min_toassigne_before integer ;
	
	DECLARE ldt_datetime_use datetime;
	
	set ll_hdid = null ;

	//recherche info sur le mfgwcreqs_advsc a mettre
	SELECT mamwcode, mamwline, maduration, matype
	  INTO ll_mamwcode, ll_mamwline, ll_maduration, ll_matype
	  FROM mfgwcreqs_advsc
	 WHERE maid = ai_maid;
	
	if al_duration is null then
	 set al_duration = 0;
	end if;
	if al_duration > 0 then
		set ll_maduration = al_duration;
	end if;
	
	//recherche info sur machine
	SELECT machine.mchourly, machine.mccal
	  INTO ll_mchourly, ls_mccal
	  FROM machine
	 WHERE mcid = al_machineid;
		
	//v�rifi� si on a pas dans hourly day un jour sp�cifique pour cette machine
	SELECT hourly_day.hdid,
			hourly_day.hdstart,
			hourly_day.hdstop
	  INTO ll_hdid,
			ldt_hdstart,
			ldt_hdstop
	  FROM hourly_day
	 WHERE hourly_day.hdtyp = 'S' AND
		date(hourly_day.hddate) = date(adt_date) AND
		hourly_day.hdmachine = al_machineid;

	if ll_hdid is null then
		
		SELECT calline.clwork
		  INTO ls_clwork
		  FROM calline
		 WHERE calline.clcode = ls_mccal AND
			date(calline.cldate) = date(adt_date) ;

		if ls_clwork is null then
			set ls_clwork = 'N';
		end if;

		if ls_clwork <> 'N' then
			SELECT hourly_day.hdid,
					hourly_day.hdstart,
					hourly_day.hdstop
			  INTO ll_hdid,
					ldt_hdstart,
					ldt_hdstop
			  FROM hourly_day
			 WHERE hourly_day.hdtyp = 'H' AND
				hourly_day.hddaynum = DOW(adt_date) AND
				hourly_day.hdhourly = ll_mchourly;
		end if;
	end if;

	//si on est le premier ou dernier jour de l intervalle, v�rifi� que les heures du calendrier son inf�rieur au date pr�vue
	if ll_hdid is not null then
		if ldt_hdstart < adt_date then
			set ldt_hdstart = adt_date;
		end if;

		if ldt_hdstop > adt_timestop then
			set ldt_hdstop = adt_timestop;
		end if;
	end if;

	//pour cette machine pour ce jour, assigner le temps disponible
	if ll_hdid is not null and ll_maduration > 0 then
		set ldt_datetime_use = datetime( cast(date(adt_date) as varchar(20)) + ' ' + cast(ldt_hdstart as varchar(20)) ) ;
		set ll_min_toassigne_before = ll_maduration;
		IF as_ADVSCHD2 = 'J' THEN
			call sp_advsched_assign_machineday_J (ai_schednum, ldt_datetime_use, ldt_hdstop, ll_mamwcode, ll_mamwline, al_machineid, ll_hdid, 0, ll_maduration);
		ELSE
			call sp_advsched_assign_machineday_O (ai_schednum, ldt_datetime_use, 
```

*Source tronquee (3457 caracteres au total)*
