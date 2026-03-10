# Procedure: wss_shipto

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @param_proc | TEXT | IN |
| @json | TEXT | IN |

## Source
```sql
create PROCEDURE DBA."wss_shipto"(IN @param_proc TEXT, IN @json TEXT)
BEGIN
	--BEGIN OBLIGATORY VARIABLE
	DECLARE @proc_name VARCHAR(255);
	DECLARE @log_id BIGINT;
	-- END OBLIGATORY VARIABLE

	-- BEGIN LOCAL VARIABLE
	DECLARE @stcode shipto.stcode%TYPE;
	DECLARE @stseq shipto.stseq%TYPE;
	DECLARE @stdesc shipto.stdesc%TYPE;
	DECLARE @stactiv shipto.stactiv%TYPE;
	DECLARE @stmain shipto.stmain%TYPE;
	DECLARE @stadr1 shipto.stadr1%TYPE;
	DECLARE @stadr2 shipto.stadr2%TYPE;
	DECLARE @stzip shipto.stzip%TYPE;
	DECLARE @stloc shipto.stloc%TYPE;
	DECLARE @stcountr shipto.stcountr%TYPE;
	DECLARE @stshipdays shipto.stshipdays%TYPE;
	DECLARE @stcmnt shipto.stcmnt%TYPE;
	DECLARE @sttel shipto.sttel%TYPE;
	DECLARE @stfax shipto.stfax%TYPE;
	DECLARE @stmail shipto.stmail%TYPE;
	DECLARE @stcontact shipto.stcontact%TYPE;
	DECLARE @stcustomdoc shipto.stcustomdoc%TYPE;
	DECLARE @steancode shipto.steancode%TYPE;
	DECLARE @stdefturn shipto.stdefturn%TYPE;
	DECLARE @stshipcmnt shipto.stshipcmnt%TYPE;
	DECLARE @sttype shipto.sttype%TYPE;
	DECLARE @stshipadcode shipto.stshipadcode%TYPE;
	DECLARE @stshipseq shipto.stshipseq%TYPE;
	DECLARE @stuseadrescomp shipto.stuseadrescomp%TYPE;
	DECLARE @stadrescomp1 shipto.stadrescomp1%TYPE;
	DECLARE @stadrescomp2 shipto.stadrescomp2%TYPE;
	DECLARE @stadrescomp3 shipto.stadrescomp3%TYPE;
	DECLARE @stadrescomp4 shipto.stadrescomp4%TYPE;
	DECLARE @stadrescomp5 shipto.stadrescomp5%TYPE;
	DECLARE @stadrescomp6 shipto.stadrescomp6%TYPE;
	DECLARE @stref shipto.stref%TYPE;
	DECLARE @stturnbyday shipto.stturnbyday%TYPE; //Gestion des tourn�es par jour
	DECLARE @stturnmonday shipto.stturnmonday%TYPE; //Tourn�e du lundi
	DECLARE @stturntuesday shipto.stturntuesday%TYPE; //Tourn�e du mardi
	DECLARE @stturnwednesday shipto.stturnwednesday%TYPE; //Tourn�e du mercredi
	DECLARE @stturnthursday shipto.stturnthursday%TYPE; //Tourn�e du jeudi
	DECLARE @stturnfriday shipto.stturnfriday%TYPE; //Tourn�e du vendredi
	DECLARE @stturnsaturday shipto.stturnsaturday%TYPE; //Tourn�e du samedi
	DECLARE @stturnsunday shipto.stturnsunday%TYPE; //Tourn�e du dimanche
	DECLARE @stcountrid shipto.stcountrid%TYPE;
	DECLARE @ststateid shipto.ststateid%TYPE; //Code �tat pour des pays comme les USA n�cessaire pour l'envoi Fedex
	DECLARE @stapbcode shipto.stapbcode%TYPE; //code nationnale pour les pharmacies
	-- END LOCAL VARIABLE

	-- BEGIN OBLIGATORY SCRIPT
	SELECT proc_name INTO @proc_name FROM sysprocedure WHERE proc_id = @@procid;
	
	IF EXISTS( SELECT 1 FROM sysobjects WHERE type = 'P' AND name = @proc_name + '_specific') THEN
		EXECUTE IMMEDIATE WITH RESULT SET ON 'CALL ' + @proc_name + '_specific(''' + @param_proc + ''',''' + @json + ''')';
		RETURN
	END IF;

	CALL wsp_create_log_call_api (@log_id, @proc_name, @param_proc, @json);
	
	DROP VARIABLE IF EXISTS param;
	BEGIN
		CALL sp_parse_json('param', @json);
		EXCEPTION WHEN OTHERS THEN
			CALL wsp_return_log_api_call (@log_id, 20000, 'Erreur parsing json');
			RAISERROR 20000 'Erreur parsing json';
			RETURN;
```

*Source tronquee (12388 caracteres au total)*
