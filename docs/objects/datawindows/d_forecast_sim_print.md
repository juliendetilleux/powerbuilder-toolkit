# d_forecast_sim_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT
         fcsthead.fhid Num,
	    fcsthead.fhdesc Descr,   
         fcsthead.fhtyp Typ,   
         fcsthead.fhdat Dat,   
         fcsthead.fhdure Duration,   
         fcsthead.fhcmnt Cmnt,   
         fcstline.flitem Item,   
         fcstline.flpcconf growth,   
         items.itname Nam,   
	    items.itstat1 Family,
		( select imdesc from itstat1 WHERE imcode = items.itstat1 ) FamilyName,
		(SELECT dateformat(fndate,'MM/YY')
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fcsthead.fhdat) = months (fcstnew.fndate)) as date_1,
		(SELECT fnqtyref
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fcsthead.fhdat) = months (fcstnew.fndate)) as qtyref_1,
		(SELECT fnqtyconf
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fcsthead.fhdat) = months (fcstnew.fndate)) as qtyconf_1,

		(SELECT dateformat(fndate,'MM/YY')
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fcsthead.fhdat) + 1 = months (fcstnew.fndate)) as date_2,
		(SELECT fnqtyref
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fcsthead.fhdat)+1 = months (fcstnew.fndate)) as qtyref_2,
		(SELECT fnqtyconf
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fcsthead.fhdat)+1 = months (fcstnew.fndate)) as qtyconf_2,

		(SELECT dateformat(fndate,'MM/YY')
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fcsthead.fhdat) + 2 = months (fcstnew.fndate)) as date_3,
		(SELECT fnqtyref
			FROM fcstnew
			WHERE fcstnew.fnid = fcstline.flid and
						fcstnew.fnitem = fcstline.flitem and 
						months (fc
```

## Colonnes
| Colonne |
|---------|
| fcsthead_num |
| fcsthead_descr |
| fcsthead_typ |
| fcsthead_dat |
| fcsthead_duration |
| fcsthead_cmnt |
| fcstline_item |
| fcstline_growth |
| items_nam |
| items_family |
| familyname |
| date_1 |
| qtyref_1 |
| qtyconf_1 |
| date_2 |
| qtyref_2 |
| qtyconf_2 |
| date_3 |
| qtyref_3 |
| qtyconf_3 |
| date_4 |
| qtyref_4 |
| qtyconf_4 |
| date_5 |
| qtyref_5 |
| qtyconf_5 |
| date_6 |
| qtyref_6 |
| qtyconf_6 |
| date_7 |
| qtyref_7 |
| qtyconf_7 |
| date_8 |
| qtyref_8 |
| qtyconf_8 |
| date_9 |
| qtyref_9 |
| qtyconf_9 |
| date_10 |
| qtyref_10 |
| qtyconf_10 |
| date_11 |
| qtyref_11 |
| qtyconf_11 |
| date_12 |
| qtyref_12 |
| qtyconf_12 |

