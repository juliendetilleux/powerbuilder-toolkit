# dd_distgroup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT distgrhead.dhcode , 
         distgrhead.dhname ,
         distgrhead.dhactiv        
    FROM distgrhead 
   WHERE distgrhead.dhactiv = 'Y'  
order by dhcode   
```

## Colonnes
| Colonne |
|---------|
| dhcode |
| dhname |
| dhactiv |

