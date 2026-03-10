# d_multico_list

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
         adresses.adcode  
    FROM multico,   
         adresses  
   WHERE multico.mccode = adresses.adcode    
     AND multico.mccode <> '##########'  

```

## Colonnes
| Colonne |
|---------|
| mccode |
| mcintext |
| mcactiv |
| adresses_adname |
| mcintext |

