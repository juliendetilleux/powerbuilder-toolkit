# d_choiceline_taxt_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clname,   
         choiceline.clactiv,
			choiceline.clcode,
			choiceline.clline   
    FROM choiceline   
   WHERE choiceline.clcode = 'TAXT'

```

## Colonnes
| Colonne |
|---------|
| clname |
| clactiv |
| clcode |
| clline |

