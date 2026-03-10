# d_contacts_copy

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
         adresses.adtype   
    FROM adresses   
	WHERE adresses.adactiv = 'Y' AND
			adresses.adcode not in ('#########C','#########R','#########S') AND  
			isnull(adresses.adphysical,'') <> 'Y' AND
			adresses.adcode NOT IN (SELECT contacts.ctadcode
												FROM contacts
												WHERE contacts.ctmadcode = :as_adcode AND
														contacts.ctmline = :al_line) 
 
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
| adtype |

