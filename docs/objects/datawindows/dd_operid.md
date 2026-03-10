# dd_operid

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT workoper.wotyp,   
         workoper.wowcid,   
         workoper.woopid,   
         workoper.woopdesc  
    FROM workoper  
   WHERE ( workoper.wotyp = :selected_typ ) AND  
         ( workoper.wowcid = :selected_wc ) AND  
         ( workoper.woopid <> '####' )    

```

## Colonnes
| Colonne |
|---------|
| wotyp |
| wowcid |
| woopid |
| woopdesc |

