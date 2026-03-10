# d_shipto_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stcode,   
         shipto.stseq,   
         shipto.stdesc,   
         shipto.stactiv,   
         shipto.stmain,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         shipto.stshipdays,   
         shipto.stcmnt,   
         shipto.sttel,   
         shipto.stfax,   
         shipto.stmail,   
         shipto.stcontact,   
         shipto.stcustomdoc,   
         shipto.steancode,   
         shipto.stdefturn,   
         shipto.sttype,   
         shipto.stshipadcode,   
         shipto.stshipseq,   
         shipto.stshipcmnt,  
			shipto.stcountrid, /*HA2542*/
			shipto.ststateid, /*HA2588*/
         isnull(shipto.stuseadrescomp, 'N') as stuseadrescomp,   
         isnull(shipto.stadrescomp1, '') as stadrescomp1,   
         isnull(shipto.stadrescomp2, '') as stadrescomp2,   
         isnull(shipto.stadrescomp3, '') as stadrescomp3,   
         isnull(shipto.stadrescomp4, '') as stadrescomp4,   
         isnull(shipto.stadrescomp5, '') as stadrescomp5,   
         isnull(shipto.stadrescomp6, '') as stadrescomp6,
		shipto.stref ,
		shipto.stturnbyday,
		shipto.stapbcode /*KAHO0004*/
	
    FROM shipto  
   WHERE ( shipto.STCODE = IsNull(:Selected_adress, shipto.STCODE) ) AND  
         ( shipto.STSEQ = IsNull(:Selected_seq, shipto.STSEQ) )    

```

## Colonnes
| Colonne |
|---------|
| stcode |
| stseq |
| stdesc |
| stactiv |
| stmain |
| stadr1 |
| stadr2 |
| stzip |
| stloc |
| stcountr |
| stshipdays |
| stcmnt |
| sttel |
| stfax |
| stmail |
| stcontact |
| stcustomdoc |
| steancode |
| stdefturn |
| sttype |
| stshipadcode |
| stshipseq |
| stshipcmnt |
| stcountrid |
| ststateid |
| stuseadrescomp |
| stadrescomp1 |
| stadrescomp2 |
| stadrescomp3 |
| stadrescomp4 |
| stadrescomp5 |
| stadrescomp6 |
| stref |
| stturnbyday |
| stapbcode |

