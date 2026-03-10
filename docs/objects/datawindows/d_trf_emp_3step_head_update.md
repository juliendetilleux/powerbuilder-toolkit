# d_trf_emp_3step_head_update

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
         trf_emp_3step_head.tecomment,
	    trf_emp_3step_head.tecreauser 
    FROM trf_emp_3step_head   
  WHERE trf_emp_3step_head.teid = :al_teid
```

## Colonnes
| Colonne |
|---------|
| teid |
| teloc_dest |
| tedatreq |
| testatus |
| tecomment |
| tecreauser |

