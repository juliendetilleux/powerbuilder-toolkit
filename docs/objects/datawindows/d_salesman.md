# d_salesman

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT salesman.smcode,   
         salesman.smname,   
         salesman.smactiv  
    FROM salesman  
   WHERE salesman.smcode <> '########'  and
			salesman.smcode <> 'PMI'  

```

## Colonnes
| Colonne |
|---------|
| smcode |
| smname |
| smactiv |

