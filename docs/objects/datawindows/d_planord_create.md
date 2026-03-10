# d_planord_create

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT matplan.mpitem,   
         matplan.mporduedat,   
         matplan.mpplduedat,   
         matplan.mporqty,   
         matplan.mpplqty,   
         matplan.mpreldat,   
         matplan.mporigin,   
         matplan.mpuse,   
         matplan.mprun,   
         matplan.mpordno,   
         matplan.mpaltrout,   
         matplan.mpyield,   
         matplan.mpinter
    FROM matplan  
   WHERE ( matplan.mpitem = :selected_item ) AND  
         ( matplan.mpplduedat = :Selected_duedate )    

```

## Colonnes
| Colonne |
|---------|
| mpitem |
| mporduedat |
| mpplduedat |
| mporqty |
| mpplqty |
| mpreldat |
| mporigin |
| mpuse |
| mprun |
| mpordno |
| mpaltrout |
| mpyield |
| mpinter |

