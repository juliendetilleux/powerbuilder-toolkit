# d_salaux_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salaux.sacode,   
         salaux.saline,   
         salaux.sastatus,   
         salaux.sadesc,   
         salaux.saqty,   
         salaux.saum,   
         salaux.sastdval,   
         salaux.sasalval,   
         salaux.safileref,   
         salaux.safileline,   
         salaux.safatype,   
         salaux.sacomment,
			salaux.sadatcrea,
			salaux.saexp,
			salaux.sasort, /*HA2529*/
			salhead.shcurr  
    FROM salaux, salhead   
 WHERE salaux.sacode = :al_salcode AND
		 salaux.saline = :al_salaux AND
		 salhead.shcode = salaux.sacode
 
	

```

## Colonnes
| Colonne |
|---------|
| sacode |
| saline |
| sastatus |
| salaux_sadesc |
| saqty |
| salaux_saum |
| sastdval |
| sasalval |
| safileref |
| safileline |
| safatype |
| sacomment |
| salaux_sadatcrea |
| salaux_saexp |
| salaux_sasort |
| salhead_shcurr |

