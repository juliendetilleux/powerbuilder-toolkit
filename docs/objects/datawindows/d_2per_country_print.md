# d_2per_country_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  Select 1 diff, 
         adresses.adcountrid country                                                        ,
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) As Val ,
         0 As OldVal 
    From adresses    ,   
         invoicehead ,   
         invoiceline 
   Where ( invoicehead.ihcust     = adresses.adcode                   ) And  
         ( invoicehead.ihcode     = invoiceline.ilcode                ) And  
         ( invoiceline.iltype   not  in  ( 'Y' , 'Z' )             ) And  
         ( invoicehead.ihdate     >= :adt_Seuil                       ) And
         ( invoicehead.ihdate     Between :adt_Start    And :adt_Stop ) 
group by country  
 
Union all

  Select 3, 
         adresses.adcountrid                                                    ,   
         sum(clotfinitad.cdval)                                  ,
         0 
    From adresses    ,   
         clotfinitad  
   Where ( adresses.adcode                      = clotfinitad.cdadid                ) And  
         ( clotfinitad.cdtyp                    =  'S'                              ) And 
         ( Date ( clotfinitad.cdperiod + '01' ) <  :adt_Seuil                       ) And  
         ( Date ( clotfinitad.cdperiod + '01' ) Between :adt_Start    And :adt_Stop ) 
group by adresses.adcountrid 

union all 

  Select 4, 
         adresses.adcountrid                                                 ,
         0                                                                   ,
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) 
    From adresses    ,   
         invoicehead ,   
         invoiceline
   Where ( invoicehead.ihcust     = adresses.adcode                      ) And  
         ( invoicehead.ihcode     = invoiceline.ilcode                   ) And  
         ( invoiceline.iltype not    in  ( 'Y' , 'Z'  )                ) And  
         ( invoicehead.ihdate     >= :adt_Seuil   
```

## Colonnes
| Colonne |
|---------|
| adresses_diff |
| adresses_country |
| cval |
| adresses_oldval |

