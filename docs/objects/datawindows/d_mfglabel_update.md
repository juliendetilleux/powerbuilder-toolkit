# d_mfglabel_update

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itetiitemof,   
         items.itetigroof,   
         items.itetipalof,   
         isnull(items.itetiitemofprnt , 0 ) as itetiitemofprnt ,   
         isnull(items.itetigroofprnt , 0 ) as itetigroofprnt ,   
         isnull(items.itetipalofprnt , 0 ) as itetipalofprnt ,   
         if items.itetiitemofprnt is null then 
				'Y' 
			else 
				(select practiv from printers where prcode = items.itetiitemofprnt) 
			endif as itemofok ,    
         
			if items.itetigroofprnt is null then 
				'Y' 
			else 
				(select practiv from printers where prcode = items.itetigroofprnt) 
			endif as groofok ,    
         
			if items.itetipalofprnt is null then 
				'Y' 
			else 
				(select practiv from printers where prcode = items.itetipalofprnt) 
			endif as palofok ,   
         items.itmodifdat,   
         items.itmodifuser       
    FROM items  
        
   WHERE items.itcode not like '###########[CMPRS]'    
     AND items.ittyp = 'M'  
	and 	items.itactiv = 'Y' 
 
ORDER BY items.itcode ASC   


```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itetiitemof |
| itetigroof |
| itetipalof |
| itetiitemofprnt |
| itetigroofprnt |
| itetipalofprnt |
| itemofok |
| groofok |
| palofok |
| itmodifdat |
| itmodifuser |

