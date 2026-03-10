# d_proflinei_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT profoline.plitem,   
         profoline.plitcustnam,   
         profoline.plqtycust,   
         profoline.plstdval,   
         profoline.plsalval,   
         profoline.pltva,   
         profoline.pltvaval,   
         profoline.pltotval,   
         profoline.plcomment,   
         profohead.phcurr,   
         profoline.plline,   
         profoline.plcode,   
         profoline.plqty,   
         profoline.pldlvt,   
         profoline.pldlvtplace,   
         profoline.plnetval,   
         profoline.plorval,   
         profoline.plrist,   
         profoline.plbastva,   
         profoline.plrealtva,   
         profoline.plsalorder,   
         profoline.plsalline,   
         profoline.plshiporder,   
         profoline.plshipline,   
         profoline.pluomord,   
         profoline.pluomconv,   
         profoline.pltype,   
         profoline.plfatype  /*HA2528*/
    FROM profohead,   
         profoline  
   WHERE ( profohead.phcode = profoline.plcode ) and  
         ( profoline.plcode = :a_code ) AND  
         ( profoline.plline = :a_ligne )    

```

## Colonnes
| Colonne |
|---------|
| profoline_plitem |
| profoline_plitcustnam |
| profoline_plqtycust |
| profoline_plstdval |
| profoline_plsalval |
| profoline_pltva |
| profoline_pltvaval |
| profoline_pltotval |
| profoline_plcomment |
| profohead_phcurr |
| profoline_plline |
| profoline_plcode |
| profoline_plqty |
| profoline_pldlvt |
| profoline_pldlvtplace |
| profoline_plnetval |
| profoline_plorval |
| profoline_plrist |
| profoline_plbastva |
| profoline_plrealtva |
| profoline_plsalorder |
| profoline_plsalline |
| profoline_plshiporder |
| profoline_plshipline |
| profoline_pluomord |
| profoline_pluomconv |
| profoline_pltype |
| profoline_plfatype |

