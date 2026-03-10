# d_linkitadumpur

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkitadumpur.lucode ,
			linkitadumpur.luum ,
           	linkitadumpur.luumconv   
    FROM linkitadumpur
  WHERE linkitadumpur.lucode = :ran_lucode    
```

## Colonnes
| Colonne |
|---------|
| lucode |
| luum |
| luumconv |

