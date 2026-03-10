# d_quicksales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT *, 0 AS flag , 0 as newqtypromo  
    FROM sp_retrieve_quicksale(:as_cust, :al_salord, :session_name, :ad_shrist, :adt_date, :as_directsale, :as_item)   

```

## Colonnes
| Colonne |
|---------|
| item |
| itname |
| custqty |
| custuom |
| qtyconv |
| qty |
| itum |
| date |
| cost |
| tarifpr |
| origin |
| pricetyp |
| shipto |
| itstat1 |
| itstat2 |
| itweight |
| itvol |
| itqtypal |
| custitem |
| slsample |
| qtydisc |
| cmnt |
| tarifprimput |
| costimput |
| baseprice |
| lb_custuom |
| slrist |
| ristglob |
| slfinalprice |
| aux |
| saum |
| safatype |
| sadesc |
| creamodif |
| slline |
| modified |
| auditcost |
| auditqty |
| salghost |
| itstdpur |
| tarif |
| slorigval |
| slvalsddisc |
| ratehead |
| tva |
| reserved |
| sumqtyinsal |
| itean |
| itean2 |
| itean3 |
| plgetriscde |
| plsumcde |
| flag |
| newqtypromo |

