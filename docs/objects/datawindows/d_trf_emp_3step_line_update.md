# d_trf_emp_3step_line_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT trf_emp_3step_line.tlid ,
		trf_emp_3step_line.tlteid ,
		trf_emp_3step_line.tlline ,
		trf_emp_3step_line.tlitem ,
		trf_emp_3step_line.tlqty,
		trf_emp_3step_line.tlstatus,
		items.itname
    FROM trf_emp_3step_line 
		JOIN items ON trf_emp_3step_line.tlitem = items.itcode 
   WHERE trf_emp_3step_line.tlteid = :al_tlteid AND
		trf_emp_3step_line.tlstatus < 6 
ORDER BY trf_emp_3step_line.tlid

```

## Colonnes
| Colonne |
|---------|
| trf_emp_3step_line_tlid |
| trf_emp_3step_line_tlteid |
| trf_emp_3step_line_tlline |
| trf_emp_3step_line_tlitem |
| trf_emp_3step_line_tlqty |
| trf_emp_3step_line_tlstatus |
| items_itname |

