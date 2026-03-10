# Procedure: sp_workline_time

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| adt_day | datetime | IN |
| as_worker | varchar(10 | IN |

## Source
```sql
create PROCEDURE sp_workline_time (IN adt_day datetime, IN as_worker varchar(10), IN as_timestart char(4), IN as_timeend char(4))
		BEGIN
			DECLARE li_ integer;
			DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
			DECLARE lb_goon numeric(1,0);
			
			DECLARE ls_wlopid varchar(10);
			DECLARE ls_wlwcid varchar(10);
			DECLARE ll_mwcode integer;
			
			DECLARE ld_timetot decimal(15,6);
			DECLARE ld_temp decimal(15,6);
			DECLARE ld_time_this decimal(15,6);
			DECLARE ld_calculate decimal(15,6);
			DECLARE ld_qty decimal(15,6);
			DECLARE ld_nbhours decimal(15,6);
			DECLARE ll_wlseq integer;

			DECLARE Cur_workline_calc cursor for
				SELECT workline.wlopid,
					workline.wlwcid,
					workline.wlmfgid,
					workline.wlseq
				  FROM workline
				 WHERE date(workline.wldat) = date(adt_day) AND
					workline.wlwkcode = as_worker AND
					workline.wlstart = as_timestart AND
					workline.wltyp = '1';
			
			set ld_timetot = 0;
			set lb_goon = 1;
			open Cur_workline_calc;	
			
			workline_calc_loop:		
			LOOP				
				fetch next Cur_workline_calc into ls_wlopid, ls_wlwcid, ll_mwcode, ll_wlseq;
				
				IF SQLSTATE = err_notfound or lb_goon = 0 THEN
					LEAVE workline_calc_loop;
				END IF;
					
				select sum(mfgwcreqs.mwreqlab),
					(select mfghead.mhreqqty from mfghead where mfghead.mhcode = ll_mwcode)
				  into ld_temp,
					ld_qty
				  from mfgwcreqs
				 where mfgwcreqs.mwwccode = ls_wlwcid and
						mfgwcreqs.mwcode = ll_mwcode and
						mfgwcreqs.mwtask = ls_wlopid ;
				
				set ld_timetot = ld_timetot + (ld_temp / ld_qty) ;
			END LOOP workline_calc_loop;
			
			close Cur_workline_calc;
			
			//nombre d heures
			set ld_nbhours = f_gethours_from_strings(as_timestart, as_timeend) ;
			
			if ld_timetot is null then
				set ld_timetot = 0;
			end if;
			set lb_goon = 1;
			open Cur_workline_calc;	
			
			workline_calc_loop2:		
			LOOP				
				fetch next Cur_workline_calc into ls_wlopid, ls_wlwcid, ll_mwcode, ll_wlseq;
				
				IF SQLSTATE = err_notfound or lb_goon = 0 THEN
					LEAVE workline_calc_loop2;
				END IF;
				
				select sum(mfgwcreqs.mwreqlab),
					(select mfghead.mhreqqty from mfghead where mfghead.mhcode = ll_mwcode)
				  into ld_temp,
					ld_qty
				  from mfgwcreqs
				 where mfgwcreqs.mwwccode = ls_wlwcid and
						mfgwcreqs.mwcode = ll_mwcode and
						mfgwcreqs.mwtask = ls_wlopid ;
				
				set ld_time_this = ld_temp / ld_qty;
				if ld_timetot = 0 then
					set ld_calculate = 0;
				else
					set ld_calculate = (ld_nbhours / ld_timetot) * ld_time_this;
				end if;
				
				UPDATE workline
				   SET workline.wlend = as_timeend,
					workline.wlwrktime = ld_calculate
				 WHERE date(workline.wldat) = date(adt_day) AND
					workline.wlwkcode = as_worker AND
					workline.wlstart = as_timestart AND
					workline.wlseq = ll_wlseq;
				
			END LOOP workline_calc_loop2;
			
			close Cur_workline_calc;
			
		END
```
