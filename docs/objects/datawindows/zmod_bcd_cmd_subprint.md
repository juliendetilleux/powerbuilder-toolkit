# zmod_bcd_cmd_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
select 1,
		isnull((select ppvalue from progparam where ppcode = 'EXPITUNAN'),'') as EXPITUNAN  
	from dummy
```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| expitunan |

