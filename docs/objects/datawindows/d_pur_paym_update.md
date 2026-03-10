# d_pur_paym_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plcode,   
         purline.plline,
         purhead.phsupp,   
         purline.pldatreq,   
         purline.plpurval,   
         purline.plqtyrec,   
         purline.plqtyinv,   
         (purline.plitem + ', ' + items.itname) item  ,
         'S' purtyp
    FROM purline,
         purhead,   
         {oj items  LEFT OUTER JOIN imputcpt  ON items.itcptanal = imputcpt.iccode}  
   WHERE ( items.itcode = purline.plitem ) and 
         ( purline.plcode = purhead.phcode) and
			( purline.plqtyrec <> purline.plqtyinv ) and 
         ( ( purline.plqtyinv < purline.plqtyord ) AND  
         ( purline.plstatus < '7' ) )
UNION all 
  SELECT purgline.plcode,   
         purgline.plline,   
         purghead.phsupp,   
         purgline.pldatreq,   
         purgline.plpurval,   
         purgline.plqtyrec,   
         purgline.plqtyinv,   
         purgline.pldesc  ,
         'G'
    FROM purgline,
         purghead
   WHERE ( purgline.plqtyinv < purgline.plqty ) AND  
         ( purgline.plcode = purghead.phcode) and
			( purgline.plqtyrec <> purgline.plqtyinv) and 
         ( purgline.plstatus < '7' )
ORDER BY 1 ASC, 2 ASC

```

## Colonnes
| Colonne |
|---------|
| purline_plcode |
| purline_plline |
| purhead_phsupp |
| purline_pldatreq |
| purline_plpurval |
| purline_plqtyrec |
| purline_plqtyinv |
| citem |
| cpurtyp |

