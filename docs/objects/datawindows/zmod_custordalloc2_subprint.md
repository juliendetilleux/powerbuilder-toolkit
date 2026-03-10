# zmod_custordalloc2_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT matallocs.malot,   
         matallocs.maloc,   
         matallocs.maallocqty,   
         items.itum,   
         items.itdefaultlot,   
         lots.loorgcode  
    FROM matallocs,   
         lots,   
         items  
   WHERE ( matallocs.malot = lots.locode ) and  
         ( matallocs.maitem = items.itcode ) and  
         ( ( matallocs.macode = :ran_SalHead ) AND  
         ( matallocs.maitemseq = :ran_salline ) AND  
         ( matallocs.matyp = 'X' ) )    

```

## Colonnes
| Colonne |
|---------|
| matallocs_malot |
| matallocs_maloc |
| matallocs_maallocqty |
| items_itum |
| items_itdefaultlot |
| lots_loorgcode |

