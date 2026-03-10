# d_linkaddiscount

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkaddiscount.lddiscount,
			linkaddiscount.ldcode,  
         linkaddiscount.ldcust,
			linkaddiscount.ldadresgroup,   
         ( select adresgroup.agdesc from adresgroup where adresgroup.agactiv = 'Y' and adresgroup.agcode = linkaddiscount.ldadresgroup ) as groupdesc, 
         ( select adresgroup.agactiv from adresgroup where adresgroup.agcode = linkaddiscount.ldadresgroup ) as activgroup,   
         ( select adresses.adname from adresses where adresses.adactiv = 'Y' and adresses.adcode = linkaddiscount.ldcust ) as custdesc ,   
         ( select adresses.adactiv from adresses where adresses.adcode = linkaddiscount.ldcust ) as activcust
    FROM linkaddiscount   
   WHERE linkaddiscount.lddiscount = :ran_discount  	And
			( 	activgroup = 'Y' Or activcust = 'Y' Or linkaddiscount.ldcust = '*' )			
			
			


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

