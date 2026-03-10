# Procedure: sp_advsched_assign_one_wc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |

## Source
```sql
create PROCEDURE DBA.sp_advsched_assign_one_wc( in ai_schednum numeric(3),in as_ADVSCHD1 char(1),in as_ADVSCHD2 char(1),
        in ai_mwcode integer, in ai_mwline integer )
begin
    //assigne un poste de charge pr�ci
  declare li_sort integer;
  declare li_min_assigned integer;
  declare li_min_toassigne integer;
  declare ld_mwmac numeric(6,2);
  declare ld_mwlab numeric(6,2);
  declare ldt_date_start datetime;
  declare ldt_date_stend datetime;

  SELECT mfgwcreqs.mwreqmac, mfgwcreqs.mwreqlab, mfgwcreqs.mwadvscsort
    INTO ld_mwmac,ld_mwlab,li_sort
    FROM mfghead
        join mfgwcreqs on mfghead.mhcode = mfgwcreqs.mwcode
        join workcenters on workcenters.wccode = mfgwcreqs.mwwccode
   WHERE mfghead.mhstatus < '8'
      and isnull(mwfinish,'') <> 'Y'
      and workcenters.wcadvsched = 'Y'
      and mfgwcreqs.mwcode = ai_mwcode
      and mfgwcreqs.mwline = ai_mwline ;

  if SQLCODE = 0 then

    set li_min_assigned = 0;
    set li_min_toassigne = 0;
    if ld_mwmac < 0 then
      set ld_mwmac = 0;
    end if;
    if ld_mwlab < 0 then
      set ld_mwlab = 0;
    end if;
    if ld_mwmac+ld_mwlab > 0 then
      call sp_advsched_wc_assigned(ai_mwcode,ai_mwline,ai_schednum,li_min_assigned);
      set li_min_toassigne = round((ld_mwmac+ld_mwlab)*60,0);
    end if;
    if li_min_assigned < li_min_toassigne then
      call sp_advsched_startdate_wc(ai_schednum,as_ADVSCHD2,ai_mwcode,li_sort,ldt_date_start);
      call sp_advsched_enddate_wc(ai_schednum,as_ADVSCHD2,ai_mwcode,li_sort,ldt_date_stend);
      call sp_advsched_assign_machine(ai_schednum,as_ADVSCHD1,as_ADVSCHD2,ldt_date_start,ldt_date_stend,ai_mwcode,ai_mwline,li_min_toassigne-li_min_assigned);
    end if;
  end if;
end
```
