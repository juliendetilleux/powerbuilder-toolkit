# d_workoper_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT workoper.woopid,   
         workoper.woopdesc,   
         workoper.wotyp,   
         workoper.wowcid  
    FROM workoper  
   WHERE ( workoper.wotyp = '2' OR workoper.wotyp = '3' ) AND  
         ( workoper.woopid <> '####' ) AND  
         ( workoper.wowcid = '########' )   
   
 UNION ALL 
   
  SELECT 'END',   
         'Fin de journée',   
         '9',   
         ''  
    FROM dummy  
  
ORDER BY 3 ASC,
         1 ASC   
```

## Colonnes
| Colonne |
|---------|
| woopid |
| woopdesc |
| wotyp |
| wowcid |

