# d_salesman_commission

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT salesman.smname,   
         salesman.smcode,   
         isnull(salesman.smcommission,0) as smcommission  
    FROM salesman  
   WHERE salesman.smactiv = 'Y'  and
			salesman.smcode <> 'PMI'
 ORDER BY salesman.smname  

```

## Colonnes
| Colonne |
|---------|
| smname |
| smcode |
| smcommission |

