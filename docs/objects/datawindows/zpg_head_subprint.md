# zpg_head_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.adurl,   
         adresses.adcountr,   
         adresses.adbank ,
		adresses.adtva,
			adresses.adiban1,
			adresses.adiban2,
 	adresses.adbic1,
	adresses.adbic2,
	adresses.adcrmuf04
    FROM adresses  
   WHERE adresses.adcode = :as_multico

```

## Colonnes
| Colonne |
|---------|
| adadr1 |
| adzip |
| adloc |
| adtel |
| adfax |
| admail |
| adurl |
| adcountr |
| adbank |
| adtva |
| adiban1 |
| adiban2 |
| adbic1 |
| adbic2 |
| adcrmuf04 |

