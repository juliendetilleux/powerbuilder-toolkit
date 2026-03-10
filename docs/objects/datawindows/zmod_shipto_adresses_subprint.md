# zmod_shipto_adresses_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         shipto.sttel,   
         shipto.stfax  
    FROM shipto  
   WHERE ( shipto.stcode = :as_adresse ) AND  
         ( shipto.stseq = :ai_ship ) AND  
         ( :as_adresse = shipto.stcode )    

```

## Colonnes
| Colonne |
|---------|
| shipto_stdesc |
| stadr1 |
| stadr2 |
| stzip |
| stloc |
| stcountr |
| sttel |
| stfax |

