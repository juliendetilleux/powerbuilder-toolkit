# dd_operid_of

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT distinct workoper.wotyp,   
         workoper.wowcid,   
         workoper.woopid,   
         workoper.woopdesc  
    FROM workoper , mfgwcreqs
   WHERE ( workoper.wotyp = '1' ) AND  
         ( workoper.wowcid = :as_wc )   AND
         ( mfgwcreqs.mwcode = :al_of ) AND
         ( workoper.woopid = mfgwcreqs.mwtask ) 

```

## Colonnes
| Colonne |
|---------|
| wotyp |
| wowcid |
| woopid |
| woopdesc |

