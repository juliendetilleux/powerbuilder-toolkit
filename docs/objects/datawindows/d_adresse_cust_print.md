# d_adresse_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  items.itcode ,
      items.itname , 
     items.itum ,        
     items.ittyp ,     
     linkitad.lkcode ,
     linkitad.lkcurr ,     
     linkitad.lkum , 
     linkitad.lkactiv ,
     linkitad.lkadref,
	LINKITAD.LKLEADTIME     
FROM items , 
          linkitad     
WHERE ( linkitad.lkitem = items.itcode ) AND
		( linkitad.lkactiv ='Y') and 
         ( ( linkitad.lkadcode = :codesoc ) AND       
   		( linkitad.lktyp = 'P' ) ) 
ORDER BY items.itcode          ASC  





```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| items_ittyp |
| linkitad_lkcode |
| linkitad_lkcurr |
| linkitad_lkum |
| linkitad_lkactiv |
| linkitad_lkadref |
| linkitad_lkleadtime |

