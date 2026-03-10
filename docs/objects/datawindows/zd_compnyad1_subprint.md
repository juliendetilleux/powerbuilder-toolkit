# zd_compnyad1_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT 
         if isnull(adresses.addesc2,'') = '' then
			 adresses.adname
		else
			adresses.addesc2
		endif as adname,     
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail  
    FROM adresses  
   WHERE adresses.adcode = '##########'    

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

