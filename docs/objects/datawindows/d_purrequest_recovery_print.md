# d_purrequest_recovery_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purreqhead.pqcode,
		purreqhead.pqstatus,
		purreqhead.pqdatreq,
		purreqhead.pqaut,
		purreqhead.pqdatcrea,
		purreqhead.pqautdate,
		purreqhead.pqautuser,
		purreqhead.pqcreauser,
		items.itusr01,
		garaghead.ggcertifconf,
		garaghead.ggctrltech,
		garaghead.ggcarnimmat,
		garaghead.ggidentif,
		adresses.adname,
		adresses.adadr1,
		adresses.adadr2,
		adresses.adzip,
		adresses.adloc,
		adresses.adcountr
    FROM purline,purreqhead , histostock, lots, garaghead, items, adresses, purhead 
   WHERE purline.plcode =  :an_puroder
	and purhead.phcode=purline.plcode
	and purhead.phsupp = adresses.adcode
	and purreqhead.pqcode = purline.plpurreqcode    
	and purreqhead.pqcode = histostock.hsordno
	and histostock.hslot = lots.locode
	and lots.loorgcode=garaghead.ggchassis
	and lots.loitem=items.itcode

```

## Colonnes
| Colonne |
|---------|
| pqcode |
| pqstatus |
| pqdatreq |
| pqaut |
| pqdatcrea |
| pqautdate |
| pqautuser |
| pqcreauser |
| items_itusr01 |
| garaghead_ggcertifconf |
| garaghead_ggctrltech |
| garaghead_ggcarnimmat |
| garaghead_ggidentif |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |

