# Procedure: replace_string_with_select

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @source | LONG VARCHAR | INOUT |
| @select | LONG VARCHAR | IN |

## Source
```sql
create PROCEDURE replace_string_with_select( INOUT @source LONG VARCHAR,
                                                     IN @select LONG VARCHAR)
BEGIN
    DECLARE @cur_select CURSOR FOR SELECT name,domain_name FROM sa_describe_query('SELECT * FROM (' || @select || ') AS TABLE_REPLACE_STRING');
    DECLARE @cur_select2 CURSOR FOR SELECT name FROM sa_describe_query(@select);
    DECLARE @cur_select3 CURSOR FOR SELECT name FROM sa_describe_query(@select);
    DECLARE @cur_all CURSOR FOR SELECT thmarked, ISNULL(thmarkedvalue, thmarkedsql) as thmarkedvalue FROM template_html where thcode = 'ALL';
    DECLARE @new_select LONG VARCHAR;
    DECLARE @column_name VARCHAR(1000);
    DECLARE @column_type VARCHAR(1000);
    DECLARE @base_column_name VARCHAR(1000);
    DECLARE @row LONG VARCHAR;
    DECLARE @start INTEGER;
    DECLARE @end INTEGER;
	DECLARE @sqlcode				INTEGER;
	DECLARE @sqlstate				VARCHAR (5);
	DECLARE @errormsg				VARCHAR (32767);
    DECLARE @value      LONG VARCHAR;
    DECLARE @nb_row     INTEGER;

   	OPEN @cur_all;
    SET @new_select = '';
    lpall: LOOP
    	FETCH NEXT @cur_all INTO @column_name, @value;
        IF SQLCODE <> 0 THEN LEAVE lpall END IF;
        IF (LOCATE(UPPER(@value), 'SELECT') > 0) THEN
            SET @new_select = @value;
        ELSE
            SET @new_select = 'SELECT ' || @value || ' FROM SYS.DUMMY';
        END IF;
        SELECT to_string(@new_select) as TABLE_REPLACE_STRING INTO @new_select;
        SET @new_select = SUBSTR(@new_select, 1, LOCATE(@new_select, ']') -1);
        IF (LOCATE(@source, '[' || @column_name || ']') > 0) THEN
           SET @source = REPLACE(@source,'[' || @column_name || ']', @new_select);
        END IF;
    END LOOP;
    CLOSE @cur_all;

    IF (Trim(@select) <> '') THEN
		/* Remplacement Balise multiple */
        SET @new_select = '';
       	OPEN @cur_select;
    	lp: LOOP
    		FETCH NEXT @cur_select INTO @column_name, @column_type;
    		IF SQLCODE <> 0 THEN LEAVE lp END IF;
            IF (@column_type = 'long binary') THEN
                SET @column_name = 'STRING(''[' || @column_name || '='',BASE64_ENCODE("' || @column_name || '"),'']'')';
            ELSE
                SET @column_name = 'STRING(''[' || @column_name || '='',CAST("' || @column_name || '" AS LONG VARCHAR),'']'')';
            END IF;
            IF (@new_select <> '') THEN
                SET @new_select = @new_select || ',';
            END IF;
            SET @new_select = @new_select || @column_name || '\n';
    	END LOOP;
    	CLOSE @cur_select;
        SET @new_select = 'SELECT STRING(' || @new_select || ') FROM (' || @select || ') AS TABLE_REPLACE_STRING';

        BEGIN
            DECLARE @cur_result CURSOR USING @new_select;
            OPEN @cur_result;
            SET @nb_row = 0;
            lp1: LOOP
                FETCH NEXT @cur_result INTO @row;
    		    IF SQLCODE <> 0 THEN LEAVE lp1 END IF;
                SET @nb_row = @nb_row + 1;
                SET @column_name = '';
   
```

*Source tronquee (5183 caracteres au total)*
