# ds_wms_sto

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT wms_sto.ws_id,   
         wms_sto.ws_fk_iw_id,   
         wms_sto.ws_lot_code,   
         wms_sto.ws_quantity,
		lots.loitem,
		items.itstdpur,
		items.itum  
    FROM wms_sto 
		JOIN lots ON lots.locode = wms_sto.ws_lot_code
		JOIN items ON items.itcode = lots.loitem
  WHERE wms_sto.ws_fk_file_iw_id = :al_iw_id_sto 
 UNION  ALL
 SELECT 0,   
         0,   
         lots.locode,   
         0,
		lots.loitem,
		items.itstdpur,
		items.itum  
    FROM lots  
		JOIN items ON items.itcode = lots.loitem
  WHERE lots.lostock <> 0 and
	not exists( select * 
				    from wms_sto 
				  where wms_sto.ws_fk_file_iw_id = :al_iw_id_sto and 
						lots.locode = wms_sto.ws_lot_code )

```

## Colonnes
| Colonne |
|---------|
| ws_id |
| ws_fk_iw_id |
| ws_lot_code |
| ws_quantity |
| loitem |
| itstdpur |
| itum |

