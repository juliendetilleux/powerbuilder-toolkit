# dd_additionnal_umpur

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT measures.umcode  
    FROM measures  
   WHERE ( measures.umactiv = 'Y' ) AND  
         ( measures.umcode <> IsNull( :as_DefaultUm, '') ) AND
			( measures.umcode <> IsNull( :as_ItUm, '') )
ORDER BY measures.umcode ASC   

```

## Colonnes
| Colonne |
|---------|
| umcode |

