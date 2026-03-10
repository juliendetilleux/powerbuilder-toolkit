# d_choiceline_faty_taxt_update

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
			choiceline.clnval1,
			choiceline.clival1,
			choiceline.clival2,
			choiceline.clival3,
			choiceline.clcval,
			choiceline.clsort,
			isnull(choiceline.clcval2, 'N') as clcval2
    FROM choiceline   
   WHERE choiceline.clcode = 'FATY' AND
			choiceline.clline = :al_taxtline

```

## Colonnes
| Colonne |
|---------|
| clname |
| clactiv |
| clcode |
| clline |
| clnval1 |
| clival1 |
| clival2 |
| clival3 |
| clcval |
| clsort |
| clcval2 |

