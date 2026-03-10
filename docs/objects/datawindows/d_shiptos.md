# d_shiptos

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT shipto.stseq as stseq,   
         shipto.stdesc as stdesc,   
         shipto.stactiv as stactiv,   
         shipto.stmain as stmain,   
         if sttype = 'Y' and SHIPDELIV = '1' then 
				(select st2.stloc from shipto as st2 where st2.stcode = shipto.stshipadcode and st2.stseq = shipto.stshipseq)
			else
 				shipto.stloc 
			endif as stloc,   
         if sttype = 'Y' and SHIPDELIV = '1' then 
				(select st2.stcountr from shipto as st2 where st2.stcode = shipto.stshipadcode and st2.stseq = shipto.stshipseq)
			else
 				shipto.stcountr 
			endif as stcountr,   
         if sttype = 'Y' and SHIPDELIV = '1' then 
				(select st2.steancode from shipto as st2 where st2.stcode = shipto.stshipadcode and st2.stseq = shipto.stshipseq)
			else
 				shipto.steancode 
			endif as steancode,

			isnull(shipto.sttype,'') as sttype,
			isnull(stshipadcode,'') as stshipadcode,
			isnull(shipto.stshipseq,'') as stshipseq,
			isnull((SELECT progparam.ppvalue  
						 FROM progparam  
						WHERE progparam.ppcode = 'SHIPDELIV' ),'') as SHIPDELIV   
    FROM shipto  
   WHERE shipto.stcode = :Selected_ad   
ORDER BY shipto.stseq ASC   

```

## Colonnes
| Colonne |
|---------|
| stseq |
| stdesc |
| stactiv |
| stmain |
| stloc |
| stcountr |
| steancode |
| sttype |
| stshipadcode |
| stshipseq |
| shipdeliv |

