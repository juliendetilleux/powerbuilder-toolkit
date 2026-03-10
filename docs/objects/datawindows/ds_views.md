# ds_views

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT sys.sysviews.viewname,   
         left( sys.sysviews.viewtext, 100) as viewtext ,
		isnull(( select viewnames.vncode from viewnames where viewnames.vncode = sys.sysviews.viewname ), '' ) as vncode,
		isnull(( select viewnames.vnadcode from viewnames where viewnames.vncode = sys.sysviews.viewname ), '' ) as vnadcode
    FROM sys.sysviews
  where sys.sysviews.vcreator = 'DBA'   ;

```

## Colonnes
| Colonne |
|---------|
| viewname |
| viewtext |
| vncode |
| vnadcode |

