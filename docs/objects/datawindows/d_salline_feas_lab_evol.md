# d_salline_feas_lab_evol

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT schedwrkcal.wcdat,   
         schedwrkcal.wcmacavail,   
         schedwrkcal.wcmacrun,   
         schedwrkcal.wcwcid  
    FROM schedwrkcal  
   WHERE ( schedwrkcal.wcwcid = :Sel_wc ) AND  
         ( schedwrkcal.wcdat >= :Sel_dat )   
ORDER BY schedwrkcal.wcdat ASC   

```

## Colonnes
| Colonne |
|---------|
| wcdat |
| wcmacavail |
| wcmacrun |
| wcwcid |

