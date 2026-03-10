# d_choiceline_faty

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clactiv,   
         choiceline.clname,   
         choiceline.clsort,   
         choiceline.clline,   
         choiceline.clcode,   
         choiceline.clival1,   
         choiceline.clival2,
			choiceline.clcval /*HA2478*/  
    FROM choiceline  
   WHERE ( choiceline.clcode = :ras_code ) AND  
         //( choiceline.clline >= 0 ) AND //HA2478 Mis en commentaire pour voir aussi les spécifiques mais la description sera non modifiable
			( isnull(choiceline.clcval, '') <> 'TAXT' )  
ORDER BY choiceline.clsort ASC   

```

## Colonnes
| Colonne |
|---------|
| clactiv |
| clname |
| clsort |
| clline |
| clcode |
| clival1 |
| clival2 |
| clcval |

