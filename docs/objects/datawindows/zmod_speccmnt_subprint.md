# zmod_speccmnt_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT ( SELECT comments.cocmnt 
           FROM comments 
          WHERE comments.cotype = 'CMSP' 
            AND comments.cotab = :Selected_spec 
       ) as MonoLang ,   
       ( SELECT comments_lang.cocmnt 
           FROM comments_lang 
          WHERE comments_lang.cotype = 'CMSP' 
            AND comments_lang.cotab = :Selected_spec 
            AND comments_lang.colang = :as_lang 
       ) as MultiLang
  FROM DUMMY 



```

## Colonnes
| Colonne |
|---------|
| monolang |
| multilang |

