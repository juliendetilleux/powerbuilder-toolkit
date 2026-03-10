# d_custordalloc_mod2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adcmnt,   
         adresses.adtel,   
         adresses.adfax,   
         salhead.shcustref,   
         salhead.shcode,   
         salline.slitem,   
         items.itname,   
         salline.sldatreq,   
         salline.slqtyreq,   
         items.itum,   
         salline.slline,   
         salline.slqtyres,   
         salhead.shcmnt,   
         salline.slqtyreal,   
         salline.slqtyalloc,   
         salline.slshipto,   
         shipto.stdesc,  
         shipto.stadr1,
			shipto.stadr2,
			shipto.stzip, 
         shipto.stloc, 
			shipto.stcountr,   
         salhead.shcust,   
         salhead.shautho,   
         salline.sldatship,
			salline.slqtyalloc,
			(SELECT choices.chname FROM choices WHERE choices.chtype = 'SALA' and choices.chcode = salhead.shautho) as sala,
			(Select first count(*) 
				From salline as sals 
				Where sals.slcode = salhead.shcode And 
					sals.slsalghost = salline.slline) 				As kit			,
			isnull(salline.slsalghost,0)								As Ghost			,
			isnull(salline.slprintghost,'Y')							As printghost  ,
			IsNull( salhead.shdirectsal, 'N')						As DirectSal,
		 isnull(( Select first altmeasures.amdesc                   
					 From altmeasures
					Where altmeasures.ambaseumid = items.itum           And
							altmeasures.amcode     = salline.sluomord     ), salline.sluomord) as sluomord,
		salline.sluomconv, 
		
		isnull((SELECT ppvalue FROM progparam WHERE ppcode = 'CALCDLUO'),'') as CALCDLUO,
		isnull(( Select yv_linkitad.lkcalcdluo
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_linkitad.lkadcode = salhead.shcust And 
						yv_linkitad.lkactiv  = 'Y'						 ),'N') As lkcalcdluo,
		isnull(( Select yv_linkitad.lkpcratesregroup
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_l
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adcmnt |
| adresses_adtel |
| adresses_adfax |
| salhead_shcustref |
| salhead_shcode |
| salline_slitem |
| items_itname |
| salline_sldatreq |
| salline_slqtyreq |
| items_itum |
| salline_slline |
| salline_slqtyres |
| salhead_shcmnt |
| salline_slqtyreal |
| salline_slqtyalloc |
| salline_slshipto |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| salhead_shcust |
| salhead_shautho |
| salline_sldatship |
| salline_slqtyalloc |
| csala |
| ckit |
| cghost |
| cprintghost |
| directsal |
| salline_sluomord |
| salline_sluomconv |
| calcdluo |
| lkcalcdluo |
| lkpcratesregroup |
| sldatship |
| lkremval |
| remref |
| sttype |
| stshipadcode |
| stshipseq |
| shipdeliv |
| salline_slallocprinted |

