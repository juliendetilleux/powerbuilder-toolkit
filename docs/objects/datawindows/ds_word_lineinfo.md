# ds_word_lineinfo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT projvrsn.pvcode,
			projvrsn.pvdesc,   
			projvrsn.pvdesc2,
         projvrsn.pvqty,   
         projvrsn.pvsalval,   
         projvrsn.pvsort  ,
		projvrsn.pvbaseprice,
			projvrsn.pvcmnt,
         ( If projvrsn.pvtyp       =  'C'  Then projvrsn.pvqty Else  1           EndIf ) As CompQty    ,
			( If projvrsn.pvramsalval Is Null Then 0.0000 Else projvrsn.pvramsalval EndIf ) As RamSalVal  , 
			( If projvrsn.pvlabsalval Is Null Then 0.0000 Else projvrsn.pvlabsalval EndIf ) As LabSalVal  , 
			( If projvrsn.pvmacsalval Is Null Then 0.0000 Else projvrsn.pvmacsalval EndIf ) As MacSalVal  , 
			( If projvrsn.pvothsalval Is Null Then 0.0000 Else projvrsn.pvothsalval EndIf ) As OthSalVal  , 
			( ( RamSalVal + LabSalVal + MacSalVal + OthSalVal ) / CompQty                 ) As CompUnitSalVal ,
			( Case     
					When projvrsn.pvtyp = 'C' Then CompUnitSalVal 
					When projvrsn.pvtyp = 'S'	Then LabSalVal
					Else RamSalVal  											End )							  As UnitSalVal ,
			( Select items.itum
				 From items		
				Where items.itcode = projvrsn.pvitem     )											  As ItUm       , 
			( Select items.itweight
				 From items		
				Where items.itcode = projvrsn.pvitem     )											  As ItWeight   , 
			( Select items.itqtypal
				 From items		
				Where items.itcode = projvrsn.pvitem     )											  As ItQtyPal   ,
			projvrsn.pvrist,
			( Select items.itdesc2
				 From items		
				Where items.itcode = projvrsn.pvitem     )											  As Itdesc2	 ,
			pvitem																									 				 ,
			projvrsn.pvdgcode																										 ,
			projvrsn.pvsortgroup																									 ,
			isnull( projvrsn.pvoptional, 'N' ) 															as pvoptional 	 ,
			( Select devgroup.dgdesc
				 From devgroup		
				Where devgroup.dgpvhid = projvrsn.pvphid And
						devgroup.dgcode  = projvrsn.pvdgcode	)										  As groupe	    ,
			projvrsn.pvitum																										 ,
			( Select measures.umname
				 From measures		

```

## Colonnes
| Colonne |
|---------|
| pvcode |
| pvdesc |
| pvdesc2 |
| pvqty |
| pvsalval |
| pvsort |
| pvbaseprice |
| pvcmnt |
| compqty |
| ramsalval |
| labsalval |
| macsalval |
| othsalval |
| compunitsalval |
| unitsalval |
| itum |
| itweight |
| itqtypal |
| pvrist |
| itdesc2 |
| pvitem |
| pvdgcode |
| pvsortgroup |
| pvoptional |
| groupe |
| pvitum |
| umdesc |
| pvbaseprice |
| qtyord |
| uomord |

