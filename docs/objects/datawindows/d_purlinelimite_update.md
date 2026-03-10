# d_purlinelimite_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purlinelimite.pllcode,   
         purlinelimite.pllline,   
         purlinelimite.pllitem,   
         purlinelimite.pllqtyord,   
         purlinelimite.pllqtyreq,   
         purlinelimite.plluomord,   
         purlinelimite.plldatreq,   
         purlinelimite.plldatsup,   
       
        
      
         purlinelimite.pllstatus,   
         purlinelimite.plladref,   
         purlinelimite.pllshipto,   
        
         purlinelimite.pllrapnb,   
         purlinelimite.plllastrap,   
         purlinelimite.plluomconv,   
         purlinelimite.pllrcio,   
         purlinelimite.pllsalhead,   
         purlinelimite.pllsalline,
			( Select items.itif2trf
             From items
			   Where items.itcode = purlinelimite.pllitem ) As ItInterco,
			'' AS itemname,
			purlinelimite.pllcmnt,
			
		
	
		purlinelimite.pllcontract,
		CAST( 0 AS numeric (10,3)) as dummy_plqtyold 
    FROM purlinelimite  
   WHERE ( purlinelimite.pllCODE = :Selected_order ) AND  
         ( purlinelimite.pllLINE = :Selected_line )    

```

## Colonnes
| Colonne |
|---------|
| plcode |
| plline |
| plitem |
| plqtyord |
| plqtyreq |
| pluomord |
| pldatreq |
| pldatsup |
| plstatus |
| pladref |
| plshipto |
| plrapnb |
| pllastrap |
| pluomconv |
| plrcio |
| plsalhead |
| plsalline |
| itinterco |
| itemname |
| plcmnt |
| plcontract |
| dummy_plqtyold |

