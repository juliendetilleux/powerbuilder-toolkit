# ds_import_adrsactions

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aaadrid,   
         adrsactions.aafileref,   
         adrsactions.aafileline,   
         adrsactions.aaaction,   
         date(adrsactions.aaactiondate) /*CAST(null as char(10))*/ as dateact,   
	    CAST(null as time) as hourstart,
         CAST(adrsactions.aatiming as numeric(6,2)) as aatiming,   
         adrsactions.aadesc,   
	    adrsactions.aarespons,
         adrsactions.aastatus  
    FROM adrsactions   

```

## Colonnes
| Colonne |
|---------|
| aaadrid |
| aafileref |
| aafileline |
| aaaction |
| dateact |
| hourstart |
| aatiming |
| aadesc |
| aarespons |
| aastatus |

