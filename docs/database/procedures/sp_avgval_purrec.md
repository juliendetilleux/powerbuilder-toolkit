# Procedure: sp_avgval_purrec

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| al_histoseq | integer | IN |

## Source
```sql
create PROCEDURE DBA."sp_avgval_purrec"(IN al_histoseq integer)
BEGIN		
	//fait une moyenne pond�r� des prix d achat de cet article depuis la derni�re p�riode et met le prix dans l article
	//formule prix article ((qt� stocks avant r�cept * cout unitaire article) + (qt� recep * val recept)) / (qt� stocks avant recept + qt� recept)
	DECLARE ls_itisumtarif char(1);
	DECLARE ld_hsqty numeric(12, 3);
	DECLARE ld_hsqtytarif numeric(12, 3);
	DECLARE ld_itbascost numeric(12, 3);
	DECLARE ld_value numeric(12, 3);
	DECLARE ld_stqty numeric(12, 3);
	DECLARE ld_stqtytarif numeric(12, 3);
	DECLARE ld_hsval numeric(12, 3);
	DECLARE ls_ITUMTRF char(1);
	DECLARE ls_hscode varchar(10);
	DECLARE ls_itcode varchar(30);
	DECLARE ld_itumtbascost numeric(12, 3);
	DECLARE ld_unit_purval numeric(12, 4);
		
	set ls_itcode = '';
		
	//progparam unit� tarifaire
	SELECT ppvalue
	  INTO ls_ITUMTRF
	  FROM progparam
	 WHERE ppcode = 'ITUMTRF';	
				
	if ls_ITUMTRF is null then
		set ls_ITUMTRF = '';
	end if;
	
	//recheche donn�e sur r�ception
	SELECT items.itcode,
		items.itisumtarif,
		histostock.hsqty,
		histostock.hsqtytarif,
		histostock.hscode,
		items.itbascost,
		histostock.hsval,
		items.itumtbascost,
		(select plpurval / IF plqtyreq is null then 1 else plqtyreq endif from purline where plcode = histostock.hsordno and plline = hsordlin)
	  INTO ls_itcode,
		ls_itisumtarif,
		ld_hsqty,
		ld_hsqtytarif,
		ls_hscode,
		ld_itbascost,
		ld_hsval,
		ld_itumtbascost,
		ld_unit_purval
	  FROM histostock JOIN items ON histostock.hsitem = items.itcode
	 WHERE histostock.hsseq = al_histoseq AND
		histostock.hscode IN ('RCPO', 'RTPO') ;
	
	if ls_itisumtarif is null then
		set ls_itisumtarif = 'N' ;
	end if;
	
	if ls_itcode <> '' then	
		//recherche donn�es sur stocks actuel	
		SELECT sum( stqty ),
			sum( IF stqtytarif is null THEN 0 ELSE stqtytarif ENDIF )
		  INTO ld_stqty,
			ld_stqtytarif
		  FROM stocks
		 WHERE stocks.stitem = ls_itcode AND
			stocks.stqty <> 0 ;
	
		if ld_hsval is null then
			set ld_hsval = 0;
		end if;
		if ls_hscode = 'RTPO' then
			set ld_hsqty = - ld_hsqty ;
		end if;
		if ld_stqty is null then
			set ld_stqty = 0;
		end if;
		if ld_stqtytarif is null then
			set ld_stqtytarif = 0;
		end if;
		if ld_hsqtytarif is null then
			set ld_hsqtytarif = 0;
		end if;		
		if ld_itumtbascost is null then
			set ld_itumtbascost = 0;
		end if;
		
		set ld_value = 0;
		
		//calcul du prix d achat selon formule
		if ld_stqty - ld_hsqty > 0 and ld_stqty <> 0 then
			set ld_value = (((ld_stqty - ld_hsqty) * ld_itbascost) + (ld_unit_purval * ld_hsqty)) /  ld_stqty;
		else
			if ld_hsqty > 0 then
				set ld_value = ld_unit_purval;
			end if;
		end if;
		
		if ld_value > 0 then
			if ls_ITUMTRF = '2' and ls_itisumtarif = 'Y' then	//gestion des unit�s tarifaire				
				UPDATE items
				   SET itumtbascost = ld_value / IF itumtarifconv = 0 THEN 1 ELSE itumtarifconv ENDIF,
					itbascost = ld_value ,
					itstdpur = (ld_value) + (if itpurxtrcost is null then 0 else itpurxt
```

*Source tronquee (3262 caracteres au total)*
