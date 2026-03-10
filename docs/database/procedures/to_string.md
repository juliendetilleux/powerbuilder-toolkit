# Function: to_string

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @select | LONG VARCHAR | IN |

## Retourne
`LONG`

## Source
```sql
create FUNCTION to_string (IN @select LONG VARCHAR )
RETURNS  LONG VARCHAR
BEGIN
DECLARE @unload LONG VARCHAR;
DECLARE @result LONG VARCHAR;
SET @unload = STRING ('UNLOAD ', @select, ' INTO VARIABLE @result ', ' DELIMITED BY ''^'' ', ' ROW DELIMITED BY ''],['' ',' ESCAPES OFF HEXADECIMAL OFF QUOTES OFF' );
EXECUTE IMMEDIATE @unload;
RETURN @result;
END
```
