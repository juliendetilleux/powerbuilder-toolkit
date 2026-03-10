# d_distgrhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT  distgrhead.dhcode , 
          distgrhead.dhname , 
          distgrhead.dhdesc ,
          distgrhead.dhactiv        
     FROM distgrhead      
    WHERE ( distgrhead.dhcode = :groupcode )   
```

## Colonnes
| Colonne |
|---------|
| dhcode |
| dhname |
| dhdesc |
| dhactiv |

