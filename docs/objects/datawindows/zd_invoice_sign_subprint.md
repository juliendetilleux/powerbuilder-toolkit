# zd_invoice_sign_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT users.usname,   
       users.ustitle  
  FROM users 
 WHERE users.uscode = ( SELECT parameters.pmcval 
                          FROM parameters 
                         WHERE parameters.pmcode = 'USINGINV' 
                      )

```

## Colonnes
| Colonne |
|---------|
| usname |
| ustitle |

