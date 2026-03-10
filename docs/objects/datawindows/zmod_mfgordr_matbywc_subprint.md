# zmod_mfgordr_matbywc_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfglallocs.mlbomqty,   
         mfglallocs.mlcomment,   
         mfglallocs.mlitem,   
         mfgwcreqs.mwline,   
         mfgwcreqs.mwwccode,   
         mfgwcreqs.mwoper,
			mfgwcreqs.mwtask ,
			( Select workoper.woopdesc  
    			 From workoper  
				WHERE mfgwcreqs.mwwccode = workoper.wowcid and  
         			mfgwcreqs.mwtask   = workoper.woopid 		)   As Task,      
         workcenters.wcname,   
         mfglallocs.mlcode,   
         /*(SELECT Workoper.woopdesc FROM Workoper WHERE Mfgwcreqs.mwwccode = workoper.wowcid AND Mfgwcreqs.mwtask = workoper.woopid ) as task,  */ 
         mfglallocs.mlitemseq,   
         mfglallocs.mlline,   
         (SELECT Items.itname FROM Items WHERE Items.itcode = Mfglallocs.mlitem) as itname,   
         (SELECT Items.itum FROM Items WHERE Items.itcode = Mfglallocs.mlitem) as itum  
    FROM mfgwcreqs  LEFT OUTER JOIN mfglallocs  ON mfgwcreqs.mwcode = mfglallocs.mlcode
				and mfgwcreqs.mwline = mfglallocs.mlwcreqs,   
         workcenters  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( ( mfgwcreqs.mwcode = :an_mfghead ) )   
ORDER BY mfgwcreqs.mwline ASC,   
         mfglallocs.mlline ASC   

```

## Colonnes
| Colonne |
|---------|
| mlbomqty |
| mlcomment |
| mlitem |
| mwline |
| mwwccode |
| mwoper |
| mwtask |
| ctask |
| wcname |
| mlcode |
| mlitemseq |
| mlline |
| items_itname |
| items_itum |

