# d_shipnotice_det_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slline,   
         shipline.slitem,   
         shipline.sllot,   
         shipline.slqty,   
         shipline.slsalorder,   
         shipline.slsalline,   
         salline.slcustref,   
         salline.sluomord,   
         salline.sluomconv,
         salline.slrist,
         salline.slorval,
         salline.slstdval,
         shipline.slitcustnam,   
         items.itname,   
         shipline.slcomment,   
         lots.lolotctrl,
         lots.loexpdat,   
         items.itconvusr,   
         items.itumusr,  
         items.itdesc2,
         ( select ildesc from itemlang where ilitcode = shipline.slitem and illgcode = 'FR') ctranslate    
    FROM shipline,   
         salhead,   
         salline,   
         items,   
         lots  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( shipline.slsalline = salline.slline ) and  
         ( salline.slcode = shipline.slsalorder ) and  
         ( items.itcode = shipline.slitem ) and  
         ( shipline.sllot = lots.locode ) and  
         ( shipline.slcode = :Selected_shipmnt )   
ORDER BY shipline.slsalorder ASC,   
         shipline.slitem ASC   

```

## Colonnes
| Colonne |
|---------|
| shipline_slline |
| shipline_slitem |
| shipline_sllot |
| shipline_slqty |
| shipline_slsalorder |
| shipline_slsalline |
| salline_slcustref |
| salline_sluomord |
| salline_sluomconv |
| salline_slrist |
| salline_slorval |
| salline_slstdval |
| shipline_slitcustnam |
| items_itname |
| shipline_slcomment |
| lots_lolotctrl |
| lots_loexpdat |
| items_itconvusr |
| items_itumusr |
| items_itdesc2 |
| cctranslate |

