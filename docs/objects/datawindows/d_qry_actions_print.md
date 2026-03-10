# d_qry_actions_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aaactiondate,   
         adrsactions.aastatus,   
         adrsactions.aarespons,   
         adrsactions.aacreator,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aaprojet,   
         adrsactions.aaread,   
         adrsactions.aareaddate,
		adrsactions.aafileref,
		adrsactions.aafileline,
		adrsactions.aastatus,
		adrsactions.aainvstatus,
		adrsactions.aatiming   
    FROM adrsactions  
   WHERE (adrsactions.aaactiondate BETWEEN :adt_from AND :adt_to)   
ORDER BY adrsactions.aacode ASC   

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| aacontactid |
| aaaction |
| aaactiondate |
| aastatus |
| aarespons |
| aacreator |
| aadesc |
| aacreadate |
| aaprojet |
| aaread |
| aareaddate |
| aafileref |
| aafileline |
| aastatus |
| aainvstatus |
| aatiming |

