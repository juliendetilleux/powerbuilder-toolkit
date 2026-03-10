# Function: f_get_alloctrf_bystock

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_lot | varchar(30 | IN |

## Retourne
`decimal(12,3)`

## Source
```sql
create FUNCTION f_get_alloctrf_bystock( IN as_lot varchar(30), IN as_loc varchar(30) )
RETURNS decimal(12,3)
DETERMINISTIC
BEGIN
	DECLARE ad_stockalloc decimal(12,3);

	SELECT sum( IF isnull(macustalloc,0) - isnull(maissued_trf,0) < 0 THEN
					0
				ELSE
					isnull(macustalloc,0) - isnull(maissued_trf,0)
				ENDIF )
	  INTO ad_stockalloc
	  FROM matallocs
	 WHERE malot = as_lot AND
		maloc = as_loc ;
	
	IF ad_stockalloc is null then
		set ad_stockalloc = 0 ;
	end if ;

	RETURN ad_stockalloc;
END
```
