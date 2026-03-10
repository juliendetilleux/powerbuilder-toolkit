# d_dvi_method_lab_ds

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT workcenters.wccode,   
         workcenters.wcmacfix,   
         workcenters.wccost,   
         workcenters.wcmacprop,   
         routline.rloffset,   
         routline.rllabfix,   
         routline.rllabrun,   
         routline.rlsetup,   
         routline.rlmacrun,   
         routline.rlline,   
         routline.rloper ,
         0 As DviLineNum 
    FROM workcenters,   
         routline  
   WHERE ( workcenters.wccode = routline.rlwccode ) and  
         ( routline.rlcode = :ras_ItId          )   
ORDER BY routline.rlline ASC   

```

## Colonnes
| Colonne |
|---------|
| workcenters_wccode |
| workcenters_wcmacfix |
| workcenters_wccost |
| workcenters_wcmacprop |
| routline_rloffset |
| routline_rllabfix |
| routline_rllabrun |
| routline_rlsetup |
| routline_rlmacrun |
| routline_rlline |
| routline_rloper |
| workcenters_dvilinenum |

