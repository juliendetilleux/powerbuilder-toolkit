# d_sales_shipable_detail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline,   
         salline.slitem,   
         items.itname,   
         salline.slqtyreq,   
         salline.slqtyreal,   
         salline.slqtyalloc  ,
			salline.slsalghost,
			items.ittyp 
    FROM items,   
         salline  
   WHERE ( salline.slitem = items.itcode ) and  
			( items.ittyp <> 'F' ) and
         ( ( salline.slcode = :al_selorder ) AND  
         ( salline.slstatus < '6' ) )   
ORDER BY salline.slline ASC   

```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| salline_slitem |
| items_itname |
| salline_slqtyreq |
| salline_slqtyreal |
| salline_slqtyalloc |
| salline_slsalghost |
| items_ittyp |

