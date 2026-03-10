# dd_qry_load

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT query.qrname,   
         users.usname,   
         query.qrcreadat,   
         query.qrdatawindow,   
         query.qrsql,   
         query.qrsqlfilter  
    FROM query,   
         users  
   WHERE ( query.qrcreauser = users.uscode ) and  
         (  query.qrsqlfilter <> '' )   and
         (  query.qrsqlfilter is not null  )    

```

## Colonnes
| Colonne |
|---------|
| qrname |
| users_usname |
| qrcreadat |
| query_qrdatawindow |
| query_qrsql |
| query_qrsqlfilter |

