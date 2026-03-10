# d_machine_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT  machinehead.mhmachineid ,
           machinehead.mhname ,
           machinehead.mhactive ,
           machinehead.mhwccode 
        FROM machinehead      
        WHERE ( machinehead.mhmachineid = :ras_machineid )   
```

## Colonnes
| Colonne |
|---------|
| mhmachineid |
| mhname |
| mhactive |
| mhwccode |

