# d_choiceline_faty_taxt

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clname,   
         choiceline.clactiv,
			choiceline.clcode,
			choiceline.clline,
			choiceline.clnval1   
    FROM choiceline   
   WHERE choiceline.clcode = 'FATY' AND
			choiceline.clival3 = :al_taxtline

```

## Colonnes
| Colonne |
|---------|
| clname |
| clactiv |
| clcode |
| clline |
| clnval1 |

