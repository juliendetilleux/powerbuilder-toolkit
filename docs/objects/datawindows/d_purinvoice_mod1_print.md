# d_purinvoice_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT Purinvhead.pisup,   
         Purinvhead.pidate,  
         Purinvhead.picurr,
		Purinvhead.pisupref,
		Purinvhead.piexpiry,
		Purinvhead.pityptva,
		isnull(Purinvhead.pimccode, '##########') as pimccode,
		Purinvhead.picodemc       
    FROM Purinvhead  
   WHERE Purinvhead.picode = :an_purinvhead

```

## Colonnes
| Colonne |
|---------|
| pisup |
| pidate |
| picurr |
| pisupref |
| piexpiry |
| pityptva |
| pimccode |
| picodemc |

