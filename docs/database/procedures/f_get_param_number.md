# Function: f_get_param_number

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @piid | VARCHAR(30 | IN |

## Retourne
`NUMERIC(12,3)`

## Source
```sql
create FUNCTION f_get_param_number( @piid VARCHAR(30), @pikey VARCHAR(30), @pisubkey VARCHAR(30))
RETURNS NUMERIC(12,3)
NOT DETERMINISTIC
BEGIN
	DECLARE @value NUMERIC(12,3);
	SELECT  pivalue INTO @value FROM paramini where piid=@piid and pikey=@pikey and pisubkey=@pisubkey;
	RETURN @value;
END
```
