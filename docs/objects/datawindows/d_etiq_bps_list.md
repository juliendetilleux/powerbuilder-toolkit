# d_etiq_bps_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT EB_id,
			EB_BPS_SEQ,
			EB_removal,
			EB_nb_colis,
			EB_code_palette,
			EB_COD,
			EB_salhead_fk_shcode as num_cmd,
			EB_comments,
			trim( adresses.adname ) as name_cust,
			trim( shipto.stadr1 )	/*os2957 trim( adresses.adadr1 )*/ as adres1,
			trim( shipto.stadr2 )	/*os2957 trim( adresses.adadr2 )*/ as adres2,
			trim( adresses.adcountrid ) as countri_id,
			trim( shipto.stzip ) /*os2957 trim( adresses.adzip )*/ as zip,
			trim( shipto.stloc )/*os2957 trim( adresses.adloc )*/ as loc,
			salhead.shdatreq,
			adresses.adcode as code_cust,
			adresses.adtel,
			adresses.admail
	 FROM ETI_BPS 
			JOIN salhead ON salhead.shcode = ETI_BPS.EB_salhead_fk_shcode
			JOIN adresses ON adresses.adcode = salhead.shcust
                JOIN shipto on shipto.stcode = salhead.shcust and shipto.stseq = (select max(slshipto) from salline where salline.slcode = salhead.shcode)	/*os2957*/
	WHERE EB_mailled = 0 
	ORDER BY EB_id ;
```

## Colonnes
| Colonne |
|---------|
| eti_bps_eb_id |
| eti_bps_eb_bps_seq |
| eti_bps_eb_removal |
| eti_bps_eb_nb_colis |
| eti_bps_eb_code_palette |
| eti_bps_eb_cod |
| eti_bps_num_cmd |
| eti_bps_eb_comments |
| name_cust |
| adres1 |
| adres2 |
| countri_id |
| zip |
| loc |
| salhead_shdatreq |
| adresses_code_cust |
| adresses_adtel |
| adresses_admail |

