# Procedure: confirm_action

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @aacode | VARCHAR(200 | IN |

## Source
```sql
create PROCEDURE confirm_action(IN @aacode VARCHAR(200), IN @email VARCHAR(255), IN @validate int, IN @comment LONG VARCHAR)
RESULT (html_return LONG VARCHAR)
BEGIN
	DECLARE @html LONG VARCHAR;
	DECLARE @html2 LONG VARCHAR;
	DECLARE @aarespons VARCHAR(50);
	DECLARE @objet LONG VARCHAR;
	DECLARE @return INT;
	DECLARE @usmail VARCHAR(255);
	DECLARE @email2 VARCHAR(255);
	DECLARE @aastatus INT;
	DECLARE @aamccdo VARCHAR(10);
	DECLARE @sender VARCHAR(255);
	DECLARE @mail_valid VARCHAR(255);
	DECLARE @mail_refusal VARCHAR(255);
	DECLARE @mail_technical VARCHAR(225);
	
	CALL dbo.sa_set_http_header( 'Content-Type', 'text/html' );

	SELECT aastatus
	INTO @aastatus
	FROM adrsactions
	WHERE aacode = @aacode;
	IF (@aastatus <> 0) THEN
		SET @html = f_get_html_template('ACTION DEJA VALIDE', '@aacode=' || @aacode || '&@send_email=' || @email);
		SELECT @html FROM SYS.DUMMY;
		RETURN;
	END IF;
	
	SELECT aarespons, aadesc, IsNull(aamccdo, '##########')
	INTO @aarespons, @objet, @aamccdo
	FROM adrsactions
	WHERE aacode = @aacode;
	
	SELECT mail_from, mail_valid, mail_refusal, mail_technical
	INTO @sender, @mail_valid, @mail_refusal, @mail_technical
	FROM multico
	WHERE mccode = @aamccdo;
	
	SELECT usmail
	INTO @usmail
	FROM users
	WHERE uscode = @aarespons;
	
	
	IF EXISTS (SELECT 1 FROM sysobjects WHERE name = 'TEST_MAIL') THEN
		SELECT email
		INTO @email2
		FROM TEST_MAIL;
		IF (@email2 IS NOT NULL AND @email2 <> '') THEN
			SET @usmail = @email2;
		END IF;
	END IF;
	
	IF (@validate = 1) THEN
		UPDATE adrsactions
		SET aaconfirmstatus = @validate,
			aaconfirmdate = GetDate(),
			aaconfirmtext = @comment,
			aaconfirmemail = @email,
			aastatus = 3,
			aawfsuccess = 'Y'
		WHERE aacode = @aacode;
	
		UPDATE adrsactionspoint
		SET apstatut = 2,
			aptypevalid = 3,
			apdatevalid = GetDate()
		WHERE apaacode = @aacode;
	
        SET @html = f_get_html_template('MAIL ACTION VALIDER', '@aacode=' || @aacode || '&@send_email=' || @email);
		
        SET @objet = 'Action validé (' || @aacode || ') [' || @aamccdo || '] : ' || @objet;
        SET @return = f_send_email(@sender, @mail_valid, '', '', @objet, '', @html, '');
		IF (@return > 0) THEN
			SET @html2 = f_get_html_template('ACTION VALIDER', '@aacode=' || @aacode || '&@send_email=' || @email);
			SELECT @html2 FROM SYS.DUMMY;
		END IF;
	ELSE
		UPDATE adrsactions
		SET aaconfirmstatus = @validate,
			aaconfirmdate = GetDate(),
			aaconfirmtext = @comment,
			aaconfirmemail = @email,
			aastatus = 3,
			aawfsuccess = 'N'
		WHERE aacode = @aacode;

		UPDATE adrsactionspoint
		SET apstatut = 1,
			aptypevalid = 1,
			apdatevalid = NULL
		WHERE apaacode = @aacode;		
		
	    SET @html = f_get_html_template('MAIL ACTION REFUSER','@aacode=' || @aacode || '&@send_email=' || @email);
        SET @objet = 'Action refusé (' || @aacode || ') [' || @aamccdo || '] : ' || @objet;
        SET @return = f_send_email(@sender, @mail_refusal, '', '', @objet, '', @html, '');
		IF (@return > 0) THEN
			SET @html2 = f_get_html_template(
```

*Source tronquee (3128 caracteres au total)*
