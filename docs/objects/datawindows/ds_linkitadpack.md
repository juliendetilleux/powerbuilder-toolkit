# ds_linkitadpack

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: linkitadpack

## SQL
```sql
  SELECT linkitadpack.lptyp,   
         linkitadpack.lpitem,   
         linkitadpack.lpadcode,   
         linkitadpack.lpcode,   
         linkitadpack.lpitadlayer,   
         linkitadpack.lphlayer,   
         linkitadpack.lpnblayer,   
         linkitadpack.lppackid,   
         linkitadpack.lppackweight,   
         linkitadpack.lppackheight,   
         linkitadpack.lppackitem,   
         linkitadpack.lpcmnt,   
         linkitadpack.lptrcost,   
         linkitadpack.lpumgroup,   
         linkitadpack.lpetigro,   
         linkitadpack.lpetipal,   
         linkitadpack.lpetiitem,   
         linkitadpack.lpautopack  
    FROM linkitadpack ,   
         adresses , 
         items  
   WHERE linkitadpack.lptyp = 'S' 
     AND adresses.adcode = linkitadpack.lpadcode 
     AND adresses.adsalesman like :as_adsalesman   
     AND adresses.adcust = 'Y'  
     AND items.itcode = linkitadpack.lpitem  
     AND items.itsale = 'Y'   


```

## Colonnes
| Colonne |
|---------|
| linkitadpack_lptyp |
| linkitadpack_lpitem |
| linkitadpack_lpadcode |
| linkitadpack_lpcode |
| linkitadpack_lpitadlayer |
| linkitadpack_lphlayer |
| linkitadpack_lpnblayer |
| linkitadpack_lppackid |
| linkitadpack_lppackweight |
| linkitadpack_lppackheight |
| linkitadpack_lppackitem |
| linkitadpack_lpcmnt |
| linkitadpack_lptrcost |
| linkitadpack_lpumgroup |
| linkitadpack_lpetigro |
| linkitadpack_lpetipal |
| linkitadpack_lpetiitem |
| linkitadpack_lpautopack |

