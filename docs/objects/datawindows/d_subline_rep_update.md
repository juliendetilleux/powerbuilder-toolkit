# d_subline_rep_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT SUBLINE_REP.sr_id,
		SUBLINE_REP.sr_sl_id_fk_SUBLINE_SAL,
		SUBLINE_REP.sr_itcode_fk_items,
		SUBLINE_REP.sr_datecrea,
		SUBLINE_REP.sr_usercrea_fk_users,
		SUBLINE_REP.sr_datemodif,
		SUBLINE_REP.sr_usermodif_fk_users,
		SUBLINE_REP.sr_activ,
		SUBLINE_REP.sr_value,
		SUBLINE_REP.sr_index,
		SUBLINE_REP.sr_cmnt,
		CAST( null as integer) as link_rowid,
		CAST( 0 as numeric(1, 0) ) as linked,
		SUBLINE_REP.sr_pt,
		SUBLINE_REP.sr_nbrpoint,
		SUBLINE_REP.sr_accode,
		SUBLINE_REP.sr_nofac
    FROM SUBLINE_SAL
		JOIN SUBLINE_REP ON SUBLINE_REP.sr_sl_id_fk_SUBLINE_SAL = SUBLINE_SAL.sl_id
   WHERE SUBLINE_SAL.sl_sh_id_fk_SUBHEAD = :al_sh_id
ORDER BY SUBLINE_REP.sr_sl_id_fk_SUBLINE_SAL,
		SUBLINE_REP.sr_itcode_fk_items
```

## Colonnes
| Colonne |
|---------|
| subline_rep_sr_id |
| subline_rep_sr_sl_id_fk_subline_sal |
| subline_rep_sr_itcode_fk_items |
| subline_rep_sr_datecrea |
| subline_rep_sr_usercrea_fk_users |
| subline_rep_sr_datemodif |
| subline_rep_sr_usermodif_fk_users |
| subline_rep_sr_activ |
| subline_rep_sr_value |
| subline_rep_sr_index |
| subline_rep_sr_cmnt |
| link_rowid |
| linked |
| subline_rep_sr_pt |
| subline_rep_sr_nbrpoint |
| subline_rep_sr_accode |
| subline_rep_sr_nofac |

