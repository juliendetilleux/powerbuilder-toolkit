# zmod_matwrl_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT Bomline.blline,
		'SANS POSTE DE CHARGE' AS opname,
		Bomline.blramcode,
		Items.itname,
		Items.itum,
		(SELECT chname
			FROM Choices
			WHERE Choices.chcode = Bomline.blramtype
				AND Choices.chtype = 'BUST') as usagetype,
		Bomline.blpalloctyp,
		Bomline.blscrap,
		Bomline.blcomment,
		Bomline.blstartdat,
		Bomline.blstopdat,
		Bomline.blramval,
		Bomline.blramqty,
		bomline.bloneemp,
		bomline.blloc 
	FROM Bomline,
		Items
	WHERE Bomline.blcode = :as_bhcode
		AND Bomline.bltype = :as_bhtype
		AND Bomline.blroutline IS NULL
		AND Items.itcode = Bomline.blramcode
	ORDER BY 1
```

## Colonnes
| Colonne |
|---------|
| bomline_blline |
| copname |
| bomline_blramcode |
| items_itname |
| items_itum |
| cusagetype |
| bomline_blpalloctyp |
| bomline_blscrap |
| bomline_blcomment |
| bomline_blstartdat |
| bomline_blstopdat |
| bomline_blramval |
| bomline_blramqty |
| bomline_bloneemp |
| bomline_blloc |

