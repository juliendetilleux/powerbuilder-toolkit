# d_country_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT country.cocode,   
         country.coactiv,   
         country.codesc,   
         country.cointrastat,   
         country.coiso3,   
         country.cofedexetd  /*HA2580*/
    FROM country  
   WHERE country.cocode = :Selected_country    

```

## Colonnes
| Colonne |
|---------|
| cocode |
| coactiv |
| codesc |
| cointrastat |
| coiso3 |
| cofedexetd |

