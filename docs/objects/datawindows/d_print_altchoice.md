# d_print_altchoice

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
select arname, aralternate, arsort, arlang, arpcname
from altreport
WHERE aroriginal = :Selected_report
and aralternate NOT IN (select name from flxr_customization)
and aractiv = 'Y'
Union
select arname, aralternate, arsort, arlang, arpcname
from altreport, progparam
WHERE aroriginal = :Selected_report
and aralternate IN (select name from flxr_customization)
and aractiv = 'Y'
AND ppcode = 'FLXREPORT'
AND ppvalue = 'Y'
ORDER BY arsort ASC   
```

## Colonnes
| Colonne |
|---------|
| arname |
| aralternate |
| arsort |
| arlang |
| arpcname |

