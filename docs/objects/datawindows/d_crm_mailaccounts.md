# d_crm_mailaccounts

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT mailaccount.maadress  
    FROM mailaccount  
UNION 
  SELECT usmail   
    FROM users
where isnull(usmail, '') <> ''   

ORDER BY 1  ASC   

```

## Colonnes
| Colonne |
|---------|
| maadress |

