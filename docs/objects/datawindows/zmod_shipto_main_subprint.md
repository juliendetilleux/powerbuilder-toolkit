# zmod_shipto_main_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc  
    FROM shipto  
   WHERE shipto.stcode = '##########'  
     AND shipto.stmain = 'Y'     

```

## Colonnes
| Colonne |
|---------|
| shipto_stdesc |
| stadr1 |
| stadr2 |
| stzip |
| stloc |

