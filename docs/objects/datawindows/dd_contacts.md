# dd_contacts

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT contacts.ctadcode,   
         contacts.ctline,   
         contacts.ctname,   
         contacts.ctmain,   
         contacts.ctsort,   
         contacts.ctfirstname,
		contacts.ctpoint  
    FROM contacts  
   WHERE contacts.ctadcode = :ra_adrid
	  and contacts.ctactiv= 'Y'    
ORDER BY contacts.ctmain DESC,   
         contacts.ctname ASC 
 

```

## Colonnes
| Colonne |
|---------|
| ctadcode |
| ctline |
| ctname |
| ctmain |
| ctsort |
| ctfirstname |
| ctpoint |

