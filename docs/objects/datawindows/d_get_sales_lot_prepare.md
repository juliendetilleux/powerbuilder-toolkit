# d_get_sales_lot_prepare

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
select  (stqty - isnull(stalloc,0)) as dispo ,
locode ,loitem,stloc,loalloc,lostatus from stocks,locations,lots where stlot = :s_lot and stloc = lccode and LOCATIONS.LCEXP = 'Y' and  LOCATIONS.LCAUTOALLOC ='Y' and lots.locode = stlot and lots.lostatus = 'A' and (stqty - stalloc) > 0


```

## Colonnes
| Colonne |
|---------|
| dispo |
| lots_locode |
| lots_loitem |
| stocks_stloc |
| lots_loalloc |
| lots_lostatus |

