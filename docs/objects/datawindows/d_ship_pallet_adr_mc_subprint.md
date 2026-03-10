# d_ship_pallet_adr_mc_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adreg,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         adresses.admemo,   
         adresses.adcmnt,   
         adresses.adname,  
			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2398*/
				isnull((select shmccode from shiphead where shcode = :al_shiphead), '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = :customer),'##########')
			ENDIF as mcdo
 
    FROM adresses  
   WHERE adresses.adcode = mcdo    


```

## Colonnes
| Colonne |
|---------|
| adadr1 |
| adadr2 |
| adzip |
| adloc |
| adcountr |
| adtva |
| adreg |
| adtel |
| adfax |
| admail |
| admemo |
| adcmnt |
| adname |
| mcdo |

