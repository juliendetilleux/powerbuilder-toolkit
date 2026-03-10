# d_linkadpromo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkadpromo.lkpromo,   
         linkadpromo.lkcode,   
         linkadpromo.lkcust,   
         linkadpromo.lkadresgroup,   
         ( select adresgroup.agdesc from adresgroup where adresgroup.agactiv = 'Y' and adresgroup.agcode = linkadpromo.lkadresgroup ) as groupdesc, 
         ( select adresgroup.agactiv from adresgroup where adresgroup.agcode = linkadpromo.lkadresgroup ) as activgroup,  
         ( select adresses.adname from adresses where adresses.adactiv = 'Y' and adresses.adcode = linkadpromo.lkcust ) as custdesc  ,  
         ( select adresses.adactiv from adresses where adresses.adcode = linkadpromo.lkcust ) as activcust
    FROM linkadpromo  
   WHERE linkadpromo.lkpromo = :ran_promo 			And
			( activgroup = 'Y' Or activcust = 'Y' Or linkadpromo.lkcust = '*' )	    		

```

## Colonnes
| Colonne |
|---------|
| lkpromo |
| lkcode |
| lkcust |
| lkadresgroup |
| groupdesc |
| activgroup |
| custdesc |
| activcust |

