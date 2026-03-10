# d_dischead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT dischead.dhcode,   
         dischead.dhname,   
         dischead.dhactiv,   
         dischead.dhstartdate,   
         dischead.dhstopdate,   
         dischead.dhdesc  
    FROM dischead   
   WHERE dischead.dhcode = IsNull(:rancode, dischead.dhcode)
```

## Colonnes
| Colonne |
|---------|
| dhcode |
| dhname |
| dhactiv |
| dhstartdate |
| dhstopdate |
| dhdesc |

