# d_dviln_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  Select projhead.phcode  , 
         projhead.phdesc  ,
         projhead.phdesc2,
		if trim(isnull(adresses.adlang,'')) = '' then (select adlang from adresses where adcode = '##########') else adresses.adlang endif as lang
    From projhead, adresses  
   Where projhead.phcode = :ran_ProjId AND
		projhead.phadid = adresses.adcode 

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phdesc |
| phdesc2 |
| lang |

