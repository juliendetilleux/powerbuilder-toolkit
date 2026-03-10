# zmod_salord_alloc_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT Sum( matallocs.maallocqty) As AllocQty,   
         matallocs.malot				As Lot,   
         lots.loexpdat					As ExpDate,
			items.itdefaultlot 			As DefaultLot
    FROM matallocs,   
         lots,   
         items  
   WHERE ( items.itcode = lots.loitem ) and  
         ( matallocs.malot = lots.locode ) and  
         ( matallocs.maitem = items.itcode ) and  
         ( ( matallocs.matyp = 'X' ) AND  
         ( matallocs.macode = :ran_SalHead ) AND  
         ( matallocs.maitemseq = :ran_SalLine ) AND  
         ( matallocs.maitem = :ras_Item ) )   
Group By matallocs.malot,   
         lots.loexpdat,
			items.itdefaultlot   
Order By matallocs.malot,   
         lots.loexpdat,
			items.itdefaultlot    

```

## Colonnes
| Colonne |
|---------|
| allocqty |
| matallocs_lot |
| lots_expdate |
| items_defaultlot |

