# d_multico_custfilter

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT multico.mccode,   
         multico.mcintext,   
         multico.mcactiv,   
         adresses.adname,   
         adresses.adcode,
	    isnull(multico.mccust, 'Y') as mccust   
    FROM multico,   
         adresses  
   WHERE multico.mccode = adresses.adcode   

```

## Colonnes
| Colonne |
|---------|
| mccode |
| mcintext |
| mcactiv |
| adresses_adname |
| mcintext |
| mccust |

