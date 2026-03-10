# Procedure: SP_GET_INSTA_STOCK

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @datephoto | date | IN |
| @cheminpmix | char (150 | IN |

## Source
```sql
create PROCEDURE DBA.SP_GET_INSTA_STOCK( IN @datephoto date , in @cheminpmix char (150) )
			RESULT( stitem varchar(12), stlot char(10),  stloc char (8), stqty numeric (12,3), itstat1 char(2), itstat1desc char(20), itstat2 char(2), itstat2desc char(20), itname char(30), itum char(2) )
			BEGIN
				declare @stitem char(12); --001
				declare @stlot char(10); --002
				declare @stloc char(8); --003
				declare @stqty numeric(12,3); --004
				declare @itstat1 char(2); --005
				declare @itstat1desc char(20); --006
				declare @itstat2 char(2); --007
				declare @itstat2desc char(20); --008
				declare @itname char(30); --009
				declare @hscode char(4); --010
				declare @rowexists integer; --011
				declare @trsign integer;--012
				
			//**********************************************************************************************/
				declare curr_histostock dynamic scroll cursor for
					select hscode, hsitem, hslot, hsloc, hsqty from histostock where hsdatim > @datephoto;
			//*****************************************************************************************************/
				declare err_notfound exception for sqlstate value '02000';
				declare local temporary table stockbis(
					stitem char(12),
					stlot char (10),
					stloc char (8),
					stqty numeric (12,3),
					stalloc numeric (12,3),
					stctrl  char(1)
					) on commit PRESERVE rows;

					create index ind1 on stockbis(stitem);
					create index ind2 on stockbis(stlot);
					create index ind3 on stockbis(stloc);

				unload table stocks to 'tempstock.txt';
				Load table stockbis from 'tempstock.txt';
			
				open curr_histostock;
			
				OuterLoop: loop //Outerloop

					fetch next curr_histostock into @hscode,@stitem,@stlot,@stloc, @stqty;
				
					if sqlstate = err_notfound then
					  leave OuterLoop
					end if;
					--mettre le bon signe a la transaction en fonction du code transaction
					select trsign into @trsign from transactions where trcode = @hscode;
					set @stqty = @stqty * @trsign;
					set @rowexists = 0;
					--j'update stock si j ai rien updat�, j'ins�re dans stock-------------------------------------------------------------------------------------------
					select count(*) into @rowexists from stockbis where stitem = @stitem and stlot = @stlot and stloc = @stloc ;
					if @rowexists = 1 then
						update stockbis set stqty = stqty - @stqty where stitem = @stitem and stlot = @stlot and stloc = @stloc ;
					else
						insert into stockbis values ( @stitem, @stlot, @stloc, -@stqty, 0, '');
					end if;
			  end loop OuterLoop;
			
			close curr_histostock;
			
			select stitem, stlot,  stloc, stqty, itstat1, imdesc, itstat2, isdesc, itname, itum from stockbis, items, itstat1, itstat2 where stitem = itcode and imcode = itstat1 and iscode = itstat1 and iscode2 = itstat2 and stqty <> 0;
					
			END
	end
```
