# Function: f_get_param_string

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @piid | VARCHAR(30 | IN |

## Retourne
`VARCHAR(120)`

## Source
```sql
create FUNCTION f_get_param_string( @piid VARCHAR(30), @pikey VARCHAR(30), @pisubkey VARCHAR(30))
RETURNS VARCHAR(120)
NOT DETERMINISTIC
BEGIN
	DECLARE @value VARCHAR(120);
	SELECT  pistring INTO @value FROM paramini where piid=@piid and pikey=@pikey and pisubkey=@pisubkey;
	RETURN @value;
END
```
