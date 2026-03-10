# Function: f_get_socity_from_GLN

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_gln | varchar(13 | IN |

## Retourne
`varchar(30`

## Source
```sql
create function DBA.f_get_socity_from_GLN( in as_gln varchar(13),in ai_typ_socity numeric(1) )
returns varchar(30 char)
begin
  declare as_adresse_code varchar(30 char);
  /* Saisissez ici les instructions de la fonction */
  //v�rifie si le gln envoy� correspond a une soci�t�
  //	si le ab_typ_socity = 0, v�rifie dans toute les soci�t� excepter les multico, si 1 v�rifi� dans les soci�t� client client, si 2 v�rifie dans les soci�t� fournisseur, si 3 v�rifie dans les soci�t� multico
  //si soci�t� trouv�e, on l alimente dans as_adcode
  //retourne la soci�t� trouv�e, si plusieurs soci�t�, renvoi chaine de caract�res vide
  declare ls_list_adcode varchar(1024);
  declare ll_count integer;
  set as_adresse_code = '';
  if as_gln is null then
    set as_gln = '';
  end if;
  case ai_typ_socity
  when 1 then //soci�t�s clients	(sauf multico)
    select count(adcode),
      list(adcode) into ll_count,
      ls_list_adcode from adresses
      where trim(adeancode) = trim(as_gln)
      and adcust = 'Y'
      and adactiv = 'Y'
      and not adcode = any(select mccode from multico)
      and adcode not like '#########%';
	
	if ll_count = 0 then //auncune soci�t� avec ce code ean, on cherche avec le code soci�t� alors
	  select count(adcode),
		  list(adcode) into ll_count,
		  ls_list_adcode from adresses
		  where adcode = trim(as_gln)
		  and adcust = 'Y'
		  and adactiv = 'Y'
		  and not adcode = any(select mccode from multico)
		  and adcode not like '#########%';
	end if;
  when 2 then //soci�t�s fournisseurs	(sauf multico)
    select count(adcode),
      list(adcode) into ll_count,
      ls_list_adcode from adresses
      where trim(adeancode) = trim(as_gln)
      and adsupp = 'Y'
      and not adcode = any(select mccode from multico)
      and adcode not like '#########%';
	
	if ll_count = 0 then //auncune soci�t� avec ce code ean, on cherche avec le code soci�t� alors
	  select count(adcode),
		  list(adcode) into ll_count,
		  ls_list_adcode from adresses
		  where adcode = trim(as_gln)
		  and adsupp = 'Y'
		  and not adcode = any(select mccode from multico)
		  and adcode not like '#########%';
	end if;
  when 3 then //soci�t� multico
    select count(adcode),
      list(adcode) into ll_count,
      ls_list_adcode from adresses
      where trim(adeancode) = trim(as_gln)
      and adactiv = 'Y'
      and adcode = any(select mccode from multico);
	
	if ll_count = 0 then //auncune soci�t� avec ce code ean, on cherche avec le code soci�t� alors
	  select count(adcode),
		  list(adcode) into ll_count,
		  ls_list_adcode from adresses
		  where adcode = trim(as_gln)
		  and adactiv = 'Y'
		  and adcode = any(select mccode from multico);
	end if;
  //toute les soci�t� (sauf multico)
  else
    select count(adcode),
      list(adcode) into ll_count,
      ls_list_adcode from adresses
      where trim(adeancode) = trim(as_gln)
      and adactiv = 'Y'
      and not adcode = any(select mccode from multico)
      and adcode not like '#########%';
	
	if ll_c
```

*Source tronquee (3664 caracteres au total)*
