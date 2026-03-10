# d_adcode_exceptions

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT distinct except_rate_itad.er_fk_adresses_adcode,
			adresses.adname
    FROM except_rate_itad
				JOIN adresses ON adresses.adcode = except_rate_itad.er_fk_adresses_adcode
  WHERE except_rate_itad.er_fk_ratehead_rhcode = :al_ratehead

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |

