# d_dvi_tech_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT projvrsn.pvphid,   
         projvrsn.pvcode  
    FROM projvrsn  
   WHERE ( projvrsn.pvphid = :ran_ProjId ) AND  
         ( projvrsn.pvcode = :ran_VersId )    

```

## Colonnes
| Colonne |
|---------|
| pvphid |
| pvcode |

