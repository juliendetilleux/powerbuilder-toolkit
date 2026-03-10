# d_shipnotice_det_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcode,   
         shiphead.shcust,   
         shiphead.shshipto,
         shiphead.shdate,
         adresses_a.adname name_cust,   
         adresses_a.adadr1 adr1_cust,   
         adresses_a.adadr2 adr2_cust,   
         adresses_a.adzip zip_cust,   
         adresses_a.adloc loc_cust,   
         adresses_a.adcountr ,   
         adresses_a.adcode,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,  
         adresses_a.adtva,   
         adresses_b.adname name,   
         adresses_b.adadr1 adr1,   
         adresses_b.adzip zip,   
         adresses_b.adloc loc,   
         adresses_b.adtel tel,   
         adresses_b.adfax fax,   
         adresses_b.adbank bank,   
         adresses_b.adtva tva,
         ( Select comments.cocmnt From comments Where comments.cotype = 'CMGR' And comments.cotab = '1' And comments.coprlbl = 'N' And comments.coprpur = 'N' And comments.coprmfg = 'N' And comments.coprsa1 = 'N' And comments.coprsa2 = 'Y' And comments.coprinv = 'N' ) ,  
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########') as mcdo 
    FROM shiphead, 
         adresses adresses_a,   
         shipto,   
         adresses adresses_b
   WHERE ( shiphead.shcust = adresses_a.adcode ) and  
         ( shipto.stcode = shiphead.shcust ) and  
         ( shipto.stseq = shiphead.shshipto ) and 
         ( shiphead.shcode = :Selected_shipmnt ) AND  
         ( adresses_b.adcode = mcdo )  
            


```

## Colonnes
| Colonne |
|---------|
| shiphead_shcode |
| shiphead_shcust |
| shiphead_shshipto |
| shiphead_shdate |
| adresses_name_cust |
| adresses_adr1_cust |
| adresses_adr2_cust |
| adresses_zip_cust |
| adresses_loc_cust |
| adresses_adcountr |
| adresses_adcode |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| adresses_adtva |
| adresses_name |
| adresses_adr1 |
| adresses_zip |
| adresses_loc |
| adresses_tel |
| adresses_fax |
| adresses_bank |
| adresses_tva |
| ccocmnt |
| cmcdo |

