# Procedure: sp_getsalprice_real

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_cust | varchar(10 | IN |

## Source
```sql
create PROCEDURE DBA."sp_getsalprice_real"(in as_cust varchar(10),in as_item varchar(20), in adec_qty numeric(10,3), in adt_date timestamp)
    		result(RealPrice numeric(10,4))
				begin
				  declare PriceTyp char(1);
				  declare rate numeric(5);
				  declare PriceOrigin char(1);
				  declare baseprice numeric(10,4);
				  declare ratedisc numeric(5,2);
				  declare originprice_withoutlogistique numeric(10,4);
				  declare OriginPrice numeric(10,4);
				  declare RealPrice numeric(10,4);
				  declare DirectSalRate char(1);
				  declare pcdisc numeric(20,10);
				  declare qtydisc numeric(20,10);
				  declare logistpcdisc numeric(10,4);
				
				  call sp_get_salprice(as_cust, as_item, 'EUR', 1, adt_date, 'N', adec_qty, '', PriceTyp, rate, PriceOrigin, baseprice, ratedisc, originprice_withoutlogistique, OriginPrice, RealPrice, DirectSalRate, pcdisc, qtydisc, logistpcdisc);
				
				  select RealPrice from dummy;
				end
```
