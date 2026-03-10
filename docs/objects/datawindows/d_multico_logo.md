# d_multico_logo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT multico.mccode,   
              adresses.adname
    FROM multico,   
         adresses  
   WHERE multico.mccode = adresses.adcode    
     AND multico.mccode <> '##########'  

```

## Colonnes
| Colonne |
|---------|
| multico_mccode |
| adresses_adname |

