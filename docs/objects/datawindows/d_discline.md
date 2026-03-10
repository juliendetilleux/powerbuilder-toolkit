# d_discline

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
         discline.dldiscpc,
			( select itname from items where itcode = discline.dlitem ) as itemname,    
         ( select itstat1.imdesc from itstat1 where itstat1.imcode = discline.dlstat1 ) as itstat1desc,   
         ( select itstat2.isdesc from itstat2 where itstat2.iscode = discline.dlstat1 and itstat2.iscode2 = discline.dlstat2 ) as itstat2desc    
    FROM discline   
   WHERE discline.dlcode = :ran_code   
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
| itemname |
| itstat1desc |
| itstat2desc |

