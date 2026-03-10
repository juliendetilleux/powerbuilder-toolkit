# d_edipurline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT el_id,
			el_GTIN_item,
			f_get_item_from_GLN( el_GTIN_item ) as item_code,
			el_item_desc,
			el_qtypc,
			el_um,
			el_status,
			el_qtyKG,
			(select itum from items where itcode = item_code) as um,
			isnull( (select itisumtarif from items where itcode = item_code), 'N' ) as isumtarif
    FROM ediline_DESADV_import
   WHERE el_status = 1 AND
			el_fk_ed_id = :al_ed_id

```

## Colonnes
| Colonne |
|---------|
| el_id |
| el_gtin_item |
| item_code |
| el_item_desc |
| el_qtypc |
| el_um |
| el_status |
| el_qtykg |
| um |
| isumtarif |

