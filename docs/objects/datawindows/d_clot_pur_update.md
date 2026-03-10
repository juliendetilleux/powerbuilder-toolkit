# d_clot_pur_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _monthclot
- **Table principale**: 0

## SQL
```sql
  SELECT clotfinit.ciitem,   
         items.itname,   
         if clotfinit.cityp = 'P' then 
				if isnull(itisumtarif, 'N') = 'N' then items.itbascost else items.itumtbascost endif 
		else if isnull(itisumtarif, 'N') = 'N' then items.itpurxtrcost else items.itumtxtrcost endif   
		endif as stdpur,   
         clotfinit.cistdprop,   
         clotfinit.cistdconf,   
         clotfinit.ciperiod,   
         clotfinit.cityp,   
         clotfinit.cistdm,   
         clotfinit.cistdl,   
         clotfinit.cicmnt  
    FROM clotfinit,   
         items  
   WHERE ( clotfinit.ciitem = items.itcode ) and  
         ( ( clotfinit.ciperiod = :a_period ) AND  
         ( clotfinit.cityp in ('P', 'L') ) )   
ORDER BY clotfinit.ciitem ASC,   
         clotfinit.cityp DESC   

```

## Colonnes
| Colonne |
|---------|
| ciitem |
| items_itname |
| cstdpur |
| clotfinit_cistdprop |
| clotfinit_cistdconf |
| clotfinit_ciperiod |
| clotfinit_cityp |
| clotfinit_cistdm |
| clotfinit_cistdl |
| clotfinit_cicmnt |

