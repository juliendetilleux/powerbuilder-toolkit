# Procedure: sp_returnsalline_fromstring

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_mhcmntrel | long varchar | IN |

## Source
```sql
create PROCEDURE sp_returnsalline_fromstring(IN as_mhcmntrel long varchar)
	RESULT ( as_adcode varchar(40), as_adname varchar(60), ad_qty numeric(12,3),
			al_salhead integer,	al_salline integer, as_itcode varchar(40),
			as_itname varchar(60))
	BEGIN
		//retourne les commandes provenant d une chaine de caract�re, format : 125/1,126/2,126/3
		DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
		DECLARE lb_goon numeric(1, 0);
		DECLARE lb_count numeric(6, 0);

        DECLARE as_adcode varchar(40);
        DECLARE as_adname varchar(60);
        DECLARE ad_qty numeric(12,3);
		DECLARE al_salhead integer;
        DECLARE al_salline integer;
        DECLARE as_itcode varchar(40);
		DECLARE as_itname varchar(60);

        DECLARE al_pos1 integer;
        DECLARE al_pos2 integer;
		
        declare local temporary table ttsalheadlink(
			tqadcode varchar(40), tqadname varchar(60), tqqty numeric(12,3),
			tqsalhead integer, tqsalline integer, tqitcode varchar(40),
			tqitname varchar(60)
			) on commit PRESERVE rows;


		set lb_goon = 1;
			
		sallink_loop:		
		LOOP		
			set lb_count = lb_count +1 ;
			set al_salhead = 0;
			set al_salline = 0;	
		    select charindex( '/', as_mhcmntrel ),
                charindex( ',', as_mhcmntrel )
            into al_pos1, al_pos2;

            if al_pos1 > 0 and al_pos2 = 0 then
                set al_pos2 = length(as_mhcmntrel) +1;
            end if;
			
			if al_pos1 > 0 and al_pos2 > 0 and al_pos1 < al_pos2 then	
			    set al_salhead = substring( as_mhcmntrel, 1, al_pos1 -1 );
                set al_salline = substring( as_mhcmntrel, al_pos1 +1, al_pos2 - al_pos1 -1 ) ;
			
				select itcode, itname, adcode, adname, slqtyreq
				  into as_itcode, as_itname, as_adcode, as_adname, ad_qty
				  from salline
					join salhead on salhead.shcode = salline.slcode
					join adresses on adresses.adcode = salhead.shcust
					join items on items.itcode = salline.slitem
				  where salline.slcode = al_salhead and
					salline.slline = al_salline;

                set as_mhcmntrel = substring( as_mhcmntrel, al_pos2 +1, length( as_mhcmntrel ));
			else
				set lb_goon = 0;
			end if;
			
			if lb_count > 999 then
				set lb_goon = 0;
				delete from ttsalheadlink;
			end if;
			
			IF lb_goon = 0 THEN
				LEAVE sallink_loop;
			END IF;
			
			INSERT INTO ttsalheadlink(
				tqadcode, tqadname, tqqty,
				tqsalhead, tqsalline, tqitcode,
				tqitname)
			VALUES(
				as_adcode, as_adname, ad_qty,
				al_salhead,	al_salline, as_itcode,
				as_itname);
				
		END LOOP sallink_loop;
		
		select * from ttsalheadlink order by tqsalhead asc, tqsalline;
END
```
