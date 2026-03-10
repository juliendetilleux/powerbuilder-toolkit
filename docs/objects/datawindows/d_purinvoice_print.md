# d_purinvoice_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT purinvhead.pisup,   
         purinvhead.pidate,   
         purinvhead.picurr,   
         purinvhead.pisupref,   
         purinvhead.pitypinv,
		purinvhead.pityptva,
		purinvhead.picodemc,
		isnull(Purinvhead.pimccode, '##########') as pimccode 
  
    FROM purinvhead  
   WHERE Purinvhead.picode = :an_purinvhead    

```

## Colonnes
| Colonne |
|---------|
| pisup |
| pidate |
| picurr |
| pisupref |
| pitypinv |
| pityptva |
| picodemc |
| pimccode |

