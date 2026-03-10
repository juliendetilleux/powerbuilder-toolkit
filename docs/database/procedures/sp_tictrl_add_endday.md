# Procedure: sp_tictrl_add_endday

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_worker | varchar(20 | IN |

## Source
```sql
create PROCEDURE sp_tictrl_add_endday( IN as_worker varchar(20), IN adt_date date, IN as_start varchar(5) )
		BEGIN
			//proc�dure d ajout de fin de journ�e (si il n y en as pas d�j�)
			DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
			DECLARE lb_continue numeric(1,0);
			DECLARE ld_inter numeric(18,10);
			DECLARE ll_count integer;
			DECLARE ll_prev_seq integer;
			DECLARE ll_prev_of integer;
			DECLARE ls_start_prec varchar(64);
			DECLARE ls_wltyp char(1);
			DECLARE ld_ctimprest numeric(18,10);
					
			SELECT first wlstart, wltyp, wlmfgid, wlseq,
					if wltyp <> '4' then
						(select sum(wkl.wlwrktime)
							from workline as wkl
							where ( if workline.wlwcreqsline is null OR wkl.wlwcreqsline is null then workline.wlwcid else string(workline.wlwcreqsline) endif
									= if workline.wlwcreqsline is null OR wkl.wlwcreqsline is null then wkl.wlwcid else string(wkl.wlwcreqsline) endif) and
								( wkl.wlwkcode = if workline.wltyp = '1' then wkl.wlwkcode else workline.wlwkcode endif ) and
								( if workline.wlmfgid is null then 0 else workline.wlmfgid endif = if wkl.wlmfgid is null then 0 else wkl.wlmfgid endif ) and
										 ( if workline.wlwcreqsline is null and workline.wlmfgid is null then workline.wlopid else '0' endif
										= if workline.wlwcreqsline is null and workline.wlmfgid is null then wkl.wlopid else '0' endif) and
										  ( wkl.wldat = if workline.wltyp = '1' then wkl.wldat else workline.wldat endif ) )
					else
						isnull((select sum(isnull(wkl.wlwrktime,0))
									from workline as wkl
									where
										workline.wlmfgid = wkl.wlmfgid AND
										wkl.wltyp = '4' AND
										wkl.wlfileline = workline.wlfileline),0)
					endif as timepres
			  INTO ls_start_prec, ls_wltyp, ll_prev_of, ll_prev_seq,
					ld_ctimprest
			  FROM workline
			 WHERE wlwkcode = as_worker AND
				date(wldat) = adt_date
			ORDER BY wlstart desc ;
			
			if ld_ctimprest is null then
				set ld_ctimprest = 0;
			end if;
			if ll_prev_seq is null then
				set ll_prev_seq = 1;
			end if;
			
			if ls_wltyp = '9' then	//v�rifi� si la fin de journ�e n existe pas d�j�
				set lb_continue = 0;
			else
				set lb_continue = 1;
			end if;
			
			set ll_count = 0 ;
			
			if lb_continue = 1 then
				set ld_inter = ( round(left(as_start,2),0) - round(left(ls_start_prec,2),0) ) +( round(right(as_start,2),0)/60 - round(right(ls_start_prec,2),0)/60 ) ;
				
				if ll_prev_seq < 2 then
					
					UPDATE workline
					   SET wlend = as_start,
						wlwrktime = ld_inter			
					 WHERE wlwkcode = as_worker AND
						date(wldat) = adt_date AND
						wlstart = ls_start_prec AND
						wlseq = ll_prev_seq;
					
				else
				
					SELECT count(*)
					  INTO ll_count
					  FROM workline
					 WHERE wlwkcode = as_worker AND
						date(wldat) = adt_date AND
						wlstart = ls_start_prec;
						
					if ll_count >= 1 then
						UPDATE workline
						   SET wlend = as_start,
							wlwrktime = ld_inter / ll_count	 		
						 WHERE wlwkcode 
```

*Source tronquee (4273 caracteres au total)*
