# dd_adresgroup4

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT	adresgroup4.ag4code,
			adresgroup4.ag4activ,
			adresgroup4.ag4desc,
			adresgroup4.ag4uppergrp
	FROM adresgroup4
	WHERE adresgroup4.ag4activ = 'Y'   
	ORDER BY adresgroup4.ag4code

```

## Colonnes
| Colonne |
|---------|
| ag4code |
| ag4activ |
| ag4desc |
| ag4uppergrp |

