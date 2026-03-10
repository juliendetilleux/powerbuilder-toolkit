# d_crm_codpa

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT adresses.adcountrid  
    FROM adresses   
	 WHERE adresses.adcode not in ('#########C','#########R','#########S')  
	 ORDER BY adresses.adcountrid  ASC 

```

## Colonnes
| Colonne |
|---------|
| adcountrid |

