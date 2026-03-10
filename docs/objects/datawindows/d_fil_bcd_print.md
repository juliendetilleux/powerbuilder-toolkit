# d_fil_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhdesc,   
         fileline.fldesc,   
         filehead.fhcode,   
         fileline.flline,
			filehead.fhstat1  
    FROM filehead,   
         fileline  
   WHERE fileline.flcode = filehead.fhcode    
		AND filehead.fhstatus < '8'
Order By filehead.fhcode,   
         fileline.flline

```

## Colonnes
| Colonne |
|---------|
| fhdesc |
| fileline_fldesc |
| filehead_fhcode |
| fileline_flline |
| fhstat1 |

