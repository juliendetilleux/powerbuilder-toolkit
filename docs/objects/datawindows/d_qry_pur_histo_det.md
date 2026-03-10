# d_qry_pur_histo_det

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
           Where ( histostock.hsordno = purinvline.plordno ) And  
                 ( histostock.hsordlin = purinvline.plordlin )),
         (Select sum(purinvline.plqty)
            From purinvline
           Where ( histostock.hsordno = purinvline.plordno ) And  
                 ( histostock.hsordlin = purinvline.plordlin )),
         (Select Distinct  purinvline.plpurval
            From purinvline
           Where ( histostock.hsordno = purinvline.plordno ) And  
                 ( histostock.hsordlin = purinvline.plordlin )),
         (Select Distinct purinvline.plnetval
            From purinvline
           Where ( histostock.hsordno = purinvline.plordno ) And  
                 ( histostock.hsordlin = purinvline.plordlin )),
         (Select Distinct purinvhead.pitvaref
            From purinvline,
                 purinvhead
           Where ( histostock.hsordno = purinvline.plordno ) And  
                 ( histostock.hsordlin = purinvline.plordlin ) And
                 ( purinvline.plcode = purinvhead.picode )),
         (Select Distinct  purinvhead.pidate
            From purinvline,
                 purinvhead
           Where ( histostock.hsordno = purinvline.plordno ) And  
                 ( histostock.hsordlin = purinvline.plordlin ) And
                 ( purinvline.plcode = purinvhead.picode ))   
    FROM histostock   
   WHERE ( histostock.hsordno = :ran_purorder ) And
         ( histostock.hsordlin = :ran_purline ) And 
         ( histostock.hsordtyp = 'P' ) And 
         ( histostock.hscode In ('RCPO','RTPO') )    

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
| purinvline_plnetval |
| purinvhead_pitvaref |
| purinvhead_pidate |

