# d_techdata_link_update_ing

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT techlink.ticode,   
         techlink.tivalue,   
         techdata.tdum,   
         techdata.tdtype,   
         techlink.tiitem,
		techlink.tietitxt
    FROM techlink,   
         techdata  
   WHERE ( techdata.tdcode = techlink.ticode ) and  
         ( techlink.tiitem = :Selected_item )   
ORDER BY techlink.tivalue DESC   
 
```

## Colonnes
| Colonne |
|---------|
| techlink_ticode |
| techlink_tivalue |
| techdata_tdum |
| techdata_tdtype |
| techlink_tiitem |
| techlink_tietitxt |

