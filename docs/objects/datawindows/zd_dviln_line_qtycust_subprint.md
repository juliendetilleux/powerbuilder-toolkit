# zd_dviln_line_qtycust_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT projvrsn.pvcode,
         projvrsn.pvdesc,   
         projvrsn.pvstatus,   
         projvrsn.pvqty,   
         projvrsn.pvrampurval,   
         projvrsn.pvramsalval,   
         projvrsn.pvlabpurval,   
         projvrsn.pvlabsalval,    
         projvrsn.pvmacpurval,   
         projvrsn.pvmacsalval,   
         projvrsn.pvothpurval,   
         projvrsn.pvothsalval,  
         projvrsn.pvpurval,   
         projvrsn.pvsalval,   
         projvrsn.pvtyp,   
         projvrsn.pvuplab,   
         projvrsn.pvupmat,   
         projvrsn.pvupoth,   
         projvrsn.pvupglob,   
         projvrsn.pvitem,   
         projvrsn.pvsort,   
         ( Select items.itname
             From items
            Where items.itcode = projvrsn.pvitem ) As items_itname  ,
         projvrsn.pvpriceorg ,  
         projhead.phrist,
			if projvrsn.pvrist is null then 0 else projvrsn.pvrist endif as pvrist,
			projhead.phtype,
			projvrsn.pvsortgroup,
			isnull(projvrsn.pvoptional,'N') as pvoptional,
			isnull(( Select devgroup.dgdesc
				 From devgroup		
				Where devgroup.dgpvhid = projvrsn.pvphid And
						devgroup.dgcode  = projvrsn.pvdgcode	),'') as dgdesc,
		isnull( projvrsn.pvqtyord, projvrsn.pvqty ) as qtyord,
		isnull( projvrsn.pvuomord, isnull( pvitum, (select itum from items where itcode = projvrsn.pvitem)) ) as uomord
    FROM projvrsn, projhead
   WHERE projvrsn.pvphid = :ran_ProjId AND 
         projhead.phcode = projvrsn.pvphid  
ORDER BY projvrsn.pvdgcode ASC, pvoptional ASC, projvrsn.pvsortgroup ASC, projvrsn.pvsort ASC   

```

## Colonnes
| Colonne |
|---------|
| pvcode |
| projvrsn_pvdesc |
| projvrsn_pvstatus |
| projvrsn_pvqty |
| projvrsn_pvrampurval |
| projvrsn_pvramsalval |
| projvrsn_pvlabpurval |
| projvrsn_pvlabsalval |
| pvmacpurval |
| pvmacsalval |
| pvothpurval |
| pvothsalval |
| projvrsn_pvpurval |
| projvrsn_pvsalval |
| projvrsn_pvtyp |
| projvrsn_pvuplab |
| projvrsn_pvupmat |
| projvrsn_pvupoth |
| projvrsn_pvupglob |
| projvrsn_pvitem |
| projvrsn_pvsort |
| items_itname |
| pvpriceorg |
| projhead_phrist |
| projvrsn_pvrist |
| projhead_phtype |
| projvrsn_pvsortgroup |
| projvrsn_pvoptional |
| cdgdesc |
| qtyord |
| uomord |

