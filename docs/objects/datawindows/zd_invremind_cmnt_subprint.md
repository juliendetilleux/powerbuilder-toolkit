# zd_invremind_cmnt_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
Select string ( ( SELECT comments.cocmnt  
					     FROM comments  
					    WHERE ( comments.cotype = 'CMSP' ) AND  
							    ( comments.cokey = 'XX' ) AND  
							    ( comments.cotab = '5' ) ) )  as remind_comment, 
       string ( ( SELECT comments_lang.cocmnt  
					     FROM comments_lang  
					    WHERE ( comments_lang.cotype = 'CMSP' ) AND  
						 	    ( comments_lang.cokey = 'XX' ) AND  
							    ( comments_lang.cotab = '5' ) AND  
							    ( comments_lang.colang = :lang_sel ) ) )  as remindlang_comment, 
       adresses.adlang 
  from adresses 
 where adresses.adcode='##########' 



```

## Colonnes
| Colonne |
|---------|
| remind_comment |
| remindlang_comment |
| adlang |

