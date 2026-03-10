# d_coitem_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomcoitem.bccode,   
         bomcoitem.bctype,   
         bomcoitem.bccoitem,   
         bomcoitem.bcqtyf,   
         bomcoitem.bccostf,   
         bomcoitem.bccomment,   
         bomcoitem.bcnqualf ,
			'                              ' as item_name,
	   	bomcoitem.bcbackf,
			bomcoitem.bcbaseitqtypc,  /*HA2350*/
			bomcoitem.bcbaseitcostpc /*HA2350*/
    FROM bomcoitem  
   WHERE ( bomcoitem.bccode = :Selected_item ) AND  
         ( bomcoitem.bctype = :Selected_method ) AND  
         ( bomcoitem.bccoitem = :Selected_coitem )    

```

## Colonnes
| Colonne |
|---------|
| bccode |
| bctype |
| bccoitem |
| bcqtyf |
| bccostf |
| bccomment |
| bcnqualf |
| item_name |
| bcbackf |
| bcbaseitqtypc |
| bcbaseitcostpc |

