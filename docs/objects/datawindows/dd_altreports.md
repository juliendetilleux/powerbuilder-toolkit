# dd_altreports

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT distinct altreport.aroriginal as internname,  
         '-'  as externname,   
         '10',  
         0   
    FROM altreport  
   WHERE altreport.aroriginal = :ras_original  

union 

  SELECT altreport.aralternate as internname,   
         altreport.arname as externname,  
         '20', 
         altreport.arsort 
    FROM altreport  
   WHERE altreport.aroriginal = :ras_original  
     AND altreport.aractiv='Y'  

order by 3, 4  


```

## Colonnes
| Colonne |
|---------|
| internname |
| externname |
| compute_0003 |
| compute_0004 |

