# d_printsubst

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT printsubst.psoriginal,   
         printsubst.pstable,
         printsubst.pstablekey,     
         printsubst.psfield,   
         printsubst.psparam  
    FROM printsubst    
   WHERE printsubst.psoriginal=:ras_original   

```

## Colonnes
| Colonne |
|---------|
| psoriginal |
| pstable |
| pstablekey |
| psfield |
| psparam |

