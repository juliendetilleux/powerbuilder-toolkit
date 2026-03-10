# zmod_matbyrl_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT Routline.rlline,
		Bomline.blline,
		Routline.rlwccode,
		Workcenters.wcname,
		Bomline.blramcode,
		(SELECT Items.itname
			FROM Items
			WHERE Items.itcode = Bomline.blramcode) as itname,
		(SELECT Items.itum
			FROM Items
			WHERE Items.itcode = Bomline.blramcode) as itum,
		Routline.rllabval,
		Routline.rlmacval,
		Routline.rloper,
		Routline.rloffset,
		Routline.rlsetup,
		Routline.rlmacrun,
		Routline.rllabfix,
		Routline.rllabrun,
		(SELECT Workoper.woopdesc
			FROM Workoper
			WHERE Routline.rlwccode = workoper.wowcid
				AND Routline.rltask = workoper.woopid ) as task,
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
		Bomline.blramtype,
		Bomhead.bhcoeff,
		Bomhead.Bhcoeff_calc,
		bomline.bloneemp,
		bomline.blloc 
	FROM Routline LEFT OUTER JOIN Bomline ON
			Routline.rlcode = Bomline.blcode
			AND Routline.rltype = Bomline.bltype
			AND Routline.rlline = Bomline.blroutline,
		Workcenters,
		bomhead 
	WHERE Routline.rlcode = :as_bhcode
		AND Routline.rltype = :as_bhtype
		AND Bomhead.bhcode = :as_bhcode
		AND Bomhead.bhtype = :as_bhtype
		AND Workcenters.wccode = Routline.rlwccode
	ORDER BY 1,2
```

## Colonnes
| Colonne |
|---------|
| routline_rlline |
| bomline_blline |
| routline_rlwccode |
| workcenters_wcname |
| bomline_blramcode |
| items_itname |
| items_itum |
| routline_rllabval |
| routline_rlmacval |
| routline_rloper |
| routline_rloffset |
| routline_rlsetup |
| routline_rlmacrun |
| routline_rllabfix |
| routline_rllabrun |
| ctask |
| cusagetype |
| bomline_blpalloctyp |
| bomline_blscrap |
| bomline_blcomment |
| bomline_blstartdat |
| bomline_blstopdat |
| bomline_blramval |
| bomline_blramqty |
| blramtype |
| bhcoeff |
| bhcoeff_calc |
| bomline_bloneemp |
| bomline_blloc |

