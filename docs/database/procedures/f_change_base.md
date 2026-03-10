# Function: f_change_base

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| Orig | numeric(9 | IN |
| 0 |  | IN |

## Retourne
`varchar(20`

## Source
```sql
create FUNCTION f_change_base( IN Orig numeric(9,0) )
		RETURNS varchar(20 char)
		BEGIN
			DECLARE ls_answer varchar(20 char);
			/* Saisissez ici les instructions de la fonction */
			DECLARE reliq numeric(9,0);
			DECLARE newfig numeric(6,0);
			DECLARE offset numeric(6,0);
			DECLARE base numeric(6,0);
		
			set offset = 48 ;
			set base = 42 ;
			set reliq = Orig ;
			set ls_Answer = '' ;
			
			relic_loop:
			LOOP
				if reliq <= base then
					leave relic_loop;
				end if;
				
				set NewFig = mod(reliq, base) ;
				set ls_answer = ls_answer +  char(offset + NewFig) ;
				set reliq = (reliq - NewFig) / base ;
			END LOOP relic_loop;
		
			set ls_answer = ls_answer +  char(offset + reliq) ;
		
			RETURN ls_answer;
		END
```
