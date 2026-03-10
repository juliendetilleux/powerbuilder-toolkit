# Procedure: sp_get_cqtycost_mfg

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_of | integer | IN |

## Source
```sql
create PROCEDURE sp_get_cqtycost_mfg(IN ai_of integer)
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
	DECLARE ls_item_mfg varchar(30);
	DECLARE ls_mhtype char(1);
	DECLARE ls_mhbomtyp char(1);
	DECLARE ls_ITUMTRF char(1);
	
	declare Cur_histocost cursor for
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
	
	//information sur  OF
	SELECT mhtype,
		mhitem,
		mhbomtyp
	  INTO ls_mhtype,
		ls_item_mfg,
		ls_mhbomtyp
	  FROM mfghead
	 WHERE mhcode = ai_of;
				
	if ls_mhtype is null then
		set ls_mhtype = '';
	end if;
	if ls_ITUMTRF is null then
		set ls_ITUMTRF = '';
	end if;
	if ls_mhbomtyp is null then
		set ls_mhbomtyp = '';
	end if;
	set ld_hsqty_sum = 0;
				
	open Cur_histocost;			
	set lb_goon = 1;
	
	histo_loop:		
	LOOP				
		fetch next Cur_histocost into ls_itcode, ls_itisumtarif, ld_hsqty, ld_hsqtytarif;

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
		
		if ls_item_mfg = ls_itcode OR ls_mhtype <> 'R' then	//si article pas coitem ou si of group�
			//pas de conversion
			if ls_ITUMTRF = '2' and ls_itisumtarif = 'Y' then	//article tarifaire
				set ld_hsqty_sum = ld_hsqty_sum + ld_hsqtytarif ;
			else
				set ld_hsqty_sum = ld_hsqty_sum + ld_hsqty ;
			end if;
		else	//si article coitem et selon recette
			SELECT bomcoitem.bcqtyf
			 INTO ld_coefqty
			 FROM bomcoitem
			WHERE bomcoitem.bccode = ls_item_mfg AND
					bomcoitem.bctype = ls_mhbomtyp AND
					bomcoitem.bccoitem = ls_itcode  ;
			if ld_coefqty is null then
				set ld_coefqty = 0;
			end if;
			
			if ls_ITUMTRF = '2' and ls_itisumtarif = 'Y' then	//article tarifaire
				set ld_hsqty_sum = ld_hsqty_sum + (ld_hsqtytarif * ld_coefqty) ;
			else
				set ld_hsqty_sum = ld_hsqty_sum + (ld_hsqty * ld_coefqty);
			end if;
		end if;
	
	END LOOP histo_loop;
		
	close Cur_histocost;
	
	select ld_hsqty_sum from dummy;
END
```
