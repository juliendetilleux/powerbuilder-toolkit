# dd_mcdo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT 1 , 
         multico.mccode,   
         adresses.adname,  
         multico.mcintext, 
			( Select modules.mdtype
				 From modules
				Where modules.mdcode = 'IFCompta') As CptId 
    FROM multico,   
         adresses  
   WHERE multico.mccode = adresses.adcode   
     AND multico.mccode = '##########'     

UNION ALL

  SELECT 2 , 
         multico.mccode,   
         adresses.adname,  
         multico.mcintext,
			multico.mcifcpt     
    FROM multico,   
         adresses  
   WHERE multico.mccode = adresses.adcode   
     AND multico.mcactiv = 'Y'     
     AND multico.mccode <> '##########'     
   
ORDER BY 1 , 3  

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| multico_mccode |
| adresses_adname |
| mcintext |
| cptid |

