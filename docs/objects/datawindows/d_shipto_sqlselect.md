# d_shipto_sqlselect

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stcode,   
         shipto.stseq,   
         shipto.stdesc,   

         if sttype = 'Y' and SHIPDELIV = '1' then 
				(select st2.stloc from shipto as st2 where st2.stcode = shipto.stshipadcode and st2.stseq = shipto.stshipseq)
			else
 				shipto.stloc 
			endif as stloc,   
         if sttype = 'Y' and SHIPDELIV = '1' then 
				(select st2.stzip from shipto as st2 where st2.stcode = shipto.stshipadcode and st2.stseq = shipto.stshipseq)
			else
 				shipto.stzip 
			endif as stzip,   

			isnull(shipto.sttype,'') as sttype,
			isnull(stshipadcode,'') as stshipadcode,
			isnull(shipto.stshipseq,'') as stshipseq,
			isnull((SELECT progparam.ppvalue  
						 FROM progparam  
						WHERE progparam.ppcode = 'SHIPDELIV' ),'') as SHIPDELIV  
    FROM shipto   

```

## Colonnes
| Colonne |
|---------|
| stcode |
| stseq |
| stdesc |
| stloc |
| stzip |
| sttype |
| stshipadcode |
| stshipseq |
| shipdeliv |

