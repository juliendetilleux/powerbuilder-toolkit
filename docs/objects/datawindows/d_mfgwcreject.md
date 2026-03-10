# d_mfgwcreject

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreject.mrcode,   
         mfgwcreject.mrline,   
         mfgwcreject.mrtype,   
         mfgwcreject.mrcoeff,   
         mfgwcreject.mrum  
    FROM mfgwcreject  
   WHERE ( mfgwcreject.mrcode = :al_of ) AND  
         ( mfgwcreject.mrline = :al_line )    
 ORDER BY mfgwcreject.mrline
```

## Colonnes
| Colonne |
|---------|
| mrcode |
| mrline |
| mrtype |
| mrcoeff |
| mrum |

