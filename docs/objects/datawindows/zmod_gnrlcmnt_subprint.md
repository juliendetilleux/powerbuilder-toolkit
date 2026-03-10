# zmod_gnrlcmnt_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT ( SELECT comments.cocmnt 
           FROM comments 
          WHERE comments.cotype = 'CMGR'
            AND comments.cotab = '1'  
            AND comments.coprlbl like :Selected_lbl
            AND comments.coprpur like :Selected_pur
            AND comments.coprmfg like :Selected_mfg
            AND comments.coprsa1 like :Selected_sa1
            AND comments.coprsa2 like :Selected_sa2
            AND comments.coprinv like :Selected_inv 
       ) as MonoLang ,   
       ( SELECT comments_lang.cocmnt 
           FROM comments_lang 
          WHERE comments_lang.cotype = 'CMGR'  
            AND comments_lang.cotab = '1'  
            AND comments_lang.colang = :as_lang 
            AND comments_lang.coprlbl like :Selected_lbl
            AND comments_lang.coprpur like :Selected_pur
            AND comments_lang.coprmfg like :Selected_mfg
            AND comments_lang.coprsa1 like :Selected_sa1
            AND comments_lang.coprsa2 like :Selected_sa2
            AND comments_lang.coprinv like :Selected_inv
       ) as MultiLang
  FROM DUMMY    
  
UNION ALL   
   
SELECT ( SELECT comments.cocmnt 
           FROM comments 
          WHERE comments.cotype = 'CMGR'
            AND comments.cotab = '2'  
            AND comments.coprlbl like :Selected_lbl
            AND comments.coprpur like :Selected_pur
            AND comments.coprmfg like :Selected_mfg
            AND comments.coprsa1 like :Selected_sa1
            AND comments.coprsa2 like :Selected_sa2
            AND comments.coprinv like :Selected_inv 
       ) as MonoLang ,   
       ( SELECT comments_lang.cocmnt 
           FROM comments_lang 
          WHERE comments_lang.cotype = 'CMGR'  
            AND comments_lang.cotab = '2'  
            AND comments_lang.colang = :as_lang 
            AND comments_lang.coprlbl like :Selected_lbl
            AND comments_lang.coprpur like :Selected_pur
            AND comments_lang.coprmfg like :Selected_mfg
      
```

## Colonnes
| Colonne |
|---------|
| monolang |
| multilang |

