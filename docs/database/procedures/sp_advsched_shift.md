# Procedure: sp_advsched_shift

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE DBA."sp_advsched_shift"( IN ai_schednum numeric(3,0) )
begin
  declare lb_goon numeric(1);
  declare ll_maid integer;

  declare cur_mfg_advsc dynamic scroll cursor for
    SELECT mfgwcreqs_advsc.maid
      FROM mfgwcreqs_advsc
        JOIN mfgwcreqs ON mfgwcreqs.mwcode = mfgwcreqs_advsc.mamwcode AND mfgwcreqs.mwline = mfgwcreqs_advsc.mamwline
        JOIN machine ON machine.mcid = mfgwcreqs_advsc.mamachine
     WHERE matype = 0 AND
	mastart > now()
     ORDER BY //mwadvscsort desc,
        mastart;

  open cur_mfg_advsc;
  set lb_goon = 1;
  mfg_advsc_loop: loop
    fetch next cur_mfg_advsc into ll_maid;
    if sqlcode = 100 or lb_goon = 0 then
      leave mfg_advsc_loop;
    end if;

    call sp_advsched_shift_one( ai_schednum, ll_maid );

  end loop mfg_advsc_loop;
  close cur_mfg_advsc;

end
```
