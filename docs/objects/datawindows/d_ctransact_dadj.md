# d_ctransact_dadj

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT histocons.hcseq,   
         histocons.hccode,   
         histocons.hcordtyp,   
         histocons.hcordno,   
         histocons.hcordlin,   
         histocons.hcpack,   
         histocons.hcowner,   
         histocons.hcloc,   
         histocons.hcqty,   
         histocons.hcuser,   
         histocons.hcdatim,   
         histocons.hccomment,   
         histocons.hcreasn,
		cast('0' as char(1)) as typitem  
    FROM histocons  
   WHERE ( histocons.hcseq = :Seq )    

```

## Colonnes
| Colonne |
|---------|
| hcseq |
| hccode |
| hcordtyp |
| hcordno |
| hcordlin |
| hcpack |
| hcowner |
| hcloc |
| hcqty |
| hcuser |
| hcdatim |
| hccomment |
| hcreasn |
| typitem |

