# Procedure: sp_ticket_check

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_TckHead | integer | IN |
| ai_ilorder | integer | IN |
| as_cash | Char(2 | IN |

## Source
```sql
create PROCEDURE sp_ticket_check (IN ai_TckHead integer, ai_ilorder integer, as_cash Char(2))
    	
	Begin
		
		DECLARE li_error integer;
		DECLARE li_tltotval numeric(8,2);
		DECLARE li_hhtotval numeric(8,2);
		DECLARE ldt_date datetime;
		DECLARE ldt_saldate datetime;
		DECLARE li_goodsalord integer;		
		
		DECLARE ls_ordertype Varchar(256);
		
		select sum(tltotval) into li_tltotval from ticketline where tlcode = ai_TckHead and tlcash = as_cash ;
		set li_error = sqlcode;
		
		if li_error = 0 then
			select sum(hhval), hhdate into li_hhtotval, ldt_date from histocash where hhordno = ai_TckHead and hhcash = as_cash and hhordtyp = 'T' group by hhdate;
			set li_error = sqlcode;
		end if;

		if li_error = 0 then
			if li_tltotval <> round(li_hhtotval,2) then
				select first shcode, shdatcrea into li_goodsalord, ldt_saldate from salhead join salline on shcode = slcode where shdatcrea < ldt_date group by shcode, shdatcrea having sum(slsalval) = li_hhtotval order by shdatcrea desc;
				set li_error = sqlcode;
				
				if li_error = 0 then
					Delete from ticketline where tlcash = as_cash and tlcode = ai_TckHead;
					set li_error = sqlcode;					
				end if;
				
				if li_error = 0 then
					insert into ticketline (tlcode,
						tlcash,
						tlline,
						tlqty,
						tlstdval,
						tlsalval,
						tltva,
						tltvaval,
						tltype,
						tlbascost,
						tlxtrcost,
						tlcurrconv2,
						tlitem,
						tltotval )
					select 	ai_TckHead,
							as_cash,
							salline.slline,
							salline.slqtyreq,
							slstdval,
							slsalval / ( 1 + ( tvalvl /100)),
							(select tclvl from tvalvl_country where ittvalvl = tccode and tccountry = 'BE' ) as tvalvl,
							slsalval - (slsalval / ( 1 + (tvalvl/100))),
							'I',
							items.itbascost,
							0,
							0,
							salline.slitem,
							slsalval
						from salline join items on slitem = itcode
						where  slcode = li_goodsalord ;
					set li_error = sqlcode;					
				end if;
				
				if li_error = 0 then
					Update salhead join salline on shcode = slcode set shstatus = 6, slstatus = 6 where shcode = li_goodsalord ;
					set li_error = sqlcode;					
				end if;
				
				if li_error = 0 then
					Update salhead join salline on shcode = slcode set shstatus = 1, slstatus = 1 where shcode = ai_ilorder ;
					set li_error = sqlcode;					
				end if;	

				if li_error = 0 then
					commit;
				else
					Rollback;
				end if;
				
			end if;
		end if;
			
	End
```
