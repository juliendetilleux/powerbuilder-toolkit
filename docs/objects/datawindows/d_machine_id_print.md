# d_machine_id_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  machinehead.mhmachineid ,
           machinehead.mhname ,
           workcenters.wcname     
        FROM machinehead ,
           workcenters     
        WHERE ( workcenters.wccode = machinehead.mhwccode )   
```

## Colonnes
| Colonne |
|---------|
| machinehead_mhmachineid |
| machinehead_mhname |
| workcenters_wcname |

