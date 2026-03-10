# Procedure: sp_get_saledisc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_get_saledisc"( IN as_cust varchar(10), IN as_item varchar(20), IN adt_datereq timestamp,
	IN adec_qty numeric(10,3), IN PriceOrigin char(1), IN rate numeric(5,0),
	INOUT PriceTyp CHAR(1),	INOUT originPrice numeric(10,4), INOUT RealPrice numeric(10,4),
	OUT originprice_withoutlogistique numeric(10,4), OUT logistpcdisc numeric(12,4),
	OUT pcdisc numeric(20,10), OUT qtydisc numeric(20,10), OUT plgetriscde NUMERIC(1), OUT plsumcde NUMERIC(1))
BEGIN
	
	// procédure stocker qui va rechercher la somme total des ristournes en fonction des arguments entrés :
	//           - as_Cust      : le client
	//			  - as_Item      : l article
	//			  - adt_DateReq  : date de livraison chez ce client
	//			  - adb_OrgPrice : Prix de base sans ristourne
	//			  - adb_Qty      : Quantité
	//			
	//			Elle va renvoyé comme valeur le prix unitaire ristourne incluse s il y en a une sinon la valeur
	//			   renvoyée sera la valeur reçu en argument.+

	// Obtention de la somme des ristourne sde type 1 et 2 : 1 - un pourcentage proprement dit
	//                                                       2 - X pour le prix de Y

	DECLARE ldec_Disc1 numeric(11,5);
	DECLARE ldec_Disc2 numeric(11,5);
	DECLARE ldec_Disc3 numeric(11,5);
	DECLARE ldec_disc5 numeric(11,5);
	DECLARE ldec_DiscTot numeric(11,5);
	DECLARE ldec_qtydisc numeric(4,0);
	DECLARE ldec_qtyfree numeric(4,0);
	DECLARE ldec_disc6 numeric(11,5);	//os2962
	DECLARE ldec_disc7 numeric(11,5);	//os2962
	DECLARE ld_ldqty2 integer;	//os2962
			
	//On met la date de comparaison avec l heure à 00h00 pour le cas où on travaillerait avec les heures aussi pour
	//       les livraisons. Ceci permet d inclure la date de fin ristourne car elle a l heure à 00h00.
	set adt_DateReq = DateTime( Date( adt_DateReq));
	
	set originprice_withoutlogistique = originprice;
	set logistpcdisc = 0;

	//si le prix est fixé manuellement (priceorigin = 'M'), pas de promo, ni de ristournes
	if priceorigin <> 'M' and pricetyp = 'N' then
		
		//vérifié si il y a des ristourne logistique
		call sp_get_logisticdisc( as_cust, as_item, adt_datereq, adec_qty, PriceTyp, PriceOrigin,
			originPrice, originprice_withoutlogistique, logistpcdisc);
	
		// vérifier s il y a des promos
		call sp_get_promodisc( as_cust, as_item, adt_datereq, adec_qty, priceorigin, rate, originPrice,
			pricetyp, pcdisc, qtydisc, RealPrice, plgetriscde, plsumcde);
	
		if pricetyp = 'N' then
			
			//si ici, il n y a pas de promo, on cherche les ristournes
			Select Sum( linkdisc.lddiscpc )
			  Into ldec_Disc1
			  From linkdisc,
					 linkitad
			 Where ( linkitad.lkadcode = as_Cust )        And
					 ( linkitad.lkitem = as_Item )          And
					 ( linkitad.lkactiv = 'Y' )              And
					 ( linkitad.lkcode = linkdisc.ldcode )   And
					 ( linkdisc.ldstartdat <= adt_DateReq ) And
					 ( linkdisc.ldstopdat >= adt_DateReq )   And
					 ( linkdisc.ldtyp In ( '1' ) ) ;

			if ldec_Disc1 is null Then
				set ldec_Disc1 = 0;
			end if;

			//si ici, il
```

*Source tronquee (8110 caracteres au total)*
