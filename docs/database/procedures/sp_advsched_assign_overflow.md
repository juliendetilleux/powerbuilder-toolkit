# Procedure: sp_advsched_assign_overflow

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_assign_overflow(IN ai_schednum numeric(3,0), IN ai_mwcode integer, IN ai_mwline integer)
BEGIN
	//ajout des d�bordemments si rien n est pr�vu dans le future pour ce poste de charge de cet OF
	DECLARE ll_count_future integer;
	DECLARE ldt_datemax datetime;
	DECLARE ldt_mastart datetime;
	DECLARE ll_mamachine integer;
	DECLARE ll_mchourly integer;
	DECLARE ll_nbday integer;
	DECLARE ll_i integer;
	DECLARE ll_hdid integer;
	DECLARE ldt_hdstart time;
	DECLARE ldt_hdstop time;
	DECLARE ldt_datetime_use datetime;
	DECLARE ls_clwork char(1);
	DECLARE ls_mccal varchar(6);

	set ll_mamachine = null;

	//v�rifi� que rien n est pr�vu dans le future pour ce poste de charge de cet OF
	SELECT count(*)
	  INTO ll_count_future
	  FROM mfgwcreqs_advsc
	 WHERE maschednum = ai_schednum AND
		mamwcode = ai_mwcode AND
		mamwline = ai_mwline AND
		mastart >= now() AND
		matype <> 3 ;

	if ll_count_future is null then
		set ll_count_future = 0;
	end if;

	//ok il n y a pas de records assign� dans le future, maintenant regarder le pr�c�dent (si il y en a un)
	if ll_count_future = 0 then
		SELECT first DATEADD( MINUTE, mfgwcreqs_advsc.maduration, mfgwcreqs_advsc.mastart ) as mastop, mamachine, machine.mchourly, machine.mccal, mfgwcreqs_advsc.mastart
		  INTO ldt_datemax, ll_mamachine, ll_mchourly, ls_mccal, ldt_mastart
		  FROM mfgwcreqs_advsc join machine
		 WHERE maschednum = ai_schednum AND
			mamwcode = ai_mwcode AND
			mamwline = ai_mwline AND
			mastop < now() AND
			matype <> 3
		ORDER BY mastop desc;
	end if;

	//si record trouv� on doit : supprim� tout les enregistrements qui existerai entre la date de fin et maintenant (excepter les fixe)
	// et remplire avec  des record de d�bordement
	if ll_mamachine is not null then
		//supprimer tout les enregistrement non fixe sur cette machine qui existe entre la date de fin et maintenant
		DELETE FROM mfgwcreqs_advsc
		WHERE maschednum = ai_schednum AND
			mamachine = ll_mamachine AND
			mastart >= ldt_datemax AND
			mastart < now() AND
			matype <> 1;

		//il faut aussi supprimer tout les assignations de cet OF, non fixe, dont le num�ro d ordonnacement est sup�rieur a ce poste de charge/OF
		//car si ce poste de charge nest pas fini, et bien les autres ne peuvent d�j� �tre commenc�
		DELETE FROM mfgwcreqs_advsc
		WHERE maschednum = ai_schednum AND
			mastart > ldt_mastart AND
			mamwcode = ai_mwcode AND
			mamwline > ai_mwline AND
			matype <> 1;

		//maintenant faut remplir les trous depuis la date de fin jusqua maintenant
		SELECT abs(DATEDIFF( DAY, ldt_datemax, now() )) INTO ll_nbday FROM dummy ;
		set ll_i = 0;

		//boucle sur les jours d ecart
		day_loop:		
		LOOP
			IF ll_i > ll_nbday THEN
				LEAVE day_loop;
			END IF;

			set ll_hdid = null ;

			//v�rifi� si on a pas dans hourly day un jour sp�cifique pour cette machine
			SELECT hourly_day.hdid,
					hourly_day.hdstart,
					hourly_day.hdstop
			  INTO ll_hdid,
					ldt_hdstart,
					ldt_hdstop
			  FROM hourly_day
			 WHERE hourly
```

*Source tronquee (4518 caracteres au total)*
