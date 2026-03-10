# Procedure: sp_check_lotfill_foraccises

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| adt_startdate | datetime | IN |
| adt_stopdate | datetime | IN |

## Source
```sql
create PROCEDURE sp_check_lotfill_foraccises(IN adt_startdate datetime, IN adt_stopdate datetime )
BEGIN
	 	
	INSERT INTO dataerrors(
		decode,
		detyp,
		deseq,
		dedesc,
		dedatim)
	SELECT 'ACLO',
			'1',
			number(*),
			IF items.itum <> 'KG' AND isnull(items.itwistat,0) <= 0 THEN
				'Article ' + items.itcode + ' : poids intrastat pas aliment�'
			ELSE
				'Article ' + items.itcode + ', lot ' + lots.locode + ' : densit� ou �alcool pas aliment�e'
			ENDIF,
			now()
	   FROM histostock
			JOIN items ON histostock.hsitem = items.itcode
			JOIN lots ON histostock.hslot = lots.locode
	  WHERE histostock.hscode in ('DLMO','RTMO') AND
		   items.itcalcalcool = 1  AND
		   histostock.hsdatim between adt_startdate and adt_stopdate AND
		   (isnull(lots.lodensity,0) <= 0 OR
		   isnull(lots.lodegree,0) <= 0 OR
		   (items.itum <> 'KG' AND isnull(items.itwistat,0) <= 0 ))
	GROUP BY items.itcode,
		items.itname,
		lots.locode,
		lots.loorgcode,
		lots.lodensity,
		lots.lodegree,
		items.itum,
		items.itwistat
	HAVING sum(histostock.hsqty) > 0;
		
END
```
