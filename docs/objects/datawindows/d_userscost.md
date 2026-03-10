# d_userscost

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT users.uscode,   
         users.usname,   
         users.uscost,
			( select adcurr from adresses where adcode = '##########' ) as curr
    FROM users  
   WHERE ( users.usactiv = 'Y' ) AND  
         ( users.uscode <> '########' )   
ORDER BY users.uscode ASC   

```

## Colonnes
| Colonne |
|---------|
| uscode |
| usname |
| uscost |
| curr |

