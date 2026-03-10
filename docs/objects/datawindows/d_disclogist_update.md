# d_disclogist_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT disclogist.dlcode,   
         disclogist.dlname,   
         disclogist.dlactiv,   
         disclogist.dlstartdate,   
         disclogist.dlstopdate,   
         disclogist.dldesc 
    FROM disclogist   
   WHERE disclogist.dlcode = IsNull(:rancode   , disclogist.dlcode)

```

## Colonnes
| Colonne |
|---------|
| dlcode |
| dlname |
| dlactiv |
| dlstartdate |
| dlstopdate |
| dldesc |

