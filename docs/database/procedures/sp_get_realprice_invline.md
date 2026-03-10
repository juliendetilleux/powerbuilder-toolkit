# Procedure: sp_get_realprice_invline

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| an_ilcode | numeric(6 | IN |

## Source
```sql
create PROCEDURE DBA."sp_get_realprice_invline"(an_ilcode numeric(6), an_illine numeric(4))
		RESULT (ilrealval numeric(8,2))
	
	BEGIN			
		//d�claration des variables
	   DECLARE ln_ihfacnot numeric(2,0);
	   DECLARE ln_ihcurconv numeric(10,6);
		DECLARE ln_ihesct numeric(4,2);
		DECLARE ln_ihrist numeric(4,2);
	
		DECLARE ln_invlineval numeric(8,2);
	
		DECLARE ln_ristval numeric(8,2);
			
		//R�cup�rations des donn�es
		SELECT invoiceline.ilsalval
			into ln_invlineval
			from invoiceline
			where invoiceline.iltype <> 'P' and
					invoiceline.iltype <> 'R' and
					invoiceline.iltype <> 'Y' and					
					invoiceline.iltype <> 'Z' and
					invoiceline.ilcode = an_ilcode and
					invoiceline.illine = an_illine;
					

		SELECT first invoicehead.ihfacnot,
						 invoicehead.ihcurconv,
						 invoicehead.ihesct,
						 invoicehead.ihrist
			into ln_ihfacnot,
				  ln_ihcurconv,
				  ln_ihesct,
				  ln_ihrist
			from invoicehead
			where invoicehead.ihcode = an_ilcode
			order by 1;
		
		//v�rif des valeur
		if ln_invlineval is null then
			set ln_invlineval = 0;
		end if;
		if ln_ihfacnot is null then
			set ln_ihfacnot = 1;
		end if;
		if ln_ihcurconv is null then
			set ln_ihcurconv = 1;
		end if;
		if ln_ihesct is null then
			set ln_ihesct = 0;
		end if;
		if ln_ihrist is null then
			set ln_ihrist = 0;
		end if;
				
		//calcul de la ristourne
		
		set ln_ristval = ln_invlineval * ( ln_ihrist/100);
		set ln_invlineval = ln_invlineval - ln_ristval;
		
		//calcul escompte
		
		set ln_invlineval = ln_invlineval / ( 1 + (ln_ihesct/100));
	
		//calcul valeur r�elle
		
		set ln_invlineval = (ln_invlineval * ln_ihfacnot) / ln_ihcurconv;
				
		select ln_invlineval from dummy ;
	
	END
```
