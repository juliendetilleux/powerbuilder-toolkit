# dd_allmeasures

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  Select 1               As Base   ,
         measures.umcode As Um     ,
         measures.umname As UmName
    From measures  
 Where measures.umactiv = 'Y' 

Union ALL 

  SELECT 2                                                             ,
         italtmeas.imaltumcode                                         ,
         ( Select altmeasures.amdesc                   
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

