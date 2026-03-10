# d_itad_exceptions

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT except_rate_itad.er_fk_items_itcode,
			items.itname,
			except_rate_itad.er_startdat,
			except_rate_itad.er_stopdat
    FROM except_rate_itad
				JOIN items ON items.itcode = except_rate_itad.er_fk_items_itcode
  WHERE except_rate_itad.er_fk_ratehead_rhcode = :al_ratehead AND
		except_rate_itad.er_fk_adresses_adcode = :as_adcode

```

## Colonnes
| Colonne |
|---------|
| except_rate_itad_er_fk_items_itcode |
| items_itname |
| except_rate_itad_er_startdat |
| except_rate_itad_er_stopdat |

