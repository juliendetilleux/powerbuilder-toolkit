# d_crm_mail_adress

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
    SELECT linkmaus.liuscode,   
         linkmaus.limacode,   
         mailaccount.mamain  
    FROM linkmaus,   
         mailaccount  
   WHERE ( mailaccount.maadress = linkmaus.limacode ) 
```

## Colonnes
| Colonne |
|---------|
| liuscode |
| limacode |
| mailaccount_mamain |

