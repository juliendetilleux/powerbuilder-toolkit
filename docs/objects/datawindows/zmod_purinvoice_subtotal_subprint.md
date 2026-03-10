# zmod_purinvoice_subtotal_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT Purinvhead.pipurval,
		Purinvhead.pitvaval,
		Purinvhead.pitotval,
		Purinvhead.picurr,
		purinvhead.pityptva 
	FROM Purinvhead
	WHERE Purinvhead.picode = :an_purinvoice
```

## Colonnes
| Colonne |
|---------|
| pipurval |
| pitvaval |
| pitotval |
| picurr |
| pityptva |

