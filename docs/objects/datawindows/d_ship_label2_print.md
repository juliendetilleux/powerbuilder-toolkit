# d_ship_label2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         shipto.stdesc,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtel,   
         adresses.adfax,
		isnull((SELECT progparam.ppvalue  
						 FROM progparam  
						WHERE progparam.ppcode = 'SHIPDELIV' ),'') as SHIPDELIV   
    FROM shipto,   
         adresses,
		shipto as ship  
   WHERE ( shipto.stcode = IF isnull(ship.sttype,'') = 'Y' and SHIPDELIV = '1' THEN ship.stshipadcode ELSE ship.stcode ENDIF ) AND  
         ( shipto.stseq = IF isnull(ship.sttype,'') = 'Y' and SHIPDELIV = '1' THEN ship.stshipseq ELSE ship.stseq ENDIF ) AND  
         ( adresses.adcode = IF isnull(ship.sttype,'') = 'Y' and SHIPDELIV = '1' THEN 
										ship.stcode
									ELSE
										isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = ship.stcode),'##########')
									ENDIF )  AND
	 	ship.stcode = :Sel_ad AND  
       	ship.stseq = :Sel_st  




```

## Colonnes
| Colonne |
|---------|
| stadr1 |
| stadr2 |
| stzip |
| stloc |
| stcountr |
| stdesc |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adtel |
| adresses_adfax |
| shipdeliv |

