# Procedure: sp_invoice_prep_ne_aut

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| Selected_cust | char(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_invoice_prep_ne_aut" ( IN Selected_cust char(10), IN Selected_curr char(3), IN as_mcdo char(10) )
RESULT (shipline_slcode numeric(8),
		shipline_slline numeric(4),
		shiphead_shdate datetime,
		shipline_slitem varchar(5000),
		shipline_slqty numeric(12,3),
		items_itum char(2),
		shipline_slsalorder varchar(5000),
		shipline_slsalline varchar(5000),
		items_itname varchar(5000),
		shipline_slicustname varchar(5000),
		salhead_shcustref varchar(5000),
		salheah_shcustpay varchar(5000),
		salehead_shcust varchar(5000),
		qt char(1),
		salhead_shdlvt varchar(5000),
		salhead_shlvtplace varchar(5000),
		shiphead_shipto numeric(4),
		shipto_stdesc varchar(30),
		salhead_shcurr char(5000),
		shipline_linesort varchar(5000),
		shiphead_shcust char(10),
		datship datetime)
BEGIN
    /* Déclaration de variables utilisées pour améliorer les performances */
    declare @itumrf  varchar(4);
	declare @adinvto varchar(4);
	declare @multico varchar(4);
		
	select ppvalue into @itumrf from progparam where ppcode = 'ITUMTRF' ;
	select ppvalue into @adinvto from progparam where ppcode = 'ADINVTO' ;
	select ppvalue into @multico from progparam where ppcode = 'MULTICO' ;
	
    /* select des informations demandées */
    SELECT shipline.slcode,
         count(distinct shipline.slline) as slline,
         shiphead.shdate,
         list(distinct shipline.slitem) as slitem,
	     sum(IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
				isnull(shipline.slcustpc, shipline.slqty)
			ELSE
				shipline.slqty
			ENDIF) as slqty,
         '' as itum,
         list(distinct shipline.slsalorder) as slsalorder,
         list(distinct shipline.slsalline) as slsalline,
         list(distinct items.itname) as itname,
         list(distinct shipline.slitcustnam) as slitcustnam,
         list(distinct salhead.shcustref) as shcustref,
         list(distinct salhead.shcustpay) as shcustpay,
         list(distinct salhead.shcust) as shcust,
         '1' as qt ,
         list(distinct salhead.shdlvt) as shdlvt,
         list(distinct salhead.shdlvtplace) as shdlvtplace,
         shiphead.shshipto,
         shipto.stdesc,
			list(distinct salhead.shcurr) as shcurr,
         list(distinct shipline.slline) as linesort,
			shiphead.shcust,
		max( (select max(salline.sldatship) from salline where salline.slcode = salhead.shcode and salline.slstatus < '9' ) ) as datship
    FROM salhead,
         shiphead,
         shipline,
         items,
         shipto
   WHERE ( shipline.slcode = shiphead.shcode ) and
         ( shipline.slsalorder = salhead.shcode ) and
         ( shiphead.shcust = shipto.stcode ) and
         ( shiphead.shshipto = shipto.stseq ) and
         ( items.itcode = shipline.slitem ) and
         ( ( shipline.slinv = 'N' ) AND
         ( salhead.shcust = Selected_cust OR (salhead.shcust IN (SELECT adcode
																					FROM adresses
																					WHERE adinvad
```

*Source tronquee (3568 caracteres au total)*
