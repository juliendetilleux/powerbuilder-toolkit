# d_subhead_list

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
	    ( select clname from choiceline where clcode = 'SUBS' AND clline = subhead.sh_status ) as status,
	    CASE subhead.sh_typeabo 
			WHEN 1 THEN ( SELECT max( INvoicehead.ihdate ) 
								
FROM SUBINVOICE 
								JOIN INvoicehead ON INvoicehead.ihcode = si_invoice_fk_invoicehead
								 
WHERE si_subscribe_fk_SUBHEAD = subhead.sh_id )
		 WHEN 2 THEN ( SELECT max(subaction.sa_date_start ) 
							
FROM SUBaction 
							 
WHERE sa_subscribe_fk_SUBHEAD = subhead.sh_id ) 
		END as last_date_inv,
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os3032*/
			isnull(sh_mcdo_fk_adresses, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = adresses.adcode),'##########') 
		ENDIF as mcdo,
		(select adname from adresses where adcode = mcdo) as mcdo_name
    FROM subhead  
		JOIN adresses ON adresses.adcode =  subhead.sh_cust_fk_adresses
   WHERE subhead.sh_status BETWEEN :al_status_min AND :al_status_max

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
| status |
| last_date_inv |
| mcdo |
| mcdo_name |

