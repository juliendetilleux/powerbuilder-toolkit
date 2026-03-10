# d_purg2ord_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses_b.adname,   
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
         purghead.phcode,   
         purghead.phcurr,   
         purghead.phdatcrea,   
         purgline.pldesc,   
         purgline.plqty,   
         purgline.pldatreq,   
         purgline.plpurval,   
         adresses_b.adcode,   
         purghead.phlastline,   
         purgline.plshipto,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         purgline.plline,   
         adresses_a.adtva,   
         adresses_a.adsupppay,   
         purgline.plrefnum,   
         purgline.plcmnt,   
         adresses_b.adtel,   
         adresses_b.adfax,   
         adresses_a.adfax,   
         purghead.phtype,
			purgline.plstatus   
    FROM purghead,   
         adresses adresses_a,   
         purgline,   
         adresses adresses_b,   
         shipto  
   WHERE ( purghead.phsupp = adresses_a.adcode ) and  
         ( purgline.plcode = purghead.phcode ) and  
         ( shipto.stseq = purgline.plshipto ) and  
         ( adresses_b.adcode = shipto.stcode ) and  
         ( ( purghead.phcode = :Selected_order ) AND  
         ( adresses_b.adcode = '##########' ) AND  
         ( purgline.plstatus < '9'))   
ORDER BY purgline.plshipto ASC,   
         purgline.plline ASC   

```

## Colonnes
| Colonne |
|---------|
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
| purghead_phcode |
| purghead_phcurr |
| purghead_phdatcrea |
| purgline_pldesc |
| purgline_plqty |
| purgline_pldatreq |
| purgline_plpurval |
| adresses_adcode |
| purghead_phlastline |
| purgline_plshipto |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| purgline_plline |
| adresses_adtva |
| adresses_adsupppay |
| purgline_plrefnum |
| purgline_plcmnt |
| adresses_adtel |
| adresses_adfax |
| adresses_adfax |
| purghead_phtype |
| purgline_plstatus |

