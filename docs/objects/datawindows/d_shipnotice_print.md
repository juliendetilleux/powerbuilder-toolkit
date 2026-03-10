# d_shipnotice_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adreg,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail,   
         shiphead.shcode,   
         shiphead.shcust,   
         shiphead.shshipto,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         shipto.sttel ,  
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########') as mcdo   ,
		(select first salhead.shcmnt from salhead where salhead.shcode in (select shipline.slsalorder from shipline where shipline.slcode = shiphead.shcode ) ) as sale_cmnt
    FROM shiphead,   
         adresses,   
         shipto  
   WHERE ( shipto.stcode = shiphead.shcust ) and  
         ( shipto.stseq = shiphead.shshipto ) and  
         ( adresses.adcode = mcdo) AND  
         ( shiphead.shcode = :Selected_shipmnt )    

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtva |
| adresses_adreg |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |
| shiphead_shcode |
| shiphead_shcust |
| shiphead_shshipto |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| shipto_sttel |
| cmcdo |
| sale_cmnt |

