# d_coitem_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT bomcoitem.bccoitem,   
         items.itname,   
         bomcoitem.bcqtyf,   
         bomcoitem.bccostf,   
         items.itval,   
         items.itlot,   
         bomcoitem.bcnqualf,   
         bomcoitem.bcbaseitqtypc  /*HA2350*/,   
         bomcoitem.bcbaseitcostpc /*HA2350*/,
			( Select bomhead.bhfabdvrg
				 From bomhead
				Where bomhead.bhcode = bomcoitem.bccode And
						bomhead.bhtype = bomcoitem.bctype 		) As IsFabDvrg /*HA2350*/
    FROM bomcoitem,   
         items  
   WHERE ( items.itcode = bomcoitem.bccoitem ) and  
         ( ( bomcoitem.bccode = :Selected_item ) AND  
         ( bomcoitem.bctype = :Selected_method ) )    

```

## Colonnes
| Colonne |
|---------|
| bomcoitem_bccoitem |
| items_itname |
| bomcoitem_bcqtyf |
| bomcoitem_bccostf |
| items_itval |
| items_itlot |
| bomcoitem_bcnqualf |
| bomcoitem_bcbaseitqtypc |
| bomcoitem_bcbaseitcostpc |
| isfabdvrg |

