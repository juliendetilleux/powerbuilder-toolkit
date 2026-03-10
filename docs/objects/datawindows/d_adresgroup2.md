# d_adresgroup2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT	adresgroup2.ag2code,
			adresgroup2.ag2activ,
			adresgroup2.ag2desc,
			adresgroup2.ag2uppergrp
	FROM adresgroup2
	 WHERE adresgroup2.ag2code <> ''
				and adresgroup2.ag2uppergrp = :as_adrsgrp
	ORDER BY adresgroup2.ag2activ desc, adresgroup2.ag2code

```

## Colonnes
| Colonne |
|---------|
| ag2code |
| ag2activ |
| ag2desc |
| ag2uppergrp |

