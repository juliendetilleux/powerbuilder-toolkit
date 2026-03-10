# d_subscription_billing

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,
		subhead.sh_cust_fk_adresses,
         subhead.sh_name,   
         subhead.sh_id,   
         subhead.sh_bom_fk_bomsubhead,   
	    subhead.sh_datecrea,   
         subhead.sh_usercrea_fk_users,   
         subhead.sh_datestart,   
         subhead.sh_datestop,   
         subhead.sh_periodicity ,
	    subhead.sh_status,
	    subhead.sh_cmnt,
		subhead.sh_typeabo,
	    ts_datestart,
	    ts_datestop,
	    CASE subhead.sh_typeabo 
			WHEN 1 THEN ( SELECT max( INvoicehead.ihdate ) 
								
FROM SUBINVOICE 
								JOIN INvoicehead ON INvoicehead.ihcode = si_invoice_fk_invoicehead
								 
WHERE si_subscribe_fk_SUBHEAD = subhead.sh_id )
		 WHEN 2 THEN ( SELECT max(subaction.sa_date_start ) 
							
FROM SUBaction 
							 
WHERE sa_subscribe_fk_SUBHEAD = subhead.sh_id ) 
		END as last_date_inv,
		sum( SUBLINE_SAL.sl_qty * IsNull(SUBLINE_REP.sr_value,1) ) as sum_value,  
		IF isnull((SELECT ppvalue 
FROM progparam 
WHERE ppcode = 'MULTICO'), '') = '1' THEN /*os3032*/
			isnull(subhead.sh_mcdo_fk_adresses, '##########')
		ELSE
			isnull((SELECT linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = subhead.sh_cust_fk_adresses),'##########') 
		ENDIF as mcdo,
		(SELECT adname 
FROM adresses 
WHERE adcode = mcdo) as mcdo_name
   FROM sp_get_subheadtobill( :adt_datetoinv ) JOIN subhead ON subhead.sh_id = ts_sh_id JOIN adresses ON adresses.adcode =  subhead.sh_cust_fk_adresses, SUBLINE_SAL LEFT OUTER JOIN SUBLINE_REP ON SUBLINE_REP.sr_sl_id_fk_SUBLINE_SAL = SUBLINE_SAL.sl_id AND SUBLINE_REP.sr_activ = 'Y'
WHERE SUBLINE_SAL.sl_sh_id_fk_SUBHEAD = subhead.sh_id AND SUBLINE_SAL.sl_activ = 'Y'
GROUP BY  adresses.adname,
		subhead.sh_cust_fk_adresses,
         subhead.sh_name,   
         subhead.sh_id,   
         subhead.sh_bom_fk_bomsubhead,   
	    subhead.sh_datecrea,   
         subhead.sh_usercrea_fk_users,   
         subhead.sh_datestart,   
         subhead.sh_datestop,   
         subhead
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| subhead_sh_cust_fk_adresses |
| sh_name |
| sh_id |
| sh_bom_fk_bomsubhead |
| sh_datecrea |
| sh_usercrea_fk_users |
| sh_datestart |
| sh_datestop |
| sh_periodicity |
| sh_status |
| subhead_sh_cmnt |
| sh_typeabo |
| ts_datestart |
| ts_datestop |
| last_date_inv |
| sum_value |
| mcdo |
| mcdo_name |

