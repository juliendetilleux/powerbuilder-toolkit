# ds_user_acces

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT pfobjet.poid as autority 
    FROM pfobjet,   
         pfuseracces  
   WHERE ( pfuseracces.papoid = pfobjet.poid ) and  
         ( pfuseracces.pauscode = :as_curruser ) AND  
         ( pfobjet.poavailable = 'Y' )  and 
			(pfuseracces.paautoriteg = 'Y' )   
ORDER BY pfobjet.poid ASC   

```

## Colonnes
| Colonne |
|---------|
| autority |

