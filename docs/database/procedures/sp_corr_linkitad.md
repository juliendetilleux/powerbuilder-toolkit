# Procedure: sp_corr_linkitad

## Type
Procedure stockee SQL Anywhere

## Source
```sql
create PROCEDURE sp_corr_linkitad()
    Begin
		
		DECLARE li_error Integer;
		DECLARE li_lkcode_orig Integer;
		DECLARE ls_item Varchar(20);
		DECLARE ls_adcode Varchar(20);
		DECLARE ldt_creadate Datetime;
		DECLARE li_lkcode Integer;
		DECLARE li_count Integer;

		DECLARE cur_lkitad cursor for
			select lkcode from linkitad where lkcode in (select lkcode from linkitad where lktyp = 'S' group by lkcode having count(lkcode) > 1) order by lkcode, lkcreadate;
			
		set li_count = 0;
			
		SELECT parameters.pmival INTO li_lkcode  FROM parameters  WHERE parameters.pmcode = 'LASTLINK';
		set li_error = sqlcode;
		
		if li_error = 0 then
			open cur_lkitad;
			set li_error = sqlcode;
		end if;
		
		if li_error = 0 then
			lkitad_loop:
			loop
				Fetch cur_lkitad into li_lkcode_orig;
				set li_error = sqlcode;				
				
				if li_error <> 0 then
					leave lkitad_loop;
				end if;
				
				if li_error = 0 then
					Select first lkitem, lkadcode, lkcreadate into ls_item, ls_adcode, ldt_creadate from linkitad where lkcode = li_lkcode_orig order by lkcreadate;
					set li_error = sqlcode;
				end if;
				
				if li_error = 0 then
					set li_lkcode = li_lkcode + 1;
					Update linkitad set lkcode = li_lkcode where lkitem = ls_item and lkadcode = ls_adcode and lkcreadate = ldt_creadate;
					set li_error = sqlcode;
				end if;
					
				if li_error = 0 then
					Update linkitadpack set lpcode = li_lkcode where lpitem = ls_item and lpadcode = ls_adcode and lptyp = 'S';
					if sqlcode = 100 then
						Insert into linkitadpack (	lptyp,
													lpitem,
													lpadcode,
													lpcode,
													lpitadlayer,
													lphlayer,
													lpnblayer,
													lppackweight,
													lppackheight,
													lppackitem,
													lpumgroup,
													lpautopack)
							Values ( 'S',
									ls_item,
									ls_adcode,
									li_lkcode,
									0,
									0,
									0,
									0,
									0,
									0,
									1,
									'I');
						set li_error = sqlcode;				
					else
						set li_error = sqlcode;
					end if;
				end if;	
				set li_count = li_count + 1
			END LOOP lkitad_loop;
		end if;
		close cur_lkitad;
		
		
		if li_error = 0 or ( li_error = 100 and li_count > 0 ) then
			Update parameters set pmival = li_lkcode WHERE parameters.pmcode = 'LASTLINK';
			set li_error = sqlcode;
		end if;
		
		if li_error = 0 then
			Commit;
		else
			Rollback;
		end if;

	End
```
