# Procedure: sp_get_alcooluse

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| adt_startdate | datetime | IN |
| adt_stopdate | datetime | IN |

## Source
```sql
create PROCEDURE sp_get_alcooluse(IN adt_startdate datetime, IN adt_stopdate datetime )
	RESULT ( itcode varchar(30), itname varchar(60), locode varchar(30),
            loorgcode varchar(60), lodensity numeric(6,3), lodegree numeric(4,2),
            qty numeric(12,3), unit char(2), weight_by_unit numeric(8,3),
			lalcooluse numeric(10,2) )

BEGIN
	 SELECT items.itcode,
			items.itname,
			lots.locode,
			lots.loorgcode,
			lots.lodensity,
			lots.lodegree,
			sum(histostock.hsqty) as qty,
			items.itum,
			IF items.itum = 'KG' THEN
				1
			ELSE
				items.itwistat
			ENDIF as weight_by_unit,
			sum( ((histostock.hsqty * weight_by_unit) / lots.lodensity) * lots.lodegree /100 )
	   FROM histostock
			JOIN items ON histostock.hsitem = items.itcode
			JOIN lots ON histostock.hslot = lots.locode
	  WHERE histostock.hscode in ('DLMO','RTMO') AND
		   items.itcalcalcool = 1 AND
		   isnull(lots.lodensity,0) > 0 AND
		   isnull(lots.lodegree,0) > 0 AND
		   IF items.itum = 'KG' THEN 1 ELSE isnull(items.itwistat,0) ENDIF > 0 AND
		   histostock.hsdatim between adt_startdate and adt_stopdate
	GROUP BY items.itcode,
		items.itname,
		lots.locode,
		lots.loorgcode,
		lots.lodensity,
		lots.lodegree,
		items.itum,
		items.itwistat
	HAVING qty > 0;
		
END
```
