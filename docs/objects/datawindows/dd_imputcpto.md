# dd_imputcpto

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT 20 As LineType,
			imputcpt.icref,   
         imputcpt.icdesc,   
         imputcpt.iccode  
    FROM imputcpt  
   WHERE ( imputcpt.icactiv = 'Y' ) AND  
         ( imputcpt.ictyp = 'O' )   AND  
         ( imputcpt.icref is not Null ) AND  
         ( Trim( imputcpt.icref ) <> '' )  

Union All 

   Select 10,
			'',
			'',
			''
	 From Dummy

ORDER BY 1, 2   

```

## Colonnes
| Colonne |
|---------|
| linetype |
| icref |
| icdesc |
| iccode |

