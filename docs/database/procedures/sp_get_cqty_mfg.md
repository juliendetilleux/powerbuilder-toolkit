# Procedure: sp_get_cqty_mfg

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_of | integer | IN |

## Source
```sql
create PROCEDURE sp_get_cqty_mfg(IN ai_of integer)
	RESULT (ld_hsqty_sum numeric(12, 3))
BEGIN		
		
	DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
	DECLARE lb_goon numeric(1, 0);
	DECLARE ls_itcode varchar(30);
	DECLARE ls_itisumtarif char(1);
	DECLARE ld_hsqty numeric(12, 3);
	DECLARE ld_hsqtytarif numeric(12, 3);
	DECLARE ld_coefqty numeric(12, 3);
	DECLARE ld_hsqty_sum numeric(12, 3);
	DECLARE ls_ITUMTRF char(1);
	
	declare Cur_histo cursor for
		select histostock.hsitem,
			items.itisumtarif,
			histostock.hsqty,
			histostock.hsqtytarif
		  from histostock JOIN items ON histostock.hsitem = items.itcode
		 where histostock.hscode = 'RCMO' AND
			histostock.hsordlin = 0 AND
			histostock.hsordno = ai_of ;
		
	//progparam unit� tarifaire
	SELECT ppvalue
	  INTO ls_ITUMTRF
	  FROM progparam
	 WHERE ppcode = 'ITUMTRF';	
				
	if ls_ITUMTRF is null then
		set ls_ITUMTRF = '';
	end if;
	set ld_hsqty_sum = 0;
				
	open Cur_histo;			
	set lb_goon = 1;
	
	histo_loop:		
	LOOP				
		fetch next Cur_histo into ls_itcode, ls_itisumtarif, ld_hsqty, ld_hsqtytarif;

		IF SQLSTATE = err_notfound or lb_goon = 0 THEN
			LEAVE histo_loop;
		END IF;
		
		if ls_itisumtarif is null then
			set ls_itisumtarif = 'N';
		end if;		
		if ld_hsqty is null then
			set ld_hsqty = 0;
		end if;		
		if ld_hsqtytarif is null then
			set ld_hsqtytarif = 0;
		end if;
		
		if ls_ITUMTRF = '2' and ls_itisumtarif = 'Y' then	//article tarifaire
			set ld_hsqty_sum = ld_hsqty_sum + ld_hsqtytarif ;
		else
			set ld_hsqty_sum = ld_hsqty_sum + ld_hsqty ;
		end if;
	
	END LOOP histo_loop;
		
	close Cur_histo;
	
	select ld_hsqty_sum from dummy;
END
```
