# d_trf3_reception_master

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT  teid,   
         teloc_dest,
         tedatreq as tc_date,   
         tecreauser,   
         tecomment,
		testatus
   FROM trf_emp_3step_head
   WHERE testatus between 3 and 5
order by 1 desc, 3 asc

```

## Colonnes
| Colonne |
|---------|
| teid |
| teloc_dest |
| tedatreq |
| tecreauser |
| tecomment |
| testatus |

