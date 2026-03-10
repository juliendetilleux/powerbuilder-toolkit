# d_extracosts_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adextracosts.axadcode,   
         adextracosts.axadline,   
         adextracosts.axsign,   
         adextracosts.axseuil,   
         adextracosts.axvaltyp,   
         adextracosts.axlnval,   
         adextracosts.axcondapp,   
         adextracosts.axstartdat,   
         adextracosts.axstopdat,   
         adextracosts.axdesc,   
         adextracosts.axfaty,   
         adextracosts.axwithtva,   
         isnull(adextracosts.axinco,'N') as axinco 
    FROM adextracosts  
   WHERE ( adextracosts.axadcode = :Sel_adresse ) AND  
         ( adextracosts.axadline = :Sel_line )    

```

## Colonnes
| Colonne |
|---------|
| adextracosts_axadcode |
| adextracosts_axadline |
| adextracosts_axsign |
| adextracosts_axseuil |
| adextracosts_axvaltyp |
| adextracosts_axlnval |
| adextracosts_axcondapp |
| axstartdat |
| axstopdat |
| adextracosts_axdesc |
| axfaty |
| axwithtva |
| axinco |

