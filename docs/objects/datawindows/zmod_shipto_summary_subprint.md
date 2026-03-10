# zmod_shipto_summary_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT shipto.stdesc,   
		shipto.stadr1,   
		shipto.stadr2,   
		shipto.stzip,   
		shipto.stloc,   
		shipto.stcountr
	FROM shipto
	WHERE shipto.stseq = :al_stseq
		AND shipto.stcode = :as_shipto
   

```

## Colonnes
| Colonne |
|---------|
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |

