# d_custordalloc_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode slcode,   
         salhead.shcust,   
         salline.slcustref,   
         salline.slitem,   
         items.itname,   
         salline.sldatcrea,   
         adresses.adname,   
         salline.slpallocseq,   
         salline.slqtyreq,   
         salline.slqtyalloc,   
         salline.slqtyreal,   
         salline.sldatship,   
			salline.slshipto,
         shipto.stdesc,   
         salline.slline,   
         salhead.shautho ,
         isnull(salline.slcontst,'') as slcontst ,
         salline.slqtyres, 
         salhead.shdlvt,
         salhead.shdlvtplace, 
         ( select max(tlcode) from truckline
					 where tlsalhead = salline.slcode and tlsalline = salline.slline and
							 tlshiphead = 0 ) truck ,
         shipto.stloc,
			salline.slprintghost,
			isnull(shipto.sttype,'') as sttype, 
			isnull((SELECT progparam.ppvalue  
						 FROM progparam  
						WHERE progparam.ppcode = 'SHIPDELIV' ),'') as SHIPDELIV  ,  

			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
				isnull(salhead.shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########')
			ENDIF as mcdo,  

		items.itisumtarif,
		salline.slqtyord,
		isnull(salhead.shcons,'N') as shcons,
		isnull(salline.slsample,'N') as slsample
    FROM salline join salhead on salline.slcode = salhead.shcode
			join adresses on adresses.adcode = salhead.shcust   
         		join items on items.itcode = salline.slitem   
         		join shipto on  salhead.shcust = shipto.stcode and salline.slshipto = shipto.stseq 
   WHERE /*( items.itcode = salline.slitem ) and  */
         /*( salline.slcode = salhead.shcode ) and  */
        /* ( salhead.shcust = shipto.stcode ) and  
         ( salline.slshipto = shipto.stseq ) and  */
         /*( adresses.adcode = salhead.shcust ) and  */
         ( salline.slstatus < :Sele
```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_shcust |
| salline_slcustref |
| salline_slitem |
| items_itname |
| salline_sldatcrea |
| adresses_adname |
| salline_slpallocseq |
| salline_slqtyreq |
| salline_slqtyalloc |
| salline_slqtyreal |
| salline_sldatship |
| salline_slshipto |
| shipto_stdesc |
| salline_slline |
| salhead_shautho |
| salline_slcontst |
| salline_slqtyres |
| salhead_shdlvt |
| salhead_shdlvtplace |
| ctruck |
| shipto_stloc |
| salline_slprintghost |
| csttype |
| cshipdeliv |
| cmcdo |
| items_itisumtarif |
| salline_slqtyord |
| shcons |
| slsample |

