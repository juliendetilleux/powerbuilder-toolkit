# ds_discline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: discline

## SQL
```sql
  SELECT discline.dlcode,   
         discline.dlline,   
         discline.dlitem,   
         discline.dlstat1,   
         discline.dlstat2,   
         discline.dldiscpc  
    FROM discline , 
         dischead 
   WHERE dischead.dhcode = discline.dlcode 
     AND dischead.dhstopdate > :adt_lastsync  

```

## Colonnes
| Colonne |
|---------|
| discline_dlcode |
| discline_dlline |
| discline_dlitem |
| discline_dlstat1 |
| discline_dlstat2 |
| discline_dldiscpc |

