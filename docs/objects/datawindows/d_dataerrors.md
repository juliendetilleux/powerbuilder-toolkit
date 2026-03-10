# d_dataerrors

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT dedesc,
		dedatim,
		deseq,
		detyp
   FROM dataerrors
   WHERE decode = :as_decode AND
		detyp like :as_detyp AND
		dedatim between :adt_datestart AND :adt_datestop
ORDER BY dedatim ASC   

```

## Colonnes
| Colonne |
|---------|
| dedesc |
| dedatim |
| deseq |
| detyp |

