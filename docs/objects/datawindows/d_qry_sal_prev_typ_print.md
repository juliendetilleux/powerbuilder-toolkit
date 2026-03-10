# d_qry_sal_prev_typ_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select * from
	yv_sal_prev_jalons
 UNION ALL 
select * from 
   yv_sal_prev_nojalons 
 UNION ALL 
select * from
	yv_sal_prev_2inv_pproj 
 UNION ALL 
select * from
	yv_sal_prev_2inv_mproj
 UNION ALL 
select * from
	yv_sal_prev_offer_pproj 
 UNION ALL 
select * from
	yv_sal_prev_offer_mproj

 ORDER BY 6, 5, 2, 4


```

## Colonnes
| Colonne |
|---------|
| fhcode |
| fhdesc |
| adcode |
| adname |
| imdesc |
| tri |
| m0 |
| m1 |
| m2 |
| m3 |
| m4 |
| m5 |
| m6 |
| m7 |
| m8 |
| m9 |
| m10 |
| m11 |
| m1223 |
| m24p |

