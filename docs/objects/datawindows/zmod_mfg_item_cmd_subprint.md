# zmod_mfg_item_cmd_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adname,
		salline.slcode,
		salline.slline,
		mfgcoitemsal.msqty,
		items.itum,
		salline.slcomment 
  FROM mfgcoitemsal,
		salline,
		salhead,
		adresses,
		items
 WHERE adresses.adcode = salhead.shcust AND
		mfgcoitemsal.msitem = items.itcode AND
		mfgcoitemsal.mssalhead = salhead.shcode AND 
		mfgcoitemsal.mssalhead = salline.slcode AND 
		mfgcoitemsal.mssalline = salline.slline AND
      mfgcoitemsal.msitem = :as_item AND
		mfgcoitemsal.msmhcode = :al_ordno 
  
ORDER BY  salline.slcode, salline.slline
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| salline_slcode |
| salline_slline |
| mfgcoitemsal_msqty |
| items_itum |
| salline_slcomment |

