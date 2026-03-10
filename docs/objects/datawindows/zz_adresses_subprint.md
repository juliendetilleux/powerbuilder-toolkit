# zz_adresses_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adtva,   
         adresses.adfax,   
         adresses.adcountr,   
         adresses.adtel,   
         adresses.adcode,

			isnull(adresses.aduseadrescomp,'N') as aduseadrescomp,       
			isnull(adresses.adadrescomp1, '') as adadrescomp1,       
			isnull(adresses.adadrescomp2, '') as adadrescomp2,       
			isnull(adresses.adadrescomp3, '') as adadrescomp3,       
			isnull(adresses.adadrescomp4, '') as adadrescomp4,       
			isnull(adresses.adadrescomp5, '') as adadrescomp5,       
			isnull(adresses.adadrescomp6, '') as adadrescomp6  
    FROM adresses  
   WHERE adresses.adcode = :ras_AdId    

```

## Colonnes
| Colonne |
|---------|
| adname |
| adadr1 |
| adadr2 |
| adzip |
| adloc |
| adtva |
| adfax |
| adcountr |
| adtel |
| adcode |
| aduseadrescomp |
| adadrescomp1 |
| adadrescomp2 |
| adadrescomp3 |
| adadrescomp4 |
| adadrescomp5 |
| adadrescomp6 |

