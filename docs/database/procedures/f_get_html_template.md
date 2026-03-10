# Function: f_get_html_template

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @hscode | VARCHAR(100 | IN |

## Retourne
`LONG`

## Source
```sql
create FUNCTION f_get_html_template (IN @hscode VARCHAR(100),
							IN @parameter LONG VARCHAR)
RETURNS LONG VARCHAR
BEGIN
	DECLARE @hshtml LONG VARCHAR;
	DECLARE	@hsidcode INTEGER;
	DECLARE @select LONG VARCHAR;
	DECLARE @param VARCHAR(1000);
	DECLARE @param_value VARCHAR(1000);
	DECLARE @cur_html_select CURSOR FOR SELECT hseselect FROM html_select WHERE html_select.hsidcode = @hsidcode;
	DECLARE @cur_parameter CURSOR FOR SELECT row_value FROM sa_split_list( @parameter, '&' );
	
	
	SELECT	hshtml, hsidcode
	INTO	@hshtml, @hsidcode
	FROM	html_source
	WHERE	hscode = @hscode;
	
	IF (@hshtml IS NULL OR TRIM(@hshtml) = '') THEN
		RETURN '';
	END IF;
	

    OPEN @cur_html_select;
    lp1: LOOP
		FETCH NEXT @cur_html_select INTO @select;
		IF SQLCODE <> 0 THEN LEAVE lp1 END IF;
		OPEN @cur_parameter;
		lp2: LOOP
			FETCH NEXT @cur_parameter INTO @param;
			IF SQLCODE <> 0 THEN LEAVE lp2 END IF;
			SET @param_value = SUBSTR(@param, LOCATE(@param, '=') + 1);
			SET @param = SUBSTR(@param, 1, LOCATE(@param, '=') - 1);
			SET @select = REPLACE(@select, @param, @param_value);
		END LOOP;
		CLOSE @cur_parameter;
		
		CALL replace_string_with_select(@hshtml, @select);
	END LOOP;
	CLOSE @cur_html_select;

	RETURN @hshtml;
END
```
