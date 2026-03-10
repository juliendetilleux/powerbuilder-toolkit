# zd_detailed_adresse_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,
		adresses.adtel2 
    FROM adresses  
   WHERE adresses.adcode = :Se_adid    

```

## Colonnes
| Colonne |
|---------|
| adname |
| adadr1 |
| adadr2 |
| adzip |
| adloc |
| adcountr |
| adtva |
| adtel |
| adfax |
| admail |
| adtel2 |

