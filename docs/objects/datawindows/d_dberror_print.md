# d_dberror_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT choices.chname,   
         dataerrors.detyp,   
         dataerrors.deseq,   
         choices.chsort,   
         dataerrors.dedesc , 
		dataerrors.dedatim  
    FROM {oj dataerrors LEFT OUTER JOIN choices ON dataerrors.decode = choices.chtype AND dataerrors.detyp = choices.chcode}  
   WHERE dataerrors.decode = :Selected_err   
ORDER BY choices.chsort ASC,   
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

