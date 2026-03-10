# ds_altprt

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT altreport.aroriginal,   
         		altreport.aralternate,   
         		altreport.aractiv,   
    		     altreport.arname,   
      		altreport.arlang,   
      		altreport.arsort,   
      		altreport.artype,
			altreport.arpcname
    FROM altreport  
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
| arpcname |

