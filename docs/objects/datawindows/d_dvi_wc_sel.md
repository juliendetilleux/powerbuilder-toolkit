# d_dvi_wc_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT workcenters.wccode        ,   
         workcenters.wcname        ,   
         workcenters.wccost        ,   
         workcenters.wcmacfix      ,   
         workcenters.wcmacprop     ,
         1.25 - 1.25 As OffSetTime ,
         1.25 - 1.25 As LabFixTime ,
         1.25 - 1.25 As LabRunTime , 
         1.25 - 1.25 As MacFixTime ,
         1.25 - 1.25 As MacRunTime ,
         'N'         As SelRow
    FROM workcenters  
   WHERE workcenters.wcactiv = 'Y'    

```

## Colonnes
| Colonne |
|---------|
| wccode |
| wcname |
| wccost |
| wcmacfix |
| wcmacprop |
| offsettime |
| labfixtime |
| labruntime |
| macfixtime |
| macruntime |
| selrow |

