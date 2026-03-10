# dd_itallmeasures2

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

Union all
 
  Select 3 ,
			items.itum as um ,
			( Select measures.umname
             From measures
            Where measures.umcode   = Um ) As UmName,
			1
    From items
   Where items.itcode = :ras_Item and
         ( (select linkitad.lkum From linkitad
					   Where linkitad.lktyp    = 'S'       And
					         linkitad.lkadcode = :ras_AdId And
					         linkitad.lkitem   = :ras_Item ) is null 
			or 
				items.itcode not in (select linkitad.lkitem From linkitad
					   Where linkitad.lktyp    = 'S'       And
					         linkitad.lkadcode = :ras_AdId And
					         linkitad.lkitem   = :ras_Item ) )
      

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
                    altmeasures.amcode     = it
```

## Colonnes
| Colonne |
|---------|
| base |
| um |
| umname |
| conv |

