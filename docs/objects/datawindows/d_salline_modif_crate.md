# d_salline_modif_crate

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode,   
         salline.slline,    
         salline.slitem,    
         items.itname, 
         salline.slqtyalloc, 
         salline.slqtyreq,
         items.itum,
         salline.slqtyreq -  salline.slqtyreal - salline.slqtyalloc as prepar,
         salline.sldatreq,
         shipto.stdesc,
			items.itlot
    FROM salline,   
         items ,
         shipto,
         salhead
   WHERE items.itcode = salline.slitem AND    
         salline.slcode = :al_slcode AND
         salline.slline = :al_slline AND
         salline.slcode = salhead.shcode AND
         salline.slshipto = shipto.stseq AND  
         shipto.stcode = salhead.shcust  
  

  
 
```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_slline |
| salline_slitem |
| items_itname |
| salline_slqtyalloc |
| salline_slqtyreq |
| items_itum |
| cprepar |
| salline_sldatreq |
| shipto_stdesc |
| items_itlot |

