# zmod_purg2ord_val_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT purghead.phcurr,   
         purgline.pldesc,   
         purgline.plqty,   
         purgline.pldatreq,   
         purgline.plstdval,   
         purgline.plshipto,   
         purgline.plcmnt,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         purghead.phtype,   
         purgline.plrefnum,   
         purgline.plline,   
         purgline.pluomord  ,
			--(select mhlotprt from mfghead where mhcode = purgline.plrefnum) as lotsurimp
			(select list (distinct isnull(loorgcode,'')) from lots where locode in ( select malot from matallocs where matyp = 'M' and macode = purgline.plrefnum)) as lotsurimp,
     	isnull( (select mwoper from mfgwcreqs where mwcode = purgline.plrefnum  and mwline = purgline.plrefline ), '' ) as descoper

    FROM purghead,   
         purgline,   
         shipto  
   WHERE ( purgline.plcode = purghead.phcode ) and  
         ( shipto.stseq = purgline.plshipto ) and  
         ( purghead.phcode = :ran_Order       ) AND  
         ( shipto.stcode = isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purghead.phsupp),'##########') ) AND  
         ( purgline.plstatus < '5'              )   
ORDER BY purgline.plshipto ASC,   
         purgline.pldesc ASC,   
         purgline.pldatreq ASC   
```

## Colonnes
| Colonne |
|---------|
| purghead_phcurr |
| purgline_pldesc |
| purgline_plqty |
| purgline_pldatreq |
| purgline_plstdval |
| purgline_plshipto |
| purgline_plcmnt |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stadr2 |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| purghead_phtype |
| purgline_plrefnum |
| purgline_plline |
| purgline_pluomord |
| lotsurimp |
| descoper |

