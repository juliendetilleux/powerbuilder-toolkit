# zd_shipgroup1_lvl_subprint

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
         '' um,
         '' item,
			(select choiceline.clname from choiceline where choiceline.clcode = 'SHTY' AND choiceline.clline = shipgrhead.ghtype) as ghtype
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
         items.itum,   
         shipline.slitem,
			''  
    FROM shipgrline,   
         shipline,   
         items  
   WHERE ( shipgrline.glshipid = shipline.slcode ) and  
         ( shipgrline.glshipline = shipline.slline ) and  
         ( items.itcode = shipline.slitem ) and  
         ( shipgrline.glshipid = :Sel_ship ) AND  
         ( shipgrline.gllevel = :ThisLevel ) AND  
         ( shipgrline.glprevlevelseq = :a_Prevlevelseq ) and 
         ( shipgrline.gllevelseq = :a_Levelseq )   

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
| um |
| item |
| ghtype |

