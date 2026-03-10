# Function: f_gethours_from_strings

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_starth | char(4 | IN |

## Retourne
`DECIMAL(15,6)`

## Source
```sql
create FUNCTION f_gethours_from_strings( IN as_starth char(4), IN as_endh varchar(4))
		RETURNS DECIMAL(15,6)
		BEGIN
			DECLARE ld_nbhours DECIMAL(15,6);
			DECLARE ld_DecSH DECIMAL(15,6);
			DECLARE ld_DecEH DECIMAL(15,6);
			/* Saisissez ici les instructions de la fonction */

			set ld_DecSH = cast(left(as_starth,2) as integer) + (cast(right(as_starth,2) as decimal(15,6))/ 60);
			set ld_DecEH = cast(left(as_endh,2) as integer) + (cast(right(as_endh,2) as decimal(15,6))/ 60);

			set ld_nbhours =(ld_DecEH - ld_DecSH) ;
			
			RETURN ld_nbhours;
		END
```
