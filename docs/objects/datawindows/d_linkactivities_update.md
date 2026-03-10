# d_linkactivities_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkactivities.laitem,   
         items.itname,   
         linkactivities.laquoteval,   
         linkactivities.latiming,   
         items.itcat,   
         linkactivities.lacode,   
         linkactivities.ladesc,   
         linkactivities.laaacode  
    FROM linkactivities,   
         items  
   WHERE ( items.itcode = linkactivities.laitem ) and  
         ( items.itactiv = 'Y' ) and 
			( linkactivities.lacode = :al_code )  
ORDER BY linkactivities.laitem ASC   

```

## Colonnes
| Colonne |
|---------|
| laitem |
| items_itname |
| laquoteval |
| latiming |
| itcat |
| lacode |
| ladesc |
| laaacode |

