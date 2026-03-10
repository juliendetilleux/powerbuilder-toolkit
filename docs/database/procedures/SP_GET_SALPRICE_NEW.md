# Procedure: SP_GET_SALPRICE_NEW

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Source
```sql
create PROCEDURE DBA."SP_GET_SALPRICE_NEW"( IN as_cust varchar(10), IN as_item varchar(20), IN as_curr char(3), IN adec_currconv numeric(10,6),
         IN adt_datereq timestamp, IN as_directsal char(1), IN adec_qty numeric(10,3), IN Session_name varchar(30))
    RESULT ( PriceTyp CHAR(1), rate numeric(5,0), PriceOrigin char(1),
        baseprice numeric(10,4), ratedisc numeric(5,2), originprice_withoutlogistique numeric(10,4), OriginPrice numeric(10,4),
        RealPrice numeric(10,4), DirectSalRate char(1), pcdisc numeric(20,10), qtydisc numeric(20,10),
        logistpcdisc numeric(10,4))
    BEGIN

        DECLARE PriceTyp char(1);
        DECLARE rate numeric(5,0);
        DECLARE PriceOrigin char(1);
        DECLARE baseprice numeric(10,4);
        DECLARE ratedisc numeric(5,2);
        DECLARE OriginPrice numeric(10,4);
        DECLARE RealPrice numeric(10,4);
        DECLARE DirectSalRate char(1);
        DECLARE pcdisc numeric(20,10);
        DECLARE qtydisc numeric(20,10);
    	DECLARE originprice_withoutlogistique numeric(10,4);
        DECLARE logistpcdisc numeric(10,4);

        call sp_get_salerate(as_cust, as_item, as_curr, adec_currconv, adt_datereq, as_directsal, Session_name,
            PriceTyp, rate, PriceOrigin, baseprice, ratedisc, OriginPrice, RealPrice, DirectSalRate);
    		
    	call sp_get_saledisc(as_cust, as_item, adt_datereq, adec_qty, PriceOrigin, rate,
    		PriceTyp, originPrice, RealPrice,
    		originprice_withoutlogistique, logistpcdisc, pcdisc, qtydisc);
    		
        select PriceTyp, rate, PriceOrigin, baseprice, ratedisc, originprice_withoutlogistique, OriginPrice, RealPrice,
    		DirectSalRate, pcdisc, qtydisc, logistpcdisc;
END
```
