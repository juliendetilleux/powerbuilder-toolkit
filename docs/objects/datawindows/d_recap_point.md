# d_recap_point

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
select adrsactionspoint.apctadcode as adcode, IsNull(adrsactions.aamccdo, '##########') as mccdo
from adrsactionspoint, adrsactions
WHERE apdatepoint BETWEEN :ad_datestart AND :ad_dateend
AND apusedpoint IS NOT NULL
AND adrsactionspoint.apctadcode LIKE IsNull(:as_adcode, '%')
AND IsNull(adrsactions.aamccdo, '##########') LIKE IsNull(:as_mccdo, '%')
AND adrsactions.aacode = adrsactionspoint.apaacode
UNION
select linkitadpoint.lpadcode as adcode, IsNull(items.itmccode, '##########') as mccdo
from linkitadpoint, items
WHERE lpdatepoint BETWEEN :ad_datestart AND :ad_dateend
AND linkitadpoint.lpitcode = items.itcode
AND linkitadpoint.lpadcode LIKE IsNull(:as_adcode, '%')
AND IsNull(items.itmccode, '##########') LIKE IsNull(:as_mccdo, '%')

```

## Colonnes
| Colonne |
|---------|
| adcode |
| mccdo |

