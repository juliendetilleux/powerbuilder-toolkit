# Procedure: sp_get_subheadtobill

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| adt_datecheck | datetime | IN |

## Source
```sql
create PROCEDURE DBA."sp_get_subheadtobill"(IN adt_datecheck datetime)
	RESULT ( ts_sh_id integer, ts_datestart datetime, ts_datestop datetime)

	BEGIN
		DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
		DECLARE lb_goon numeric(1,0);
		DECLARE ll_sh_id integer;
		DECLARE ldt_datestart datetime;
		DECLARE ldt_datestop datetime;
		DECLARE ldt_subheaddatestop datetime;
		DECLARE ll_periodicity numeric(2,0);
		DECLARE ldt_SI_datestart_max datetime;
        DECLARE ldt_datestart_withdc datetime;
		DECLARE ll_sh_monthdec numeric(2,0);
		DECLARE ll_sh_typeabo NUMERIC(1);
		
		declare cur_subtobill cursor for
			SELECT sh_id,
				/*isnull(( select max( si_date_end ) from SUBINVOICE
						 where si_subscribe_fk_SUBHEAD = SUBHEAD.sh_id AND
							si_invoice_fk_invoicehead is not null ) +1,*/ sh_datestart, //),
					sh_datestop,
					sh_periodicity,
					sh_monthdec,
					sh_typeabo
			  FROM SUBHEAD
			 WHERE sh_status = 3 AND
				DATEFORMAT(adt_datecheck, 'YYYYMM') >= DATEFORMAT( dateadd(MONTH, sh_monthdec, sh_datestart), 'YYYYMM') /*AND
				NOT EXISTS( select * from SUBINVOICE
						 where si_subscribe_fk_SUBHEAD = SUBHEAD.sh_id AND
								date(sh_datestop) between date(si_date_start) and date(si_date_end) AND
								si_invoice_fk_invoicehead is not null )*/;
		
		declare local temporary table ttsubhead_tobill(
			ts_sh_id integer, ts_datestart datetime, ts_datestop datetime
		) on commit PRESERVE rows;
		
		//ouverture du curseur
		open cur_subtobill;
		set lb_goon = 1;
			
		subhead_loop:		
		LOOP				
			fetch next cur_subtobill into ll_sh_id, ldt_datestart, ldt_subheaddatestop, ll_periodicity, ll_sh_monthdec, ll_sh_typeabo;

			IF SQLSTATE = err_notfound or lb_goon = 0 THEN
				LEAVE subhead_loop;
			END IF;
			
			SELECT dateadd(MONTH, ll_periodicity, ldt_datestart) -1 INTO ldt_datestop FROM dummy;
			
			date_loop:
			LOOP
				//on sort de la boucle si la date de départ de l interval est supérieur a la date de fin d abonnement OU si la date de début de la période a facturé est supérieur a l horizon choisi
				IF ldt_datestart >= ldt_subheaddatestop OR DATEFORMAT( dateadd(MONTH, ll_sh_monthdec, ldt_datestart),'YYYYMM') > DATEFORMAT(adt_datecheck,'YYYYMM') THEN
					LEAVE date_loop;
				END IF;
				//si date de fin est > que la date de fin de contrat, on lui assigne la date defin d abonnement
				IF ldt_datestop > ldt_subheaddatestop THEN
					set ldt_datestop = ldt_subheaddatestop;
				END IF;
				
				//vérifié si la période choisie est déjà ou non facturé
				set ldt_SI_datestart_max = null;
				IF (ll_sh_typeabo = 1) THEN
					SELECT max(si_date_end)
					  INTO ldt_SI_datestart_max
					  FROM SUBINVOICE
					 WHERE si_subscribe_fk_SUBHEAD = ll_sh_id AND
						((si_date_start between ldt_datestart and ldt_datestop) OR
						(si_date_end between ldt_datestart and ldt_datestop));
				ELSE
					SELECT max(sa_date_end)
					  INTO ldt_SI_datestart_max
					  FROM SUBACTION
					 WHERE sa_subscribe_fk_SUBHEAD = ll_sh_id AND
						((sa_date_star
```

*Source tronquee (3636 caracteres au total)*
