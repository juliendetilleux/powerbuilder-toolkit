# d_cmnt_gnrl_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  comments.cocmnt     
        FROM comments      
        WHERE ( comments.cotype= 'CMGR' ) and 
         ( comments.coprlbl like :Selected_lbl ) and 
         ( comments.coprpur like :Selected_pur ) and 
         ( comments.coprmfg like :Selected_mfg ) and 
         ( comments.coprsa1 like :Selected_sa1 ) and 
         ( comments.coprsa2 like :Selected_sa2 ) and 
         ( comments.coprinv like :Selected_inv )   
```

## Colonnes
| Colonne |
|---------|
| cocmnt |

