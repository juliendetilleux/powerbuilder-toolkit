# d_contacts

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT contacts.ctadcode,   
         contacts.ctline,   
         contacts.ctname,   
         contacts.ctcomm,   
         contacts.cttel,   
         contacts.ctfax,   
         contacts.ctgsm,   
         contacts.ctmail,   
         contacts.ctmain,   
         contacts.ctsort,    
         contacts.ctciv1,   
         contacts.ctfirstname,   
         contacts.ctfunction,
			contacts.ctactiv,
		  	contacts.ctmulti,
		  	contacts.ctfunc,
		  	contacts.ctmadcode,
		  	contacts.ctmline,
		  	isnull(contacts.ctmulti, 'N') as ctmulti,
contacts.ct_tel2
    FROM contacts  
   WHERE contacts.ctadcode = :Selected_ad    
 ORDER BY contacts.ctmain DESC,   
         contacts.ctname ASC   

```

## Colonnes
| Colonne |
|---------|
| ctadcode |
| ctline |
| ctname |
| ctcomm |
| cttel |
| ctfax |
| ctgsm |
| ctmail |
| ctmain |
| ctsort |
| ctciv1 |
| ctfirstname |
| ctfunction |
| ctactiv |
| ctmulti |
| ctfunc |
| ctmadcode |
| ctmline |
| ctmulti |
| ct_tel2 |

