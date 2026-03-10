# d_shiphead_sel2

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
		shiphead.shclot
    FROM adresses,   
         shiphead,   
         shipto  
   WHERE ( shiphead.shcust = adresses.adcode ) and  
         ( shiphead.shshipto = shipto.stseq ) and  
         ( shiphead.shcust = shipto.stcode ) 
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
| adresses_adlang |
| csttype |
| cstshipadcode |
| cshipadname |
| cshipdesc |
| cshipdeliv |
| cmcdo |
| shiphead_shclot |

