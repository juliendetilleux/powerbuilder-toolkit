# zmod_purcontract_det_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT purcntline.clitemid,   
         items.itname,
         items.itdesc2,     
         purcntline.cladref,   
         purcntline.clleadtime,   
         purcntline.cluomord,   
         purcntline.cluomconv,   
         purcntline.clstdcost,   
         ( Select linkitad.lkcode 
             From linkitad 
            Where ( linkitad.lkitem   = items.itcode   ) And
                  ( linkitad.lkadcode = purcnthead.chadid ) And
                  ( linkitad.lkactiv  = 'Y'            ) And
                  ( linkitad.lktyp    = 'S'            )     )  lkcode,
         ( Select linkitad.lkadref 
             From linkitad 
            Where ( linkitad.lkitem   = items.itcode   ) And
                  ( linkitad.lkadcode = purcnthead.chadid ) And
                  ( linkitad.lkactiv  = 'Y'            ) And
                  ( linkitad.lktyp    = 'S'            )     )  lkadref,
         ( Select linkitad.lkadref2 
             From linkitad 
            Where ( linkitad.lkitem   = items.itcode   ) And
                  ( linkitad.lkadcode = purcnthead.chadid ) And
                  ( linkitad.lkactiv  = 'Y'            ) And
                  ( linkitad.lktyp    = 'S'            )     )  lkadref2,
			( select ildesc from itemlang where ilitcode = purcntline.clitemid and illgcode = :sel_Lang ) translate,
			purcnthead.chcurr as currency,
			purcnthead.chordid as purorder
    FROM purcntline,
         items,   
         purcnthead  
   WHERE ( purcntline.clitemid = items.itcode ) and  
         ( purcntline.clcode = purcnthead.chcode ) and  
         ( purcntline.clcode = :Sel_contract )   
ORDER BY purcntline.clitemid ASC

```

## Colonnes
| Colonne |
|---------|
| purcntline_clitemid |
| items_itname |
| items_itdesc2 |
| purcntline_cladref |
| purcntline_clleadtime |
| purcntline_cluomord |
| purcntline_cluomconv |
| purcntline_clstdcost |
| lkcode |
| lkadref |
| lkadref2 |
| translate |
| purcnthead_currency |
| purcnthead_purorder |

