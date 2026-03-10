# ds_rcpo_kit_comp_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT bomline.blramcode,   
         items.itname,   
			bomline.blline,
         bomline.blramqty,   
         bomline.blramtype,   
         bomhead.bhcoeff, 
			items.itum,  
         items.itlot,   
         items.itval,
			items.itdefaultlot,
			items.itstdpur,
			items.itpn,
			Cast( Null As Char( 10)) As Lot_Code,
			Cast( Null As Char( 20)) As LotOrg_Code,
			Cast( Null As DateTime) As Exp_Date,
			items.itqc  
    FROM bomhead,   
         bomline,   
         items  
   WHERE bomline.blcode = bomhead.bhcode and  
         bomline.bltype = bomhead.bhtype and  
         items.itcode = bomline.blramcode and  
         bomhead.bhcode = :ras_RcpoItem AND  
         bomhead.bhtype = '0'   
ORDER BY bomline.blline ASC   

```

## Colonnes
| Colonne |
|---------|
| bomline_blramcode |
| items_itname |
| bomline_blline |
| bomline_blramqty |
| bomline_blramtype |
| bomhead_bhcoeff |
| items_itum |
| items_itlot |
| items_itval |
| items_itdefaultlot |
| items_itstdpur |
| items_itpn |
| lot_code |
| lotorg_code |
| exp_date |
| items_itqc |

