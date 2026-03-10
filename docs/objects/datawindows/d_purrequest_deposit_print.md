# d_purrequest_deposit_print

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
		garaghead.ggchassis
    FROM purreqhead , histostock, lots, garaghead, items 
   WHERE purreqhead.pqcode = :an_puroder    
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
| garaghead_ggchassis |

