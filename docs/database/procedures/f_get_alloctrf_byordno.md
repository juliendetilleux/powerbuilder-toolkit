# Function: f_get_alloctrf_byordno

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_typ | char(1 | IN |

## Retourne
`decimal(12,3)`

## Source
```sql
create FUNCTION f_get_alloctrf_byordno( IN as_typ char(1), IN ai_macode integer, IN ai_maitemseq integer )
RETURNS decimal(12,3)
DETERMINISTIC
BEGIN
	DECLARE ad_ordalloc decimal(12,3);

	SELECT sum( IF isnull(macustalloc,0) - isnull(maissued_trf,0) < 0 THEN
					0
				ELSE
					isnull(macustalloc,0) - isnull(maissued_trf,0)
				ENDIF )
	  INTO ad_ordalloc
	  FROM matallocs
	 WHERE matyp like as_typ AND
		macode = ai_macode AND
		maitemseq = ai_maitemseq ;
	
	IF ad_ordalloc is null then
		set ad_ordalloc = 0 ;
	end if ;

	RETURN ad_ordalloc;
END
```
