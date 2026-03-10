# dd_itstat2web

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT itstat2web.iswdesc,
			itstat2web.iswcode2
    FROM itstat2web  
   WHERE ( itstat2web.iswlang = (Select adlang from adresses where adcode = '##########') ) AND
				( itstat2web.iswcode = :ral_iswcode )
ORDER BY itstat2web.iswcode2 ASC   

```

## Colonnes
| Colonne |
|---------|
| iswdesc |
| iswcode2 |

