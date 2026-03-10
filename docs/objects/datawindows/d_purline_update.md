# d_purline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,   
         purline.plitem,   
         purline.plqtyord,   
         purline.plqtyreq,   
         purline.pluomord,   
         purline.pldatreq,   
         purline.pldatsup,   
         purline.plstdval,   
         purline.plpurval,   
         purline.plqtyrec,   
         purline.plstatus,   
         purline.pladref,   
         purline.plshipto,   
         purline.plqtyinv,   
         purline.plrapnb,   
         purline.pllastrap,   
         purline.pluomconv,   
         purline.plrcio,   
         purline.plsalhead,   
         purline.plsalline,
			( Select items.itif2trf
             From items
			   Where items.itcode = purline.plitem ) As ItInterco,
			'' AS itemname,
			purline.plcmnt,
			purline.plprorig ,
		isnull(purline.plrist,0) as plrist,
		isnull(purline.plval,plstdval) as plval,
		purline.plcontract,
		CAST( 0 AS numeric (10,3)) as dummy_plqtyold 
    FROM purline  
   WHERE ( purline.PLCODE = :Selected_order ) AND  
         ( purline.PLLINE = :Selected_line )    

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
| plstdval |
| plpurval |
| plqtyrec |
| plstatus |
| pladref |
| plshipto |
| plqtyinv |
| plrapnb |
| pllastrap |
| pluomconv |
| plrcio |
| plsalhead |
| plsalline |
| itinterco |
| itemname |
| plcmnt |
| plprorig |
| plrist |
| plval |
| plcontract |
| dummy_plqtyold |

