# d_subline_sal_update_action

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT SUBLINE_SAL.sl_sh_id_fk_SUBHEAD,
		SUBLINE_SAL.sl_id,
		SUBLINE_SAL.sl_itcode_fk_items,
		SUBLINE_SAL.sl_slcode_fk_salline,
		SUBLINE_SAL.sl_slline_fk_salline,
		SUBLINE_SAL.sl_datecrea,
		SUBLINE_SAL.sl_usercrea_fk_users,
		SUBLINE_SAL.sl_datemodif,
		SUBLINE_SAL.sl_usermodif_fk_users,
		SUBLINE_SAL.sl_createcmd,
		SUBLINE_SAL.sl_activ,
		SUBLINE_SAL.sl_qty,
		SUBLINE_SAL.sl_cmnt,
		SUBLINE_SAL.sl_accode,
		SUBLINE_SAL.sl_aarespons,
		SUBLINE_SAL.sl_actionauto,
		salline.slstdval,
		salline.slsalval,
		(select RealPrice from sp_getsalprice_real( SUBHEAD.sh_cust_fk_adresses, SUBLINE_SAL.sl_itcode_fk_items, SUBLINE_SAL.sl_qty, now() )) as rate_price
    FROM SUBLINE_SAL
		JOIN SUBHEAD ON SUBHEAD.sh_id = SUBLINE_SAL.sl_sh_id_fk_SUBHEAD
		LEFT OUTER JOIN salline ON salline.slcode = SUBLINE_SAL.sl_slcode_fk_salline AND salline.slline = SUBLINE_SAL.sl_slline_fk_salline
   WHERE SUBLINE_SAL.sl_sh_id_fk_SUBHEAD = :al_sh_id

```

## Colonnes
| Colonne |
|---------|
| subline_sal_sl_sh_id_fk_subhead |
| subline_sal_sl_id |
| subline_sal_sl_itcode_fk_items |
| subline_sal_sl_slcode_fk_salline |
| subline_sal_sl_slline_fk_salline |
| subline_sal_sl_datecrea |
| subline_sal_sl_usercrea_fk_users |
| subline_sal_sl_datemodif |
| subline_sal_sl_usermodif_fk_users |
| subline_sal_sl_createcmd |
| subline_sal_sl_activ |
| subline_sal_sl_qty |
| subline_sal_sl_cmnt |
| subline_sal_sl_accode |
| subline_sal_sl_aarespons |
| subline_sal_sl_actionauto |
| salline_slstdval |
| salline_slsalval |
| rate_price |

