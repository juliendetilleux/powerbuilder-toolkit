# d_adresgroup3

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT	adresgroup3.ag3code,
			adresgroup3.ag3activ,
			adresgroup3.ag3desc,
			adresgroup3.ag3uppergrp
	FROM adresgroup3
	WHERE adresgroup3.ag3code <> ''
			and adresgroup3.ag3uppergrp = :as_adrsgrp
	ORDER BY adresgroup3.ag3activ desc, adresgroup3.ag3code

```

## Colonnes
| Colonne |
|---------|
| ag3code |
| ag3activ |
| ag3desc |
| ag3uppergrp |

