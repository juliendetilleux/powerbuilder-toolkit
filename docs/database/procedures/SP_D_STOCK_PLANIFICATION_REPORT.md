# Procedure: SP_D_STOCK_PLANIFICATION_REPORT

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ldt_from | timestamp | IN |
| ldt_to | timestamp | IN |
| ls_item | varchar(12 | IN |

## Source
```sql
create PROCEDURE SP_D_STOCK_PLANIFICATION_REPORT(  IN ldt_from timestamp , IN ldt_to timestamp , IN ls_item varchar(12)  )
 RESULT( Intitule varchar(50), Annee char (4), Mois char(2), Variation numeric (16,4), tri numeric(1,0), itum varchar(2), itcode varchar(20) )
BEGIN
	declare local temporary table ltt_stock ( Intitule varchar(50), Annee char (4), Mois char(2), Variation numeric (16,4), tri numeric(1,0) )on commit PRESERVE rows;
    declare li_year_from integer;
    declare li_year_to integer;
    declare li_month_from integer;
    declare li_month_to integer;
    declare ls_month char(2);
    declare ld_stqty_init decimal(15,3);
    declare ld_mporqty decimal(15,3);
	declare ld_purqty decimal(15,3);
	declare ld_mporqty_man decimal(15,3);
	declare ld_qty_man decimal(15,3);
	declare ld_slqtyord decimal(15,3);
	declare ld_of_inprogress decimal(15,3);
	declare ld_mfg_plan decimal(15,3);
	declare ld_diff decimal(15,3);	//diff�rence de quantit� par rapport aux mois pr�c�dents
    declare ls_itum char(2);

    select itum
      into ls_itum
      from items
     where itcode = ls_item ;

    set li_year_from = year ( ldt_from );
    set li_year_to = year ( ldt_to );
    set li_month_from = month ( ldt_from );
    set li_month_to = month ( ldt_to );
    set ld_diff = 0;
	
    year_loop:
    LOOP
        if li_month_from = 13 then
            set li_month_from = 1;
        end if;
        if li_year_from > li_year_to then
            leave year_loop;
        end if;

        if li_year_from = li_year_to then
            month_loop:
            loop
                if li_month_from > li_month_to then
                    leave month_loop;
                end if;
                if li_month_from < 10 then
                    set ls_month = string ( '0' , li_month_from);
                else
                    set ls_month = li_month_from;
                end if;
				
				//os2790 recherche du stock initial
				select sum ( stocks.stqty )
				  into ld_stqty_init
				  from stocks join lots ON stocks.stlot = lots.locode
						join items ON stocks.stitem = items.itcode and lots.loitem = items.itcode
				 where stocks.stitem = ls_item and
					lots.lostatus <> 'R' and
					(lots.lostatus <> 'Q' OR ( isnull( dateformat( lots.loavailabledate , 'YYYYMM'), '999912') <= string(li_year_from) + ls_month ) );
				if ld_stqty_init is null then
					set ld_stqty_init = 0 ;
				end if;
				set ld_stqty_init = ld_stqty_init + ld_diff;	//le stock initial est �gal a la quantit� en stock disponible pour le mois en question + la diff�rence de stock relative au mois pr�c�dents
				
				//sum des achats planifi�
				select sum(mporqty)
				  into ld_mporqty
				  from matplan join items on mpitem = itcode
				 where mpuse = 'P' and mpitem = ls_item and month ( mpreldat + isnull(items.itavailtime, 0)) = li_month_from and year ( mpreldat + isnull(items.itavailtime, 0)) = li_year_from ;
				if ld_mporqty is null then
					set ld_mporqty = 0 ;
				end if;
				
				//sum des ach
```

*Source tronquee (12254 caracteres au total)*
