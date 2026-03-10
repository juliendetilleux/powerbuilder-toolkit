# d_shipnotice_mod3_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adtva,   
         shiphead.shcode,   
         shiphead.shcust,   
         shiphead.shshipto,   
         shipto.stcontact,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         shipto.sttel,   
         shipto.stfax,   
         shiphead.shdate,
			shiphead.shcomment, 
			( Select parameters.pmcval From parameters Where parameters.pmcode = 'LASTHCON' ) As Consignement, 
         adresses.adautoitpack  ,
			adresses.adneval,
			isnull(shipto.sttype,'') as sttype,
			isnull(stshipadcode,'') as stshipadcode,
			isnull(shipto.stshipseq,'') as stshipseq,
			isnull((SELECT progparam.ppvalue  
						 FROM progparam  
						WHERE progparam.ppcode = 'SHIPDELIV' ),'') as SHIPDELIV  ,  
		IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2568*/
			isnull(shmccode, '##########')
		ELSE
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########')
		ENDIF as mcdo,
			(select multico.mcintext from multico where mccode = mcdo) as intext   ,
		(select first salhead.shcmnt from salhead where salhead.shcode in (select shipline.slsalorder from shipline where shipline.slcode = shiphead.shcode ) ) as sale_cmnt
    FROM shiphead,   
         adresses,   
         shipto  
   WHERE ( adresses.adcode = shiphead.shcust ) and  
         ( shipto.stcode = adresses.adcode ) and  
         ( shipto.stseq = shiphead.shshipto ) and  
         ( shiphead.shcode = :Selected_shipmnt )    

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adtva |
| shiphead_shcode |
| shiphead_shcust |
| shiphead_shshipto |
| shipto_stcontact |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| shipto_sttel |
| shipto_stfax |
| shiphead_shdate |
| shiphead_shcomment |
| consignement |
| adresses_adautoitpack |
| adresses_adneval |
| csttype |
| cstshipadcode |
| cstshipseq |
| cshipdeliv |
| cmcdo |
| cintext |
| sale_cmnt |

