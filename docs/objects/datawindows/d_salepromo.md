# d_salepromo

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT promohead.phminsale AS phminsale
	,promohead.phrissale AS phrissale
	,(
		SELECT sum(B.slqtyord * CASE B.slprorig WHEN 'T' THEN B.slunitprice ELSE B.slbaseprice END )
		FROM salline B
		WHERE B.slcode = salhead.shcode
			AND B.slsumcde = 1
		) AS total_cmde
	,salline.slgetriscde AS slgetriscde
	,salline.slsumcde AS slsumcde
	,salline.slcode AS slcode
	,salline.slline AS slline
    ,salline.slitem AS slitem
	,salline.slqtyord AS slqtyord
	,salline.slstdval AS slstdval
	,salline.slsalval AS slsalval
	,salline.slorval AS slorval
	,salline.slrist AS slrist
	,salline.slunitprice AS slunitprice
	,salline.slbaseprice AS slbaseprice
	,salline.slorigval AS slorigval
	,salline.slpricetype AS slpricetype
	,salline.slprorig AS slprorig
,adresses.adcode as adcode
,adresses.adcurr as adcurr
,salhead.shdatreq
,salline.sluomconv
,salline.slorval
,salline.slratehead
FROM salline
	,salhead
	,adresses
LEFT OUTER JOIN linkadpromo ON adresses.adgrcust = linkadpromo.lkadresgroup
LEFT OUTER JOIN adresgroup ON adresses.adgrcust = adresgroup.agcode
LEFT OUTER JOIN promohead ON linkadpromo.lkpromo = promohead.phcode
WHERE salhead.shcode = :al_shcode
	AND salline.slcode = salhead.shcode
	AND adresses.adcode = salhead.shcust
	AND salhead.shdatcrea BETWEEN IsNull(promohead.phstartdate, salhead.shdatcrea)
		AND IsNull(promohead.phstopdate, salhead.shdatcrea)
	AND IsNull(promohead.phactiv, 'Y') = 'Y'
	AND IsNull(adresgroup.agactiv, 'Y') = 'Y'
	AND salline.slgetriscde = 1
	AND promohead.phminsale > 0
	

```

## Colonnes
| Colonne |
|---------|
| phminsale |
| phrissale |
| total_cmde |
| slgetriscde |
| slsumcde |
| slcode |
| slline |
| slitem |
| slqtyord |
| slstdval |
| slsalval |
| slorval |
| slrist |
| slunitprice |
| slbaseprice |
| slorigval |
| slpricetype |
| slprorig |
| adresses_adcode |
| adresses_adcurr |
| salhead_shdatreq |
| salline_sluomconv |
| salline_slorval |
| salline_slratehead |

