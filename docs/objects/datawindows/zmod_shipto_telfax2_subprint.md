# zmod_shipto_telfax2_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stdesc stdesc,   
		isnull((SELECT progparam.ppvalue  
						 FROM progparam  
						WHERE progparam.ppcode = 'SHIPDELIV' ),'') as SHIPDELIV,
		isnull(shipto.sttype,'') as sttype,
		isnull(shipto.stshipadcode,'') as stshipadcode,
		isnull(shipto.stshipseq,'') as stshipseq,
         st.stadr1,   
         st.stadr2,   
         st.stzip,   
         st.stloc,   
         st.stcountr,   
         st.sttel,   
         st.stfax,
			isnull(st.stuseadrescomp, 'N') as stuseadrescomp,
			isnull(st.stadrescomp1, '') as stadrescomp1,
			isnull(st.stadrescomp2, '') as stadrescomp2,
			isnull(st.stadrescomp3, '') as stadrescomp3,
			isnull(st.stadrescomp4, '') as stadrescomp4,
			isnull(st.stadrescomp5, '') as stadrescomp5,
			isnull(st.stadrescomp6, '') as stadrescomp6 
    FROM shipto , shipto as st 
   WHERE ( shipto.stcode = :as_adresse ) AND  
         ( shipto.stseq = :ai_ship ) AND  
         ( :as_adresse = shipto.stcode ) AND
		st.stcode = IF sttype = 'Y' AND SHIPDELIV = '1' THEN
						shipto.stshipadcode
					 ELSE 
						shipto.stcode
					ENDIF AND
		st.stseq = IF sttype = 'Y' AND SHIPDELIV = '1' THEN
						shipto.stshipseq
					 ELSE 
						shipto.stseq
					ENDIF   

```

## Colonnes
| Colonne |
|---------|
| shipto_stdesc |
| shipdeliv |
| sttype |
| stshipadcode |
| stshipseq |
| stadr1 |
| stadr2 |
| stzip |
| stloc |
| stcountr |
| sttel |
| stfax |
| stuseadrescomp |
| stadrescomp1 |
| stadrescomp2 |
| stadrescomp3 |
| stadrescomp4 |
| stadrescomp5 |
| stadrescomp6 |

