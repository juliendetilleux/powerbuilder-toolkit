# ds_linkadpromo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT linkadpromo.lkpromo,   
         linkadpromo.lkcode,   
         linkadpromo.lkcust,   
         linkadpromo.lkadresgroup  
    FROM linkadpromo   , adresses , promohead 
where linkadpromo.lkcust = adresses.adcode and
           adresses.adsalesman like :as_adsalesman   and
		 linkadpromo.lkpromo = promohead.phcode and 
		promohead.phstopdate > :adt_lastsync 
UNION ALL 
  SELECT linkadpromo.lkpromo,   
         linkadpromo.lkcode,   
         linkadpromo.lkcust,   
         linkadpromo.lkadresgroup  
    FROM linkadpromo, promohead    
where isnull( linkadpromo.lkcust , '' ) = ''  and
		 linkadpromo.lkpromo = promohead.phcode and 
		promohead.phstopdate > :adt_lastsync 
	
```

## Colonnes
| Colonne |
|---------|
| lkpromo |
| lkcode |
| lkcust |
| lkadresgroup |

