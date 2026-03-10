# d_monitline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT monitplanline.mlcode,   
         monitplanline.mlline,   
         monitplanline.mltyp,   
         monitplanline.mllocal,   
         monitplanline.mlequipmnt,   
         monitplanline.mlsamplepoint,   
         monitplanline.mltemp,   
         monitplanline.mlwarninglimit,   
         monitplanline.mlactionlimit,   
         monitplanline.mlopprod  
    FROM monitplanline   
   WHERE monitplanline.mlcode = :al_mhcode    
 
ORDER BY monitplanline.mlcode,   
         monitplanline.mlline

```

## Colonnes
| Colonne |
|---------|
| mlcode |
| mlline |
| mltyp |
| mllocal |
| mlequipmnt |
| mlsamplepoint |
| mltemp |
| mlwarninglimit |
| mlactionlimit |
| mlopprod |

