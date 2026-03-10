# d_subhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,
	    subhead.sh_cust_fk_adresses,
	    subhead.sh_mcdo_fk_adresses,
         subhead.sh_name,   
         subhead.sh_id,   
         subhead.sh_bom_fk_bomsubhead,   
	    subhead.sh_datecrea,   
         subhead.sh_usercrea_fk_users,   
         subhead.sh_datestart,   
         subhead.sh_datestop,   
         subhead.sh_datemodif,
         subhead.sh_usermodif_fk_users,
         subhead.sh_periodicity ,
	    subhead.sh_status,
	    subhead.sh_cmnt,
	    subhead.sh_monthdec,
	    subhead.sh_typeabo
    FROM subhead  
		JOIN adresses ON adresses.adcode =  subhead.sh_cust_fk_adresses
   WHERE subhead.sh_id = :al_sh_id

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| subhead_sh_cust_fk_adresses |
| subhead_sh_mcdo_fk_adresses |
| sh_name |
| sh_id |
| sh_bom_fk_bomsubhead |
| sh_datecrea |
| sh_usercrea_fk_users |
| sh_datestart |
| sh_datestop |
| subhead_sh_datemodif |
| subhead_sh_usermodif_fk_users |
| sh_periodicity |
| sh_status |
| subhead_sh_cmnt |
| subhead_sh_monthdec |
| subhead_sh_typeabo |

