# Function: f_get_item_from_GLN

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_gln | varchar(20 | IN |

## Retourne
`varchar(30`

## Source
```sql
create function DBA.f_get_item_from_GLN( in as_gln varchar(20) )
returns varchar(30 char)
begin
  declare as_item_code varchar(30 char);
  //os2863 - v�rifie si on trouve 1 seul artilcle avec ce code ean
  //retourne l article trouv�e, si plusieurs article, renvoi chaine de caract�res vide
  declare ls_listitems varchar(1024);
  declare ll_count integer;

  if as_gln is null then
    set as_gln = '';
  end if;
  if trim(as_gln) = '' then
    set as_item_code = '';
  else
    select count(itcode),
      list(itcode) into ll_count,
      ls_listitems from items
      where itactiv = 'Y'
      and(trim(itean) = trim(as_gln) or trim(itean2) = trim(as_gln) or trim(itean3) = trim(as_gln));
	
    if ll_count = 0 then	//auncun article avec ce code ean, on cherche avec le code article alors
		select count(itcode),
		  list(itcode) into ll_count,
		  ls_listitems from items
		  where itactiv = 'Y'
		  and(itcode = trim(as_gln));
	end if;
	
    if ll_count = 1 then
      set as_item_code = ls_listitems;
    else
      set as_item_code = '';
    end if;
  end if;
  return as_item_code;
end
```
