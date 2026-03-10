# ds_ifpurline

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _edilink
- **Table principale**: purline

## SQL
```sql
  SELECT purline.plinvclot,   
         purline.plsalline,   
         purline.plqtyinv,   
         purline.plrapnb,   
         purline.plshipto,   
         purline.pladref,   
         purline.plstatus,   
         purline.plqtyrec,   
         purline.plpurval,   
         purline.pldatsup,   
         purline.plqtyreq,   
         purline.plline,   
         purline.plcode,   
         purline.plqtyord,   
         purline.plitem,   
         purline.pluomord,   
         purline.pldatreq,   
         purline.pluomconv,   
         purline.plstdval,   
         purline.pllastrap,   
         purline.plsalhead,   
         purline.pldatrec,   
         purline.pltransfered  
    FROM purline  
   WHERE ( plcode = :li_phcode ) AND  
         ( isnull(Pltransfered, 'N') <> 'Y' ) AND  
         ( Plstatus < '6' )    

```

## Colonnes
| Colonne |
|---------|
| plinvclot |
| plsalline |
| plqtyinv |
| plrapnb |
| plshipto |
| pladref |
| plstatus |
| plqtyrec |
| plpurval |
| pldatsup |
| plqtyreq |
| plline |
| plcode |
| plqtyord |
| plitem |
| pluomord |
| pldatreq |
| pluomconv |
| plstdval |
| pllastrap |
| plsalhead |
| pldatrec |
| pltransfered |

