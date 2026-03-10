# Function: f_CleanComment

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_string | VARCHAR(256 | IN |

## Retourne
`varchar(256)`

## Source
```sql
create FUNCTION f_CleanComment ( IN as_string VARCHAR(256)) RETURNS varchar(256)
			Begin
	
				DECLARE ls_return Varchar(256);
				
				select replace(as_string, char(13), ' ') into ls_return;
				select replace(ls_return, char(10), ' ') into ls_return;
				select replace(ls_return, char(9), ' ') into ls_return;
				select replace(ls_return, '''', ' ') into ls_return;
				select replace(ls_return, '"', ' ') into ls_return;
	
				return ls_return;
			End
```
