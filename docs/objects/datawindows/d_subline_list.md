# d_subline_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT SUBLINE_SAL.sl_id,
		SUBLINE_SAL.sl_itcode_fk_items,
		SUBLINE_SAL.sl_slcode_fk_salline,
		SUBLINE_SAL.sl_slline_fk_salline,
		SUBLINE_SAL.sl_activ,
		SUBLINE_SAL.sl_qty,
		itsal.itname as itsal_name,
		salline.slstdval,
		salline.slsalval,
		SUBLINE_REP.sr_id,
		SUBLINE_REP.sr_itcode_fk_items,
		SUBLINE_REP.sr_activ,
		SUBLINE_REP.sr_value,
		SUBLINE_REP.sr_index,
		itrep.itname as itrep_name,
		SUBLINE_SAL.sl_cmnt,
		SUBLINE_REP.sr_cmnt
    FROM SUBLINE_SAL
		JOIN items as itsal ON itsal.itcode = SUBLINE_SAL.sl_itcode_fk_items
		LEFT OUTER JOIN salline ON salline.slcode = SUBLINE_SAL.sl_slcode_fk_salline AND salline.slline = SUBLINE_SAL.sl_slline_fk_salline
		LEFT OUTER JOIN SUBLINE_REP ON SUBLINE_REP.sr_sl_id_fk_SUBLINE_SAL = SUBLINE_SAL.sl_id
		LEFT OUTER JOIN items as itrep ON itrep.itcode = SUBLINE_SAL.sl_itcode_fk_items
   WHERE SUBLINE_SAL.sl_sh_id_fk_SUBHEAD = :al_sh_id

```

## Colonnes
| Colonne |
|---------|
| subline_sal_sl_id |
| subline_sal_sl_itcode_fk_items |
| subline_sal_sl_slcode_fk_salline |
| subline_sal_sl_slline_fk_salline |
| subline_sal_sl_activ |
| subline_sal_sl_qty |
| items_itsal_name |
| salline_slstdval |
| salline_slsalval |
| subline_rep_sr_id |
| subline_rep_sr_itcode_fk_items |
| subline_rep_sr_activ |
| subline_rep_sr_value |
| subline_rep_sr_index |
| items_itrep_name |
| subline_sal_sl_cmnt |
| subline_rep_sr_cmnt |

