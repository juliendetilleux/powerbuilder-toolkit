# d_adresses_commission

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adcode,   
         isnull(adresses.adcommission,0) as adcommission,   
         (select adresgroup.agdesc
				from adresgroup
				where adresses.adgrcust = adresgroup.agcode ) as adgrcust  
    FROM adresses  
   WHERE ( adresses.adactiv = 'Y' ) AND  
         ( adresses.adcust = 'Y' ) AND
	      adresses.adcode not in ('#########C','#########R','#########S')  
ORDER BY adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adcode |
| adcommission |
| adgrcust |

