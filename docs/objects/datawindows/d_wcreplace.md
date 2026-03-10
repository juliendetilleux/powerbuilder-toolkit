# d_wcreplace

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomhead.bhcode,   
         bomhead.bhtype,   
         bomhead.bhcoeff,   
         items.itname,   
         items.itum,   
         routline.rlcode,   
         routline.rltype,   
         routline.rlline,   
         routline.rlwccode,   
         routline.rloffset,   
         routline.rlmacrun,   
         routline.rllabrun,   
         routline.rlsetup,   
         routline.rloper,   
         routline.rllabfix,
		routline.rltask
    FROM bomhead,   
         items,   
         routline  
   WHERE ( items.itcode = bomhead.bhcode ) and  
         ( routline.rlcode = bomhead.bhcode ) and  
         ( bomhead.bhtype = routline.rltype ) and  
         ( ( routline.rlwccode = :rawccode )    and
		( routline.rltask = :ras_rltask ) )

```

## Colonnes
| Colonne |
|---------|
| bomhead_bhcode |
| bomhead_bhtype |
| bomhead_bhcoeff |
| items_itname |
| items_itum |
| routline_rlcode |
| routline_rltype |
| routline_rlline |
| routline_rlwccode |
| routline_rloffset |
| routline_rlmacrun |
| routline_rllabrun |
| routline_rlsetup |
| routline_rloper |
| routline_rllabfix |
| routline_rltask |

