# d_linkaddisclogist

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkaddisclogist.lddiscount,
			linkaddisclogist.ldcode,  
         linkaddisclogist.ldcust,
			linkaddisclogist.ldadresgroup,   
         ( select adresgroup.agdesc from adresgroup where adresgroup.agactiv = 'Y' and adresgroup.agcode = linkaddisclogist.ldadresgroup ) as groupdesc, 
         ( select adresgroup.agactiv from adresgroup where adresgroup.agcode = linkaddisclogist.ldadresgroup ) as activgroup,   
         ( select adresses.adname from adresses where adresses.adactiv = 'Y' and adresses.adcode = linkaddisclogist.ldcust ) as custdesc ,   
         ( select adresses.adactiv from adresses where adresses.adcode = linkaddisclogist.ldcust ) as activcust
    FROM linkaddisclogist   
   WHERE linkaddisclogist.lddiscount = :ran_discount  	And
			( 	activgroup = 'Y' Or activcust = 'Y' Or linkaddisclogist.ldcust = '*' )			
			
			


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

