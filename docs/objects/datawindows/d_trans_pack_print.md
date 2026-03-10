# d_trans_pack_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT (-sum(Histocons.hcqty * transactions.trsign )) qty,
		Histocons.hcpack,
		Packings.pkname
	FROM Histocons,Packings, transactions
	WHERE  Histocons.hccode in ( 'DLPK', 'RCPK', 'RTPK','RADJ','DADJ')
		and Histocons.hccode = transactions.trcode
		and Histocons.hcpack = Packings.pkcode
		and hcdatim between :start_date and :stop_date
	GROUP BY Histocons.hcpack,Packings.pkname
```

## Colonnes
| Colonne |
|---------|
| cqty |
| histocons_hcpack |
| packings_pkname |

