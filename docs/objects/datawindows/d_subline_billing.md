# d_subline_billing

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT SUBLINE_REP.sr_id,
		items.itcode,
		items.itname,
		SUBLINE_SAL.sl_qty,
		SUBLINE_REP.sr_value,
		itsal.itcode as itemsal_code,
		itsal.itname as itemsal_name,
		SUBLINE_SAL.sl_cmnt,
		SUBLINE_REP.sr_cmnt,
		SUBLINE_REP.sr_pt,
		SUBLINE_REP.sr_nbrpoint,
		SUBLINE_REP.sr_accode,
		SUBLINE_REP.sr_nofac
    FROM subhead
		JOIN adresses ON adresses.adcode =  subhead.sh_cust_fk_adresses
		JOIN SUBLINE_SAL ON SUBLINE_SAL.sl_sh_id_fk_SUBHEAD = subhead.sh_id AND SUBLINE_SAL.sl_activ = 'Y'
		JOIN SUBLINE_REP ON SUBLINE_REP.sr_sl_id_fk_SUBLINE_SAL = SUBLINE_SAL.sl_id AND SUBLINE_REP.sr_activ = 'Y'
		JOIN items ON items.itcode = SUBLINE_REP.sr_itcode_fk_items
		JOIN items as itsal ON itsal.itcode = SUBLINE_SAL.sl_itcode_fk_items
 WHERE subhead.sh_id = :al_sh_id 
```

## Colonnes
| Colonne |
|---------|
| subline_rep_sr_id |
| items_itcode |
| items_itname |
| subline_sal_sl_qty |
| subline_rep_sr_value |
| itemsal_code |
| itemsal_name |
| subline_sal_sl_cmnt |
| subline_rep_sr_cmnt |
| subline_rep_sr_pt |
| subline_rep_sr_nbrpoint |
| subline_rep_sr_accode |
| subline_rep_sr_nofac |

