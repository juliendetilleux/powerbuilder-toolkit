# d_trf3_reception_detail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT trf_emp_3step_line.tlid, 
		trf_emp_3step_line.tlteid,
		trf_emp_3step_line.tlline,
		trf_emp_3step_line.tlitem,
		trf_emp_3step_line.tlstatus,
		trf_emp_3step_line.tlqty,
		matallocs.malot,
		matallocs.maloc,
		sum( matallocs.maallocqty ) as qtyrec,
         	items.itname,
		items.itum  
    FROM trf_emp_3step_line
				LEFT OUTER JOIN matallocs ON matallocs.matyp = '3' AND
											matallocs.macode = trf_emp_3step_line.tlteid AND
											matallocs.maitemseq = trf_emp_3step_line.tlline
         			JOIN items ON items.itcode = trf_emp_3step_line.tlitem 
   WHERE trf_emp_3step_line.tlteid = isnull ( :al_tlteid, 0 ) AND
		trf_emp_3step_line.tlstatus < 6 

GROUP BY trf_emp_3step_line.tlid, 
		trf_emp_3step_line.tlteid,
		trf_emp_3step_line.tlline,
		trf_emp_3step_line.tlitem,
		trf_emp_3step_line.tlstatus,
		trf_emp_3step_line.tlqty,
		matallocs.malot,
		matallocs.maloc,
         	items.itname,
		items.itum 
 
order by 3 desc

```

## Colonnes
| Colonne |
|---------|
| trf_emp_3step_line_tlid |
| trf_emp_3step_line_tlteid |
| trf_emp_3step_line_tlline |
| trf_emp_3step_line_tlitem |
| trf_emp_3step_line_tlstatus |
| trf_emp_3step_line_tlqty |
| matallocs_malot |
| matallocs_maloc |
| trf_emp_3step_line_qtyrec |
| items_itname |
| items_itum |

