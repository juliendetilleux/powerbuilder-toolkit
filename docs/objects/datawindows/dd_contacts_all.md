# dd_contacts_all

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
         contacts.ctfirstname  
    FROM contacts  
   WHERE contacts.ctadcode = :ra_adrid   
ORDER BY contacts.ctmain DESC,   
         contacts.ctsort ASC   

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

