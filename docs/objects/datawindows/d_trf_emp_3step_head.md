# d_trf_emp_3step_head

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT trf_emp_3step_head.teid,
		trf_emp_3step_head.teloc_dest,
		trf_emp_3step_head.tedatreq,
		trf_emp_3step_head.testatus,
		isnull( trf_emp_3step_head.tecomment, '' ) as trf_comment,
		locations.lcdesc
    FROM trf_emp_3step_head
		JOIN locations ON trf_emp_3step_head.teloc_dest = locations.lccode
   WHERE trf_emp_3step_head.testatus < 6
ORDER BY trf_emp_3step_head.teid

```

## Colonnes
| Colonne |
|---------|
| trf_emp_3step_head_teid |
| trf_emp_3step_head_teloc_dest |
| trf_emp_3step_head_tedatreq |
| trf_emp_3step_head_testatus |
| trf_comment |
| locations_lcdesc |

