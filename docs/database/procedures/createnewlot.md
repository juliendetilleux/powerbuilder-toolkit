# Function: createnewlot

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| lotnum | varchar(20 | IN |

## Retourne
`int`

## Source
```sql
create FUNCTION createnewlot( IN lotnum varchar(20), IN item VARCHAR(30) )
RETURNS int
DETERMINISTIC
BEGIN
	DECLARE lb_ok int;
	/* Saisissez ici les instructions de la fonction */

    DECLARE QC varchar(5);
    DECLARE lotstatus char(1);
    DECLARE exp datetime;
    DECLARE Val integer;

    DECLARE ld_itbascost numeric(12,4);
    DECLARE ld_itpurxtrcost numeric(12,4);
    DECLARE ld_itmfgxtrcost numeric(12,4);
    DECLARE ld_loxtrcost numeric(12,4);
    DECLARE ls_ittyp char(1);

    // take item info (QC, Validity...)
      SELECT items.itqc,
             items.itval,
    	    items.itbascost,
    	    items.itpurxtrcost,
    	    items.itmfgxtrcost,
    	    items.ittyp
        INTO QC,
             Val,
    	    ld_itbascost,
    	    ld_itpurxtrcost,
    	    ld_itmfgxtrcost,
    	    ls_ittyp
        FROM items
       WHERE items.itcode = item  ;	//os1430

    //d�but os1430
    if ld_itbascost is null then
        set ld_itbascost = 0;
    end if;
    if ld_itpurxtrcost is null then
        set ld_itpurxtrcost = 0;
    end if;
    if ld_itmfgxtrcost is null then
        set ld_itmfgxtrcost = 0;
    end if;
    if ls_ittyp is null then
        set ls_ittyp = '';
    end if ;

    if ls_ittyp = 'P' or ls_ittyp = 'C' or ls_ittyp = 'D' then
    	set ld_loxtrcost = ld_itpurxtrcost;
    elseif ls_ittyp = 'F' or ls_ittyp = 'M' then
    	set ld_loxtrcost = ld_itmfgxtrcost;
    else
    	set ld_loxtrcost = 0;
    end if;
    //fin os1430

    if QC = 'Y' then
    	set lotstatus = 'Q';
    else
    	set lotstatus = 'A';
    end if;

    if val = 0 then
    	// no validity
    	set exp = datetime(date('2999/12/31'))
    else
		SELECT now() + val
		  INTO exp
		FROM dummy;
    end if;

      INSERT INTO lots
    			( locode,
    			  loitem,
    			  lostatus,
    			  loorder,
    			  lorecdat,
    			  loreldat,
    			  loexpdat,
    			  lostock,
    			  loalloc,
    			  lowip,
    			  loqcstatus,
    			  loctrl,
    			  lolotctrl,
    			  lobascost,
    			  loxtrcost,
    			  lobasdate,
    			  loxtrdate,
    			  lobasuser,
    			  loxtruser)
      VALUES ( lotnum,
    			 item,
    			  lotstatus,
    			  0,
    			  null,
    			  null,
    			  exp,
    			  0,
    			  0,
    			  0,
    			  '9',
    			  '',
    			  'Y',
    			  ld_itbascost,
    			  ld_loxtrcost,
    			  now(),
    			  now(),
    			  '##########',
    			  '##########')  ;
    //os1430 ajout des chamsp lobascost, loxtrcost, lobasdate, loxtrdate, lobasuser, loxtruser
    			
    //if sqlca.sqlcode = 0 then // success
    	set lb_ok = 1;
//    else
//    	set lb_ok = 0;
//    end if;


	RETURN lb_ok;
END
```
