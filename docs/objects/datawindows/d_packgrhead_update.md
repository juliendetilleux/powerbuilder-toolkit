# d_packgrhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT packgrhead.phcode,
			packgrhead.phname,
			packgrhead.phactiv
    FROM packgrhead
	where packgrhead.phcode = :as_selectedgroup
	order by packgrhead.phactiv desc, packgrhead.phname

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phname |
| phactiv |

