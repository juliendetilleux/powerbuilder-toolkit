# Procedure: sp_retrieve_quicksale

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_retrieve_quicksale"(IN as_cust varchar(10), IN al_salhead numeric(9,0), IN Session_name varchar(30), IN ad_shrist numeric(5,2), IN adt_date timestamp, inout DirectSalRate char(1), IN as_item varchar(20))
	RESULT ( item varchar(20), itname varchar(30), custqty numeric(10,3), custuom char(5),
			qtyconv numeric(16,10), qty numeric(10,3), itum char(2), rdate timestamp,
			cost numeric(10,4), tarifpr numeric(10,4), origin char(1), pricetyp char(1),
			shipto numeric(4,0), ItStat1 char(2), ItStat2 char(2), itweight numeric(8,3),
			itvol numeric(8,3), itqtypal numeric(6,0), custitem varchar(30), slsample char(1),
			qtydisc	 numeric(20,10), cmnt varchar(60), tarifprimput numeric(10,4), costimput numeric(10,4),
			baseprice numeric(10,4), lb_custuom varchar(5), slrist numeric(20,10), ristglob numeric(5,2),
			slfinalprice numeric(14,6), aux char(1), saum char(2), safatype numeric(6,0),
			sadesc varchar(30), creamodif char(1), slline numeric(5), modified char(1),
			auditcost numeric(12,4), auditqty  numeric(10,3), salghost char(1), itstdpur numeric(10,4),
			tarif char(1), slorigval numeric(10,4), slvalsddisc numeric(10,4), ratehead numeric(5,0),
			tva numeric(5,2), reserved char(1), sumqtyinsal Char( 1) /*HA2479*/, itean char(20), itean2 char(20), itean3 char(20), plgetriscde NUMERIC(1), plsumcde NUMERIC(1))

	BEGIN
		DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
		DECLARE ls_ItCode varchar(20);
		DECLARE ls_ItName varchar(30);
		DECLARE ls_ItUm char(2);
		DECLARE ls_ItStat1 char(2);
		DECLARE ls_ItStat2 char(2);
		DECLARE ls_LkUm varchar(5);
		DECLARE ldec_LkUmConv numeric(16,10);
		DECLARE ll_LkCode numeric(8,0);
		DECLARE ldec_Weight numeric(8,3);
		DECLARE ldec_Vol numeric(8,3);
		DECLARE lkadref varchar(30);
		DECLARE lkadref2 varchar(60);
		DECLARE lkpalqty numeric(6,0);
		DECLARE itpalqty numeric(6,0);
		DECLARE ls_LinkCmnt varchar(60);
		DECLARE ln_lkfinalprice numeric(14,6);
		DECLARE ln_itfinalprice numeric(14,6);
		
		DECLARE ls_adcurr char(3);
		DECLARE ls_shdirectsal char(1);
		DECLARE ls_finalprice char(1);
		DECLARE ls_plkcmnt char(1);
		DECLARE ls_StdCostVsb char(1);
		DECLARE ls_ITUMTRF char(1);
		
		DECLARE lb_goon numeric(1,0);
		DECLARE ls_itisumtarif char(1);
		DECLARE ls_itumtarif char(2);
		DECLARE ld_itumtarifconv numeric(12,8);
		DECLARE ldec_RistGlob numeric(5,2);
		DECLARE ldec_PmixOrgPr numeric(10,4);
		DECLARE ldec_PmixRealPr numeric(10,4);
		DECLARE ls_salghost char(1);
		DECLARE ld_tva numeric(5,2);
		DECLARE ls_origin char(1);
		DECLARE ll_ratehead numeric(5,0);
		DECLARE ld_itstdpur numeric(10,4);
		DECLARE ln_finalprice numeric(12,4);
		declare QtyPerPal numeric(6,0);
		declare ls_reserved char(1);
		DECLARE ls_SumQtyInSal Char( 1); /*HA2479*/
		
		//variable de retour de la procédure de recherche de prix
		DECLARE pricetyp char(1);
		DECLARE rate numeric(5,0);
		DECLARE PriceOrigin char(1);
		DECLARE baseprice numeric(10,4);
		DECLARE ratedisc numeric(5,2);
		DECLARE originprice_with
```

*Source tronquee (12221 caracteres au total)*
