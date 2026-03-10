# Procedure: sp_invoice_prep_aut

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| Selected_cust | char(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_invoice_prep_aut"( IN Selected_cust char(10), IN Selected_curr char(3), IN as_mcdo char(10)  )
	RESULT (shipline_slcode numeric(8,0),
	        shipline_slline numeric(4,0),
	        shiphead_shdate datetime,
	        shipline_slitem char(12),
	        shipline_slqty numeric(12,3),
	        items_itum char(2),
	        shipline_slsalorder numeric(6,0),
	        shipline_slsalline numeric(4,0),
	        items_itname varchar(30),
	        shipline_slicustname varchar(30),
	        salhead_shcustref varchar(40),
	        salheah_shcustpay char(1),
	        salehead_shcust char(10),
	        line_type char(1),
	        salhead_shdlvt char(1),
	        salhead_shlvtplace varchar(15),
	        shiphead_shipto numeric(4,0),
	        shipto_stdesc varchar(30),
	        salhead_shcurr char(3),
	        shipline_linesort numeric(4,0),
	        shiphead_shcust char(10),
			shiphead_shclot char(1),
			datship datetime )
	BEGIN
		/* D�claration de variables utilis�es pour am�liorer les performances */
	    declare @itumrf  varchar(4);
		declare @adinvto varchar(4);
		declare @multico varchar(4);
			
		select ppvalue into @itumrf from progparam where ppcode = 'ITUMTRF' ;
		select ppvalue into @adinvto from progparam where ppcode = 'ADINVTO' ;
		select ppvalue into @multico from progparam where ppcode = 'MULTICO' ;
		
	/*1er select :  adinvto = null : il n�y a pas de tiers payeur � prendre en compte.*/
	SELECT shipline.slcode,
	         shipline.slline,
	         shiphead.shdate,
	         shipline.slitem,
	         IF isnull(items.itisumtarif,'') = 'Y' AND isnull(@itumrf,'') = '1' THEN /*os1437*/
		isnull(shipline.slcustpc, shipline.slqty)
	         ELSE
		shipline.slqty
	         ENDIF as slqty,
	         IF isnull(items.itisumtarif,'') = 'Y' AND isnull(@itumrf,'') = '1' THEN /*os1437*/
		isnull(items.itumtarif, items.itum)
	         ELSE
		items.itum
	         ENDIF as itum,
	         shipline.slsalorder,
	         shipline.slsalline,
	         items.itname,
	         shipline.slitcustnam,
	         salhead.shcustref,
	         salhead.shcustpay,
	         salhead.shcust,
	         '1'  ,
	         salhead.shdlvt,
	         salhead.shdlvtplace,
	         shiphead.shshipto,
	         shipto.stdesc,
	         salhead.shcurr,
	         shipline.slline as linesort,
	         shiphead.shcust,
				shiphead.shclot,
			(select max( salline.sldatship ) from salline where salline.slcode = shipline.slsalorder and salline.slline = shipline.slsalline ) as datship
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
	         ( salhead.shcust = Selected_cust ) AND
	         ( salhead.shcurr = Selected_curr ) ) AND
	 
```

*Source tronquee (7709 caracteres au total)*
