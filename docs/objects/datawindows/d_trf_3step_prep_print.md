# d_trf_3step_prep_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT trf_emp_3step_head.teid,
		trf_emp_3step_head.teloc_dest,
		trf_emp_3step_head.tedatreq,
		trf_emp_3step_head.testatus,
		isnull( trf_emp_3step_head.tecomment, '' ) as trf_comment,

		trf_emp_3step_line.tlline,
		trf_emp_3step_line.tlitem,
		trf_emp_3step_line.tlqty,

		isnull( (select sum( maallocqty - isnull(maissuedqty,0) ) from matallocs where matyp = '3' and macode = trf_emp_3step_line.tlteid and maitemseq = trf_emp_3step_line.tlline ), 0 ) as qtyalloc,

        	items.itname,   
        	items.itum,       

		locations.lcdesc
    FROM trf_emp_3step_head
		JOIN trf_emp_3step_line ON trf_emp_3step_head.teid = trf_emp_3step_line.tlteid
         	JOIN items ON trf_emp_3step_line.tlitem = items.itcode
		JOIN locations ON trf_emp_3step_head.teloc_dest = locations.lccode
   WHERE trf_emp_3step_head.teid = :al_teid 
ORDER BY trf_emp_3step_line.tlline

```

## Colonnes
| Colonne |
|---------|
| trf_emp_3step_head_teid |
| trf_emp_3step_head_teloc_dest |
| trf_emp_3step_head_tedatreq |
| trf_emp_3step_head_testatus |
| trf_comment |
| trf_emp_3step_line_tlline |
| trf_emp_3step_line_tlitem |
| trf_emp_3step_line_tlqty |
| qtyalloc |
| items_itname |
| items_itum |
| locations_lcdesc |

