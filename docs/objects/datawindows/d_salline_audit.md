# d_salline_audit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salaudit.sadate,
		 	salaudit.saslcode,
         salaudit.saslline,   
         salaudit.saaudit,   
         users.usname  
    FROM salaudit, users   
	WHERE salaudit.saslcode = :al_slcode AND
			salaudit.saslline = :al_slline AND
			salaudit.sauser = users.uscode  
  
ORDER BY salaudit.sadate desc 
 
```

## Colonnes
| Colonne |
|---------|
| salaudit_sadate |
| salaudit_saslcode |
| salaudit_saslline |
| salaudit_saaudit |
| users_usname |

