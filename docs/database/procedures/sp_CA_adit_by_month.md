# Procedure: sp_CA_adit_by_month

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| adt_datestart | datetime | IN |
| adt_datestop | datetime | IN |

## Source
```sql
create PROCEDURE sp_CA_adit_by_month(IN adt_datestart datetime, IN adt_datestop datetime)
	RESULT ( tt_adcode varchar(30), tt_adname varchar(60), tt_itcode varchar(30), tt_itname varchar(60),
			tt_year1 char(4), tt_month1 varchar(10), tt_CA1 numeric(18,2), tt_qty1 numeric(18,2),
			tt_year2 char(4), tt_month2 varchar(10), tt_CA2 numeric(18,2), tt_qty2 numeric(18,2),
			tt_conv numeric(8,2) )

BEGIN
	DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
	DECLARE lb_goon numeric(1,0);
		
	DECLARE ll_num_date integer;
	DECLARE ll_num_datestart integer;
	DECLARE ll_num_datestop integer;
	DECLARE ls_num_date_comp1 char(6);
	DECLARE ls_num_date_comp2 char(6);
	DECLARE ls_datestart_prec char(6);
	DECLARE ls_datestop_prec char(6);
	
	DECLARE ls_adcode varchar(30);
	DECLARE ls_adname varchar(60);
	DECLARE ls_itcode varchar(30);
	DECLARE ls_itname varchar(60);
	DECLARE ld_conv numeric(8,2);
	
	DECLARE ld_CA1 numeric(18,2);
	DECLARE ld_qty1 numeric(18,2);
	DECLARE ld_CA2 numeric(18,2);
	DECLARE ld_qty2 numeric(18,2);
	
	DECLARE Cur_adit cursor for
		SELECT  adresses.adcode,
				adresses.adname,
				items.itcode,
				items.itname,
				IF isnull(items.itconvusr, 0) = 0 THEN 1 ELSE items.itconvusr ENDIF
		  FROM adresses JOIN invoicehead ON adresses.adcode = invoicehead.ihcust
				JOIN invoiceline ON invoicehead.ihcode = invoiceline.ilcode
				LEFT OUTER JOIN ITEMS ON invoiceline.ilitem = items.itcode
		WHERE (dateformat(invoicehead.ihdate, 'YYYYMM') BETWEEN dateformat(adt_datestart, 'YYYYMM') AND dateformat(adt_datestop, 'YYYYMM') ) OR
			dateformat(invoicehead.ihdate, 'YYYYMM') BETWEEN ls_datestart_prec AND ls_datestop_prec
		GROUP BY adresses.adcode,
				adresses.adname,
				items.itcode,
				items.itname,
				items.itconvusr
		ORDER BY adresses.adcode,
				items.itcode;
			
	declare local temporary table tt_CA_adit_by_month(
		tt_adcode varchar(30), tt_adname varchar(60), tt_itcode varchar(30), tt_itname varchar(60),
		tt_year1 char(4), tt_month1 varchar(10), tt_CA1 numeric(18,2), tt_qty1 numeric(18,2),
		tt_year2 char(4), tt_month2 varchar(10), tt_CA2 numeric(18,2), tt_qty2 numeric(18,2),
		tt_conv numeric(8,2)
	) on commit PRESERVE rows;
				
	set lb_goon = 1;
	
	SELECT isnull(CAST( dateformat(adt_datestart, 'YYYYMM') as integer ),0),
		isnull(CAST( dateformat(adt_datestop, 'YYYYMM') as integer ),0),
		dateformat( dateadd(YEAR, -1, adt_datestart) , 'YYYYMM'),
		dateformat( dateadd(YEAR, -1, adt_datestop) , 'YYYYMM')
	  INTO ll_num_datestart,
		ll_num_datestop,
		ls_datestart_prec,
		ls_datestop_prec
	  FROM dummy ;
	
	
	open Cur_adit;			
	set lb_goon = 1;
		
	lit_adit:	//boucle sur les adresses et articles
	LOOP				
		fetch next Cur_adit into ls_adcode, ls_adname, ls_itcode, ls_itname, ld_conv ;

		IF SQLSTATE = err_notfound or lb_goon = 0 THEN
			LEAVE lit_adit;
		END IF;
		
		set ll_num_date = ll_num_datestart;
		
		lit_ym:			//boucle sur les dates
		LOOP				
			IF ll_num_date > ll_num_datestop THEN
				LEAVE lit_ym;
			END IF;

			//alimentation de la
```

*Source tronquee (6058 caracteres au total)*
