# d_adresgroup3_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT 	adresgroup3.ag3code,   
         		adresgroup3.ag3activ,   
         		adresgroup3.ag3desc,
				adresgroup3.ag3uppergrp
    FROM adresgroup3
   WHERE adresgroup3.ag3code = :Selected_adgroup    


```

## Colonnes
| Colonne |
|---------|
| ag3code |
| ag3activ |
| ag3desc |
| ag3uppergrp |

