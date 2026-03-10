# zd_call_actions_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode, 
         adrsactions.aacreadate,  
         adrsactions.aastatus,
         adrsactions.aaaction,   
         adrsactions.aadesc,
         adrsactions.aaactiondate,   
         adrsactions.aarespons,   
         adrsactions.aacomment,   
         adrsactions.aaadrid

    FROM adrsactions

   	WHERE adrsactions.aacallid = :al_chid 
order by adrsactions.aacode desc
```

## Colonnes
| Colonne |
|---------|
| aacode |
| aacreadate |
| aastatus |
| aaaction |
| aadesc |
| aaactiondate |
| aarespons |
| aacomment |
| aaadrid |

