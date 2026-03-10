# d_pur_rap_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT purhead.phsupp,   
         purhead.phcode,   
         purline.plline,   
         items.itname,   
         purline.pldatsup ,
			purline.plqtyord,
			purline.pluomord,
			purline.pluomconv,
			purline.plqtyrec,
         items.itdesc2, 
         ( Select linkitad.lkadref 
             From linkitad 
            Where ( linkitad.lkitem = items.itcode     ) And
                  ( linkitad.lktyp = 'P' ) And
                  ( linkitad.lkadcode = purhead.phsupp ) And
                  ( linkitad.lkactiv = 'Y'             ) ) As lkadref, 
         ( Select linkitad.lkadref2 
             From linkitad 
            Where ( linkitad.lkitem = items.itcode     ) And
                  ( linkitad.lkadcode = purhead.phsupp ) And
                  ( linkitad.lktyp = 'P' ) And
                  ( linkitad.lkactiv = 'Y'             ) ) As lkadref2,
         purline.plitem,
         purhead.phcurr,   
         purhead.phstatus,   
         purhead.phdatcrea,   
         purhead.phlastline,   
         purhead.phcntid,   
         purhead.phcntref,   
         purhead.phcmnt,   
         purhead.phwithtransp,   
         purhead.phtranspid,   
         purhead.phdlvt,   
         purhead.phdlvtplace,   
         purhead.phtransfered,   
         purhead.phfileref,   
         purhead.phfileline,   
         purhead.phdatsupply,   
         purhead.phpurchaser,   
         purline.plcode,   
         purline.plqtyreq,    
         purline.pldatreq,   
         purline.plstdval,   
         purline.plpurval,   
         purline.plstatus,   
         purline.pladref,   
         purline.plshipto,   
         purline.plqtyinv,   
         purline.plrapnb,   
         purline.pllastrap,   
         purline.plsalhead,   
         purline.plsalline,   
         purline.plinvclot,   
         purline.pldatrec,   
         purline.pltransfered,   
         items.itcode,   
         items.itactiv,   
         items.itcrit1,  
```

## Colonnes
| Colonne |
|---------|
| purhead_phsupp |
| purhead_phcode |
| purline_plline |
| items_itname |
| purline_pldatsup |
| purline_plqtyord |
| purline_pluomord |
| purline_pluomconv |
| purline_plqtyrec |
| items_itdesc2 |
| clkadref |
| clkadref2 |
| purline_plitem |
| purhead_phcurr |
| purhead_phstatus |
| purhead_phdatcrea |
| purhead_phlastline |
| purhead_phcntid |
| purhead_phcntref |
| purhead_phcmnt |
| purhead_phwithtransp |
| purhead_phtranspid |
| purhead_phdlvt |
| purhead_phdlvtplace |
| purhead_phtransfered |
| purhead_phfileref |
| purhead_phfileline |
| purhead_phdatsupply |
| purhead_phpurchaser |
| purline_plcode |
| purline_plqtyreq |
| purline_pldatreq |
| purline_plstdval |
| purline_plpurval |
| purline_plstatus |
| purline_pladref |
| purline_plshipto |
| purline_plqtyinv |
| purline_plrapnb |
| purline_pllastrap |
| purline_plsalhead |
| purline_plsalline |
| purline_plinvclot |
| purline_pldatrec |
| purline_pltransfered |
| items_itcode |
| items_itactiv |
| items_itcrit1 |
| items_itcrit2 |
| items_itcrit3 |
| items_itum |
| items_ittyp |
| items_itcons |
| items_itsale |
| items_itlot |
| items_itqc |
| items_itval |
| items_itloc |
| items_itpol |
| items_itpsize |
| items_itpinsize |
| items_itpinnb |
| items_itpnbdays |
| items_itsecur |
| items_itleadtime |
| items_itavailtime |
| items_itbomlvl |
| items_itbom |
| items_itstdsal |
| items_itstdpur |
| cpurchaser |
| stdesc |
| mcdo |

