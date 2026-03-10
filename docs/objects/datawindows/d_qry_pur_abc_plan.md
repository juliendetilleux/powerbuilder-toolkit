# d_qry_pur_abc_plan

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT  matplan.mpitem ,           items.itname ,           sum(matplan.mpplqty * items.itstdpur)    
        FROM matplan ,           items     
        WHERE ( items.itcode = matplan.mpitem ) and          ( ( matplan.mpuse= 'P' ) ) 
        GROUP BY matplan.mpitem ,           items.itname  
        ORDER BY 3         DESC  
```

## Colonnes
| Colonne |
|---------|
| matplan_mpitem |
| items_itname |
| compute_0003 |

