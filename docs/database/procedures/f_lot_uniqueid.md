# Function: f_lot_uniqueid

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_lot | varchar(20 | IN |

## Retourne
`varchar(30`

## Source
```sql
create FUNCTION f_lot_uniqueid( IN as_lot varchar(20) )
		RETURNS varchar(30 char)
		BEGIN
		
			DECLARE last_id numeric(9,0);
			DECLARE ls_Unique varchar(30);
			
			  SELECT lots.lolabelid
				INTO last_id
				FROM lots
			   WHERE lots.locode = as_lot ;
			
			if last_id is null then
				set last_id = 0 ;
			end if;
			set last_id = last_id + 1 ;
			
			if last_id > 999999 then
				set last_id = 1
			end if;
			
			UPDATE lots
			   SET lots.lolabelid = last_id
			 WHERE lots.locode = as_lot  ;
			 	
			ls_Unique = call f_change_base(Last_id) ;
			
			commit ;
			
			return ls_Unique;
		END
```
