# d_etiq_bps_nosend_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT eti_bps.eb_id,   
         eti_bps.eb_date,   
         eti_bps.eb_bps_seq,   
         eti_bps.eb_removal,   
         eti_bps.eb_nb_colis,   
         eti_bps.eb_code_palette,   
         eti_bps.eb_cod,   
         eti_bps.eb_salhead_fk_shcode,   
         eti_bps.eb_comments,   
         eti_bps.eb_mailled,   
         eti_bps.eb_datetime_mailled,   
         eti_bps.eb_users_fk_uscode,
		adresses.adcode,
		adresses.adname,
		salhead.shdatreq  
    FROM eti_bps
		JOIN salhead ON salhead.shcode = eb_salhead_fk_shcode
		JOIN adresses ON adresses.adcode = salhead.shcust
  WHERE eti_bps.EB_mailled = 0

```

## Colonnes
| Colonne |
|---------|
| eb_id |
| eb_date |
| eb_bps_seq |
| eb_removal |
| eb_nb_colis |
| eb_code_palette |
| eb_cod |
| eb_salhead_fk_shcode |
| eb_comments |
| eb_mailled |
| eb_datetime_mailled |
| eb_users_fk_uscode |
| adresses_adcode |
| adresses_adname |
| salhead_shdatreq |

