# Procedure: validate_action

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @aacode | VARCHAR(200 | IN |

## Source
```sql
create PROCEDURE validate_action(IN @aacode VARCHAR(200), IN @email VARCHAR(200))
RESULT (html_return LONG VARCHAR)
BEGIN
	DECLARE @html LONG VARCHAR;
	DECLARE @aastatus INT;
	
	CALL dbo.sa_set_http_header( 'Content-Type', 'text/html' );
	
	SELECT aastatus
	INTO @aastatus
	FROM adrsactions
	WHERE aacode = @aacode;
	IF (@aastatus = 0) THEN
		SET @html = f_get_html_template('FORMULAIRE VALIDATE ACTION', '@aacode=' || @aacode || '&@send_email=' || @email);
		SELECT @html FROM SYS.DUMMY;
	ELSE
		SET @html = f_get_html_template('ACTION DEJA VALIDE', '@aacode=' || @aacode || '&@send_email=' || @email);
		SELECT @html FROM SYS.DUMMY;
	END IF;
END
```
