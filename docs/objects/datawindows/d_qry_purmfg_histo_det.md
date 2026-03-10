# d_qry_purmfg_histo_det

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscode,
         histostock.hsdatim,   
         histostock.hsqty,   
         (Select Distinct purinvline.plcode
            From purinvline
           Where ( purinvline.plordno = :ran_purorder ) ),
         (Select sum(purinvline.plqty)
            From purinvline
           Where ( purinvline.plordno = :ran_purorder ) ),
         (Select Distinct  purinvline.plpurval
            From purinvline
           Where ( purinvline.plordno = :ran_purorder ) ),
         (Select Distinct purinvline.pltotval
            From purinvline
           Where ( purinvline.plordno = :ran_purorder ) ),
         (Select Distinct purinvhead.pitvaref
            From purinvline,
                 purinvhead
           Where ( purinvline.plordno = :ran_purorder )  And
                 ( purinvline.plcode = purinvhead.picode )),
         (Select Distinct  purinvhead.pidate
            From purinvline,
                 purinvhead
           Where ( purinvline.plordno = :ran_purorder ) And
                 ( purinvline.plcode = purinvhead.picode ))   
    FROM histostock   
   WHERE ( histostock.hsordno = :ran_mfgorder ) And
         ( histostock.hsordtyp = 'M' ) And 
         ( histostock.hscode In ('RCMO','RTMO') )    

```

## Colonnes
| Colonne |
|---------|
| hscode |
| histostock_hsdatim |
| histostock_hsqty |
| purinvline_plcode |
| cf_purinv_qty |
| purinvline_plpurval |
| pltotval |
| purinvhead_pitvaref |
| purinvhead_pidate |

