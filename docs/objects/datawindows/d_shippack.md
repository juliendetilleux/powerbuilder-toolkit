# d_shippack

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shippack.spline,   
         shippack.sppackid,   
         packings.pkname,   
         shippack.spqty,   
         shippack.spinv,
			( Select First histocons.hccomment 
				 From histocons 
				Where histocons.hcordno   = shippack.spcode	And
						histocons.hcordlin2 = shippack.spline		order by hcseq desc ) HistoComment   
    FROM packings,   
         shippack  
   WHERE ( shippack.sppackid = packings.pkcode ) and  
         ( ( shippack.spcode = :Selected_ship ) )   
ORDER BY shippack.spline ASC   

```

## Colonnes
| Colonne |
|---------|
| shippack_spline |
| shippack_sppackid |
| packings_pkname |
| shippack_spqty |
| shippack_spinv |
| histocomment |

