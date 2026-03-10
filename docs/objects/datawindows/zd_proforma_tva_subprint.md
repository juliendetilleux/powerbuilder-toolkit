# zd_proforma_tva_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT profotva.pttva,   
         profotva.pttvaval,   
         profotva.ptbasetva  
    FROM profotva  
   WHERE profotva.ptcode = :ran_profocode   
ORDER BY profotva.pttva ASC   

```

## Colonnes
| Colonne |
|---------|
| pttva |
| pttvaval |
| ptbasetva |

