# d_bcd_lot_locall_forsales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT locations.lccode,
			locations.lcautoalloc    
    FROM locations   
where//FZ0240
lcactiv = 'Y' and
lcintext = 'I' and 
lcexp = 'Y'
```

## Colonnes
| Colonne |
|---------|
| stloc |
| lcautoalloc |

