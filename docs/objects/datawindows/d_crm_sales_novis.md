# d_crm_sales_novis

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT salesman.smcode,   
         salesman.smactiv,   
         salesman.smname  
    FROM salesman  
   WHERE ( salesman.smcode NOT IN ( SELECT DISTINCT linksaus.lismcode                       FROM linksaus                                   WHERE ( linksaus.liuscode = :a_user )              ) ) AND  
         ( salesman.smactiv = 'Y' )  
ORDER BY salesman.smname ASC   

```

## Colonnes
| Colonne |
|---------|
| smcode |
| smactiv |
| smname |

