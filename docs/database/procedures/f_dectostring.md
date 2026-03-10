# Function: f_dectostring

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| an_decimal | numeric(20 | IN |
| 2 |  | IN |

## Retourne
`varchar(50)`

## Source
```sql
create FUNCTION DBA."f_dectostring" ( IN an_decimal numeric(20,2)) RETURNS varchar(50)
	Begin

            DECLARE li_length integer;
           	DECLARE ls_return Varchar(50);

            set ls_return = cast(abs(an_decimal) as varchar(50));
			if abs(an_decimal) < 1 and an_decimal <> 0 then
				set ls_return = '0'+ls_return;
			end if;
			select replace(ls_return, '.',',')into ls_return;
			if an_decimal < 0 then
				set ls_return = '-'+ls_return;
			end if;
            set li_length = length(ls_return);
            CASE
                when an_decimal >= 10 THEN
                    set ls_return = left(ls_return, li_length-3);
                when an_decimal < 10 and an_decimal >= 1 THEN
                    set ls_return = left(ls_return, li_length-1);
            end case;
		
		return ls_return;
	End
```
