# Procedure: TRAITEMENT_ADRSACTIONS

## Type
Procedure stockee SQL Anywhere

## Source
```sql
create PROCEDURE TRAITEMENT_ADRSACTIONS()
BEGIN
	DECLARE @html LONG VARCHAR;
	DECLARE @RETURN INT;
	DECLARE @email VARCHAR(255);
	DECLARE @email2 VARCHAR(255);
	DECLARE @admail VARCHAR(255);
	DECLARE @objet VARCHAR(1000);
	DECLARE @objet2 VARCHAR(1000);
	DECLARE @aacode NUMERIC(6,0);
	DECLARE @aarespons VARCHAR(50);
	DECLARE @date_cloture DATE;
	DECLARE @sender VARCHAR(255);
	DECLARE @technical VARCHAR(255);
	DECLARE @email_send INT;
	DECLARE @adcode VARCHAR(10);
	DECLARE @ctmail VARCHAR(255);
	DECLARE @aamccdo VARCHAR(10);
	DECLARE @cur_select CURSOR FOR 	SELECT aacode, IsNull(aamccdo, '##########'),aadesc
									FROM adrsactions, adrsactionspoint
									WHERE adrsactions.aamailsend IS NULL
									AND aastatus = 0
									AND aaconfirmstatus IS NULL
									AND adrsactionspoint.apaacode = adrsactions.aacode
									AND adrsactionspoint.apusedpoint > 0;
	DECLARE @cur_auto CURSOR FOR 	SELECT aacode, CONVERT(DATE,(SELECT A.cldate
													FROM (	SELECT cldate, ROW_NUMBER() OVER (ORDER BY cldate ASC) as 'line'
															FROM calline
															WHERE cldate > B.aamailsend
															AND clwork = 'Y'
															AND clcode = '#CRM#') A
													WHERE A.line = 2)) as date_cloture
									FROM adrsactions B, adrsactionspoint C
									WHERE aamailsend IS NOT NULL
									AND aaconfirmstatus IS NULL
									AND aastatus = 0
									AND C.apaacode = b.aacode
									AND C.apusedpoint > 0;
	DECLARE @cur_email CURSOR FOR	SELECT ctmail
									FROM contacts
									WHERE ctadcode = @aamccdo
									AND ctpoint = 1
									AND ctmail <> ''
									AND ctmail IS NOT NULL;
	

	-- ENVOI DES MAILS
   	OPEN @cur_select;
    lpall: LOOP
    	FETCH NEXT @cur_select INTO @aacode, @aamccdo, @objet;
        IF SQLCODE <> 0 THEN LEAVE lpall END IF;
		SET @email_send = 0;
		
		SELECT mail_from, mail_technical
		INTO @sender, @technical
		FROM multico
		WHERE mccode = @aamccdo;
		
		OPEN @cur_email;
		lemail: LOOP
			FETCH NEXT @cur_email INTO @ctmail;
			IF SQLCODE <> 0 THEN LEAVE lemail END IF;
			SET @html = '';
			SET @html = f_get_html_template('ENVOI MAIL ACTION POUR VALIDATION','@aacode=' || @aacode || '&@send_email=' || @ctmail);
			SET @email_send = 1;
			
			IF EXISTS (SELECT 1 FROM sysobjects WHERE name = 'TEST_MAIL') THEN
				SELECT email
				INTO @email2
				FROM TEST_MAIL;
				IF (@email2 IS NOT NULL AND @email2 <> '') THEN
					SET @ctmail = @email2;
				END IF;
			END IF;		
		
			SET @objet2 = 'Validation de l''action : ' || @objet;
			SET @return = f_send_email(@sender, @ctmail, '', '', @objet2, '', @html, '');
			IF (@return > 0) THEN
				UPDATE adrsactions
				SET aamailsend = GETDATE()
				WHERE aacode = @aacode;
			ELSE
				SET @return = f_send_email(@sender, @technical, '', '', 'Problème sur l''envoi de ce mail', '', @html, '');
			END IF;
		END LOOP;
		CLOSE @cur_email;
		
		IF (@email_send = 0) THEN
			SELECT ctmail, aadesc, admail, aarespons, adcode
				INTO @email, @objet, @admail, @aarespons, @adcode
	
```

*Source tronquee (4967 caracteres au total)*
