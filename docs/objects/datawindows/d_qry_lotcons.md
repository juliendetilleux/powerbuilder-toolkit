# d_qry_lotcons

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
SELECT items.itcode,
	items.itname,
	locode as lot, 
    lots.lorecdat as date_lasttrec,
    lots.loexpdat as DLC,
    lots.lostatus,
    isnull((select sum(histostock.hsqty * transactions.trsign) 
           from histostock 
                join transactions on histostock.hscode = transactions.trcode 
          where hslot = lots.locode and
             hscode in ('OPBL','RCMO','RCPO','RCSC','RTPO','RTSC','RTSV')), 0) as qty_rec,
    isnull((select list( distinct string(dateformat(histostock.hsdatim, 'DD/MM/YYYY')) order by histostock.hsdatim ) 
           from histostock 
                join transactions on histostock.hscode = transactions.trcode 
          where hslot = lots.locode and
             hscode in ('OPBL','RCMO','RCPO','RCSC','RTPO','RTSC','RTSV')), '') as date_rec,
    isnull((select sum(histostock.hsqty * transactions.trsign) 
           from histostock 
                join transactions on histostock.hscode = transactions.trcode 
          where hslot = lots.locode and
             hscode in ('AJCL','AJDS','AJSM','AJST','AJTF','DADJ','RADJ')), 0) as qty_AJ,
    isnull((select list( distinct string(dateformat(histostock.hsdatim, 'DD/MM/YYYY')) order by histostock.hsdatim )
           from histostock 
                join transactions on histostock.hscode = transactions.trcode 
          where hslot = lots.locode and
             hscode in ('AJCL','AJDS','AJSM','AJST','AJTF','DADJ','RADJ')), '') as date_AJ,
    isnull((select sum(histostock.hsqty * transactions.trsign) 
           from histostock 
                join transactions on histostock.hscode = transactions.trcode 
          where hslot = lots.locode and
             hscode in ('RCIO','DLFO','DLMO','DLSV','DLST','DLSM','DLDS','RTDS')), 0) as qty_consom,
    isnull((select list( distinct string( histostock.hsordno) + ' ' + string(dateformat(histostock.hsdatim, 'DD/MM/YYYY')) order by histostock.hsordno)
           from histostock 
                join transact
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| lots_lot |
| lots_date_lasttrec |
| lots_dlc |
| lots_lostatus |
| qty_rec |
| date_rec |
| qty_aj |
| date_aj |
| qty_consom |
| cons_of |
| qty_exp |
| datenum_exp |
| ecartin_out |

