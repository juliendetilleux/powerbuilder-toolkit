# zd_generalpromo_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT distinct promohead.phname, 
		promohead.phstartdate, 
		promohead.phstopdate 
    FROM promohead, linkadpromo
   WHERE linkadpromo.lkcust LIKE if linkadpromo.lkcust = '*' then '%' else :as_cust endif AND 
         promohead.phcode = linkadpromo.lkpromo AND 
     	promohead.phactiv = 'Y' AND 
         promohead.phrateid is null 
 
UNION  
 
     SELECT distinct promohead.phname, 
		promohead.phstartdate, 
		promohead.phstopdate 
    FROM promohead, linkadpromo, adresses, adresgroup 
   WHERE adresses.adcode = :as_cust AND 
         adresses.adgrcust LIKE if linkadpromo.lkadresgroup = '*' or linkadpromo.lkadresgroup = '  ' then '%' else linkadpromo.lkadresgroup endif AND 
         promohead.phcode = linkadpromo.lkpromo AND 
     	promohead.phactiv = 'Y' AND 
         adresgroup.agcode = adresses.adgrcust AND 
         adresgroup.agactiv = 'Y' AND
         promohead.phrateid is null 
    
  ORDER BY 2, 1  
```

## Colonnes
| Colonne |
|---------|
| promohead_phname |
| phstartdate |
| phstopdate |

