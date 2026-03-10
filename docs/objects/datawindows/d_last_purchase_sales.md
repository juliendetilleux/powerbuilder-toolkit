# d_last_purchase_sales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
SELECT Purhead.phcode,
		Purline.plline,
		Purline.plitem,
		Purline.plqtyord,
		Purline.pluomord,
		Purhead.phpurchaser,
		Purline.pldatsup
	FROM Purhead,
		Purline
	WHERE Purline.plcode = Purhead.phcode
		AND Purhead.phcode = (SELECT max(Purhead.Phcode)
										FROM Purhead
										WHERE Purhead.phstatus < '2'
											AND Purhead.phsupp = :as_supplier
											AND Purhead.phcurr = :as_currencie
											AND Purhead.phpurchaser = :as_purchaser
											AND (Purhead.phfileref = :al_fileref OR 0 = :al_fileref)
											AND (Purhead.phfileline = :al_fileline OR 0 = :al_fileline)
											AND (isnull(Purhead.phcntid,0) > 0 
													OR trim(isnull(Purhead.phaut,'')) = '' 
													OR isnull((select ppvalue from progparam where ppcode = 'APPROBIVY'),'') <> 'Y' ))
	ORDER BY Purline.pldatsup asc,Purline.plline asc
```

## Colonnes
| Colonne |
|---------|
| purhead_phcode |
| purline_plline |
| purline_plitem |
| purline_plqtyord |
| purline_pluomord |
| purhead_phpurchaser |
| purline_pldatsup |

