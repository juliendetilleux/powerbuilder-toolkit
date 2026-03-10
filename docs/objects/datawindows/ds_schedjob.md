# ds_schedjob

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT histojob.hjdatim,   
         histojob.hjseq,   
         histojob.hjjob,   
         histojob.hjcomment,   
         histojob.hjuser  
    FROM histojob  
   WHERE ( histojob.hjjob = :as_jobid ) AND  
         ( histojob.hjdatim >= :at_horizon )   
ORDER BY histojob.hjdatim DESC   

```

## Colonnes
| Colonne |
|---------|
| hjdatim |
| hjseq |
| hjjob |
| hjcomment |
| hjuser |

