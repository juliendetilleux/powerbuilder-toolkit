# Procedure: sp_advsched_shift_one

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_shift_one(IN ai_schednum numeric(3,0), IN ai_mfgwcreqs_afvc_id integer)
BEGIN	
	//met l assignation d�finie plut tot dans sa journ�e, si possible
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

    DECLARE li_mamachine integer;
    DECLARE ldt_date datetime;
    DECLARE ln_matype numeric(1,0);
    DECLARE ll_hdid integer;
    DECLARE ls_mccal varchar(6);
    DECLARE ls_clwork char(1);
    DECLARE ll_mchourly integer;
    DECLARE li_min_toassign integer;
    DECLARE lt_timestop time;
    DECLARE lt_timestart_prev time;
    DECLARE li_mwcode integer;
    DECLARE li_mwline integer;
    DECLARE li_mwadvscsort integer;

    //recherche du temps minimum
	SELECT pmival
	  INTO li_time_minimum
	  FROM parameters
	 WHERE pmcode = 'ADVSCHTM' ;

	if li_time_minimum is null then
		set li_time_minimum = 0;
	end if;

    //recherche information sur ce job
    SELECT mastart,
        mamachine,
        matype,
        maduration,
        cast( minutes( mastart, maduration ) as time),
        machine.mccal,
        machine.mchourly,
        mwcode,
        mwline,
        mwadvscsort
      INTO ldt_date,
        li_mamachine,
        ln_matype,
        li_min_toassign,
        lt_timestop,
        ls_mccal,
        ll_mchourly,
        li_mwcode,
        li_mwline,
        li_mwadvscsort
     FROM mfgwcreqs_advsc
        JOIN mfgwcreqs ON mfgwcreqs.mwcode = mfgwcreqs_advsc.mamwcode AND mfgwcreqs.mwline = mfgwcreqs_advsc.mamwline
        LEFT OUTER JOIN machine ON machine.mcid = mamachine
    WHERE maid = ai_mfgwcreqs_afvc_id ;

    if li_mamachine is null or ln_matype <> 0 then  //si pas assign� a une machine ou que ce n est pas une assignation normal, on sort
        return;
    end if;

    set ll_hdid = null;

    //si on a pas l information de la date de d�but, on
    select hourly_day.hdid,
        hourly_day.hdstart
      into ll_hdid,
        lt_timestart
      from hourly_day
     where hourly_day.hdtyp = 'S'
        and date(hourly_day.hddate) = date(ldt_date)
        and hourly_day.hdmachine = li_mamachine;
    if ll_hdid is null then
      select calline.clwork
        into ls_clwork
        from calline
       where calline.clcode = ls_mccal
          and date(calline.cldate) = date(ldt_date);
      if ls_clwork is null then
        set ls_clwork = 'N';
      end if;
      if ls_clwork <> 'N' then
        select hourly_day.hdid,
            hourly_day.hdstart
          into ll_hdid,
            lt_timestart
          from hourly_day
         where hourly_day.hdtyp = 'H'
            and hourly_day.hddaynum = DOW(ldt_date)
```

*Source tronquee (8641 caracteres au total)*
