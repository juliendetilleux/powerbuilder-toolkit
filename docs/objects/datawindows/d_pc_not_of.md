# d_pc_not_of

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
select wlopid as 'ope',
       woopdesc as 'opelabel',
       workline.wlwkcode as 'worker',
 (SELECT wkname FROM workers WHERE wkcode = workline.wlwkcode) as 'workerlabel',
        String(workline.wldat) as 'datework',
        workline.wlstart as 'hdebut',
        workline.wlend as 'hfin'
from workline, workoper, workers
where wlwcid = '########'
and wlend is null
and wltyp <> 9
and woopid = wlopid
and wotyp = wltyp
and wkcode = wlwkcode
```

## Colonnes
| Colonne |
|---------|
| ope |
| opelabel |
| worker |
| workerlabel |
| datework |
| hdebut |
| hfin |

