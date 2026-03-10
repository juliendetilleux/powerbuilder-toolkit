# d_purord_print

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
         purhead.phcode,   
         purhead.phcurr,   
         purhead.phdatcrea,  
			purhead.phcntref,
			purhead.phdatsupply,
			purhead.phpurchaser,
			purhead.phrcpocmnt,
			purhead.phfileref,
			purhead.phfileline,
         purhead.phlastline,  
         purline.plline,   
         purline.plitem,  
         items.itname,     
         purline.plqtyreq,  
         purline.plqtyord,   
         purline.pluomord,   
         purline.pldatsup,   
			purline.pldatreq,
         purline.plstdval,    
         purline.pladref,     
         purline.plshipto,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,  
         choices.chname ,
		purline.plcmnt
    FROM adresses adresses_a,   
         items,   
         purhead,   
         purline,   
         adresses adresses_b,   
         shipto,   
         choices  
   WHERE ( purhead.phsupp = adresses_a.adcode ) and  
         ( purline.plcode = purhead.phcode ) and  
         ( purline.plitem = items.itcode ) and  
         ( shipto.stseq = purline.plshipto ) and  
         ( adresses_b.adcode = shipto.stcode ) and  
         ( ( purhead.phcode = :Selected_order ) AND  
         ( adresses_b.adcode = '##########' ) AND  
         ( choices.chtype = 'PAYM' ) AND  
         ( 
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
| purhead_phcode |
| purhead_phcurr |
| purhead_phdatcrea |
| purhead_phcntref |
| purhead_phdatsupply |
| purhead_phpurchaser |
| purhead_phrcpocmnt |
| purhead_phfileref |
| purhead_phfileline |
| purhead_phlastline |
| purline_plline |
| purline_plitem |
| items_itname |
| purline_plqtyreq |
| purline_plqtyord |
| purline_pluomord |
| purline_pldatsup |
| purline_pldatreq |
| purline_plstdval |
| purline_pladref |
| purline_plshipto |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| choices_chname |
| purline_plcmnt |

