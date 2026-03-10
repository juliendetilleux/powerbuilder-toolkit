# d_prtconfig_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT altreport.aroriginal,   
         altreport.aralternate,   
         altreport.aractiv,   
         altreport.arname,   
         altreport.arlang,   
         altreport.arsort,   
         altreport.artype  
    FROM altreport  
   WHERE altreport.aractiv = 'Y' 
ORDER BY altreport.aroriginal ASC,   
         altreport.arsort ASC,   
         altreport.aralternate ASC   

```

## Colonnes
| Colonne |
|---------|
| aroriginal |
| aralternate |
| aractiv |
| arname |
| arlang |
| arsort |
| artype |

