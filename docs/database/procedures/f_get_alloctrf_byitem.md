# Function: f_get_alloctrf_byitem

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_item | varchar(30 | IN |

## Retourne
`decimal(12,3)`

## Source
```sql
create FUNCTION f_get_alloctrf_byitem( IN as_item varchar(30) )
RETURNS decimal(12,3)
DETERMINISTIC
BEGIN
	DECLARE ad_itemalloc decimal(12,3);

	SELECT sum( IF isnull(macustalloc,0) - isnull(maissued_trf,0) < 0 THEN
					0
				ELSE
					isnull(macustalloc,0) - isnull(maissued_trf,0)
				ENDIF )
	  INTO ad_itemalloc
	  FROM matallocs
	 WHERE maitem = as_item ;
	
	IF ad_itemalloc is null then
		set ad_itemalloc = 0 ;
	end if ;

	RETURN ad_itemalloc;
END
```
