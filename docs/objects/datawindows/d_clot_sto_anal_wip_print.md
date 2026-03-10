# d_clot_sto_anal_wip_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.itconvusr,   
         items.itumusr,   
         items.itstdpur,   
         clotfinit.ciqty,   
         clotfinit.cival,   
         imputcpt.icref,   
         imputcpt.icdesc,   
         ifnull( clotfinit.ciqtywip, 0,   clotfinit.ciqtywip) as ciqtywip
    FROM {oj items  LEFT OUTER JOIN imputcpt  ON items.itcptanal = imputcpt.iccode},   
         clotfinit  
   WHERE ( clotfinit.ciitem = items.itcode ) and  
         ( ( clotfinit.ciperiod = :Sel_period ) AND  
         ( clotfinit.cityp = 'I' ) AND  
         ( clotfinit.ciqty <> 0 ) )   
ORDER BY imputcpt.icref ASC,   
         items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| items_itconvusr |
| items_itumusr |
| items_itstdpur |
| clotfinit_ciqty |
| clotfinit_cival |
| imputcpt_icref |
| imputcpt_icdesc |
| cciqtywip |

