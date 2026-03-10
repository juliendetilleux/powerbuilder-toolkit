# dd_itstat1web

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1web.iwdesc,
			itstat1web.iwcode
    FROM itstat1web  
   WHERE ( itstat1web.iwlang = (Select adlang from adresses where adcode = '##########') )
ORDER BY itstat1web.iwcode ASC   

```

## Colonnes
| Colonne |
|---------|
| iwdesc |
| iwcode |

