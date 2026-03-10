# Procedure: sp_get_salerate

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_get_salerate"( IN as_cust varchar(10), IN as_item varchar(20), IN as_curr char(3),
    IN adec_currconv numeric(10,6), IN adt_datereq timestamp, IN as_directsal char(1), IN Session_name varchar(30),
	OUT PriceTyp CHAR(1), OUT rate numeric(5,0), OUT PriceOrigin char(1),
    OUT baseprice numeric(10,4), OUT ratedisc numeric(5,2), OUT OriginPrice numeric(10,4),
    OUT RealPrice numeric(10,4), OUT DirectSalRate char(1))

BEGIN

    DECLARE ls_RateExist char(10);
    DECLARE ls_ITUMTRF char(1);
    DECLARE syscurr char(3);
    DECLARE lboo_DirSalPoss numeric(1);
    DECLARE ls_rhnet char(1);
    DECLARE ll_ratecode numeric(5,0);
    DECLARE ls_ratename varchar(30);
    DECLARE ldec_OrgPrice numeric(10,4);
    DECLARE ldec_ristrate numeric(5,2);
    DECLARE ldec_realprice numeric(10,4);
    DECLARE ls_DsRatChoice char(1);
    DECLARE ll_DirSalRate numeric(12,0);
    DECLARE ls_pistring varchar(120);
    DECLARE ll_clival3 numeric(3,0);
    DECLARE li_type numeric(1,0);   //os2839


	declare Cur_Rate cursor for
        Select ratehead.rhcode,
    	       ratehead.rhdesc,
    		   rateline.rlval,
    		   ratehead.rhnet,
               1 /*os2839*/
    	  From ratehead,
    	       rateline,
    	       adresrate
    	 Where ( ratehead.rhactiv = 'Y' )               And
    	       ( ratehead.rhcode = rateline.rlcode )    And
    			 ( ratehead.rhcurr = as_curr )           And
    			 ( rateline.rlitem = as_Item )           And
    			 ( rateline.rlval <> 0 )                  And
    			 ( rateline.rlcode = adresrate.arrateid ) And
    			 ( adresrate.arcode = as_Cust )          And
    			 ( adresrate.arstartdat <= adt_DateReq ) And
    			 ( adresrate.arstopdat >= adt_DateReq ) And
    			 ( ratehead.rhtyp = 'T' )
	UNION ALL /*os2839*/
    	Select ratehead.rhcode,
    	       ratehead.rhdesc,
    			 rateline.rlval,
    			 isnull(ratehead.rhnet,'N'),
    			 2 /*os2839*/
    	  From ratehead,
    	       rateline,
    	       except_rate_itad
    	 Where ( ratehead.rhactiv = 'Y' )               And
    	       ( ratehead.rhcode = rateline.rlcode )    And
    			 ( ratehead.rhcurr = as_curr )           And
    			 ( rateline.rlitem = as_Item )           And
    			 ( rateline.rlval <> 0 )                  And
    			 ( rateline.rlcode = except_rate_itad.er_fk_ratehead_rhcode ) And
    			 ( except_rate_itad.er_fk_adresses_adcode = as_Cust )          And
    			 ( except_rate_itad.er_fk_items_itcode = rateline.rlitem )          And
    			 ( except_rate_itad.er_startdat <= adt_DateReq ) And
    			 ( except_rate_itad.er_stopdat >= adt_DateReq )  And
    			 ( ratehead.rhtyp = 'T' )
    Order By 4 DESC , 3 ASC/*os2839 adresrate.arstartdat*/ ;

    set DirectSalRate = 'N';
    set lboo_DirSalPoss = 0;

    SELECT progparam.ppvalue
      INTO ls_ITUMTRF
      FROM progparam
     WHERE progparam.ppcode = 'ITUMTRF';

    if ls_ITUMTRF is null then
        set ls_ITUMTRF = '';
    end if;

    select pmcval INTO syscurr from parameter
```

*Source tronquee (9035 caracteres au total)*
