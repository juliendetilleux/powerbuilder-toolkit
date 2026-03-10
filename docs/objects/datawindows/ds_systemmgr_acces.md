# ds_systemmgr_acces

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT pfobjet.poid as autority 
    FROM pfobjet 
   WHERE ( pfobjet.poavailable = 'Y' )    
ORDER BY pfobjet.poid ASC   

```

## Colonnes
| Colonne |
|---------|
| autority |

