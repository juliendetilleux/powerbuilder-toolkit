# d_edipurhead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT 'N' Selected,
			ed_id,
			ed_filename,
			ed_integration_date,
			ed_codeext,
			ed_shipdate,
			ed_reqdat1, 
			ed_reqdat2,
			ed_ref,
			ed_GLN_buyer,
			ed_GLN_vendor,
			f_get_socity_from_GLN( ed_GLN_vendor, 2) as supplier_name,
			ed_GLN_receiver
     FROM edihead_DESADV_import 
    Where edihead_DESADV_import.ed_status = 1
Order By  ed_integration_date
```

## Colonnes
| Colonne |
|---------|
| selected |
| ed_id |
| ed_filename |
| ed_integration_date |
| ed_codeext |
| ed_shipdate |
| ed_reqdat1 |
| ed_reqdat2 |
| ed_ref |
| ed_gln_buyer |
| ed_gln_vendor |
| supplier_name |
| ed_gln_receiver |

