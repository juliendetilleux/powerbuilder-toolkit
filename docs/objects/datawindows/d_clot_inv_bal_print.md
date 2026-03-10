# d_clot_inv_bal_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT ztmp_cs4.zcit,   
         ztmp_cs4.zcitname,   
         ztmp_cs4.zcstartstock,   
         ztmp_cs4.zcin,   
         ztmp_cs4.zcmfgout,   
         ztmp_cs4.zcout,   
         ztmp_cs4.zcmfgin,   
         ztmp_cs4.zcclotcorr,   
         ztmp_cs4.zcoutdatin,   
         ztmp_cs4.zcoutdatout,   
         ztmp_cs4.zcother,   
         ztmp_cs4.zcstopstock,   
         (ztmp_cs4.zcstartstock+ztmp_cs4.zcin+ztmp_cs4.zcmfgout+ztmp_cs4.zcout+ztmp_cs4.zcmfgin+ztmp_cs4.zcclotcorr+ztmp_cs4.zcoutdatin+ztmp_cs4.zcoutdatout+ztmp_cs4.zcother+ztmp_cs4.zcstopstock) as NoZero  ,
		(select items.itmccode from items where itcode = ztmp_cs4.zcit) as items_itmccode,
		(select adname from adresses where adcode = isnull (items_itmccode, '##########')) as mcdoname
    FROM ztmp_cs4  
   WHERE NoZero <> 0  
Order By items_itmccode,1   

```

## Colonnes
| Colonne |
|---------|
| zcit |
| zcitname |
| zcstartstock |
| zcin |
| zcmfgout |
| zcout |
| zcmfgin |
| zcclotcorr |
| zcoutdatin |
| zcoutdatout |
| zcother |
| zcstopstock |
| nozero |
| items_itmccode |
| mcdoname |

