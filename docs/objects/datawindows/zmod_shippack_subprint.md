# zmod_shippack_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT 1 As Sort ,
			shippack.spcode,
			packings.pkname,   
         shippack.spqty,
			packings.pkstdcost,
			shippack.spinv,
			( Select First salhead.shcurr 
             From salhead ,
                  shipline,
            Where shipline.slsalorder = salhead.shcode And
                  shipline.slcode = :ran_ShipHead          ) As Curr     ,
         ( Select currencies.cuconv
				 From currencies
				Where currencies.cucode = Curr                 ) As CurrConv 
    FROM shippack,   
         packings  
   WHERE ( packings.pkcode = shippack.sppackid ) and  
         ( ( shippack.spcode = :ran_ShipHead ) ) and
			( shippack.spinv Not In ( 'C', 'S', 'R') )      
    
Union All   
    
  Select 2,
         shiphead.shcode,
			'..................................................' ,
			0,
			0,
			'Y',
			'',
			1
    From shiphead
   Where shiphead.shcode = :ran_ShipHead    
   
Union All   
   
  Select 3,
         shiphead.shcode,
			'..................................................' ,
			0,
			0,
			'Y',
			'',
			1
    From shiphead
   Where shiphead.shcode = :ran_ShipHead
  
Order By 1, 3

```

## Colonnes
| Colonne |
|---------|
| shippack_sort |
| shippack_spcode |
| packings_pkname |
| shippack_spqty |
| packings_pkstdcost |
| shippack_spinv |
| curr |
| currconv |

