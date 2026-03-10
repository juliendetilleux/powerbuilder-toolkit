# d_ctransact_packgroup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT packgrhead.phcode,
			cast( 0 as numeric(6,0)) as qty,
			cast( '' as varchar(30)) as comments			
    FROM packgrhead

```

## Colonnes
| Colonne |
|---------|
| phcode |
| qty |
| comments |

