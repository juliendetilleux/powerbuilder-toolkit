# d_custord_custsel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT distinct adresses.adname,   
         adresses.adcode,   
         shipto.stdesc,   
         shipto.stseq,
         adresses.adneval,
         adresses.adshipcopy,
			adresses.adinvm,
			isnull(shipto.sttype,'') as sttype,
			isnull(stshipadcode,'') as stshipadcode,
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
				isnull(shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########')
			ENDIF as mcdo  

    FROM adresses,   
         matallocs,   
         salhead,   
         salline,   
         shipto  
   WHERE ( salhead.shcust = adresses.adcode ) and  
         ( salline.slcode = salhead.shcode ) and  
         ( salhead.shcode = matallocs.macode ) and  
         ( salline.slline = matallocs.maitemseq ) and  
         ( shipto.stcode = salhead.shcust ) and  
         ( shipto.stseq = salline.slshipto ) and  
         ( matallocs.matyp = 'X' ) AND
			( salline.slprintghost <> 'N' or salline.slprintghost is null )               
UNION all 
  SELECT distinct adresses.adname,   
         adresses.adcode,   
         shipto.stdesc,   
         shipto.stseq,
         adresses.adneval,
         adresses.adshipcopy,
			adresses.adinvm,
			isnull(shipto.sttype,'') as sttype,
			isnull(stshipadcode,'') as stshipadcode,
			isnull((select adresses.adname 
						from adresses
						where adresses.adcode = shipto.stshipadcode),'') as shipadname,
			isnull((select st.stdesc
						from s
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adcode |
| shipto_stdesc |
| shipto_stseq |
| adresses_adneval |
| adresses_adshipcopy |
| adresses_adinvm |
| csttype |
| cstshipadcode |
| cshipadname |
| cshipdesc |
| cshipdeliv |
| cmcdo |

