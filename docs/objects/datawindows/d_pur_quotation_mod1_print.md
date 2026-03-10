# d_pur_quotation_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT matplan.mpitem,   
         matplan.mpplqty,   
         matplan.mpplduedat,   
         linkitad.lkadcode,   
         linkitad.lkadref,   
         linkitad.lkmain,   
         items.itname,   
         adresses.adlang,   
         items.itum,   
         linkitad.lkum,   
         linkitad.lkumconv,   
         linkitad.lkadref2, 
         linkitad.lkcmnt, 
         items.itdesc2, 
         ( SELECT ildesc 
             FROM itemlang 
            WHERE ilitcode = items.itcode 
              AND illgcode = adresses.adlang 
         ) AS translate,
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = adresses.adcode),'##########') as mcdo  
    FROM matplan,
         linkitad,
         items,   
         adresses  
   WHERE ( matplan.mpitem = linkitad.lkitem) and
         ( items.itcode = linkitad.lkitem ) and  
         ( items.itcode = matplan.mpitem ) and  
         ( adresses.adcode = linkitad.lkadcode ) and  
         ( ( matplan.mpuse = 'P' ) AND  
         ( linkitad.lkactiv = 'Y' ) AND  
         ( linkitad.lktyp = 'P' ) )   
ORDER BY linkitad.lkadcode ASC,   
         matplan.mpitem ASC   

```

## Colonnes
| Colonne |
|---------|
| mpitem |
| mpplqty |
| matplan_mpplduedat |
| linkitad_lkadcode |
| linkitad_lkadref |
| linkitad_lkmain |
| items_itname |
| adresses_adlang |
| items_itum |
| linkitad_lkum |
| linkitad_lkumconv |
| linkitad_lkadref2 |
| linkitad_lkcmnt |
| items_itdesc2 |
| ctranslate |
| mcdo |

