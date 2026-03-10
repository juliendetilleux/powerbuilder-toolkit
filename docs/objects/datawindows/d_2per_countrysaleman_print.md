# d_2per_countrysaleman_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  Select 1, 
         invoicehead.ihcust                                                ,   
         adresses.adname                                                            ,   
         adresses.adcountrid                                                        ,
         salhead.shsalesman                                                         ,
         Month ( invoicehead.ihdate ) As Month                                      ,
         0 As MonthOld                                                              ,
         Year  ( invoicehead.ihdate ) As Year                                       ,
         0 As YearOld                                                               ,
         Months ( invoicehead.ihdate ) - Months ( :adt_Start ) As Offset            ,
         invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv As Val ,
         0 As OldVal,
         invoicehead.ihcode * 1000 + invoiceline.illine
    From adresses    ,   
         invoicehead ,   
         invoiceline ,   
         salhead  
   Where ( invoiceline.ilsalorder = salhead.shcode                    ) And  
         ( invoicehead.ihcust     = adresses.adcode                   ) And  
         ( invoicehead.ihcode     = invoiceline.ilcode                ) And  
         ( invoiceline.iltype     in  ( 'I' , 'A' )             ) And  
         ( invoicehead.ihdate     >= :adt_Seuil                       ) And
         ( invoicehead.ihdate     Between :adt_Start    And :adt_Stop ) 
 
union all 

  Select 2,
         invoicehead.ihcust     ,  
         adresses.adname        ,   
         adresses.adcountrid            ,
         adresses.adsalesman                    ,
         Month ( invoicehead.ihdate )      ,
         0                ,
         Year  ( invoicehead.ihdate )             ,
         0                  ,
         Months ( invoicehead.ihdate ) - Months ( :adt_Start )     ,
         invoiceline.ilnetval * invoicehead.ihfac
```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| invoicehead_ihcust |
| adresses_adname |
| adresses_adcountrid |
| salhead_shsalesman |
| cmonth |
| adresses_monthold |
| cyear |
| adresses_yearold |
| coffset |
| cval |
| adresses_oldval |
| illine |

