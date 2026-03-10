# Procedure: sp_get_promodisc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_get_promodisc"( IN as_cust varchar(10), IN as_item varchar(20), IN adt_datreq timestamp,
	IN adec_qty numeric(10,3), IN priceorigin char(1), IN rate numeric(5,0), IN originPrice numeric(10,4),
	INOUT pricetyp CHAR(1), OUT pcdisc numeric(20,10), OUT qtydisc numeric(20,10),
	OUT RealPrice numeric(10,4),OUT plgetriscde NUMERIC(1), OUT plsumcde NUMERIC(1))
BEGIN

    DECLARE ll_promohead numeric(4,0);
    DECLARE ll_foundpromohead numeric(4,0); /* stocke le 1er code de promo trouvÃ© */

    DECLARE lb_error numeric(1,0);
    DECLARE lb_goon numeric(1,0);
    DECLARE lb_ratepromofound numeric(1,0);
    DECLARE lb_promofound numeric(1,0);
    DECLARE lb_disctype3found numeric(1,0);
    DECLARE lb_disctype4found numeric(1,0);
    DECLARE lb_DiscType5Found numeric(1,0);
    DECLARE lb_disctype6found numeric(1,0);
    DECLARE lb_disctype7found numeric(1,0);
    				
    DECLARE ls_itstat1 char(2);
    DECLARE ls_itstat2 char(2);
    DECLARE ls_adresgroup char(5);
    DECLARE ls_disctype char(1);
    DECLARE ldt_discstartdate timestamp;

    DECLARE ldec_discqty1 numeric(10,3); /*HA2324 Ajout de la possibilitÃ© de pouvoir mettre des dÃ©cimales : passage de numeric 8.0 Ã  10.3 */
    DECLARE ldec_discqty2 numeric(10,3); /*HA2324 Ajout de la possibilitÃ© de pouvoir mettre des dÃ©cimales : passage de numeric 8.0 Ã  10.3 */
    DECLARE ldec_discpc numeric(11,5);
    DECLARE ldec_totaldiscount numeric(20,10);
    DECLARE ldec_totalfreeqty numeric(20,10);
    DECLARE ldec_priceorigin numeric(11,5);
	DECLARE lb_plgetriscde BIT;
	DECLARE lb_plsumcde BIT;
	
    DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';

    declare cur_ratepromo cursor for
		select	promohead.phcode,
				promohead.phstartdate,
				promoline.pltyp,
				promoline.plqty1,
				promoline.plqty2,
				promoline.pldiscpc,
				promoline.plgetriscde,
				promoline.plsumcde
		  from	promohead,
				promoline
		 where	promohead.phcode = promoline.plcode and
				promohead.phactiv = 'Y' and
				promohead.phstartdate <= adt_datreq and
				promohead.phrateid = rate and
				promohead.phstopdate >= adt_datreq and
				(
					( promoline.plitem is not null and (promoline.plitem = '*' or (promoline.plitem = as_item)) ) or
					( promoline.plitem is null and ( promoline.plitstat1 = ls_itstat1 and (promoline.plitstat2 = '*' or promoline.plitstat2 = ls_itstat2 )))
				)
		order by	promohead.phstartdate desc, promohead.phcode asc, promoline.pltyp asc,
				( case promoline.pltyp
					when '3' then promoline.plqty2
					when '4' then promoline.plqty1
					when '6' then promoline.plqty2
					when '7' then promoline.plqty2
					else '0'
				end ) desc;

    declare cur_generalpromo cursor for
		select	distinct promohead.phcode,
					promohead.phstartdate,
					promoline.pltyp,
					promoline.plqty1,
					promoline.plqty2,
					promoline.pldiscpc,
					promoline.plgetriscde,
					promoline.plsumcde
			from	promohead,
					promoline,
					linkadpromo
			where	promohead.phcode = promoline.plcode 
```

*Source tronquee (11572 caracteres au total)*
