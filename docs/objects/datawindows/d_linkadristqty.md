# d_linkadristqty

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkadristqty.lddiscount,
			linkadristqty.ldcode,  
         linkadristqty.ldcust,
			linkadristqty.ldadresgroup,   
         ( select adresgroup.agdesc from adresgroup where adresgroup.agactiv = 'Y' and adresgroup.agcode = linkadristqty.ldadresgroup ) as groupdesc, 
         ( select adresgroup.agactiv from adresgroup where adresgroup.agcode = linkadristqty.ldadresgroup ) as activgroup,   
         ( select adresses.adname from adresses where adresses.adactiv = 'Y' and adresses.adcode = linkadristqty.ldcust ) as custdesc ,   
         ( select adresses.adactiv from adresses where adresses.adcode = linkadristqty.ldcust ) as activcust
    FROM linkadristqty   
   WHERE linkadristqty.lddiscount = :ran_discount  	And
			( 	activgroup = 'Y' Or activcust = 'Y' Or linkadristqty.ldcust = '*' )			 
			
			


```

## Colonnes
| Colonne |
|---------|
| lddiscount |
| ldcode |
| ldcust |
| ldadresgroup |
| groupdesc |
| activgroup |
| custdesc |
| activcust |

