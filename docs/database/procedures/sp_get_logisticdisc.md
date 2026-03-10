# Procedure: sp_get_logisticdisc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_get_logisticdisc"( IN as_cust varchar(10), IN as_item varchar(20), IN adt_datreq timestamp,
	IN adec_qty numeric(10,3), IN PriceTyp CHAR(1), IN PriceOrigin char(1),
	INOUT originPrice numeric(10,4), INOUT originprice_withoutlogistique numeric(10,4), INOUT logistpcdisc numeric(12,4))
BEGIN

    DECLARE ls_adresgroup char(5);
	DECLARE ll_dlcode numeric(4,0);
	DECLARE ll_qtyPAL numeric(6,0);
	DECLARE ll_qtyFIL numeric(6,0);
	DECLARE ld_disc numeric(12,4);
	DECLARE lb_pal numeric(1,0);

	set originprice_withoutlogistique = originprice;
	set logistpcdisc = 0;

	set adec_qty = Round( adec_Qty, 3);

	if adt_datreq is not null and as_item is not null and as_cust is not null and originPrice is not null and adec_qty is not null then
		//si le prix est fixé manuellement (priceorigin = 'M'), pas de promo, ni de ristournes
		if priceorigin <> 'M' and pricetyp = 'N' then

			//récupérer les données de regroupement de clients
			select 	adresses.adgrcust
			  into	ls_adresgroup
			  from	adresses
			 where	adresses.adcode = as_cust;
			
			//voir si cette société est concerner
			 SELECT first disclogist.dlcode
			   INTO ll_dlcode	
			   FROM disclogist,
					linkaddisclogist
			  WHERE linkaddisclogist.lddiscount = disclogist.dlcode and
					disclogist.dlactiv = 'Y' and
					disclogist.dlstartdate <= adt_datreq and
					disclogist.dlstopdate >= adt_datreq and
					(
						( linkaddisclogist.ldcust is not null and ( linkaddisclogist.ldcust = as_cust or linkaddisclogist.ldcust = '*' ) ) or
						( linkaddisclogist.ldadresgroup is not null and ( linkaddisclogist.ldadresgroup = ls_adresgroup ) )
					) ;
							
			if ll_dlcode is not null then					
				//ok voir quantitée suffisante 					
				SELECT items.itqtypal,
					   items.itqtyfile
				  INTO ll_qtyPAL,
					   ll_qtyFIL
				  FROM items
				 WHERE items.itcode = as_item ;
				
				if ll_qtyPAL is null then
					set ll_qtyPAL = 0;
				end if;
				if ll_qtyFIL is null then
					set ll_qtyFIL = 0;
				end if;
				
				set lb_pal = 0;
					
				//rechercher le pourcentage de ristourne
				if adec_qty >= ll_qtyPAL then	//dabord voir si qté est > que qté PALETTE
					select pmnval into ld_disc from parameters where pmcode = 'DLOGPAL' ;
					set lb_pal = 1;
				else
					if adec_qty >= ll_qtyFIL then //si non voir si qté est > que qté FILE
						select pmnval into ld_disc from parameters where pmcode = 'DLOGFIL' ;
					end if;
				end if;
				if ld_disc is null then
					set ld_disc = 0;
				end if;
				
				//si il y a bien un pourcentage pour cette quantitée
				if ld_disc > 0 then
					set originprice = originprice_withoutlogistique * ( ( 100 - ld_disc) / 100 );
					set logistpcdisc = ld_disc;
				end if;
				
			end if;			
		end if;
	end if;
END
```
