# Procedure: sp_advsched_startdate_wc_result

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_schednum | numeric(3 | IN |
| 0 |  | IN |

## Source
```sql
create PROCEDURE sp_advsched_startdate_wc_result (IN ai_schednum numeric(3,0), IN as_ADVSCHD2 char(1), IN ai_mwcode integer, IN ai_sort integer)
result(lt_date datetime)
BEGIN
	//chercher la date commencement (selon param�tre ADVSCHD2 = J date du jour ou date de fin du poste de charge pr�c�dent de cet OF, si ADVSCHD2 = O date de l�OF ou date de fin du poste de charge pr�c�dent de cet OF)
	//Et renvoi un r�sultat
    declare lt_date datetime;
	
	CALL sp_advsched_startdate_wc ( ai_schednum, as_ADVSCHD2, ai_mwcode, ai_sort, lt_date);
	
	select lt_date from dummy;
END
```
