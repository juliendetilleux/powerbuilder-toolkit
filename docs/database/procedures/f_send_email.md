# Function: f_send_email

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
| @message_html | LONG VARCHAR DEFAULT NULL | IN |
| @file | LONG VARCHAR DEFAULT NULL | IN |
| @smidcode | INTEGER DEFAULT NULL | IN |

## Retourne
`INTEGER`

## Source
```sql
create FUNCTION DBA."f_send_email"(
										IN @uscode			LONG VARCHAR DEFAULT NULL,
										IN @recipient		LONG VARCHAR DEFAULT NULL,
										IN @cc				LONG VARCHAR DEFAULT NULL,
										IN @bcc				LONG VARCHAR DEFAULT NULL,
										IN @subject			LONG VARCHAR DEFAULT NULL,
										IN @message			LONG VARCHAR DEFAULT NULL,
										IN @message_html	LONG VARCHAR DEFAULT NULL,
										IN @file			LONG VARCHAR DEFAULT NULL,
										IN @smidcode		INTEGER DEFAULT NULL)
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
	DECLARE @return_message			LONG VARCHAR;
	DECLARE @error_code				INTEGER;
	DECLARE @error_text				LONG VARCHAR;
	DECLARE @content				LONG VARCHAR;
	DECLARE @sqlcode				INTEGER;
	DECLARE @sqlstate				VARCHAR (5);
	DECLARE @errormsg				VARCHAR (32767);
	DECLARE @file_name				LONG VARCHAR;
	DECLARE @return_proc			INTEGER;
	DECLARE cur_file				CURSOR FOR SELECT row_value FROM sa_split_list( @file, ';' );
	DECLARE @smstatut				INTEGER;
	DECLARE @mixed	    			VARCHAR(100);
	DECLARE @related				VARCHAR(100);
    DECLARE @alternative            VARCHAR(100);
    DECLARE @start                  INTEGER;
    DECLARE @start2                 INTEGER;
    DECLARE @end                    INTEGER;
    DECLARE @image                  LONG VARCHAR;
    DECLARE @image_cpt              INTEGER;
    DECLARE @image_id               VARCHAR(100);
    DECLARE @image_src              LONG VARCHAR;

	SET @mixed = '------=' || UUIDTOSTR(NEWID( ));
	SET @related = '------=' || UUIDTOSTR(NEWID( ));
 	SET @alternative = '------=' || UUIDTOSTR(NEWID( ));

	/*SET @mixed = '------=MIXED';
	SET @related = '------=RELATED';
 	SET @alternative = '------=ALTERNATIVE';*/


    IF (LOCATE(@uscode, '@', 0) = 0) THEN
    		SELECT usname,usmail
    		INTO @smtp_sender_name, @smtp_sender
    		FROM users
    		WHERE uscode = @uscode;
    	ELSE
    		SET @smtp_sender = @uscode;
    		SET @smtp_sender_name = '';
    	END IF;





	IF (@smidcode IS NOT NULL) THEN
		SELECT	smsender,
				smrecipient,
				smcc,
				smbcc,
				smsubject,
				smmessage,
				smmessage_html,
				smfile
		INTO	@smtp_sender,
				@recipient,
				@cc,
				@bcc,
				@subject,
				@message,
				@file
		FROM   sendmail
		WHERE smidcode = @smidcode;
	END IF;

	SET @smtp_sender          = @smtp_sender;
	SET @smtp_server          = f_get_param_string('CRMMAIL', 'SMTP', 'ID');
	SET @smtp_port            = CAST(f_get_param_number('CRMMAIL', 'SMTP', 'PORT') AS INTEGER);
	SET @smtp_timeout		  = CAST(f_get_param_number('CRMMAIL', 'SMTP', 'TIMEOUT') AS INTEGER);
	SET @smtp_sender_name     = @smtp_sender_name;
	SET @smtp_auth_username   = f_get_param_string('CRMMAIL', 'SMTP', 'USER
```

*Source tronquee (12210 caracteres au total)*
