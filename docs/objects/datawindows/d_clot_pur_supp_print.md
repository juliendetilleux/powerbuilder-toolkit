# d_clot_pur_supp_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
   SELECT distinct clotfinitad.cdadid supplier, 
			( select adname from adresses where adcode = supplier ) as suppliername, 
        isnull(( select sum(detail1.cdval) 
            from clotfinitad detail1
           where detail1.cdadid = supplier and 
                 detail1.cdtyp = 'P' and
                 detail1.cdperiod between :start1_dat and :start2_dat ), 0) startval ,
        isnull(( select sum(detail2.cdval) 
            from clotfinitad detail2
           where detail2.cdadid = supplier and
                 detail2.cdtyp = 'P' and
                 detail2.cdperiod between :stop1_dat and :stop2_dat ), 0) stopval
     FROM clotfinitad   
  WHERE (( clotfinitad.cdperiod between :start1_dat and :start2_dat ) OR  
        ( clotfinitad.cdperiod between :stop1_dat and :stop2_dat ) ) and
        ( clotfinitad.cdtyp = 'P' )
order by clotfinitad.cdadid

```

## Colonnes
| Colonne |
|---------|
| supplier |
| suppliername |
| startval |
| stopval |

