# d_contacts_multi

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adname,   
         adresses.adgrading,   
         adresses.adtva,
			contacts.ctline,
			contacts.ctname,
			contacts.ctfirstname,
			contacts.ctmadcode,    
         adresses.adtype,
			contacts.ctfunction,
			contacts.cttel,
			contacts.ctgsm,
			contacts.ctmail,
			( select choiceline.clname  FROM choiceline WHERE ( choiceline.clcode = 'FUNC' ) AND ( choiceline.clline = contacts.ctfunc ) ),
			adsalesman
   
    FROM adresses,
			contacts   
	WHERE adresses.adactiv = 'Y' AND
			adresses.adcode not in ('#########C','#########R','#########S') AND  
			adresses.adcode = contacts.ctadcode AND
			contacts.ctactiv = 'Y' AND
			contacts.ctmadcode = :as_adcode AND
			contacts.ctmline = :al_line 
 
ORDER BY adresses.adcode
```

## Colonnes
| Colonne |
|---------|
| adcode |
| adcust |
| adsupp |
| adactiv |
| adzip |
| adloc |
| adname |
| adgrading |
| adtva |
| contacts_ctline |
| contacts_ctname |
| contacts_ctfirstname |
| contacts_ctmadcode |
| adresses_adtype |
| contacts_ctfunction |
| contacts_cttel |
| contacts_ctgsm |
| contacts_ctmail |
| cclname |
| adsalesman |

