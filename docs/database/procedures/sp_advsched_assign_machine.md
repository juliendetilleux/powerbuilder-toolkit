# Procedure: sp_advsched_assign_machine

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |

## Source
```sql
create PROCEDURE DBA.sp_advsched_assign_machine( in ai_schednum numeric(3),in as_ADVSCHD1 char(1),in as_ADVSCHD2 char(1),in adt_datestart datetime,in adt_datestop datetime,
  in ai_mwcode integer,in ai_mwline integer,in ai_min_toassigne integer )
begin
  declare err_notfound exception for sqlstate value '02000';
  declare lb_goon numeric(1);
  declare ll_machineid integer;
  declare ll_mcpriority integer;
  declare ll_mchourly integer;
  declare ll_nbday integer;
  declare ll_i integer;
  declare ll_hdid integer;
  declare ldt_hdstart time;
  declare ldt_hdstop time;
  declare ldt_datestart time;
  declare ldt_datestop time;
  declare ldt_datetime_use datetime;
  declare ls_clwork char(1);
  declare ll_nb_assign_machine integer;
  declare ll_nb_assign_day integer;
  declare ll_min_toassigne_before integer;
  declare ls_mccal varchar(6);
  declare ls_comment varchar(512);
  declare ll_priority integer;  //os3037
  declare ls_machine_avail_list varchar(1024);
  declare ls_mcode varchar(30);

  set ldt_datestart = adt_datestart;
  set ldt_datestop = adt_datestop;
  set ll_nb_assign_machine = 0;
  set ll_nb_assign_day = 0;
  set ll_machineid = null;
  set ls_machine_avail_list = '';
  select(DATEDIFF(day,adt_datestart,adt_datestop)) into ll_nbday from dummy;
  if as_ADVSCHD2 = 'J' then
    set ll_i = 0;
  else
    set ll_i = ll_nbday;
  end if;

  //boucle sur les jours entre maintenant et la date requise de l'of
  day_loop: loop
    if ll_i > ll_nbday or ll_i < 0 or ai_min_toassigne <= 0 then
      leave day_loop;
    else
      set ll_nb_assign_day = ll_nb_assign_day+1;
    end if;
    set ll_priority = -1;    //os3037
    set lb_goon = 1;
    select first mamachine,machine.mccal
      into ll_machineid,ls_mccal
      from mfgwcreqs_advsc join machine
      where date(mastart) <= date(adt_datestart)+ll_i
      and mamwcode = ai_mwcode
      and mamwline = ai_mwline
      and mamachine is not null
      and maschednum = ai_schednum
      and mfgwcreqs_advsc.matype <> 3
      order by mastart desc;

    //boucle sur les machine disponible pour ce poste de charge
    machine_loop: loop
      if ll_machineid is null then
        SELECT first machine.mcid,machine.mcpriority,machine.mchourly,machine.mccal, machine.mcpriority, machine.mcode
          INTO ll_machineid,ll_mcpriority,ll_mchourly,ls_mccal,ll_priority, ls_mcode
          FROM machine join link_machine_pdc
            join mfgwcreqs on mfgwcreqs.mwwccode = link_machine_pdc.mpworkcenters
            join mfghead on mfgwcreqs.mwcode = mfghead.mhcode
            join workcenters on workcenters.wccode = mfgwcreqs.mwwccode
         WHERE mfgwcreqs.mwcode = ai_mwcode
          and mfgwcreqs.mwline = ai_mwline
          and machine.mcactiv = 'Y'
          and machine.mcpriority > ll_priority
          and workcenters.wcadvsched = 'Y'
          and not exists(select * from routline_nomachine,routline
                            where routline_nomachine.rmmcid = machine.mcid
                           
```

*Source tronquee (7536 caracteres au total)*
