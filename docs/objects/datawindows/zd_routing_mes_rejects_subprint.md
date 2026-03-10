# zd_routing_mes_rejects_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
 SELECT 	routreject.rrcode,
		(select clname from choiceline where clline = routreject.rrtype and clcode = 'RTRJ' ) as rttype,
		routreject.rrcoeff,
		routreject.rrum
   FROM routreject
 WHERE routreject.rrcode = :rltest

```

## Colonnes
| Colonne |
|---------|
| rrcode |
| rttype |
| rrcoeff |
| rrum |

