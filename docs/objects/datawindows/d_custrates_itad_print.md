# d_custrates_itad_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         choices.chname,   
         ratehead.rhdesc,   
         rateline.rlitem,   
         items.itname,   
         rateline.rlval,   
         items.itum,   
         ratehead.rhcurr,   
         adresrate.arstartdat,   
         adresrate.arstopdat,   
         adresses.adname,   
         adresses.adcode,   
         items.itcode,   
         ratehead.rhtyp  
    FROM ratehead,   
         rateline,   
         choices,   
         items,   
         adresses,   
         adresrate,   
         linkitad  
   WHERE ( rateline.rlcode = ratehead.rhcode ) and  
         ( ratehead.rhrpcode = choices.chcode ) and  
         ( rateline.rlitem = items.itcode ) and  
         ( adresses.adcode = adresrate.arcode ) and  
         ( adresrate.arrateid = ratehead.rhcode ) and  
         ( rateline.rlcode = adresrate.arrateid ) and  
         ( linkitad.lkadcode = adresses.adcode ) and  
         ( linkitad.lkitem = items.itcode ) and  
         ( ( ratehead.rhactiv = 'Y' ) AND  
         ( choices.chtype = 'RATP' ) AND  
         ( rateline.rlval <> 0 ) AND  
         ( adresses.adcode = :as_AdCode ) ) AND  
         linkitad.lktyp = 'S' AND  
         ratehead.rhtyp = 'T'   
ORDER BY adresrate.arstartdat ASC   

```

## Colonnes
| Colonne |
|---------|
| ratehead_rhcode |
| choices_chname |
| ratehead_rhdesc |
| rateline_rlitem |
| items_itname |
| rateline_rlval |
| items_itum |
| ratehead_rhcurr |
| adresrate_arstartdat |
| adresrate_arstopdat |
| adresses_adname |
| adresses_adcode |
| items_itcode |
| ratehead_rhtyp |

