# d_dvi_line_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT 0 As IsAux,
			projhead.phcurr,
         projhead.phrist,
         projvrsn.pvcode,  
         projvrsn.pvsort, 
         projvrsn.pvtyp,   
         projvrsn.pvitem,   
         projvrsn.pvdesc,   
         projvrsn.pvexpdat,   
         projvrsn.pvqty,   
         projvrsn.pvpurval,   
         projvrsn.pvsalval,   
         projvrsn.pvstatus , 
         projvrsn.pvrampurval,
         projvrsn.pvramsalval,
         projvrsn.pvlabpurval,
         projvrsn.pvlabsalval,
         ( Select items.itum
             From items
            Where items.itcode = projvrsn.pvitem )  As ItUm ,
         projvrsn.pvcmnt as pvcmnt,
			projvrsn.pvrist,
			pvdgcode,
			pvsortgroup,
			pvoptional,   
         projvrsn.pvitum,
			projvrsn.pvpriceorg,
			projvrsn.pvbaseprice,
			projvrsn.pvratehead,
			isnull( projvrsn.pvqtyord, projvrsn.pvqty ) as qtyord,
			isnull( projvrsn.pvuomord, ItUm ) as uomord,
			IsNull( projvrsn.pvpricetyp, 'N') As Price_Typ,
			Null As AuxFaTy /*HA2478*/
    FROM projhead ,
         projvrsn   
   WHERE projhead.phcode  = projvrsn.pvphid  And
         projvrsn.pvtyp  <> 'M'              And
         projhead.phcode  = :ran_ProjId 

Union All /*HA2478*/

  Select	1 As IsAux,
			projhead.phcurr,
         0,
         projaux.pacode,  
         projaux.pasort, 
         'N',
			'',
			projaux.padesc,
			Null,
			projaux.paqty,   
         Null,
			projaux.pasalval,   
         projaux.pastatus, 
         Null,
			projaux.pastdval,
         Null,
			Null,
			projaux.paum,
			projaux.pacmnt,
			0,
			Null,
			Null,
			projaux.paoptional,  
         projaux.paum,
			Null,
			projaux.pastdval,
			Null,
			projaux.paqty,   
			projaux.paum,
			Null,
			projaux.pafatype
	From	projhead,
			projaux
	Where projhead.phcode  = projaux.paphid
	  And projhead.phcode  = :ran_ProjId
ORDER BY 1,
			21,
			22 ,
			5
```

## Colonnes
| Colonne |
|---------|
| isaux |
| projhead_phcurr |
| projhead_phrist |
| pvcode |
| pvsort |
| pvtyp |
| pvitem |
| pvdesc |
| pvexpdat |
| pvqty |
| pvpurval |
| pvsalval |
| pvstatus |
| pvrampurval |
| pvramsalval |
| pvlabpurval |
| pvlabsalval |
| itum |
| projvrsn_pvcmnt |
| projvrsn_pvrist |
| projvrsn_pvdgcode |
| projvrsn_pvsortgroup |
| projvrsn_pvoptional |
| projvrsn_pvitum |
| projvrsn_pvpriceorg |
| projvrsn_pvbaseprice |
| projvrsn_pvratehead |
| qtyord |
| uomord |
| price_typ |
| auxfaty |

