# d_discline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT discline.dlcode,   
         discline.dlline,   
         discline.dlitem,   
         discline.dlstat1,   
         discline.dlstat2,   
         discline.dldiscpc  
    FROM discline   
   WHERE ( discline.dlcode = IsNull(:ran_code, discline.dlcode)) AND  
         ( discline.dlline = IsNull(:ran_line, discline.dlline) )


```

## Colonnes
| Colonne |
|---------|
| dlcode |
| dlline |
| dlitem |
| dlstat1 |
| dlstat2 |
| dldiscpc |

