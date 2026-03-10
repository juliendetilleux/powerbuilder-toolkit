# dd_itallmeasures

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  Select 1                                 As Base  ,
         linkitad.lkum                     As Um    ,
         ( Select measures.umname
             From measures
            Where measures.umcode   = Um ) As UmName,
         linkitad.lkumconv                 As Conv  
    From linkitad
   Where linkitad.lktyp    = 'S'       And
         linkitad.lkadcode = :ras_AdId And
         linkitad.lkitem   = :ras_Item    

Union ALL 

  SELECT 2                                                             ,
         italtmeas.imaltumcode                                         ,
         ( Select altmeasures.amdesc                   
             From altmeasures
            Where altmeasures.ambaseumid = :ras_BaseUm           And
                  altmeasures.amcode     = italtmeas.imaltumcode     ) ,
         ( Select altmeasures.amrealconv
             From altmeasures
            Where altmeasures.ambaseumid = :ras_BaseUm           And
                  altmeasures.amcode     = italtmeas.imaltumcode     )  
    FROM italtmeas  
   WHERE ( italtmeas.imitcode = :ras_Item                                      ) And   
         ( ( Select altmeasures.amactiv
               From altmeasures
              Where altmeasures.ambaseumid = :ras_BaseUm           And
                    altmeasures.amcode     = italtmeas.imaltumcode     ) = 'Y' )

ORDER BY 1, 2  

```

## Colonnes
| Colonne |
|---------|
| base |
| um |
| umname |
| conv |

