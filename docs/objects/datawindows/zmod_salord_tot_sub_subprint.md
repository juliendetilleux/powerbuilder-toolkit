# zmod_salord_tot_sub_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT '10' as sort_criteria,
			shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         items.itname,   
         salline.sluomord,   
         items.itcode,
         items.itqtypal, 
         items.itintrastat,
         ( Select intrastat.isref
             From intrastat
            Where ( intrastat.isactiv = 'Y'               ) And
                  ( intrastat.iscode  = items.itintrastat )     )  isref,
         adresses.adtvatyp,  
         (if isnull(salline.slvalsddisc,0) <> 0 then 
			salline.slvalsddisc 
		else 
			salline.slstdval
		endif) as slstdval,  
         salline.slqtyord,   
         salline.slqtyreq,  
         salline.sldatreq,  
         salline.slline,   
         salhead.shcurr,    
         items.itdesc2,
         salhead.shcode, 
         salhead.shcustref, 
         salhead.shcust,
         ( Select yv_linkitad.lkcode 
             From yv_linkitad 
            Where ( yv_linkitad.lkitem   = items.itcode   ) And
                  ( yv_linkitad.lkadcode = salhead.shcust ) And
                  ( yv_linkitad.lkactiv  = 'Y'            ) And
                  ( yv_linkitad.lktyp    = 'S'            )     )  lkcode,
         ( Select yv_linkitad.lkadref 
             From yv_linkitad 
            Where ( yv_linkitad.lkitem   = items.itcode   ) And
                  ( yv_linkitad.lkadcode = salhead.shcust ) And
                  ( yv_linkitad.lkactiv  = 'Y'            ) And
                  ( yv_linkitad.lktyp    = 'S'            )     )  lkadref,
         ( Select yv_linkitad.lkadref2 
             From yv_linkitad 
            Where ( yv_linkitad.lkitem   = items.itcode   ) And
                  ( yv_linkitad.lkadcode = salhead.shcust ) And
                  ( yv_linkitad.lkactiv  = 'Y'            ) And
                  ( yv_linkitad.lktyp    = 'S'            )     )  lkadref2,
       
```

## Colonnes
| Colonne |
|---------|
| csort_criteria |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| items_itname |
| salline_sluomord |
| items_itcode |
| items_itqtypal |
| items_itintrastat |
| cisref |
| adresses_adtvatyp |
| salline_slstdval |
| salline_slqtyord |
| salline_slqtyreq |
| salline_sldatreq |
| salline_slline |
| salhead_shcurr |
| items_itdesc2 |
| salhead_shcode |
| salhead_shcustref |
| salhead_shcust |
| clkcode |
| lkadref |
| lkadref2 |
| clpitadlayer |
| clpnblayer |
| clpumgroup |
| translate |
| salline_slcomment |
| salline_slsalghost |
| ckit |
| salline_slsample |

