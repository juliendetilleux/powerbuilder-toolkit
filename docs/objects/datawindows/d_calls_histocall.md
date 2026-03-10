# d_calls_histocall

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT histocall.hcid, 
         histocall.hcchid,  
         histocall.hcdate,
         histocall.hcuser,   
         histocall.hcprgcmnt

    FROM histocall

   	WHERE histocall.hcchid = :ref_chid 

order by histocall.hcid desc 

```

## Colonnes
| Colonne |
|---------|
| hcid |
| hcchid |
| hcdate |
| hcuser |
| hcprgcmnt |

