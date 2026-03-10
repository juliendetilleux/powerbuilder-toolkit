# zmod_custordalloc_salord_custcomment_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
 
SELECT 
		isnull((SELECT comments.cocmnt  
				 FROM comments  
				WHERE comments.cotype = 'CMAD' AND  
						comments.cokey = :sel_ad AND  
						comments.coline = 3 AND  
						comments.cotab = 'C' ),'') as cocmnt  ,
		 isnull((SELECT salhead.shcmnt  
					 FROM salhead  
					WHERE salhead.shcode = :ran_Order),'') as shcmnt  

FROM dummy 
```

## Colonnes
| Colonne |
|---------|
| cocmnt |
| shcmnt |

