# d_itstat_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT itstat2.iscode2,   
         itstat2.isdesc,   
         itstat2.iscode,   
         itstat1.imdesc  
    FROM {oj itstat2  LEFT OUTER JOIN itstat1  ON itstat2.iscode = itstat1.imcode}  
   WHERE ( itstat2.iscode <> ' ' ) AND  
         ( itstat2.iscode2 <> ' ' )    

```

## Colonnes
| Colonne |
|---------|
| itstat2_iscode2 |
| itstat2_isdesc |
| itstat2_iscode |
| itstat1_imdesc |

