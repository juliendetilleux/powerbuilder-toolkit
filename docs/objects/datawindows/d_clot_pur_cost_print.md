# d_clot_pur_cost_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT clotfinit.ciitem,   
         items.itname,   
         items.itstdpur,   
         clotfinit.cistdprop,   
         clotfinit.cistdconf,   
         clotfinit.ciperiod,   
         clotfinit.cityp,   
         clotfinit.cistdm,   
         clotfinit.cistdl,   
         clotfinit.cicmnt,   
         clotfinitad.cdperiod,   
         clotfinitad.cdtyp,   
         clotfinitad.cditem,   
         clotfinitad.cdadid,   
         clotfinitad.cdqty,   
         clotfinitad.cdval, 
         isnull( ( select sum( clotfinitad.cdval ) 
					from clotfinitad
					 where clotfinitad.cdqty = 0
					 and clotfinitad.cditem = clotfinit.ciitem
					 and clotfinitad.cdperiod = :a_period ), 0 ) extracost  ,   
         ( select sum( clotfinitad.cdqty ) 
					from clotfinitad
					 where clotfinitad.cdqty <> 0
					 and clotfinitad.cditem = clotfinit.ciitem
					 and clotfinitad.cdperiod = :a_period ) totqty
    FROM clotfinit,   
         items,   
         clotfinitad  
   WHERE ( clotfinit.ciitem = items.itcode ) and  
         ( clotfinitad.cditem = items.itcode ) and  
         ( clotfinit.ciperiod = :a_period ) AND  
         ( clotfinitad.cdperiod = :a_period ) AND  
         ( clotfinit.cityp = 'P' ) AND  
         ( clotfinitad.cdtyp = 'P' ) AND  
         ( clotfinitad.cdqty <> 0 ) 
ORDER BY clotfinit.ciitem ASC   

```

## Colonnes
| Colonne |
|---------|
| ciitem |
| items_itname |
| items_itstdpur |
| clotfinit_cistdprop |
| clotfinit_cistdconf |
| clotfinit_ciperiod |
| clotfinit_cityp |
| clotfinit_cistdm |
| clotfinit_cistdl |
| clotfinit_cicmnt |
| clotfinitad_cdperiod |
| clotfinitad_cdtyp |
| clotfinitad_cditem |
| clotfinitad_cdadid |
| clotfinitad_cdqty |
| clotfinitad_cdval |
| cextracost |
| ctotqty |

