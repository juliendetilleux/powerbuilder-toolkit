# d_rates_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         ratehead.rhdesc,   
         rateline.rlitem,   
         items.itname,   
         rateline.rlval,   
         items.itum,   
         ratehead.rhcurr,   
         items.itstat1,   
         items.itstat2  ,
		ratehead.rhtyp,
		items.itmccode ,
			items.itisumtarif, //HA2407
			items.itumtarif 	 //HA2407
    FROM ratehead,   
         rateline,   
         items  
   WHERE ( rateline.rlcode = ratehead.rhcode ) and  
         ( rateline.rlitem = items.itcode ) and  
         ( ratehead.rhactiv = 'Y' ) AND  
         ( rateline.rlval <> 0 ) AND  
         ( items.itactiv = 'Y' ) AND
			( ( ittyp = 'F' and itsalghost <> 'N' ) or (ittyp <> 'F') ) and
		ratehead.rhtyp <> 'M'
ORDER BY ratehead.rhcode ASC,   
         rateline.rlitem ASC   
 

```

## Colonnes
| Colonne |
|---------|
| ratehead_rhcode |
| ratehead_rhdesc |
| rateline_rlitem |
| items_itname |
| rateline_rlval |
| items_itum |
| ratehead_rhcurr |
| items_itstat1 |
| items_itstat2 |
| ratehead_rhtyp |
| items_itmccode |
| items_itisumtarif |
| items_itumtarif |

