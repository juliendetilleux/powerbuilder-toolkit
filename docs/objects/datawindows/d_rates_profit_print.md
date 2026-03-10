# d_rates_profit_print

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
         items.itstdpur,   
         currencies.cuconv,   
         itstat1.imdesc,   
         itstat2.isdesc,   
         items.itstat1,   
         items.itstat2,
		items.itmccode  
    FROM ratehead,   
         rateline,   
         items,   
         currencies,   
         itstat1,   
         itstat2  
   WHERE ( rateline.rlcode = ratehead.rhcode ) and  
         ( rateline.rlitem = items.itcode ) and  
         ( ratehead.rhcurr = currencies.cucode ) and  
         ( items.itstat1 = itstat1.imcode ) and  
         ( itstat2.iscode = items.itstat1 ) and  
         ( itstat2.iscode2 = items.itstat2 ) and  
         ( ratehead.rhactiv = 'Y' ) AND  
         ( rateline.rlval <> 0 ) AND  
         ( items.itactiv = 'Y' ) AND  
			( ( ittyp = 'F' and itsalghost <> 'N' ) or (ittyp <> 'F') ) and
         ( ratehead.rhtyp <> 'M' )   
ORDER BY ratehead.rhcode ASC,   
         items.itstat1 ASC,   
         items.itstat2 ASC,   
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
| items_itstdpur |
| currencies_cuconv |
| itstat1_imdesc |
| itstat2_isdesc |
| items_itstat1 |
| items_itstat2 |
| items_itmccode |

