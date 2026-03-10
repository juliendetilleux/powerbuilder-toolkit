# Procedure: sp_advsched_wc_assigned

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_mwcode | integer | IN |
| ai_mwline | integer | IN |
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_wc_assigned (IN ai_mwcode integer, IN ai_mwline integer, IN ai_schednum numeric(3,0), OUT ai_min_assigned integer)
//result(ai_min_assigned integer)
BEGIN
	//proc�dure permettant de savoir la dur�e d�j� assign� pour un poste de charge, sans tenir compte de ce qui a �t� assign� dans le pass�
	DECLARE ll_min_assigned_future integer;
	DECLARE ll_min_assigned_inprogress integer;
	
	//dur�e pr�vue dans le future
	SELECT sum(maduration)
	  INTO ll_min_assigned_future
	  FROM mfgwcreqs_advsc
	 WHERE mamwcode = ai_mwcode AND
		mamwline = ai_mwline AND
		maschednum = ai_schednum AND
		matype not in (2,3) /*AND	/*ne prend pas en compte les heures de d�bordemment et les heures non assign�*/
		mastart >= now() */;

	if ll_min_assigned_future is null then
		set ll_min_assigned_future = 0 ;
	end if ;
/*
	//dur�e pr�vue en cours
	SELECT sum( mfgwcreqs_advsc.maduration - minutes(mfgwcreqs_advsc.mastart, now()) )
	  INTO ll_min_assigned_inprogress
	  FROM mfgwcreqs_advsc
	 WHERE mamwcode = ai_mwcode AND
		mamwline = ai_mwline AND
		maschednum = ai_schednum AND
		mastart < now() AND
		matype <> 2 AND /*ne prend pas en compte les heures de d�bordemment*/
		DATEADD( MINUTE, mfgwcreqs_advsc.maduration, mfgwcreqs_advsc.mastart ) > now();*/

	if ll_min_assigned_inprogress is null then
		set ll_min_assigned_inprogress = 0 ;
	end if ;
	
	set ai_min_assigned = ll_min_assigned_future + ll_min_assigned_inprogress;
	//select ai_min_assigned from dummy;
END
```
