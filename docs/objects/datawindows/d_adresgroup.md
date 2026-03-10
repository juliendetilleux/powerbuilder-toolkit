# d_adresgroup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresgroup.agcode,   
         adresgroup.agactiv,   
         adresgroup.agdesc
    FROM adresgroup
   WHERE adresgroup.agcode <> '  '   
ORDER BY adresgroup.agactiv desc, adresgroup.agcode 

```

## Colonnes
| Colonne |
|---------|
| agcode |
| agactiv |
| agdesc |

