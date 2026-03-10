# zd_shipgroup1_label_lvl_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT 'G' typ, 
         shipgrhead.ghshipid shipid,   
         shipgrhead.ghlevel levelno,   
         shipgrhead.ghlevelseq levelseq,   
         shipgrhead.ghprevlevelseq prevlevelseq,
         0 shipline, 
         0 levelqty, 
         '' lot, 
         0 shipqty,
         shipgrhead.ghdesc leveldesc ,
			'' linkitad_desc, 
         '' item_desc, 
         '' um,
         '' item, 
         date(null) dateexp,
			(select choiceline.clname from choiceline where choiceline.clcode = 'SHTY' AND choiceline.clline = shipgrhead.ghtype) as ghtype ,
			shipgrhead.ghsize, /*HA2474*/
			shipgrhead.ghcmnt /*HA2474*/ 
    FROM shipgrhead  
   WHERE ( shipgrhead.ghshipid = :Sel_ship ) AND  
         ( shipgrhead.ghlevel = :ThisLevel ) AND  
         ( shipgrhead.ghprevlevelseq = :a_PrevlevelSeq ) and 
         ( shipgrhead.ghlevelseq = :a_LevelSeq )    
UNION  all 
  SELECT 'I', 
         shipgrline.glshipid,   
         shipgrline.gllevel,   
         shipgrline.gllevelseq,   
         shipgrline.glprevlevelseq,   
         shipgrline.glshipline,   
         shipgrline.glqty,   
         shipline.sllot,   
         shipline.slqty,   
         items.itname,   
			( select linkitad.lkadref from linkitad
					where linkitad.lkitem = items.itcode and
               		linkitad.lkadcode = shiphead.shcust and
							linkitad.lktyp = 'S' ),  
         items.itdesc2, 
         items.itum,   
         shipline.slitem, 
 			( select loexpdat from lots where locode =  shipline.sllot ),
			'',
			'', /*HA2474*/
			''  /*HA2474*/
    FROM shipgrline,   
         shipline,   
         shiphead, 
         items  
   WHERE ( shipgrline.glshipid = shipline.slcode ) and  
         ( shipgrline.glshipline = shipline.slline ) and  
         ( items.itcode = shipline.slitem ) and  
         ( shiphead.shcode = shipline.slcode ) and  
         ( shipgrline.glshipid = :Sel_ship ) AND  
         ( shipgrline.gllevel = :ThisLevel ) AND  
   
```

## Colonnes
| Colonne |
|---------|
| typ |
| shipid |
| levelno |
| levelseq |
| prevlevelseq |
| shipline |
| levelqty |
| lot |
| shipqty |
| leveldesc |
| linkitad_desc |
| item_desc |
| um |
| item |
| dateexp |
| ghtype |
| ghsize |
| ghcmnt |

