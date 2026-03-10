# d_measures

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT measures.umcode,   
         measures.umname,   
         measures.umactiv,   
         measures.umtarif  ,
		( select ppvalue from progparam where ppcode = 'ITUMTRF' ) as itumtrf 
    FROM measures  
ORDER BY measures.umcode ASC   

```

## Colonnes
| Colonne |
|---------|
| umcode |
| umname |
| umactiv |
| umtarif |
| itumtrf |

