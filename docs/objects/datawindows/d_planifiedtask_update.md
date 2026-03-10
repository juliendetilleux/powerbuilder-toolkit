# d_planifiedtask_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT planifiedtask.ptcode,   
         planifiedtask.ptdesc,   
         planifiedtask.pttype,   
         planifiedtask.ptfctname,   
         planifiedtask.ptactiv,   
         planifiedtask.ptdatestart,   
         planifiedtask.ptdateend,   
         planifiedtask.ptinterval,   
         planifiedtask.ptdateexec,   
         planifiedtask.ptresult ,
         planifiedtask.ptprinter
    FROM planifiedtask   
WHERE planifiedtask.ptcode = :as_task 

```

## Colonnes
| Colonne |
|---------|
| ptcode |
| ptdesc |
| pttype |
| ptfctname |
| ptactiv |
| ptdatestart |
| ptdateend |
| ptinterval |
| ptdateexec |
| ptresult |
| ptprinter |

