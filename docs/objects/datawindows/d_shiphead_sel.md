# d_shiphead_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcode,   
         shiphead.shcust,   
         adresses.adname,   
         adresses.adneval,   
         shipto.stdesc,   
         shiphead.shprint,   
         shiphead.shdate,   
         adresses.adshipcopy,   
         shiphead.shshipto, 
		shiphead.shclot,  
         adresses.adlang,
			isnull(shipto.sttype,'') as sttype,
			isnull(shipto.stshipadcode,'') as stshipadcode,
			isnull((select adresses.adname 
						from adresses
						where adresses.adcode = shipto.stshipadcode),'') as shipadname,
			isnull((select st.stdesc
						from shipto as st
						where st.stcode = shipto.stshipadcode and
								st.stseq = shipto.stshipseq),'') as shipdesc,
			isnull((SELECT progparam.ppvalue  
						 FROM progparam  
						WHERE progparam.ppcode = 'SHIPDELIV' ),'') as SHIPDELIV ,  
			
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2340*/
				isnull(shiphead.shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########')
			ENDIF as mcdo,

		isnull(shiphead.shexpedi, 'N') as edi,
		adresses.addesadvauto,
		isnull(adautone, '0') as adautone,
		shcash

    FROM adresses,   
         shiphead,   
         shipto  
   WHERE ( shiphead.shcust = adresses.adcode ) and  
         ( shiphead.shshipto = shipto.stseq ) and  
         ( shiphead.shcust = shipto.stcode ) and  
         ( ( shiphead.shdate between :adt_DateStart AND :adt_DateStop ) )   
ORDER BY shiphead.shcode DESC   

```

## Colonnes
| Colonne |
|---------|
| shiphead_shcode |
| shiphead_shcust |
| adresses_adname |
| adresses_adneval |
| shipto_stdesc |
| shiphead_shprint |
| shiphead_shdate |
| adresses_adshipcopy |
| shiphead_shshipto |
| shiphead_shclot |
| adresses_adlang |
| csttype |
| cstshipadcode |
| cshipadname |
| cshipdesc |
| cshipdeliv |
| cmcdo |
| edi |
| adresses_addesadvauto |
| adautone |
| shcash |

