# d_dsh_out_sal

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
select 
    salline.slcode, 
    salline.slline,
    salline.slqtyreq,
    salline.slqtyreal,
    salline.sldatreq,
    salline.slqtyreq - salline.slqtyreal,
	salline.slqtyalloc,
	(select itstock - slqtyreq from items where itcode=slitem) as qtydispo,
	salline.slstatus
from salline 
where slitem=:as_itcode

```

## Colonnes
| Colonne |
|---------|
| slcode |
| slline |
| slqtyreq |
| slqtyreal |
| sldatreq |
| compute_0006 |
| slqtyalloc |
| qtydispo |
| slstatus |

