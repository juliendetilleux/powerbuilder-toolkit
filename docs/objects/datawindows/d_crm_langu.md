# d_crm_langu

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT adresses.adlang  
    FROM adresses   
    WHERE adresses.adcode not in ('#########C','#########R','#########S')   
	 ORDER BY adresses.adlang  ASC
```

## Colonnes
| Colonne |
|---------|
| adlang |

