# Procedure: sp_advsched_assign_wc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |

## Source
```sql
create PROCEDURE DBA.sp_advsched_assign_wc( in ai_schednum numeric(3),in as_ADVSCHD1 char(1),in as_ADVSCHD2 char(1),
  in ai_typ numeric(1,0) /*os3053, 0 = toute les assignation, 1 = seulement rafraichissement des assignations d�j� faite */,
  in ai_mwcode integer,in ai_mwline integer )  /*sert uniquement pour le debugging*/
begin
  //proc�dure initiale d assignation de postes de charges et de cr�ation des d�bordements
  // declare li_sort integer;
  declare li_mwcode integer;
  declare li_mwline integer;
  declare li_min_assigned integer;
  declare li_min_toassigne integer;
  declare ld_mwmac numeric(6,2);
  declare ld_mwlab numeric(6,2);
  declare err_notfound exception for sqlstate value '02000';
  declare lb_goon numeric(1);
  declare ldt_date_start datetime;
  declare ldt_date_stend datetime;
  //os3053
  declare Cur_refresh dynamic scroll cursor for
    select mfgwcreqs.mwcode,mfgwcreqs.mwline
      from mfghead
        join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
        join workcenters on workcenters.wccode = mfgwcreqs.mwwccode
      where mfghead.mhstatus < '8'
      and isnull(mwfinish,'') <> 'Y'
      and workcenters.wcadvsched = 'Y'
	  and EXISTS( select * from advsched_lastdel where al_of_fk_mfgwcreqs = mfgwcreqs.mwcode and al_ofwc_fk_mfgwcreqs = mfgwcreqs.mwline)
      order by mwadvscsort asc;
	
  declare Cur_wc dynamic scroll cursor for
    select mfgwcreqs.mwcode,mfgwcreqs.mwline
      from mfghead
        join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
        join workcenters on workcenters.wccode = mfgwcreqs.mwwccode
      where mfghead.mhstatus < '8'
      and isnull(mwfinish,'') <> 'Y'
      and workcenters.wcadvsched = 'Y'
      order by mwadvscsort asc;
  declare Cur_wc_overflow dynamic scroll cursor for
    select mfgwcreqs.mwcode,mfgwcreqs.mwline,mfgwcreqs.mwreqmac,mfgwcreqs.mwreqlab
      from mfghead
        join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
        join workcenters on workcenters.wccode = mfgwcreqs.mwwccode
      where mfghead.mhstatus < '8'
      and isnull(mwfinish,'') <> 'Y'
      and workcenters.wcadvsched = 'Y'
      order by mwadvscsort asc;
  open Cur_wc_overflow;
  set lb_goon = 1;
  wc_loop_overflow: loop
    fetch next Cur_wc_overflow into li_mwcode,li_mwline,ld_mwmac,ld_mwlab;
    if sqlstate = err_notfound or lb_goon = 0 then
      leave wc_loop_overflow;
    end if;
    set li_min_assigned = 0;
    set li_min_toassigne = 0;
    if ld_mwmac < 0 then
      set ld_mwmac = 0;
    end if;
    if ld_mwlab < 0 then
      set ld_mwlab = 0;
    end if;
    if ld_mwmac+ld_mwlab > 0 then
      call sp_advsched_wc_assigned(li_mwcode,li_mwline,ai_schednum,li_min_assigned);
      set li_min_toassigne = round((ld_mwmac+ld_mwlab)*60,0);
    end if;
    if li_min_assigned >= li_min_toassigne then
      call sp_advsched_assign_overflow(ai_schednum,li_mwcode,li_mwline);
    end if;
  end loop wc_loop_overflow;
  close Cur_wc_overflow;

  if ai_typ = 1 then	//os3053 - rafraichissement (seulement
```

*Source tronquee (4034 caracteres au total)*
