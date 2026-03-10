# d_linkitcountry

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT linkitcountry.lccocode,
			country.codesc
	from linkitcountry join country on linkitcountry.lccocode = country.cocode
	where linkitcountry.lcitcode = :as_itcode
```

## Colonnes
| Colonne |
|---------|
| linkitcountry_lccocode |
| country_codesc |

