# d_planifiedtask

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT planifiedtask.ptcode,   
         planifiedtask.ptfctname,  
         planifiedtask.ptinterval,   
         planifiedtask.ptdesc,   
         planifiedtask.ptactiv,   
         planifiedtask.ptdatestart,   
         planifiedtask.ptdateend,
			planifiedtask.pttype, 
			planifiedtask.ptresult,
  			planifiedtask.ptdateexec, 
         planifiedtask.ptprinter
    FROM planifiedtask 
order by planifiedtask.ptdatestart      

```

## Colonnes
| Colonne |
|---------|
| ptcode |
| ptfctname |
| ptinterval |
| ptdesc |
| ptactiv |
| ptdatestart |
| ptdateend |
| pttype |
| ptresult |
| ptdateexec |
| ptprinter |

