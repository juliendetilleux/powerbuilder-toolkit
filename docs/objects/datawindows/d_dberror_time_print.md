# d_dberror_time_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT 
		( select choices.chname from choices where dataerrors.decode = choices.chtype and dataerrors.detyp = choices.chcode ) as  chname,   
         dataerrors.detyp,   
         dataerrors.deseq,   
		( select choices.chsort from choices where dataerrors.decode = choices.chtype and dataerrors.detyp = choices.chcode ) as  chsort,   
         dataerrors.dedesc , 
		dataerrors.dedatim  
    FROM dataerrors  
   WHERE dataerrors.decode = :as_error  and 
			 dataerrors.dedatim > :ad_errtime 
ORDER BY chsort ASC, dataerrors.dedatim desc,   
         dataerrors.deseq ASC   

```

## Colonnes
| Colonne |
|---------|
| choices_chname |
| dataerrors_detyp |
| dataerrors_deseq |
| choices_chsort |
| dataerrors_dedesc |
| dataerrors_dedatim |

