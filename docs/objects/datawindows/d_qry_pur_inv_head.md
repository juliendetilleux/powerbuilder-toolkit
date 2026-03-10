# d_qry_pur_inv_head

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT purinvhead.picode,   
         purinvhead.pisup,   
         adresses.adname,   
         purinvhead.picurr,   
         purinvhead.pidate,           
         purinvhead.pipurval,   
         purinvhead.pitypinv,   
         purinvhead.picptper,   
			purinvhead.pistatus,   
         purinvhead.pipaym   
    FROM adresses,   
         purinvhead  
   WHERE ( adresses.adcode = purinvhead.pisup ) and  
         ( ( purinvhead.pidate >= :adt_DateStart ) AND  
         ( purinvhead.pidate <= :adt_DateStop ) )   
ORDER BY purinvhead.picode DESC  
```

## Colonnes
| Colonne |
|---------|
| purinvhead_picode |
| purinvhead_pisup |
| adresses_adname |
| purinvhead_picurr |
| purinvhead_pidate |
| purinvhead_pipurval |
| purinvhead_pitypinv |
| purinvhead_picptper |
| purinvhead_pistatus |
| purinvhead_pipaym |

