# zmod_salpord_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         salpline.sldesc,
         salpline.slum, 
         adresses.adtvatyp,  
         salpline.slstdval,  
         salpline.slsalcost,  
         salpline.slqty, 
         salpline.sldatreq,  
         salpline.slline,   
         salhead.shcurr,    
         salpline.sldesc,
         salhead.shcode, 
         salhead.shcustref, 
         salhead.shcust,
         salpline.slprojid,
         salpline.slversid
    FROM shipto,   
         salhead,   
         salpline,
         adresses
   WHERE ( salpline.slcode   = salhead.shcode   ) And  
         ( shipto.stseq     = salpline.slshipto ) And  
         ( salhead.shcust   = shipto.stcode    ) And
         ( adresses.adcode  = salhead.shcust   ) And    
         ( salhead.shcode   = :ran_Order       ) And 
         ( salpline.slstatus < '5'              )
ORDER BY shipto.stdesc
```

## Colonnes
| Colonne |
|---------|
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| salpline_sldesc |
| salpline_slum |
| adresses_adtvatyp |
| salpline_slstdval |
| salpline_slsalcost |
| salpline_slqty |
| salpline_sldatreq |
| salpline_slline |
| salhead_shcurr |
| salpline_sldesc |
| salhead_shcode |
| salhead_shcustref |
| salhead_shcust |
| salpline_slprojid |
| salpline_slversid |

