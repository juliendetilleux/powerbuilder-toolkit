# Function: f_send_email_select

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @uscode | LONG VARCHAR DEFAULT NULL | IN |
| @recipient | LONG VARCHAR DEFAULT NULL | IN |
| @cc | LONG VARCHAR DEFAULT NULL | IN |
| @bcc | LONG VARCHAR DEFAULT NULL | IN |
| @subject | LONG VARCHAR DEFAULT NULL | IN |
| @message | LONG VARCHAR DEFAULT NULL | IN |
| @select | LONG VARCHAR DEFAULT NULL | IN |
| @filename | VARCHAR(100 | IN |

## Retourne
`INTEGER`

## Source
```sql
create FUNCTION f_send_email_select(
											IN @uscode			LONG VARCHAR DEFAULT NULL,
											IN @recipient		LONG VARCHAR DEFAULT NULL,
											IN @cc				LONG VARCHAR DEFAULT NULL,
											IN @bcc				LONG VARCHAR DEFAULT NULL,
											IN @subject			LONG VARCHAR DEFAULT NULL,
											IN @message			LONG VARCHAR DEFAULT NULL,
											IN @select			LONG VARCHAR DEFAULT NULL,
											IN @filename		VARCHAR(100) DEFAULT NULL)
	RETURNS INTEGER
	BEGIN
		DECLARE @smtp_server			LONG VARCHAR;
		DECLARE @smtp_port				INTEGER;
		DECLARE @smtp_timeout			INTEGER;
		DECLARE @smtp_sender			LONG VARCHAR;
		DECLARE @smtp_sender_name		LONG VARCHAR;
		DECLARE @smtp_auth_username		LONG VARCHAR;
		DECLARE @smtp_auth_password		LONG VARCHAR;
		DECLARE @trusted_certificates   LONG VARCHAR;
		DECLARE @return_code			INTEGER;
		DECLARE @error_code				INTEGER;
		DECLARE @error_text				LONG VARCHAR;
		DECLARE @sqlcode				INTEGER;
		DECLARE @sqlstate				VARCHAR (5);
		DECLARE @errormsg				VARCHAR (32767);
		DECLARE @return_proc			INTEGER;
		DECLARE @smstatut				INTEGER;
		DECLARE @unload                 LONG VARCHAR;
		DECLARE @file                   LONG VARCHAR;

		IF (@filename IS NULL) THEN
			SET @file = 'c:\temp\' || dateformat(GetDate(), 'DDMMYYYY_HHNNSS') || '.txt';
		ELSE
			SET @file = 'c:\temp\' || @filename || '_' || dateformat(GetDate(), 'DDMMYYYY_HHNNSS') || '.txt';
		END IF;
		
		
		SET @unload = STRING('UNLOAD ', 'SELECT LIST(name, CHAR(9) ORDER BY column_number ASC) FROM sa_describe_query(''', @select, ''') TO ''', @file, ''' QUOTES OFF HEXADECIMAL OFF ESCAPES OFF');
		EXECUTE IMMEDIATE @unload;
		SET @unload = STRING ('UNLOAD ', @select, ' TO ''', @file , ''' APPEND ON QUOTES OFF HEXADECIMAL OFF ESCAPES OFF DELIMITED BY ''\x09''');
		EXECUTE IMMEDIATE @unload;

		SELECT usname,usmail
		INTO @smtp_sender_name, @smtp_sender
		FROM users
		WHERE uscode = @uscode;
				
		SET @smtp_sender          = @smtp_sender;
		SET @smtp_server          = f_get_param_string('CRMMAIL', 'SMTP', 'ID');
		SET @smtp_port            = CAST(f_get_param_number('CRMMAIL', 'SMTP', 'PORT') AS INTEGER);
		SET @smtp_timeout		  = CAST(f_get_param_number('CRMMAIL', 'SMTP', 'TIMEOUT') AS INTEGER);
		SET @smtp_sender_name     = @smtp_sender_name;
		SET @smtp_auth_username   = f_get_param_string('CRMMAIL', 'SMTP', 'USER');
		SET @smtp_auth_password   = f_get_param_string('CRMMAIL', 'SMTP', 'PASSWORD');
		

		IF (@message IS NULL) THEN
			SET @message = '';
		END IF;
		IF (TRIM(@cc) = '') THEN
			SET @cc = NULL;
		END IF;
		IF (TRIM(@bcc) = '') THEN
			SET @bcc = NULL;
		END IF;

		@return_code = CALL xp_startsmtp (
										smtp_sender          = @smtp_sender,
										smtp_server          = @smtp_server,
										smtp_port            = @smtp_port,
										timeout              = @smtp_timeout,
										smtp_sender_name     = @smtp_sender_name,
										smtp_auth_username   = @smtp_auth_username,
										smtp_auth_password   = @smtp_auth_password);

		IF (@return_cod
```

*Source tronquee (4885 caracteres au total)*
