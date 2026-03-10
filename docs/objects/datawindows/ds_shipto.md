# ds_shipto

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
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
         shipto.stshipcmnt,   
         shipto.sttype,   
         IF isnull(shipto.sttype,'N') <> 'Y' THEN
			null
		ELSE
			shipto.stshipadcode 
		ENDIF as stshipadcode,            
         IF isnull(shipto.sttype,'N') <> 'Y' THEN
			null
		ELSE
			shipto.stshipseq 
		ENDIF as stshipseq 
    FROM shipto,   
         adresses  
   WHERE ( adresses.adcode = shipto.stcode ) 
	ORDER BY 
         shipto.sttype,   
		shipto.stshipadcode,   
         shipto.stshipseq

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
| stshipcmnt |
| sttype |
| stshipadcode |
| stshipseq |

