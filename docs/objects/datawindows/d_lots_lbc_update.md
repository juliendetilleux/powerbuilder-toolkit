# d_lots_lbc_update

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         lots.lostatus,   
         lots.loorgcode,   
         lots.lobascost,   
         lots.lostock,   
	    lots.lobasdate,
	    lots.lobasuser,
	    lots.loxtrcost,
	    lots.loxtrdate,
	    lots.loxtruser, 
		( select itdefaultlot from items where itcode = loitem ) as deflot   ,
		( select itname from items where itcode = loitem ) as itname
 
    FROM lots   
  WHERE  ( lots.lorecdat between :adt_datestart and :adt_datestop ) or 
				( lots.locode = deflot and  (select itlot from items where itcode = loitem) <> 'Y'  ) 
order by  lots.loitem ,  lots.locode

```

## Colonnes
| Colonne |
|---------|
| locode |
| loitem |
| lostatus |
| loorgcode |
| lobascost |
| lostock |
| lobasdate |
| lobasuser |
| loxtrcost |
| loxtrdate |
| loxtruser |
| deflot |
| itname |

