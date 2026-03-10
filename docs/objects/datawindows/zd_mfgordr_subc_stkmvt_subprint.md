# zd_mfgordr_subc_stkmvt_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT items.itcode,
		items.itname,
		items.itdefaultlot,
		histostock.hsdatim,
		histostock.hslot,
		histostock.hsloc,
		histostock.hsqty,
		histostock.hsum,
		histostock.hscomment,
		histostock.hscode,
		lots.lolotctrl,
		lots.loorgcode,
		transactions.trsign,
		transactions.trname
	FROM histostock,
		items,
		lots,
		transactions
	WHERE histostock.hsordno = :selected_order
		AND histostock.hslot = lots.locode
		AND items.itcode = histostock.hsitem
		AND transactions.trcode = histostock.hscode
		AND histostock.hsdatim BETWEEN :adt_start AND :adt_stop
		AND histostock.hsordtyp = 'M'
		AND hscode in ( 'DLMO', 'RTMO' )
 ORDER BY items.itcode,
		histostock.hslot
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itdefaultlot |
| histostock_hsdatim |
| histostock_hslot |
| histostock_hsloc |
| histostock_hsqty |
| histostock_hsum |
| histostock_hscomment |
| histostock_hscode |
| lots_lolotctrl |
| lots_loorgcode |
| transactions_trsign |
| transactions_trname |

