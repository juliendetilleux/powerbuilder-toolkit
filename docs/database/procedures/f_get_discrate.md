# Function: f_get_discrate

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Retourne
`numeric(5,2)`

## Source
```sql
create FUNCTION f_get_discrate( IN as_cust varchar(10), IN as_item varchar(12), IN adt_datreq timestamp)
RETURNS numeric(5,2)
BEGIN
    //ristourne tarifaire
    DECLARE ldec_totaldiscount numeric(5,2);
    DECLARE ll_dischead numeric(4,0);
    DECLARE ll_founddischead numeric(4,0); /* stocke le 1er code de ristourne tarifaire trouv� */
    DECLARE lb_error numeric(1,0);
    DECLARE lb_goon numeric(1,0);
    DECLARE lb_discfound numeric(1,0);
    DECLARE lb_disctype3found numeric(1,0);
    DECLARE lb_disctype4found numeric(1,0);
    				
    DECLARE ls_itstat1 char(2);
    DECLARE ls_itstat2 char(2);
    DECLARE ls_adresgroup char(5);    				
    DECLARE ldt_discstartdate timestamp;
    DECLARE ldec_discpc numeric(8,5);
    DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';

	//Y a-t-il une ristourne tarifaire g�n�rale?
       DECLARE cur_generalratedisc CURSOR FOR
		select	dischead.dhcode,
					dischead.dhstartdate,
					discline.dldiscpc
			from	dischead,
					discline,
					linkaddiscount
			where	dischead.dhcode = discline.dlcode and
					linkaddiscount.lddiscount = dischead.dhcode and
					dischead.dhactiv = 'Y' and
					dischead.dhstartdate <= adt_datreq and
					dischead.dhstopdate >= adt_datreq and
					(
						( discline.dlitem is not null and (discline.dlitem = '*' or (discline.dlitem = as_item)) ) or
						( discline.dlitem is null and ( discline.dlstat1 = ls_itstat1 and (discline.dlstat2 = '*' or discline.dlstat2 = ls_itstat2 )))
					) and
					(
						( linkaddiscount.ldcust is not null and ( linkaddiscount.ldcust = as_cust or linkaddiscount.ldcust = '*' ) ) or
						( linkaddiscount.ldadresgroup is not null and ( linkaddiscount.ldadresgroup = ls_adresgroup ) )
					)
		order by	dischead.dhstartdate desc, dischead.dhcode asc;

    set lb_error = 0;
    set lb_goon = 0;
    set lb_discfound = 0;
    set lb_disctype3found = 0;
    set lb_disctype4found = 0;
	set ldec_totaldiscount = 0;
	set ll_dischead = 0;

    if adt_datreq is not null and as_item is not null and as_cust is not null then   	
    	//r�cup�rer les donn�es de regroupement d Items
    	select 	items.itstat1,
    			items.itstat2
    	  into	ls_itstat1,
    			ls_itstat2
    	  from	items
    	 where	items.itcode = as_item;    	
     	
    	//r�cup�rer les donn�es de regroupement de clients
    	select 	adresses.adgrcust
    	  into ls_adresgroup
    	  from adresses
    	 where adresses.adcode = as_cust;
    		
		//boucle ristourne tarifaire g�n�rale
		open cur_generalratedisc;
        set lb_goon = 1;			
			
        generalratedisc_loop:
		LOOP
			fetch next cur_generalratedisc into ll_dischead, ldt_discstartdate, ldec_discpc;

            IF SQLSTATE = err_notfound or lb_goon = 0 THEN
                LEAVE generalratedisc_loop;
            END IF;
	
			if lb_discfound = 0 then
				set lb_discfound = 1;
                set ll_founddischead = ll_dischead;
			end if;
			
			if ll_dischead = ll_founddischead then				
				set ldec_totaldiscount = ldec_totaldiscount + lde
```

*Source tronquee (3366 caracteres au total)*
