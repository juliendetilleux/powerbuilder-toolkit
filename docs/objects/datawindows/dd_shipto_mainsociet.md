# dd_shipto_mainsociet

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stdesc,   
         shipto.stseq,   
         shipto.stmain  
    FROM shipto  
   WHERE shipto.stcode = '##########'    
 ORDER BY shipto.stdesc
```

## Colonnes
| Colonne |
|---------|
| stdesc |
| stseq |
| stmain |

