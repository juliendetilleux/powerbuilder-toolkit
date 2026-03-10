# Procedure: sp_disconnect_check

## Type
Procedure stockee SQL Anywhere

## Source
```sql
create PROCEDURE sp_disconnect_check ()
    	
	Begin
	
		DECLARE li_Connect_id integer;
		DECLARE li_error integer;
		DECLARE ldt_start datetime;
		DECLARE ldt_stop datetime;
		DECLARE ls_pcuser Varchar(30);
		DECLARE ls_pcname Varchar(30);
		DECLARE ls_prguser Varchar(30);
		DECLARE ls_conxtype Varchar(30);
		DECLARE ls_ipadress Varchar(30);
		DECLARE ls_applic Varchar(30);
		DECLARE ls_usid VARCHAR(30);
	
		DECLARE cur_id cursor for							
		select 	ucconnectid,
				uclastconxdate,
				ucpcuser,
				ucpcname,
				ucprguser,
				ucconxtype,
				ucipadress,
				ucappli
			from usersconx;
		
		set li_error = 0;

		open cur_id;
		if (sqlcode >= 0 and sqlcode <> 100) then
						
			ID_loop:
            loop					
				
				Fetch cur_id into li_Connect_id, ldt_start, ls_pcuser, ls_pcname, ls_prguser, ls_conxtype, ls_ipadress, ls_applic;
				if (sqlcode >= 0 and sqlcode <> 100) then
					Select userid into ls_usid from sa_conn_info() where number = li_Connect_id and name <> 'usersconx_disconnect';
					if sqlcode = 100 then
						set ldt_stop = now();
						insert into histoconx (
								hcconxdate,
								hcdisconxdate,
								hcpcuser,
								hcpcname,
								hcprguser,
								hcconxtype,
								hcipadress,
								hcapplic)
							Values (
								ldt_start,
								ldt_stop,
								ls_pcuser,
								ls_pcname,
								ls_prguser,
								ls_conxtype,
								ls_ipadress,
								ls_applic);
						
						Delete from usersconx where ucconnectid = li_Connect_id;
						
						commit;
						
					End if;
				elseif sqlcode = 100 then
					leave ID_loop;				
				else
					set li_error = sqlcode;
					leave ID_loop;
				end if;	
	
			END LOOP ID_loop;

		End if;	
	
	End
```
