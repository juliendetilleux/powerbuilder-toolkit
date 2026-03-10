# d_pricerequest_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses_b.adcode,
			adresses_b.adname,   
         adresses_b.adadr1,   
         adresses_b.adadr2,   
         adresses_b.adzip,   
         adresses_b.adloc,   
         adresses_b.adcountr,   
         adresses_b.adtva,   
         adresses_b.adreg,   
         adresses_a.adcode,   
         adresses_a.adname,   
         adresses_a.adcust,   
         adresses_a.adadr1,   
         adresses_a.adadr2,   
         adresses_a.adzip,   
         adresses_a.adloc,   
         adresses_a.adcountr,  
         adresses_a.adtva,   
         adresses_a.adsupppay,    
         purheadlimite.phlcode,   
         purheadlimite.phlcurr,   
         purheadlimite.phldatcrea,  
			purheadlimite.phlcntref,
			purheadlimite.phldatsupply,
			purheadlimite.phlpurchaser,
			purheadlimite.phlrcpocmnt,
			purheadlimite.phlfileref,
			purheadlimite.phlfileline,
         purheadlimite.phllastline,  
         purlinelimite.pllline,   
         purlinelimite.pllitem, 
		pllqtyord, 
         items.itname,     
         purlinelimite.pllqtyreq,   
         purlinelimite.plluomord,   
         purlinelimite.plldatsup,   
			purlinelimite.plldatreq,  
         purlinelimite.plladref,     
         purlinelimite.pllshipto,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,  
         choices.chname ,
		purlinelimite.pllcmnt
    FROM adresses adresses_a,   
         items,   
         purheadlimite,   
         purlinelimite,   
         adresses adresses_b,   
         shipto,   
         choices  
   WHERE ( purheadlimite.phlsupp = adresses_a.adcode ) and  
         ( purlinelimite.pllcode = purheadlimite.phlcode ) and  
         ( purlinelimite.pllitem = items.itcode ) and  
         ( shipto.stseq = purlinelimite.pllshipto ) and  
         ( adresses_b.adcode = shipto.stcode ) and  
         ( ( purheadlimite.ph
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtva |
| adresses_adreg |
| adresses_adcode |
| adresses_adname_1 |
| adresses_adcust |
| adresses_adadr1_2 |
| adresses_adadr2_3 |
| adresses_adzip_4 |
| adresses_adloc_5 |
| adresses_adcountr_6 |
| adresses_adtva |
| adresses_adsupppay |
| purheadlimite_phcode |
| purheadlimite_phcurr |
| purheadlimite_phdatcrea |
| purheadlimite_phcntref |
| purheadlimite_phdatsupply |
| purheadlimite_phpurchaser |
| purheadlimite_phrcpocmnt |
| purheadlimite_phfileref |
| purheadlimite_phfileline |
| purheadlimite_phlastline |
| purlinelimite_plline |
| purlinelimite_plitem |
| purlinelimite_pllqtyord |
| items_itname |
| purlinelimite_plqtyreq |
| purlinelimite_pluomord |
| purlinelimite_pldatsup |
| purlinelimite_pldatreq |
| purlinelimite_pladref |
| purlinelimite_plshipto |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| choices_chname |
| purlinelimite_plcmnt |

