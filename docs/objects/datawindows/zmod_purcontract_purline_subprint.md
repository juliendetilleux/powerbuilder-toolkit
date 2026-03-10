# zmod_purcontract_purline_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,
         items.itdesc2, 
         purline.plline,   
         purline.plitem,   
         purline.plqtyreq,   
         purline.pldatreq,   
         purline.plqtyrec,   
         purline.plqtyinv,   
         purline.pluomord,  
         purline.pluomconv,  
         purline.plinvclot  
    FROM purline,   
         items
   WHERE ( purline.plitem = items.itcode ) and  
         ( purline.plitem = :Sel_item ) and  
         ( purline.plcode = :Sel_order )  and
		( purline.plstatus < '9' )  
order by purline.plline  


```

## Colonnes
| Colonne |
|---------|
| items_itname |
| items_itdesc2 |
| purline_plline |
| purline_plitem |
| purline_plqtyreq |
| purline_pldatreq |
| purline_plqtyrec |
| purline_plqtyinv |
| purline_pluomord |
| purline_pluomconv |
| purline_plinvclot |

