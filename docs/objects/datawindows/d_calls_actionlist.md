# d_calls_actionlist

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
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
         adrsactions.aaadrid,
		adrsactions.aatiming

    FROM adrsactions

   	WHERE adrsactions.aacallid = :ref_chid

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
| aatiming |

