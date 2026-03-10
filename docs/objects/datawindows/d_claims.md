# d_claims

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT	claims.clid,
			claims.clname,
			lkitcl.liccheck,
			lkitcl.licclid,
			lkitcl.licitcode
	From claims join lkitcl on claims.clid = lkitcl.licclid
	where lkitcl.licitcode = :as_itcode
	order by claims.clorder,claims.clname;
```

## Colonnes
| Colonne |
|---------|
| claims_clid |
| claims_clname |
| lkitcl_liccheck |
| lkitcl_licclid |
| lkitcl_licitcode |

