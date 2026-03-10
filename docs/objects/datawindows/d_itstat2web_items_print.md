# d_itstat2web_items_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT itstat2web.iswcode2,   
         itstat2web.iswdesc,   
         itstat2web.iswcode,   
         itstat1web.iwdesc  
    FROM {oj itstat2web RIGHT OUTER JOIN itstat1web ON itstat2web.iswcode = itstat1web.iwcode}  
   WHERE ( itstat1web.iwlang = :ras_lang ) AND  
         ( itstat2web.iswlang = :ras_lang )   

```

## Colonnes
| Colonne |
|---------|
| itstat2web_iswcode2 |
| itstat2web_iswdesc |
| itstat2web_iswcode |
| itstat1web_iwdesc |

