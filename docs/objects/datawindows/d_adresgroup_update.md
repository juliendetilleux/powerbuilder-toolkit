# d_adresgroup_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT 	adresgroup.agcode,   
         		adresgroup.agactiv,   
         		adresgroup.agdesc
    FROM adresgroup
   WHERE adresgroup.agcode = :Selected_adgroup    

```

## Colonnes
| Colonne |
|---------|
| agcode |
| agactiv |
| agdesc |

