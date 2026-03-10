# dd_subcontr_item

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname  
    FROM items  
   WHERE ( items.itowner like :ras_Cust ) AND  
         ( items.itcons = 'Y' ) AND  
         ( items.itowner <> '##########' ) AND  
         ( items.itactiv = 'Y' )    
     AND  items.itcode not like '###########%'  AND
      	(items.itisumtarif <> 'Y' OR
		isnull((select ppvalue from progparam where ppcode = 'ITUMTRF' ),'') = '' )/*os2751*/

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |

