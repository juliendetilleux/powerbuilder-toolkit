# Procedure: SP_SET_NEW_QCTEST

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_rlwccode | char(8 | IN |

## Source
```sql
create PROCEDURE SP_SET_NEW_QCTEST( IN as_rlwccode char(8), IN as_rtidtest char(8), IN al_rtseq numeric(6,0)  )

	BEGIN
		/* D�claration de variables
		la store procedure va regarder toutes les bom qui ont le poste de charge rlwccode
		boucler sur celle ci et ajouter au PDC le test rtidtest � la position rtseq,
		si elle existe dej� on fait un + 1 jusqu a ce que la sequence soit libre
		evidemment, rtidtest doit dej� avoir �t� cr��*/

		declare @rtcode     numeric(5,0);
		declare @rtline     numeric(4,0);
		declare @rtdesc     varchar(50);
		declare @rtcmnt     varchar(60);
		declare @rtchoiceid numeric(6,0);
		declare @rtum       varchar(20);
		declare @rtseq      numeric(3,0);
		declare @exist      numeric(3,0);
		declare @rltest     numeric(5,0);
		declare @rtnextseq  numeric(6,0);
		
		declare curr_bom_with_pdc dynamic scroll cursor for
			select rltest from routline, bomhead where bhcode = rlcode and bhtype = rltype and  rlwccode = as_rlwccode and bhactiv = 'Y'
		;
				
		declare err_notfound exception for sqlstate value '02000';
			
			open curr_bom_with_pdc;
					
					OuterLoop: loop //Outerloop
						
						fetch next curr_bom_with_pdc into @rltest;	
						
						if sqlstate = err_notfound then
							leave OuterLoop
						end if;
						
						select max(rtline) into @rtline from routtest where rtcode = @rltest;
						if @rtline is null then
							set @rtline = 0;
						end if;
						set @rtline = @rtline + 1;

						select qtname, qtcmnt, qtchoiceid, qtum into @rtdesc, @rtcmnt, @rtchoiceid, @rtum from qctest where qttestid = as_rtidtest;

						set @rtnextseq = al_rtseq;
						select count(*) into @exist from routtest where rtcode = @rltest and rtseq = @rtnextseq;
						if @exist is null then
							set @exist = 0;
						end if;
						incr_loop:
						LOOP
							if @exist = 0 then
								leave incr_loop;
							end if;
							set @rtnextseq = @rtnextseq + 1;
							select count(*) into @exist from routtest where rtcode = @rltest and rtseq = @rtnextseq;
							if @exist is null then
								set @exist = 0;
							end if;
						end loop incr_loop;
						

						insert into routtest ( rtcode, rtline, rtidtest, rtdesc, rtseq, rtcmnt, rtchoiceid, rtum, rtbloc)
						values ( @rltest, @rtline, as_rtidtest, @rtdesc, @rtnextseq, @rtcmnt, @rtchoiceid, @rtum, 'Y' );
				
					end loop OuterLoop;
					
			close curr_bom_with_pdc;
			commit;

	END
end
```
